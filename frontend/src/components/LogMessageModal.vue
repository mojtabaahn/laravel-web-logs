<template>
    <modal v-if="store.message_modal" @close="store.toggle('message_modal')">
        <form @submit.prevent="store.submit_message" class="space-y-6">
            <div class="text-3xl">Log A Message</div>
            <div class="grid grid-cols-3 gap-2">
                <label v-for="level in levels">
                    <input :value="level" v-model="store.message_form.level" type="radio" name="level">
                    <span class="pl-2 capitalize">{{ level }}</span>
                </label>
            </div>
            <textarea ref="focus" v-model="store.message_form.message" cols="30" rows="6" placeholder="Message.." class="form-textarea"></textarea>
            <button class="form-submit">Send</button>
            <button class="form-cancel" type="button" @click.prevent="store.toggle('message_modal')">Cancel</button>
        </form>
    </modal>
</template>
<script>
import {defineComponent, watch} from "vue";
import Modal from "./Modal";

export default defineComponent({
    components: {Modal},
    created() {
        watch(() => this.store.message_modal, value => {
            value && this.$nextTick(() => {
                this.$refs.focus.focus()
            })
        })
    },
    data: v => ({
        levels: [
            'emergency',
            'alert',
            'critical',
            'error',
            'warning',
            'notice',
            'info',
            'debug'
        ]
    })
})
</script>
<style>
.form-textarea {
    @apply rounded-lg border border-gray-200 cursor:ring-blue-300 cursor:ring-2 cursor:border-blue-600 p-3 w-full
}

.form-submit {
    @apply rounded-lg bg-blue-500 text-white font-bold px-5 py-2 cursor:bg-blue-600 mr-4
}

.form-cancel {
    @apply rounded-lg font-bold px-5 py-2 text-gray-700 mr-4
}
</style>
