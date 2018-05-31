let request = require("request");
const token = require("./token");
const { FANYI_BAIDU_API_URL } = require("./constant");

function params(o={}) {
    return Object.keys(o).reduce((prev, k, i) => `${prev}${i?"&":""}${k}=${encodeURIComponent(o[k])}`, "?");
}

function translate({query, from, to}) {
    return new Promise((resolve, reject) => {
        token.get(query).then( ({sign, token}) => {
            const data = {
                transtype: "realtime",
                simple_means_flag: 3,
                from, to, query, sign, token
            };
    
            request({
                url: `${FANYI_BAIDU_API_URL}${params(data)}`
            }, (err, res, body) => {
                if (body.err) return reject(body);

                let result = JSON.parse(body)

                resolve(result.trans_result);
            });
        });
    });
}

const cookie = require("./cookie");

module.exports = (query, opts={}) => {
    const {from="zh", to="en"} = opts;

    return cookie.get().then(cookies => {
        const jar = request.jar();
        
        jar.setCookie(cookies, FANYI_BAIDU_API_URL)
        request = request.defaults({jar});

        return translate({ query, from, to });
    });
}
