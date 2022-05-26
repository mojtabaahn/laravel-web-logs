import {defineStore} from 'pinia'
import CONFIG from "./config";
import {computed, reactive, ref} from "vue";
import {breakpointsTailwind, useBreakpoints} from "@vueuse/core";

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

export const useLogsStore = defineStore('logs', () => {
    const state = reactive({
        config: new DataSource(true, 500, {}),
        files: new DataSource(true, 500, []),
        logs: new DataSource(false, 500, []),
    })
    const counter = ref(0)

    const activeFile = computed(() => state.files.data !== null && state.files.data.find(file => file.isActive))
    const lastLog = computed(() => state.logs.data !== null && state.logs.data[state.logs.data.length - 1])
    const basePath = computed(() => state.config.data !== null && state.config.data['base_path'])
    const isAnyFileSelected = computed(() => typeof activeFile.value !== 'undefined')
    const isEndOfFile = computed(() => lastLog.value && lastLog.value.start_line === 1)
    const lgAndBeyond = useBreakpoints(breakpointsTailwind).greater('lg')
    const shouldShowAside = computed(() => isAnyFileSelected.value !== true || lgAndBeyond.value === true)
    const shouldShowMain = computed(() => isAnyFileSelected.value === true || lgAndBeyond.value === true)

    const getLogFiles = async function () {
        await state.files.setData(async () => (await axios.get(CONFIG.BASE_URL + '/file'))
            .data
            .map(item => ({...item, modifiedAt: new Date(item.modifiedAt * 1000), isActive: false}))
        )
    }

    const getLogFile = async function (filename) {
        await state.logs.setData(async () => (await axios.get(CONFIG.BASE_URL + '/file/' + filename))
            .data.map(normalizeItem)
        )
    }

    const deselect = function(){
        activeFile.value && (activeFile.value.isActive = false)
    }

    const selectFile = async function (fileObject) {
        deselect()
        fileObject.isActive = true
        await getLogFile(fileObject.name)
    }

    const searchFiles = term => state.files.filter(file => file.name.includes(term))

    const loadNextPage = async function () {
        let offset = lastLog.value.start_line
        let url = CONFIG.BASE_URL + '/file/' + activeFile.value.name + '?offset=' + offset;
        state.logs.appendData(async () => (await axios.get(url)).data.map(normalizeItem))
    }

    const reload = async function () {
        let activeFileName = activeFile.value.name
        await getLogFiles()
        let newActiveFile = state.files.data.find(file => file.name === activeFileName)
        newActiveFile && await selectFile(newActiveFile)
    }

    const normalizeItem = function (item) {
        return {
            ...item,
            message: normalizeMessage(item.message),
            trace: Object.keys(item.trace).reduce(
                (payload, key) => ({...payload, [key]: normalizeMessage(item.trace[key])}),
                {}
            ),
            created_at: new Date(item.created_at * 1000),
            traceIsVisible: false,
        }
    }

    const normalizeMessage = function (message) {
        return message.replaceAll(
            /\/.*?\/([^\\\/]+\.[\w:]+)/g,
            `<span class="italic border-b border-gray-800" title="$&">$1</span>`
        )
    }

    const toggleTrace = log => {
        log.traceIsVisible = !log.traceIsVisible
    }

    return {
        config: state.config,
        logs: state.logs,
        files: state.files,
        counter,
        activeFile,
        lastLog,
        basePath,
        isAnyFileSelected,
        isEndOfFile,
        getLogFile,
        getLogFiles,
        loadNextPage,
        normalizeItem,
        normalizeMessage,
        reload,
        searchFiles,
        selectFile,
        deselect,
        toggleTrace,
        lgAndBeyond,
        shouldShowMain,
        shouldShowAside,
    }

})