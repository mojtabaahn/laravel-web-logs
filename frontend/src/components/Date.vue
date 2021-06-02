<template>
  <div :key="key" class="inline" :title="unixToString(unixTimestamp)">{{ unixToDiff(unixTimestamp) }}</div>
</template>
<script>
import {computed, defineComponent, onUnmounted, ref} from "vue";
import {unixToDiff, unixToString} from "../utils";

export default defineComponent({
  props: {
    timestamp: {},
    parse: {
      default: false,
    }
  },
  setup(props, context) {
    let key = ref(0)
    let refreshCallback = () => key.value++
    window.bus.on('refresh-dates', refreshCallback)
    onUnmounted(() => window.bus.off('refresh-dates', refreshCallback))

    let unixTimestamp = computed(() => props.parse ? Date.parse(props.timestamp) / 1000 : props.timestamp)

    return {unixTimestamp, unixToDiff, unixToString, key}
  }
})
</script>
