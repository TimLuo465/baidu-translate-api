const request = require("request");
const token = require("./token");
const cookie = require("./cookie");
const store = require("./store");

const { FANYI_BAIDU_API_URL } = require("./constant");

function params(o={}) {
    return Object.keys(o).reduce((prev, k, i) => `${prev}${i?"&":""}${k}=${encodeURIComponent(o[k])}`, "?");
}

function translate({query, from, to}) {
    return new Promise((resolve, reject) => {
        token.get(query).then( ({sign, token}) => {
            const jar = request.jar();
            const cookies = store.getCookies();
            const data = {
                transtype: "realtime",
                simple_means_flag: 3,
                from, to, query, sign, token
            };
            const url = `${FANYI_BAIDU_API_URL}${params(data)}`;
            
            jar.setCookie(cookies.value, url);

            request(url, { jar }, (err, res, body) => {
                let error = err || body.error;

                if (error) return reject(error);

                let result = JSON.parse(body)

                resolve(result.trans_result);
            });
        });
    });
}

module.exports = (query, opts={}) => {
    const {from="zh", to="en"} = opts;

    return cookie.get().then(() => {
        return translate({ query, from, to });
    });
}
