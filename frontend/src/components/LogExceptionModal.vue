<template>
    <modal v-if="store.exception_modal" @close="store.toggle('exception_modal')">
        <form @submit.prevent="store.submit_exception" class="space-y-6">
            <div class="text-3xl">Log An Exception</div>
            <textarea ref="focus" v-model="store.exception_form.message" cols="30" rows="6" placeholder="Exception Message.." class="form-textarea"></textarea>
            <button class="form-submit">Send</button>
            <button class="form-cancel" type="button" @click.prevent="store.toggle('exception_modal')">Cancel</button>
        </form>
    </modal>
</template>
<script>
import {defineComponent,watch} from "vue";
import Modal from "./Modal";

export default defineComponent({
    components: {Modal},
    created() {
        watch(() => this.store.exception_modal,value => {
            value && this.$nextTick(() => {
                this.$refs.focus.focus()
            })
        })
    }
})
</script>
<style>
.form-textarea {
    @apply rounded-lg border border-gray-200 cursor:ring-blue-300 cursor:ring-2 cursor:border-blue-600 p-3 w-full
}

.form-submit {
    @apply rounded-lg bg-blue-500 text-white font-bold px-5 py-2 cursor:bg-blue-600
}
</style>
