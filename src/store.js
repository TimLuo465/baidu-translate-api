const Configstore  = require('configstore');
const pkg = require("../package.json");
const globalConfig = require('./globalConfig');
const { COOKIES, PARAMS } = require("./constant");
let store = null;

function getStore() {
    if (store) return store;

    if (globalConfig.useLocalStore) {
        store = new Map();
    } else {
        store = new Configstore(pkg.name);
    }

    return store;
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
    getCookies: () => getStore().get(COOKIES),
    setCookies: cookies => getStore().set(COOKIES, cookies),
    getParams: () => getStore().get(PARAMS),
    setParams: params => getStore().set(PARAMS, params)
};