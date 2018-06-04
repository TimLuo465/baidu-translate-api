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
                
                resolve(result.data[0]);
            });
        });
    },
    v2: ({query, from, to}) => {
        return new Promise((resolve, reject) => {
            token.get(query).then( ({sign, token}) => {
                const data = {
                    transtype: "realtime",
                    simple_means_flag: 3,
                    from, to, query, sign, token
                };
                const url = `${transapi.v2}?${querystring.stringify(data)}`;
                const jar = request.jar();
                const cookies = store.getCookies();
                
                jar.setCookie(cookies.value, url);
    
                request(url, { jar }, (err, res, body) => {
                    let error = err || body.error;
    
                    if (error) return reject(error);
    
                    let result = JSON.parse(body);
                    let { data, keywords } = result.trans_result;

                    resolve({data, keywords});
                });
            });
        });
    },
    langdetect: query => {
        return new Promise((resolve, reject) => {
            const url = `${transapi.langdetect}?query=${encodeURIComponent(query)}`;
            
            request(url, (err, res, body) => {
                let error = err || body.error;

                if (error) return reject(error);

                let result = JSON.parse(body);

                resolve(result.lan);
            });
        });
    }
};

module.exports = (query, opts={}) => {
    let {from = "auto", to = "en", keywords = false} = opts;
    let _translate = () => {
        if (keywords === false) return translate.v1({query, from, to});

        return cookie.get().then(() => {
            return translate.v2({ query, from, to });
        });
    };
    
    return new Promise((resolve, reject) => {
        if (from !== "auto") { 
            return resolve(_translate());
        }

        translate.langdetect(query).then(lan => {
            from = lan;
            resolve(_translate());
        });
    });
}
