<template>
    <div class="w-full h-screen">
        <div class="h-[0rem] border-gray-200"></div>
        <div class="flex" style="height: calc(100% - 0rem)">
            <Nav/>
            <Aside/>
            <Main/>
            <log-message-modal/>
            <log-exception-modal/>
        </div>
    </div>
</template>

<script>
import Aside from "./components/Aside";
import Main from "./components/Main";
import Nav from "./components/Nav";
import LogMessageModal from "./components/LogMessageModal";
import LogExceptionModal from "./components/LogExceptionModal";

export default {
    name: 'App',
    components: {
        LogExceptionModal,
        LogMessageModal,
        Nav,
        Main,
        Aside,
    }
}
</script>
<style>
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    @apply bg-gray-100
}

::-webkit-scrollbar-thumb {
    @apply bg-gray-300 cursor:bg-gray-500
}
</style>
