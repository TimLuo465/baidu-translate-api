const request = require("request");

const jar = request.jar();
const url = "http://fanyi.baidu.com";


function getCookie(key, cookies = []) {
    const r = new RegExp(`${key}=(.*?);`, "gim");
    let cookie = "";

    cookies.every(c => !(cookie = String(c).match(r) && c));

    return String(cookie);
}

function getExpires(cookie = "") {
    let r = /.*Expires=(.*?);.*/g
    
    return new Date(cookie.replace(r, "$1"));
}

const store = {
    cookie: "",
    expires: null
};

module.exports = {
    get: () => {
        return new Promise((resolve, reject) => {
            let { cookie, exports } = store;

            if(cookie && expires > new Date()) {
                return resolve(cookie)
            }

            request(url, { jar }, () => {
                let cookies = jar.getCookies(url);

                store.cookie = getCookie("BAIDUID", cookies);
                store.expires = getExpires(store.cookie);

                resolve(store.cookie);
            });
        });
    }
};