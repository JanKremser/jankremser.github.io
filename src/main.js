import { renderToString } from 'vue/server-renderer';

import fs from "fs"
import path from "path"

const INDEX_HTML = fs.readFileSync('./src/index.html', 'utf8');

function readAllPages(directory, callback) {
    fs.readdir(directory, function (err, files) {
        files.forEach(function (file) {
            fs.stat(directory + '/' + file, function (err, stats) {
                if (stats.isFile() && path.extname(file) == ".js") {
                    callback(directory, file);
                }
                if (stats.isDirectory()) {
                    readAllPages(directory + '/' + file, callback);
                }
            });
        });
    });
}

async function readerPage(page, directory) {
    let content = await renderToString(page).then((html) => {
        return INDEX_HTML.replace("{{ app }}", html).replaceAll("\n", "");
    })

    let fullPath = `${directory.replace("./pages", "./dist")}.html`

    let dir = path.dirname(fullPath);
    let filename = path.basename(fullPath);

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    let writeStream = fs.createWriteStream(`${dir}/${filename}`);
    writeStream.write(content);
    writeStream.end();
}

readAllPages('./src/pages', async function (directory, file) {
    let clearDir = `${directory.replace("src/", "")}`;
    let importFile = `${clearDir}/${file}`;
    
    let page = (await import(importFile)).default;

    await readerPage(page, clearDir);
});
