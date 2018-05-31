const Configstore  = require('configstore');
const pkg = require("../package.json");
const conf = new Configstore(pkg.name);

const { COOKIES, PARAMS } = require("./constant");

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
    getCookies: () => (conf.get(COOKIES) || {}).value,
    setCookies: cookies => conf.set(COOKIES, cookies),
    getParams: () => conf.get(PARAMS),
    setParams: params => conf.set(PARAMS, params)
};