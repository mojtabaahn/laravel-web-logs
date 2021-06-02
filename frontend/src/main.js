import {createApp} from 'vue'
import App from './App.vue'
import "./tailwind.css"
import "boxicons/css/boxicons.min.css"
import axios from 'axios'
import config from "./config";
import __ from 'lodash'
import {createPinia} from 'pinia'
import {filesize, unixToDiff, unixToString} from "./utils";
import mitt from 'mitt'

window.axios = axios
window.__ = __
window.bus = mitt()

let app = createApp(App)
app.use(createPinia())

app.config.globalProperties.config = config
app.config.globalProperties.__ = __
app.config.globalProperties.filesize = filesize
app.config.globalProperties.unixToDiff = unixToDiff
app.config.globalProperties.unixToString = unixToString

app.mount('#app')
