<template>
  <div class="w-full h-screen grid grid-cols-4 overflow-hidden">
    <Aside class="col-span-1 max-h-screen overflow-auto"/>
    <Main class="col-span-3 max-h-screen overflow-auto"></Main>
  </div>
</template>
<script>
import {useLogsStore} from "./store/logs";
import Loading from "./components/Loading";
import Aside from "../js/components/Aside";
import Main from "../js/components/Main";
import StatusBar from "./components/StatusBar";
import {onMounted} from "vue";

export default {
  name: "App",
  components: {StatusBar, Main, Aside, Loading},
  setup() {
    let logs = useLogsStore();
    onMounted(logs.setup)
    return {logs}
  }

}
</script>