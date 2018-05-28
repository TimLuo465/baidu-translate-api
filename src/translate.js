const request = require("request");

// BAIDUID 396DB40732A5AFFEE75D334BF3122085:FG=1
const jar = request.jar();
const cookies = request.cookie("BAIDUID=FE4877CC01DBC1F78D71472CE16CDAB2:FG=1")
const url = "http://fanyi.baidu.com/v2transapi?from=zh&to=en&query=%E6%B5%8B%E8%AF%95&transtype=realtime&simple_means_flag=3&sign=706553.926920&token=6084690412299b5fcf05ecb68da2e9a1";

jar.setCookie(cookies, url)

request({
    url: url,
    jar: jar
}, (err, res, body) => {
    console.log(JSON.parse(decodeURIComponent(body)));
});