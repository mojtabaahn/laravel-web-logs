<template>
    <modal v-if="store.setting_modal" @close="store.toggle('setting_modal')">
        <div class="space-y-6">
            <button @click="store.toggle('text_links')" class="w-full flex items-center justify-between">
                <div class="capitalize font-bold text-gray-700">clickable links</div>
                <div>
                    <i class="bx text-5xl relative top-[3px]" :class="store.text_links ? 'bxs-toggle-right text-blue-600' : 'bx-toggle-left text-gray-700'"></i>
                </div>
            </button>
        </div>
    </modal>
</template>
<script>
import {defineComponent} from "vue";
import Modal from "./Modal";

export default defineComponent({
    components: {Modal},
})
</script>
