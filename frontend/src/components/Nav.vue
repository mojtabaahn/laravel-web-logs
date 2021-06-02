<template>
  <div class="flex-shrink-0 w-[4rem] border-r border-gray-200 dark:border-gray-700 h-full flex flex-col items-center py-6 space-y-6">
    <img src="./../assets/logo.svg" alt="" class="w-[4rem]">
    <button @click="store.toggle('aside')" :class="store.aside ? 'text-blue-700 dark:text-blue-300' : 'text-gray-700 dark:text-gray-400'" title="Toggle Aside">
      <i class="bx bxs-dock-left text-3xl"></i>
    </button>
    <button @click="store.reloadAll" class="nav-action" title="Reload">
      <i class="bx bx-refresh text-3xl"></i>
    </button>
    <button @click="store.toggle('message_modal')" class="nav-action" title="Trigger A Message">
      <i class="bx bx-send text-3xl"></i>
    </button>
    <button @click="store.toggle('exception_modal')" class="nav-action" title="Trigger An Exception">
      <i class="bx bx-bug-alt text-3xl"></i>
    </button>
    <div class="flex-grow"></div>
    <button @click="store.toggleColorScheme" class="nav-action" title="Toggle Color Scheme">
      <i class="bx text-3xl" :class="store.isDark ? 'bx-moon' : 'bx-sun'"></i>
    </button>
    <button @click="store.toggle('setting_modal')" class="nav-action" title="Setting">
      <i class="bx bx-cog text-3xl"></i>
    </button>
    <a :href="config.github_url" class="nav-action" title="Github">
      <i class="bx bxl-github text-3xl"></i>
    </a>
  </div>
</template>
<script>
import {defineComponent} from "vue";
import {useStore} from "../store";

export default defineComponent({
  setup() {
    return {store: useStore()}
  }
})
</script>
<style>
.nav-action {
  @apply text-gray-700 dark:text-gray-400 cursor:text-blue-600 dark:cursor:text-blue-300
}
</style>
