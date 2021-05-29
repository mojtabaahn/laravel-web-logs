<template>
    <div :class="store.aside ? 'flex-grow lg:flex-shrink-0 lg:w-[20rem] lg:flex-grow-0' : 'hidden'" class="border-r border-gray-200 dark:border-gray-700 h-full relative overflow-auto">
        <div v-if="store.loading_logs" class="absolute inset-0 w-full h-full flex items-center justify-center">
            <Loading/>
        </div>
        <template v-else>
            <div class="p-4 pb-0">
                <input type="text" v-model="store.search" class="flex-1 w-full rounded-lg px-3 py-1 dark:bg-gray-700 dark:text-gray-100 border border-gray-200 dark:border-gray-700 cursor:ring-2 cursor:ring-blue-500 dark:cursor:ring-blue-300" placeholder="Search log files..">
            </div>
            <div class="divide-y divide-gray-200 dark:divide-gray-700 px-4 divide-dashed ">
                <button
                    v-for="log in store.sorted_logs"
                    class="py-4 text-left w-full dark:text-gray-300 cursor:text-blue-600 dark:cursor:text-blue-300"
                    :class="{'text-blue-600 dark:text-blue-300' : store.current?.name === log.name}"
                    @click.prevent="store.openLog(log)"
                >
                    <div class="font-bold">{{ log.name }}</div>
                    <div class="text-sm text-gray-500 font-bold">Modified
                        <date :timestamp="log.modified_at"/>
                    </div>
                </button>
            </div>
        </template>
    </div>
</template>

<script>
import Loading from "./Loading";
import Date from "./Date";

export default {
    name: 'Aside',
    components: {Date, Loading},
}
</script>
