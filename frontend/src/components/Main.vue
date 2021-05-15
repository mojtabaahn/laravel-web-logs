<template>
    <div style="width: calc(100% - 20rem - 4rem);" class="h-full">
        <div class="overflow-auto relative" style="height:calc(100%)">
            <div v-if="store.current === null" class="flex items-center justify-center w-full h-full">
                <div class="text-gray-300 text-4xl font-light">Select a log..</div>
            </div>
            <div v-else-if="store.loading_log" class="absolute inset-0 w-full h-full flex items-center justify-center">
                <Loading/>
            </div>
            <template v-else>
                <div class="p-5 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
                    <div>
                        <div class="text-lg font-bold">{{ store.current.name }}</div>
                        <div class="flex space-x-5 text-sm font-bold text-gray-500 py-1">
                            <div>Created
                                <date :timestamp="store.current.created_at"/>
                            </div>
                            <div>Modified
                                <date :timestamp="store.current.modified_at"/>
                            </div>
                            <div>Size: {{ filesize(store.current.size) }}</div>
                        </div>
                    </div>
                    <div class="flex space-x-2 items-center">
                        <text-filter label="Links" :enabled="store.text_links" @click="store.toggle('text_links')"/>
                        <!--<text-filter label="Auto-Reload" :enabled="store.auto_reload" @click="store.toggle('auto_reload')"/>-->
                        <button
                            @click.prevent="store.fetchLog(store.current)"
                            title="refresh"
                            class="w-8 h-8 border border-gray-300 shadow rounded-lg ml-2 text-gray-700 cursor:bg-blue-50 cursor:border-blue-600 cursor:text-blue-600 flex items-center justify-center"
                        >
                            <i class="bx bx-refresh text-2xl"></i>
                        </button>
                    </div>
                </div>
                <div class="p-5 divide-y divide-dashed divide-gray-200">
                    <div v-for="(line,offset) in store.sorted_content" class="py-4">
                        <div class="font-bold text-sm inline-flex space-x-2 mb">
                            <div class="px-2 py-1  border rounded-lg" :class="levelClass(line.level)">{{ line.level }}</div>
                            <date class="px-2 py-1 text-gray-700" :timestamp="line.time" :parse="true"/>
                        </div>
                        <div class="whitespace-pre-wrap font-mono with-links leading-6 py-4" v-html="store.applyFilters(line.content)"></div>
                        <template v-if="line.trace !== ''">
                            <button @click="store.toggleTrace(offset)" class="rounded-lg px-2 py-1 font-bold text-sm text-blue-500 cursor:text-blue-600 underline">Toggle Trace</button>
                            <!--                            <div class="whitespace-pre-wrap font-mono with-links leading-6 mt-2" v-if="store.traceIsOpen(offset)">{{ line.trace }}</div>-->
                            <div v-if="store.traceIsOpen(offset)" class="mt-4">
                                <div class="font-mono">
                                    <div v-for="(line,index) in store.traceToArray(line.trace)" class="flex">
                                        <div class="p-2 align-top text-gray-500 min-w-[2rem]">{{ index }}</div>
                                        <div :title="line" class="p-2" v-html="store.applyFilters(line)"></div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
import {defineComponent} from "vue";
import Loading from "./Loading";
import linkifyStr from 'linkifyjs/string';
import TextFilter from "./TextFilter";
import Date from "./Date";

export default defineComponent({
    components: {Date, TextFilter, Loading},
    methods: {
        levelClass(level) {
            let isError = level.includes('EMERGENCY') | level.includes('ALERT') | level.includes('CRITICAL') | level.includes('ERROR');
            let isDebug = level.includes('WARNING') | level.includes('NOTICE') | level.includes('INFO') | level.includes('DEBUG');
            return {
                'bg-red-100 text-red-600 border-red-600': isError,
                'bg-yellow-100 text-yellow-600 border-yellow-600': isDebug,
            }
        }
    }
})
</script>
<style>
.with-links a span {
    @apply text-blue-700
}

.with-links a {
    @apply font-bold text-blue-700 cursor:text-blue-900;
}

.is-file, .is-class {
    /*@apply inline-block px-1 bg-purple-200*/
    @apply inline-block px-1 border-pink-500 border-b border-dashed
}

.is-method {
    /*@apply text-pink-600 font-semibold*/
    @apply inline-block px-1 border-pink-600 border-b border-dashed
}

.is-number {
    /*@apply px-1 inline-block bg-yellow-200 font-semibold*/
    @apply inline-block text-pink-600
}
</style>
