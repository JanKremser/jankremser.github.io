import { createSSRApp } from 'vue';

import pageWrapper from "../../components/wrapper.js";

let template = /* html */`
<page-wrapper>
    <article 
        v-for="(item, index) in projects"
        :key="index"
    >
        <div class="grid-2">
            <div class="img-box">
                <img :src="item.image" style="width: 12rem;" \>
            </div>
            <div style="padding-left: 2rem;">
                <h2>{{ item.name }}</h2>
                <p>{{ item.description }}</p>
                <a :href="item.link" role="button" class="outline">GitHub</a>
            </div>
        </div>
    </article>
</page-wrapper>
`

export default createSSRApp({
    components: {
        pageWrapper
    },
    data: () => ({
        projects: [
            {
                name: "oh my nvm!",
                description: "“oh my nvm!” is an nvm wrapper for easier use of different Node.js versions. Check this out ->",
                link: "https://github.com/JanKremser/npmv",
                image: "/img/projects/oh_my_nvm.png",
            }
        ]
    }),
    template,
});
