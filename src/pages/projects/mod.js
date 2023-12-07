import { createSSRApp } from 'vue';

import pageWrapper from "../../components/wrapper.js";

let template = /* html */`
<page-wrapper>
    <article>
        coming soon
    </article>
</page-wrapper>
`

export default createSSRApp({
    components: {
        pageWrapper
    },
    data: () => ({

    }),
    template,
});
