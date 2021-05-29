<template>
    <modal v-if="store.setting_modal" @close="store.toggle('setting_modal')">
        <div class="space-y-6">
            <button @click="store.toggle('text_links')" class="w-full flex items-center justify-between">
                <div class="capitalize font-bold text-gray-700 dark:text-gray-300">clickable links</div>
                <div>
                    <i class="bx text-5xl relative top-[3px]" :class="store.text_links ? 'bxs-toggle-right text-blue-600 dark:text-blue-300' : 'bx-toggle-left text-gray-700 dark:text-gray-500'"></i>
                </div>
            </button>
        </div>
        <div class="space-y-6">
            <button @click="togglePullInterval" class="w-full flex items-center justify-between">
                <div class="capitalize font-bold text-gray-700 dark:text-gray-300">Auto Append New Logs</div>
                <div>
                    <i class="bx text-5xl relative top-[3px]" :class="store.pull_interval !== 0 ? 'bxs-toggle-right text-blue-600 dark:text-blue-300' : 'bx-toggle-left text-gray-700 dark:text-gray-500'"></i>
                </div>
            </button>
        </div>
        <div class="space-y-6" v-if="store.pull_interval !== 0">
            <div class="w-full flex items-center justify-between">
                <div class="capitalize font-bold text-gray-700 dark:text-gray-300">Pulling Interval</div>
                <div class="form-input">
                    <input v-if="store.pull_interval !== false" v-model="store.pull_interval" class="text-center dark:bg-gray-700 w-[4rem]" />
                    <span>ms</span>
                </div>
            </div>
        </div>
    </modal>
</template>
<script>
import {defineComponent} from "vue";
import Modal from "./Modal";

export default defineComponent({
    components: {Modal},
    methods: {
        togglePullInterval() {
            if (this.store.pull_interval === 0) {
                this.store.pull_interval = 1000
            } else {
                this.store.pull_interval = 0
            }
        }
    }
})
</script>
