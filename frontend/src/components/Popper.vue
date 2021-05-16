<template>
  <div>
    <div ref="trigger">
      <slot name="trigger" v-bind="{toggle}"></slot>
    </div>
    <div ref="menu" v-show="visible" class="z-50">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import {defineComponent} from "vue";
import {createPopper} from "@popperjs/core";

export default defineComponent({
  name: 'popper',
  props : {
    position : {
      default : 'bottom'
    }
  },
  data: v => ({
    visible: false,
  }),
  created() {
    this.toggle = () => this.visible = !this.visible
    this.documentClickCallback = ev => {
      if (ev.target !== this.$el && !this.$el.contains(ev.target)) {
        this.visible = false
      }
    }
  },
  watch: {
    visible: {
      handler(value) {
        value && createPopper(this.$refs.trigger, this.$refs.menu, {
          placement: this.position
        })
      },
      immediate: true
    },
  },
  mounted() {
    document.addEventListener('click', this.documentClickCallback);
  },
  unmounted() {
    document.removeEventListener('click', this.documentClickCallback)
  }
})
</script>