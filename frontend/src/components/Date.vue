<template>
    <div class="inline" :title="unixToString(unixTimestamp)">{{ unixToDiff(unixTimestamp) }}</div>
</template>
<script>
import {defineComponent} from "vue";

export default defineComponent({
    props: {
        timestamp: {},
        parse: {
            default: false,
        }
    },
    computed: {
        unixTimestamp() {
            if (this.parse) {
                return Date.parse(this.timestamp) / 1000
            }
            return this.timestamp
        }
    },
    created() {
        this.store.dateComponents.add(this)
    },
    unmounted() {
        this.store.dateComponents.delete(this)
    }
})
</script>
