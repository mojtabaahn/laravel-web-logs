import {defineStore} from 'pinia'
import {useLocalStorage} from "@vueuse/core";
import config from "../config";
import {watch} from "vue";
import linkifyStr from "linkifyjs/string";

export const useStore = defineStore({
    id: 'default',
    state: () => ({
        intervals: {},
        is_pulling: false,
        color_scheme: useLocalStorage('color_scheme', 'auto'),
        pull_interval: useLocalStorage('pull_interval', config.default_pulling_interval),
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
        start: null,
        end: null,
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
        aside: true,
        setting_modal: false,
        exception_modal: false,
        message_modal: false,
    }),
    getters: {
        isDark(state) {
            let browserInDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            let dark = (this.color_scheme === 'auto' && browserInDarkMode) || this.color_scheme === 'dark'
            return dark
        },
        sorted_logs(state) {
            return this.logs
                .sort((a, b) => b.modified_at - a.modified_at)
                .filter(log => log.name.includes(this.search))
        },
        sorted_content(state) {
            return this.current_content.slice().reverse()
                .filter(line => line.content.includes(this.filter))
                .filter(line => this.filter_levels.length === 0 ? true : this.filter_levels.includes(line.level.toLowerCase()))
                .filter(line => this.filter_envs.length === 0 ? true : this.filter_envs.includes(line.env.toLowerCase()))
        },
    },
    actions: {
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
            this.setupColorScheme()
            await this.fetchLogs()
            if (this.current_name !== '') {
                let log = this.logs.filter(log => log.name === this.current_name)[0]
                await this.openLog(log)
            }
            this.setupDateInterval()
            this.setupPullInterval()
        },
        toggleColorScheme() {
            let browserInDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (this.color_scheme === 'dark' && browserInDarkMode) {
                this.color_scheme = 'light'
            } else if (this.color_scheme === 'light' && browserInDarkMode) {
                this.color_scheme = 'auto'
            } else if (this.color_scheme === 'dark' && !browserInDarkMode) {
                this.color_scheme = 'auto'
            } else if (this.color_scheme === 'light' && !browserInDarkMode) {
                this.color_scheme = 'dark'
            } else if (this.color_scheme === 'auto' && browserInDarkMode) {
                this.color_scheme = 'light'
            } else if (this.color_scheme === 'auto' && !browserInDarkMode) {
                this.color_scheme = 'dark'
            }
        },
        setupColorScheme() {
            watch(() => this.color_scheme, scheme => {
                let browserInDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                let dark = (scheme === 'auto' && browserInDarkMode) || scheme === 'dark'
                if (dark) {
                    document.documentElement.classList.add('dark')
                } else {
                    document.documentElement.classList.remove('dark')
                }
            }, {immediate: true})
        },
        setupPullInterval() {
            watch(() => this.pull_interval, pull_interval => {
                clearInterval(this.intervals.pull)

                if (pull_interval === 0)
                    return

                this.intervals.pull = setInterval(async () => {
                    await this.pullLog()
                }, pull_interval)
            }, {immediate: true})
        },
        async pullLog() {
            if (this.current_name === '')
                return

            if (this.is_pulling)
                return

            this.is_pulling = true
            await axios.get(this.url(`/${this.current_name}?offset=${this.end}&backward=false`)).then(resp => {
                this.current_content = this.current_content.concat(resp.data.data)
                console.log(resp.data)
                this.end = resp.data.end
            }).finally(() => {
                this.is_pulling = false
            })
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
            if (window.innerWidth < 1024) {
                this.aside = false
            }
            this.current_name = log.name
            this.start = null
            this.end = null
            this.current = log
            this.current_content = []
            this.is_end = false
            await this.fetchLogNextPage()
        },
        async fetchLogNextPage() {
            this.loading_log = true
            let log = this.current
            await axios.get(this.url(`/${log.name}?${this.start === null ? '' : 'offset=' + this.start}`)).then(resp => {
                this.loading_log = false
                this.current_content = this.current_content.concat(resp.data.data)
                this.start = Math.min(this.start, resp.data.new_offset)
                this.end = Math.max(this.end, resp.data.end)
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
            
            const replaceCallback = (match, path, filename, extension, line) => {
                let uri = `phpstorm://open?file=${path}${filename}`;
                if (line) {
                    uri += `&line=${line}`;
                }
                return `<a class="is-file" title="${path}${filename}" href="${uri}">${filename}</a>`;
            }
            text = text.replaceAll(/([a-zA-Z0-9\\\/\-_\.]+\/)([a-zA-Z0-9\\\-_]+\.(php))[:(]?([0-9]+)?/g, replaceCallback)
            //text = text.replaceAll(/([a-zA-Z0-9\\\/\-_\.]+\/)([a-zA-Z0-9\\\-_]+\.(php))/g, "<span class='is-file' title='$1$2'>$2</span>")

            // text = text.replaceAll(/([a-zA-Z0-9_]+(\-\>|\:\:)[a-zA-Z0-9_\{\}]+)\(/g, "<span class='is-method'>$1</span>")
            text = text.replaceAll(/\\?([a-zA-Z0-9_]+\\{2})+([a-zA-Z0-9_]+)/g, "<span title='$1$2' class='is-class'>$2</span>")

            text = text.replaceAll(/(?<!&line=\d*)([0-9]+)/g, "<span class='is-number'>$1</span>")

            return text
        },
        toggleTrace(index) {
            let key = this.current.name + ':' + index
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
        traceIsOpen(index) {
            return this.open_traces.includes(this.current.name + ':' + index)
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
            return config.base_url + suffix
        },
        setupDateInterval() {
            setInterval(() => {
                // for (const comp of this.dateComponents) {
                //     comp.$forceUpdate();
                // }
                window.bus.emit('refresh-dates')
            }, config.relative_dates_refresh_interval);
        }
    }
})
