const request = require("request");
const { FANYI_BAIDU_URL } = require("./constant");

function getCookie(key, cookies = []) {
    const r = new RegExp(`${key}=(.*?);`, "gim");
    let cookie = "";

    cookies.every(c => !(cookie = String(c).match(r) && c));

    return String(cookie);
}

function getExpires(cookie = "") {
    return new Date(cookie.replace(/.*Expires=(.*?);.*/g, "$1"));
}

const store = {
    cookie: "",
    expires: null
};

module.exports = {
    get: () => {
        return new Promise((resolve, reject) => {
            const jar = request.jar();
            const { cookie, exports } = store;
            
            if(cookie && expires > new Date()) {
                return resolve(cookie)
            }

            request(FANYI_BAIDU_URL, { jar }, () => {
                let cookies = jar.getCookies(FANYI_BAIDU_URL);

                store.cookie = getCookie("BAIDUID", cookies);
                store.expires = getExpires(store.cookie);

                resolve(store.cookie);
            });
        });
    }
};