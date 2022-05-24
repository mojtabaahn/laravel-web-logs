<template>
  <div class="flex bg-gray-50 dark:bg-slate-900 relative">
    <Loading v-if="files.isLoading"/>
    <template v-else>
      <div class="flex-grow flex flex-col">
        <div class="flex-grow overflow-auto">
          <div class="flex bg-gray-100 dark:bg-slate-800 justify-items-stretch">
            <input type="text" v-on:keyup="searchFiles($event.currentTarget.value)" class="bg-transparent dark:text-slate-200 px-6 py-4 w-full outline-none" placeholder="Start typing log file name..">
            <button v-on:click.prevent="reload" type="button" class="w-12 flex items-center justify-center text-gray-600 outline-none cursor:text-sky-600" title="Reload">
              <i class="bx bx-revision text-2xl bx-flip-vertical"></i>
            </button>
          </div>
          <button
              v-for="file in files.data"
              type="button"
              v-on:click="selectFile(file)"
              :class="{'bg-sky-100 dark:bg-slate-800' : file.isActive}"
              class="px-6 w-full py-4 text-left cursor:bg-sky-100 dark:cursor:bg-slate-800 border-b border-dashed border-gray-100 dark:border-slate-800 outline-none"
          >
            <span class="block text-lg dark:text-slate-300">{{ file.name }}</span>
            <span class="block text-gray-500">{{ file.modifiedAt.toLocaleString() }}</span>
          </button>
        </div>
        <StatusBar />
      </div>
    </template>
  </div>
</template>
<script>
import Loading from "./Loading";
import {useLogsStore} from "../store/logs";
import StatusBar from "./StatusBar";

export default {
  components: {StatusBar, Loading},
  setup() {
    let store = useLogsStore();
    return {
      files: store.files,
      selectFile: store.selectFile,
      searchFiles: store.searchFiles,
      reload : store.reload,
    }
  },
}
</script>