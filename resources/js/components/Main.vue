<template>
  <div class="relative bg-light-gray dark:bg-intense-gray">
    <Loading v-if="logs.isLoading"/>
    <div v-else class="grid grid-cols-1 gap-5 p-5">
      <div v-for="log in logs.data" class="space-y-3 border-b pb-3 border-b border-gray-100 dark:border-slate-800">
        <div class="space-x-3">
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
        <div v-else-if="isEndOfFile()">End Of File</div>
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

export default {
  components: {ErrorInfo, Loading},
  setup() {
    let store = useLogsStore();
    return {
      logs: store.logs,
      loadNextPage: store.loadNextPage,
      isEndOfFile: store.isEndOfFile,
      toggleTrace: store.toggleTrace,
    }
  }
}
</script>