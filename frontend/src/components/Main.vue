<template>
    <div :class="store.aside ? 'hidden lg:block' : ''" class="flex-grow h-full">
        <infinite-scroll @scroll-to-end="!store.is_end && store.fetchLogNextPage()" class="overflow-auto relative" style="height:calc(100%)">
            <div v-if="store.current === null" class="flex items-center justify-center w-full h-full">
                <div class="text-gray-300 text-4xl font-light">Select a log..</div>
            </div>
            <div v-else>
                <div class=" sticky top-0 bg-white">
                    <div class="p-5 border-b border-gray-200 grid lg:grid-cols-2 flex-wrap justify-between items-center">
                        <div>
                            <div class="text-lg font-bold">{{ store.current.name }}</div>
                            <div class="grid grid-cols-2 lg:flex lg:space-x-5 text-sm font-bold text-gray-500 py-1">
                                <div>Created
                                    <date :timestamp="store.current.created_at"/>
                                </div>
                                <div>Modified
                                    <date :timestamp="store.current.modified_at"/>
                                </div>
                                <div>Size: {{ filesize(store.current.size) }}</div>
                            </div>
                        </div>
                        <div class="w-full lg:auto flex space-right items-center lg:flex-row-reverse mt-3 lg:mt-0 flex-wrap -mb-3">
                            <!--<text-filter label="Links" :enabled="store.text_links" @click="store.toggle('text_links')"/>-->
                            <!--<text-filter label="Auto-Reload" :enabled="store.auto_reload" @click="store.toggle('auto_reload')"/>-->
                            <button
                                @click.prevent="store.refreshLog()"
                                title="refresh"
                                class="w-8 h-8 form-button flex items-center justify-center mb-2"
                            >
                                <i class="bx bx-refresh text-2xl"></i>
                            </button>


                            <filter-env class="mb-2"/>
                            <filter-level class="mb-2"/>

                            <input v-model="store.filter" type="text" class="form-input mb-2" placeholder="Filter Logs..">

                        </div>
                    </div>
                </div>
                <div class="p-5 divide-y divide-dashed divide-gray-200">
                    <div v-for="(line,offset) in store.sorted_content" class="py-4">
                        <div class="font-bold text-sm inline-flex space-x-4 mb">
                            <div class="px-2 py-1  border rounded-lg" :class="levelClass(line.level)">{{ line.level }}</div>
                            <div class="py-1 text-gray-700 capitalize">{{ line.env }}</div>
                            <date class="py-1 text-gray-700" :timestamp="line.time" :parse="true"/>
                        </div>
                        <div class="whitespace-pre-wrap font-mono with-links leading-6 py-4 break-all" v-html="store.applyFilters(line.content)"></div>
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
                    <div v-if="store.loading_log" class="w-full h-[50vh] flex items-center justify-center">
                        <Loading/>
                    </div>
                    <div v-else-if="store.sorted_content.length === 0" class="w-full h-[50vh] flex items-center justify-center">
                        <div class="text-center">
                            <div class="uppercase text-xl font-bold text-gray-600">Such An Empty</div>
                            <div class="text-gray-400 mt-2"> try removing filters</div>
                        </div>
                    </div>
                    <div v-else-if="store.is_end" class="w-full h-[50vh] flex items-center justify-center">
                        <div class="uppercase text-xl font-light text-gray-600">End Of File</div>
                    </div>
                </div>
            </div>
        </infinite-scroll>
    </div>
</template>
<script>
import {defineComponent} from "vue";
import Loading from "./Loading";
import linkifyStr from 'linkifyjs/string';
import TextFilter from "./TextFilter";
import Date from "./Date";
import InfiniteScroll from "./InfiniteScroll";
import Popper from "./Popper";
import FilterEnv from "./FilterEnv";
import FilterLevel from "./FilterLevel";

export default defineComponent({
    components: {FilterLevel, FilterEnv, Popper, InfiniteScroll, Date, TextFilter, Loading},
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

.space-right > * {
    @apply mr-2
}
</style>
