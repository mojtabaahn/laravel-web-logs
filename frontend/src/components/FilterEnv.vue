<template>
  <popper position="bottom-end">
    <template #trigger="{toggle}">
      <button class="form-button" @click="toggle">
        {{ label }}
      </button>
    </template>
    <div class="bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700 shadow-md w-[12rem] mt-[2px]">
      <button @click.prevent="store.toggle_env(env)" v-for="env in store.envs" class="block w-full text-left capitalize px-3 py-2 cursor:bg-blue-50 dark:cursor:bg-gray-700">
        <i :class="store.env_is_checked(env) ? 'bxs-check-square text-blue-600 dark:text-blue-300' : 'bx-square'" class="bx relative top-[3px] text-xl mr-1"></i>
        <span>{{ env }}</span>
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
  setup(props, context) {
    let store = useStore();
    let label = computed(() => {
          if (store.filter_envs.length === 0 || store.filter_envs.length === store.envs.length) {
            return 'All Environments'
          }
          if (store.filter_envs.length === 1) {
            return store.filter_envs[0]
          }

          return store.filter_envs.length + ' Environments'
        }
    )

    return {store: store, label}
  }
})
</script>
