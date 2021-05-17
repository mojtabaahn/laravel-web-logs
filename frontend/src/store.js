import {reactive} from 'vue'
import config from "./config";
import linkifyStr from "linkifyjs/string";
import {useLocalStorage} from "@vueuse/core";

export default reactive({
    logs: [],
    loading_logs: false,
    current_name: useLocalStorage('current_name', ''),
    current: null,
    current_content: [],
    loading_log: false,
    is_end: false,
    text_links: useLocalStorage('text_links', true),
    auto_reload: false,
    search: '',
    open_traces: [],
    dateComponents: new Set(),
    offset: null,
    filter: useLocalStorage('filter', ''),
    filter_envs: useLocalStorage('filter_envs', []),
    filter_levels: useLocalStorage('filter_levels', []),
    envs: ['production', 'staging', 'local'],
    levels: ['emergency', 'alert', 'critical', 'error', 'warning', 'notice', 'info', 'debug'],
    exception_form: {
        message: '',
    },
    message_form: {
        message: '',
        level: 'debug'
    },
    aside : true,
    setting_modal: false,
    exception_modal: false,
    message_modal: false,
    toggle(key) {
        this[key] = !this[key]
    },
    env_is_checked(key) {
        return this.filter_envs.includes(key)
    },
    toggle_env(key) {
        this.toggleArray(key, this.filter_envs)
    },
    level_is_checked(key) {
        return this.filter_levels.includes(key)
    },
    toggle_level(key) {
        this.toggleArray(key, this.filter_levels)
    },
    async setup() {
        await this.fetchLogs()
        let log = this.current_name === '' ? this.sorted_logs[0] : this.logs.filter(log => log.name === this.current_name)[0]
        await this.openLog(log)
        this.setupDateInterval()
    },
    teardown() {
    },
    async fetchLogs() {
        this.loading_logs = true
        await axios.get(this.url('/index')).then(resp => {
            this.loading_logs = false
            this.logs = resp.data
        })
    },
    async openLog(log) {
        if(window.innerWidth < 1024){
            this.aside = false
        }
        this.current_name = log.name
        this.offset = null
        this.current = log
        this.current_content = []
        this.is_end = false
        await this.fetchLogNextPage()
    },
    async fetchLogNextPage() {
        this.loading_log = true
        let log = this.current
        await axios.get(this.url(`/${log.name}?${this.offset === null ? '' : 'offset=' + this.offset}`)).then(resp => {
            this.loading_log = false
            this.current_content = this.current_content.concat(resp.data.data)
            this.offset = resp.data.new_offset
            this.loading_log = false
            if (resp.data.data.length === 0) {
                this.is_end = true
            }
        })
    },
    async refreshLog() {
        await this.openLog(this.current)
    },
    applyFilters(text) {

        if (this.text_links) {
            text = linkifyStr(text)
        }

        text = text.replaceAll(/([a-zA-Z0-9\\\/\-_\.]+\/)([a-zA-Z0-9\\\-_]+\.(php))/g, "<span class='is-file' title='$1$2'>$2</span>")

        // text = text.replaceAll(/([a-zA-Z0-9_]+(\-\>|\:\:)[a-zA-Z0-9_\{\}]+)\(/g, "<span class='is-method'>$1</span>")
        text = text.replaceAll(/\\?([a-zA-Z0-9_]+\\{2})+([a-zA-Z0-9_]+)/g, "<span title='$1$2' class='is-class'>$2</span>")

        text = text.replaceAll(/([0-9]+)/g, "<span class='is-number'>$1</span>")

        return text
    },
    get sorted_logs() {
        return this.logs.sort((a, b) => b.modified_at - a.modified_at).filter(log => log.name.includes(this.search))
    },
    toggleTrace(offset) {
        let key = this.current.name + ':' + offset
        this.toggleArray(key, this.open_traces)
    },
    toggleArray(key, array) {
        let index = array.indexOf(key)
        if (index === -1) {
            array.push(key)
        } else {
            array.splice(index, 1)
        }
    },
    traceIsOpen(offset) {
        return this.open_traces.includes(this.current.name + ':' + offset)
    },
    get sorted_content() {
        return this.current_content.slice().reverse()
            .filter(line => line.content.includes(this.filter))
            .filter(line => {
                if (this.filter_levels.length === 0) {
                    return true
                }
                return this.filter_levels.includes(line.level.toLowerCase());
            })
            .filter(line => {
                if (this.filter_envs.length === 0) {
                    return true
                }
                return this.filter_envs.includes(line.env.toLowerCase());
            })
    },
    traceToArray(str) {
        let temp = null
        let initial = true
        let lines = str.split(/\#([0-9]+)/gms).reduce((carry, item) => {
            if (initial) {
                initial = false
            } else if (temp === null) {
                temp = item
            } else {
                carry[temp] = item
                temp = null
            }
            return carry
        }, [])
        return lines
    },
    submit_exception() {
        axios.post(this.url(`/log-exception`), this.exception_form)
            .then(resp => {
                console.log(resp.data)
                this.exception_modal = false
                this.exception_form.message = ''
            })
    },
    submit_message() {
        axios.post(this.url(`/log-message`), this.message_form)
            .then(resp => {
                console.log(resp.data)
                this.message_modal = false
                this.message_form.message = ''
                this.message_form.level = 'debug'
            })
    },
    async reloadAll() {
        await this.fetchLogs()
        if (this.current !== null) {
            let name = this.current.name
            await this.openLog(this.logs.filter(log => log.name === name)[0])
        }
    },
    url(suffix) {
        suffix = '/web-logs' + suffix

        if (process.env.NODE_ENV === 'production') {
            return suffix
        }

        return config.base_url + suffix
    },
    setupDateInterval() {
        setInterval(() => {
            for (const comp of this.dateComponents) {
                comp.$forceUpdate();
            }
        }, 5 * 1000);
    }
})
