import path from 'path';
import fs from "fs"

function readTemplate(url) {
    const templatePath = path.join(url.split(":")[1], "..", "template.html");
    return fs.readFileSync(templatePath, 'utf8');
}

export {
    readTemplate
}