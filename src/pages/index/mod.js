import { createSSRApp } from 'vue';

//const util = await import(`${process.cwd()}/src/.util/index.js`);

import githubIcon from "../../components/icons/github-icon.js";
import instagramIcon from "../../components/icons/instagram-icon.js";
import linkedinIcon from "../../components/icons/linkedin-icon.js";

import pageWrapper from "../../components/wrapper.js";

let template = /* html */`
<page-wrapper
    :enableBackBtn="false"
>
    
    <header style="height: 60vh; padding: 2rem;">
        <div class="grid" style="height: 100%">
            <div class="">
                <h1 style="font-size: 3rem; margin: 0;">I'm</h1>
                <h2>
                    <span style="color: #07acc9;">Jan</span> Kremser
                </h2>
            </div>
            <div class="profile-box">
                <img src="/img/profile.jpeg" \>
            </div>
        </div>
    </header>

    <div class="grid">
        <article class="media-cards"
            v-for="(item, index) in mediaLinks"
            :key="index"
        >
            <component 
                :is="item.component"
                class="media-icons"
                :class="item.class"
                :style="\`color: $\{item.color}\`"
            ></component>

            <a :href="item.href" role="button" class="secondary outline" style="float: right;">
                {{ item.name }}
            </a>
        </article>
    </div>

</page-wrapper>
`

export default createSSRApp({
    components: {
        pageWrapper
    },
    data: () => ({
        mediaLinks: [
            {
                name: "GitHub",
                color: "#FC6D26",
                href: "https://github.com/JanKremser",
                component: githubIcon
            },
            {
                name: "Instagram",
                color: "#E4405F",
                href: "https://instagram.com/jan.kremser",
                component: instagramIcon
            },
            {
                name: "LinkedIn",
                color: "#0A66C2",
                href: "https://linkedin.com/in/jan-kremser-24208a29a",
                component: linkedinIcon,
                class: "linkedin"
            }
        ]
    }),
    template,
});
