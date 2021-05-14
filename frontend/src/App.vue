<template>
    <div class="w-full h-screen">
        <div class="h-[0rem] border-gray-200"></div>
        <div class="flex" style="height: calc(100% - 0rem)">
            <Nav/>
            <Aside/>
            <Main/>
        </div>
    </div>
</template>

<script>
import Aside from "./components/Aside";
import Main from "./components/Main";
import Nav from "./components/Nav";

export default {
    name: 'App',
    components: {
        Nav,
        Main,
        Aside,
    }
}
</script>
