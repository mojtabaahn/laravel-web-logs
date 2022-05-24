import {createApp} from "vue";
import App from "./App";
import {createPinia} from "pinia";
import axios from 'axios'


window.axios = axios

let app = createApp(App)
app.use(createPinia())
app.mount('#app')
