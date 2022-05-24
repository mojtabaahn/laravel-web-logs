<template>
  <div class="inline-flex flex-col w-64">
    <div class="inline-block text-gray-400 dark:text-slate-500">
      {{label}}:
    </div>
    <span class="dark:text-slate-200">{{ value }}</span>
  </div>
</template>
<script>
import {defineComponent} from "vue";

export default defineComponent({
  props:{
    label : {},
    value : {}
  }
})
</script>