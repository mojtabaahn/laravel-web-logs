<template>
    <div @scroll="scrollCallback">
        <slot></slot>
    </div>
</template>
<script>
import {defineComponent} from "vue";

export default defineComponent({
    emits: ['scroll-to-end'],
    created() {
        this.emitUp = __.throttle(() => {
            this.$emit('scroll-to-end')
            console.log('scrolled to end')
        }, 500, {
            leading: true,
            trailing: false
        })
    },
    methods: {
        scrollCallback(e) {
            // https://stackoverflow.com/a/4638434/5211299
            if (e.target.offsetHeight + e.target.scrollTop >= e.target.scrollHeight) {
                this.emitUp()
            }
        }
    }
})
</script>
