import { createSSRApp } from 'vue';

import { defineComponent } from 'vue';

import navBar from "./navBar.js";

let template = /* html */`
<main class="container">

    <nav-bar
        :enableBackBtn="enableBackBtn"
    ></nav-bar>
    
    <slot></slot>

</main>
`

export default defineComponent({
    components: {
        navBar
    },
    props: {
        enableBackBtn: {
            type: Boolean,
            default: true,
        }
    },
    data: () => ({
    }),
    template,
});
