<template>
    <popper position="bottom-end">
        <template #trigger="{toggle}">
            <button class="form-button" @click="toggle">
                {{ label }}
            </button>
        </template>
        <div class="bg-white rounded border border-gray-200 shadow-md w-[12rem] mt-[2px]">
            <button @click.prevent="store.toggle_env(env)" v-for="env in store.envs" class="block w-full text-left capitalize px-3 py-2 cursor:bg-blue-50">
                <i :class="store.env_is_checked(env) ? 'bxs-check-square text-blue-600' : 'bx-square'" class="bx relative top-[3px] text-xl mr-1"></i>
                <span>{{ env }}</span>
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
            if (this.store.filter_envs.length === 0 || this.store.filter_envs.length === this.store.envs.length) {
                return 'All Environments'
            }
            if (this.store.filter_envs.length === 1) {
                return this.store.filter_envs[0]
            }

            return this.store.filter_envs.length + ' Environments'
        }
    }
})
</script>
