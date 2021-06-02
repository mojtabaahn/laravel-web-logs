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
import {defineComponent, nextTick, onMounted, ref, watch} from "vue";
import Modal from "./Modal";
import {useStore} from "../store";

export default defineComponent({
  components: {Modal},
  setup(props, context) {
    let store = useStore();
    let focus = ref(null)
    onMounted(() => {
      watch(() => store.message_modal, value => {
        value && nextTick(() => {
          focus.value.focus()
        })
      })
    })

    let levels = [
      'emergency',
      'alert',
      'critical',
      'error',
      'warning',
      'notice',
      'info',
      'debug'
    ]

    return {store: store, levels, focus}
  }
})
</script>
