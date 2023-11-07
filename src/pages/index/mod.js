import { createSSRApp } from 'vue';

const util = await import(`${process.cwd()}/src/.util/index.js`);

import githubIcon from "../../components/icons/github-icon.js";
import instagramIcon from "../../components/icons/instagram-icon.js";
import linkedinIcon from "../../components/icons/linkedin-icon.js";

export default createSSRApp({
    components: {
        githubIcon,
        instagramIcon,
        linkedinIcon,
    },
    data: () => ({ count: 1 }),
    template: util.readTemplate(import.meta.url),
});
