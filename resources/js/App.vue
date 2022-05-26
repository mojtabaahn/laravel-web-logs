<template>
  <div class="w-full h-screen grid grid-cols-4 overflow-hidden">
    <Aside class="col-span-4 lg:col-span-1 max-h-screen overflow-auto" v-if="shouldShowAside"/>
    <Main class="col-span-4 lg:col-span-3 max-h-screen overflow-auto" v-if="shouldShowMain"></Main>
  </div>
</template>
<script>
import {useLogsStore} from "./store/logs";
import Loading from "./components/Loading";
import Aside from "../js/components/Aside";
import Main from "../js/components/Main";
import StatusBar from "./components/StatusBar";
import {onMounted, computed} from "vue";
import {breakpointsTailwind, useBreakpoints} from '@vueuse/core'
import {storeToRefs} from "pinia";

export default {
  name: "App",
  components: {StatusBar, Main, Aside, Loading},
  setup() {
    const logs = useLogsStore();

    const {getLogFiles} = logs
    onMounted(getLogFiles)

    const {shouldShowAside, shouldShowMain} = storeToRefs(logs)
    return {shouldShowAside, shouldShowMain}
  }

}
</script>