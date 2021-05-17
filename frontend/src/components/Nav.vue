<template>
    <div class="w-[4rem] border-r border-gray-200 h-full flex flex-col items-center py-6 space-y-6">
        <img src="./../assets/logo.png" alt="" class="w-[2rem]">
        <div class="h-[0] border-b-2 border-gray-200 w-[2rem]"></div>
        <button @click="store.reloadAll" class="text-gray-700  cursor:text-blue-600" title="Reload"><i class="bx bx-refresh text-3xl"></i></button>
        <button @click="store.toggle('message_modal')" class="text-gray-700  cursor:text-blue-600" title="Trigger A Message"><i class="bx bx-send text-3xl"></i></button>
        <button @click="store.toggle('exception_modal')" class="text-gray-700  cursor:text-blue-600" title="Trigger An Exception"><i class="bx bx-bug-alt text-3xl"></i></button>
        <div class="flex-grow"></div>
        <button @click="store.toggle('setting_modal')" class="text-gray-700  cursor:text-blue-600" title="Setting"><i class="bx bx-cog text-3xl"></i></button>
        <a :href="config.github_url" class="text-gray-700 cursor:text-blue-600" title="Github"><i class="bx bxl-github text-3xl"></i></a>
    </div>
</template>
<script>
import {defineComponent} from "vue";

export default defineComponent({})
</script>
