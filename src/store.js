const Configstore  = require('configstore');
const pkg = require("../package.json");
const globalConfig = require('./globalConfig');
const { COOKIES, PARAMS } = require("./constant");
let conf;

if (globalConfig.useLocalStore) {
    conf = new Map();
} else {
    conf = new Configstore(pkg.name);
}

/**
 * {
 *   cookies: { 
 *      value: "", 
 *      expires: ""
 *   },
 *   params: {  // change the token every day
 *      token: "",
 *      gtk: "",
 *      expires: ""
 *   }
 * }
 */
module.exports = {
    getCookies: () => conf.get(COOKIES),
    setCookies: cookies => conf.set(COOKIES, cookies),
    getParams: () => conf.get(PARAMS),
    setParams: params => conf.set(PARAMS, params)
};