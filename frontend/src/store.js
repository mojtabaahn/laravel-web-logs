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
    search: '',
    open_traces: [],
    toggle(key) {
        this[key] = !this[key]
    },
    setup() {
        this.fetchLogs()
    },
    teardown() {
    },
    fetchLogs() {
        this.loading_logs = true
        axios.get(`${config.base_url}/web-logs`).then(resp => {
            setTimeout(() => {
                this.loading_logs = false
                this.logs = resp.data
            }, 500)
        })
    },
    fetchLog(log) {
        this.current = log
        this.loading_log = true
        axios.get(`${config.base_url}/web-logs/${log.name}`).then(resp => {
            setTimeout(() => {
                this.loading_log = false
                this.current_content = resp.data
            }, 500)
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
    }
})
