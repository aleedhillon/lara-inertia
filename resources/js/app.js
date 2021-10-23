require('./bootstrap');
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress'
import route from 'ziggy-js';
import Main from './Layouts/Main.vue';

InertiaProgress.init();

createInertiaApp({
    title: title => `${title} - Lara Inertia`,
    resolve: name => {
        const page = require(`./Pages/${name}`).default;

        // if(page.layout === undefined && name != 'Welcome') {
        //     page.layout = Main;
        // }

        page.layout = page.layout || Main;

        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .mixin({ methods: { route } })
            .use(plugin)
            .mount(el);
    },
});