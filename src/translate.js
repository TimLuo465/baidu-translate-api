const request = require("request");
const token = require("./token");

const url = "http://fanyi.baidu.com/v2transapi";

function params(o={}) {
    return Object.keys(o).reduce((prev, k, i) => `${prev}${i?"&":""}${k}=${encodeURIComponent(o[k])}`, "?");
}

token.get("测试").then(res => {
    const { sign, cookie } = res;
    const data = {
        form: "zh",
        to: "en",
        query: "测试",
        transtype: "realtime",
        simple_means_flag: 3,
        sign,
        token: res.token
    };
    const jar = request.jar();
    const uri = `${url}${params(data)}`;
    const cookies = request.cookie(cookie, url);

    jar.setCookie(cookies, uri)

    request({
        url: uri,
        jar: jar
    }, (err, res, body) => {
        console.log(JSON.parse(decodeURIComponent(body)));
    });
});
