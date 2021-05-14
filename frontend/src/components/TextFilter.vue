<template>
    <button
        @click="$emit('click')"
        class="rounded-lg border cursor:border-blue-600 cursor:text-blue-600 cursor:bg-blue-50 px-2 py-1 border shadow"
        :class="enabled ? 'border-green-600 text-green-700' : 'border-gray-300 text-gray-700'"
    >{{ label }} {{ enabled ? 'enabled' : 'disabled' }}</button>
</template>
<script>
import {defineComponent} from "vue";

export default defineComponent({
    props: {
        label: {},
        enabled: {}
    },
    emits : [
        'click'
    ]
})
</script>
