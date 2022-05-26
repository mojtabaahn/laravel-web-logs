<template>
  <div class="relative bg-light-gray dark:bg-intense-gray">
    <div class="lg:hidden p-3 font-bold w-full" >
      <button class="text-gray-800 bg-gray-100 rounded p-2 block w-full" v-on:click.stop="deselect">Go Back</button>
    </div>
    <Loading v-if="logs.isLoading"/>
    <div v-else class="grid grid-cols-1 gap-5 p-5">
      <div v-for="log in logs.data" class="space-y-3 border-b pb-3 border-b border-gray-100 dark:border-slate-800">
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-3">
          <ErrorInfo label="Level" :value="log.level"/>
          <ErrorInfo label="Environment " :value="log.environment.toUpperCase()"/>
          <ErrorInfo label="Reported At" :value="log.created_at.toLocaleString()"/>
          <ErrorInfo label="Location" :value="log.filename + ':' + log.start_line"/>
        </div>
        <div class="text-md text-gray-800 dark:text-slate-300" v-html="log.message"></div>
        <button type="button" class="text-blue-600" v-on:click.prevent="toggleTrace(log)">Toggle Trace</button>
        <div v-if="log.traceIsVisible">
          <div v-for="trace in log.trace" class="text-md text-gray-700 dark:text-slate-400" v-html="trace"></div>
        </div>
      </div>
      <div v-if="logs.data !== null && logs.data.length > 0" class="py-4 w-full flex items-center justify-center relative h-24">
        <Loading v-if="logs.isAppending"/>
        <div v-else-if="isEndOfFile">End Of File</div>
        <button
            v-else
            type="button"
            class="text-sky-600 font-bold px-4 py-2 outline-none"
            v-on:click.prevent="loadNextPage"
        >Load More..
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Loading from "./Loading";
import {useLogsStore} from "../store/logs";
import ErrorInfo from "./ErrorInfo";
import {storeToRefs} from "pinia";

export default {
  components: {ErrorInfo, Loading},
  setup() {
    let store = useLogsStore();
    const {logs, isEndOfFile} = storeToRefs(store)
    const {loadNextPage, toggleTrace, deselect} = store
    return {logs, isEndOfFile, loadNextPage, toggleTrace, deselect}
  }
}
</script>