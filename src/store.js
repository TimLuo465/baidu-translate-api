const Configstore  = require('configstore');
const pkg = require("../package.json");
const conf = new Configstore(pkg.name);

const { COOKIES } = require("./constant")

/**
 * {
 *   cookies: { 
 *      value: "", 
 *      expires: ""
 *   }
 * }
 */
module.exports = {
    getCookies: () => conf.get(COOKIES),
    setCookies: cookies => conf.set(COOKIES, cookies),
};