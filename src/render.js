import { renderToString } from 'vue/server-renderer';

import fs from "fs"
let indexHtml = fs.readFileSync('./src/index.html', 'utf8');

import app from './pages/index/mod.js';

renderToString(app).then((html) => {
    let t = indexHtml.replace("{{ app }}", html);
    console.log(t);
})
