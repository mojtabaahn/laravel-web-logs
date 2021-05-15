import {reactive} from 'vue'
import config from "./config";
import linkifyStr from "linkifyjs/string";

export default reactive({
    logs: [],
    loading_logs: false,
    current: null,
    current_content: null,
    loading_log: false,
    text_links: true,
    auto_reload: false,
    search: '',
    open_traces: [],
    dateComponents: new Set(),
    exception_form: {
        message: '',
    },
    message_form: {
        message: '',
        level: 'debug'
    },
    exception_modal: false,
    message_modal: false,
    toggle(key) {
        this[key] = !this[key]
    },
    async setup() {
        await this.fetchLogs()
        await this.fetchLog(this.sorted_logs[0])
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
    async fetchLog(log) {
        this.current = log
        this.loading_log = true
        await axios.get(this.url(`/${log.name}`)).then(resp => {
            this.loading_log = false
            this.current_content = resp.data
        })
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
        let index = this.open_traces.indexOf(key)
        if (index === -1) {
            this.open_traces.push(key)
        } else {
            this.open_traces.splice(key, 1)
        }
    },
    traceIsOpen(offset) {
        return this.open_traces.includes(this.current.name + ':' + offset)
    },
    get sorted_content() {
        return this.current_content.slice().reverse()
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
            await this.fetchLog(this.logs.filter(log => log.name === name)[0])
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
