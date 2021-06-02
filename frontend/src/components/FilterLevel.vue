<template>
  <popper position="bottom-end">
    <template #trigger="{toggle}">
      <button class="form-button" @click="toggle">{{ label }}</button>
    </template>
    <div class="bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700 shadow-md w-[12rem] mt-[2px]">
      <button @click.prevent="store.toggle_level(level)" v-for="level in store.levels" class="block w-full text-left capitalize px-3 py-2 cursor:bg-blue-50 dark:cursor:bg-gray-700">
        <i :class="store.level_is_checked(level) ? 'bxs-check-square text-blue-600 dark:text-blue-300' : 'bx-square'" class="bx relative top-[3px] text-xl mr-1"></i>
        <span>{{ level }}</span>
      </button>
    </div>
  </popper>
</template>
<script>
import {defineComponent, computed} from "vue";
import Popper from "./Popper";
import {useStore} from "../store";

export default defineComponent({
  components: {Popper},
  setup(props,context) {
    let store = useStore();
    let label = computed(() => {
      if (store.filter_levels.length === 0 || store.filter_levels.length === store.levels.length) {
        return 'All Levels'
      }
      if (store.filter_levels.length === 1) {
        return store.filter_levels[0]
      }

      return store.filter_levels.length + ' Levels'
    })
    return {store: store, label}
  }
})
</script>
