const querystring = require("querystring");

const request = require("request");
const token = require("./token");
const cookie = require("./cookie");
const store = require("./store");

const { FANYI_BAIDU_API_URL, transapi } = require("./constant");

const translate = {
    v1: opts => {
        return new Promise((resolve, reject) => {
            request(`${transapi.v1}?${querystring.stringify(opts)}`, (err, res, body="") => {
                let result = JSON.parse(body);

                if (err || result.error) reject(err || result.msg);

                resolve(result.data);
            });
        });
    },
    v2: ({query, from, to}) => {
        return new Promise((resolve, reject) => {
            token.get(query).then( ({sign, token}) => {
                const jar = request.jar();
                const cookies = store.getCookies();
                const data = {
                    transtype: "realtime",
                    simple_means_flag: 3,
                    from, to, query, sign, token
                };
                const url = `${transapi.v2}?${querystring.stringify(data)}`;
                
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
}

module.exports = (query, opts={}) => {
    const {from="zh", to="en", keywords=false} = opts;

    return cookie.get().then(() => {
        if(version === true) {
            return translate.v2({ query, from, to });
        } 
        return  translate.v1({query, from, to});
    });
}
