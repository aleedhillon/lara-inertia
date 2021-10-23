<template>
    <Head>
        <title>Lara Inertia</title>
    </Head>
    <main class="container">
        <header class="container">
            <Nav></Nav>
        </header>
        <slot />
    </main>
</template>
<script>
import Nav from './../Componets/Nav.vue';
import { Head } from '@inertiajs/inertia-vue3';
export default {
    components: {
        Nav,
        Head
    }
}
</script>