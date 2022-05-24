import {defineStore} from 'pinia'
import CONFIG from "./config";

const sleep = ms => new Promise(r => setTimeout(r, ms));

class DataSource {
    constructor(isLoading = true, initialDelay = 0, initialValue = null) {
        this.initialDelay = initialDelay
        this.isLoading = isLoading
        this.isAppending = false
        this.originalData = null
        this.data = initialValue
    }

    async appendData(callback) {
        this.isAppending = true
        await sleep(this.initialDelay)
        this.data = this.originalData = [...this.originalData, ...await callback()]
        this.isAppending = false
    }

    async setData(callback) {
        this.isLoading = true
        await sleep(this.initialDelay)
        this.data = this.originalData = await callback()
        this.isLoading = false
    }

    filter(callback) {
        this.data = this.originalData.filter(callback)
    }


}

export const useLogsStore = defineStore('logs', {
    state: () => ({
        config: new DataSource(true, 500, {}),
        files: new DataSource(true, 500, []),
        logs: new DataSource(false, 500, []),
    }),
    actions: {
        async setup() {
            await this.getLogFiles()
        },
        async getLogFiles() {
            await this.files.setData(async () => (await axios.get(CONFIG.BASE_URL + '/file'))
                .data
                .map(item => ({...item, modifiedAt: new Date(item.modifiedAt * 1000), isActive: false}))
            )
        },
        async getLogFile(filename) {
            await this.logs.setData(async () => (await axios.get(CONFIG.BASE_URL + '/file/' + filename))
                .data.map(this.normalizeItem)
            )
        },
        async selectFile(fileObject) {
            this.activeFile && (this.activeFile.isActive = false)
            fileObject.isActive = true
            await this.getLogFile(fileObject.name)
        },
        searchFiles(term) {
            this.files.filter(file => file.name.includes(term))
        },
        async loadNextPage() {
            let offset = this.lastLog.start_line
            this.logs.appendData(
                async () => (await axios.get(CONFIG.BASE_URL + '/file/' + this.activeFile.name + '?offset=' + offset))
                    .data.map(this.normalizeItem)
            )
        },
        isEndOfFile() {
            return this.lastLog && this.lastLog.start_line === 1
        },
        async reload() {
            let activeFileName = this.activeFile.name
            await this.getLogFiles()
            let newActiveFile = this.files.data.find(file => file.name === activeFileName)
            newActiveFile && await this.selectFile(newActiveFile)
        },
        normalizeItem(item) {
            return {
                ...item,
                message: this.normalizeMessage(item.message),
                trace: Object.keys(item.trace).reduce(
                    (payload, key) => ({...payload, [key]: this.normalizeMessage(item.trace[key])}),
                    {}
                ),
                created_at: new Date(item.created_at * 1000),
                traceIsVisible: false,
            }
        },
        normalizeMessage(message) {
            // return message
            return message.replaceAll(
                /\/.*?\/([^\\\/]+\.[\w:]+)/g,
                `<span class="italic border-b border-gray-800" title="$&">$1</span>`
            )
        },
        toggleTrace(log) {
            log.traceIsVisible = !log.traceIsVisible
        }
    },
    getters: {
        activeFile() {
            return this.files.data !== null && this.files.data.find(file => file.isActive)
        },
        lastLog() {
            return this.logs.data !== null && this.logs.data[this.logs.data.length - 1]
        },
        basePath() {
            return this.config.data !== null && this.config.data['base_path']
        }
    }
})