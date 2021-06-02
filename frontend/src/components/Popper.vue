<template>
  <div ref="root">
    <div ref="trigger">
      <slot name="trigger" v-bind="{toggle}"></slot>
    </div>
    <div ref="menu" v-show="visible" class="z-50">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import {defineComponent, onUnmounted, onMounted, watch, ref} from "vue";
import {createPopper} from "@popperjs/core";

export default defineComponent({
  name: 'popper',
  props: {
    position: {
      default: 'bottom'
    }
  },
  setup(props, context) {
    let root = ref(null)
    let trigger = ref(null)
    let menu = ref(null)
    let visible = ref(false)
    let toggle = () => visible.value = !visible.value
    let documentClickCallback = ev => (root.value && ev.target !== root.value && !root.value.contains(ev.target)) && (visible.value = false)

    onMounted(() => document.addEventListener('click', documentClickCallback))
    onUnmounted(() => document.removeEventListener('click', documentClickCallback))
    onMounted(() => watch(
        visible,
        value => value && createPopper(trigger.value, menu.value, {
          placement: props.position
        }),
        {immediate: true}
    ))

    return {visible, toggle, trigger, menu, root}
  }
})
</script>