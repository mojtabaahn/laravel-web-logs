<template>
    <popper position="bottom-end">
        <template #trigger="{toggle}">
            <button class="form-button" @click="toggle">{{ label }}</button>
        </template>
        <div class="bg-white rounded border border-gray-200 shadow-md w-[12rem] mt-[2px]">
            <button @click.prevent="store.toggle_level(level)" v-for="level in store.levels" class="block w-full text-left capitalize px-3 py-2 cursor:bg-blue-50">
                <i :class="store.level_is_checked(level) ? 'bxs-check-square text-blue-600' : 'bx-square'" class="bx relative top-[3px] text-xl mr-1"></i>
                <span>{{ level }}</span>
            </button>
        </div>
    </popper>
</template>
<script>
import {defineComponent} from "vue";
import Popper from "./Popper";

export default defineComponent({
    components: {Popper},
    computed: {
        label() {
            if (this.store.filter_levels.length === 0 || this.store.filter_levels.length === this.store.levels.length) {
                return 'All Levels'
            }
            if (this.store.filter_levels.length === 1) {
                return this.store.filter_levels[0]
            }

            return this.store.filter_levels.length + ' Levels'
        }
    }

})
</script>
