import nconf from 'nconf'
import PATH from "path";

import baseManager from "./baseManager";
const content = 'config/default.json'


const defaultConfig = PATH.resolve(process.cwd(), content);

nconf.argv()
    .env()
    .file({file: defaultConfig})
    .defaults({ENV: 'development'});

const configManager = Object.assign({}, baseManager);

export default configManager;