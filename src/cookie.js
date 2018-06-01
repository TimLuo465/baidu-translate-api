function getCookie(key, cookies = []) {
    const r = new RegExp(`${key}=(.*?);`, "gim");
    let cookie = "";

    cookies.every(c => !(cookie = String(c).match(r) && c));

    return String(cookie);
}

function getExpires(cookie = "") {
    return new Date(cookie.replace(/.*Expires=(.*?);.*/g, "$1"));
}


const store = require("./store")
const request = require("request");
const { FANYI_BAIDU_URL } = require("./constant");

module.exports = {
    get: () => {
        return new Promise((resolve, reject) => {
            const jar = request.jar();
            const cookies = store.getCookies();
            
            if (cookies && new Date(cookies.expires) > new Date()) {
                return resolve();
            }

            request(FANYI_BAIDU_URL, { jar }, () => {
                let jar_cookies = jar.getCookies(FANYI_BAIDU_URL);
                let value = getCookie("BAIDUID", jar_cookies);

                store.setCookies({
                    value,
                    expires: getExpires(value)
                });

                resolve();
            });
        });
    }
};