import { createSSRApp } from 'vue';
const util = await import(`${process.cwd()}/src/.util/index.js`);

export default createSSRApp({
    data: () => ({ count: 1 }),
    template: util.readTemplate(import.meta.url),
});
