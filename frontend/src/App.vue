<template>
    <div class="w-full h-screen dark:bg-gray-900 dark:text-gray-200">
        <div class="flex" style="height: calc(100% - 0rem)">
            <Nav/>
            <Aside />
            <Main/>
            <log-message-modal/>
            <log-exception-modal/>
            <setting-modal/>
        </div>
    </div>
</template>

<script>
import Aside from "./components/Aside";
import Main from "./components/Main";
import Nav from "./components/Nav";
import LogMessageModal from "./components/LogMessageModal";
import LogExceptionModal from "./components/LogExceptionModal";
import SettingModal from "./components/SettingModal";

export default {
    name: 'App',
    components: {
        SettingModal,
        LogExceptionModal,
        LogMessageModal,
        Nav,
        Main,
        Aside,
    }
}
</script>
