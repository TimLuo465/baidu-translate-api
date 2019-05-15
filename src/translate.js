const querystring = require("querystring");

const request = require("request");
const token = require("./token");
const cookie = require("./cookie");
const store = require("./store");

const { transapi } = require("./constant");

const translate = {
    v2: ({ query, from, to }) => {
        return new Promise((resolve, reject) => {
            token.get(query).then(({ sign, token }) => {
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
                    if (err) return reject(err);

                    try {
                        const result = JSON.parse(body);

                        if(result.error) return reject(result);

                        const { trans_result } = result;
                        const { from, to } = trans_result;
                        const { dst, src } = trans_result.data[0];

                        resolve({
                            from,
                            to,
                            trans_result: {
                                dst,
                                src
                            }
                        });
                    } catch(err) {
                        reject(err);
                    }
                });
            });
        });
    },
    langdetect: query => {
        return new Promise((resolve, reject) => {
            const url = `${transapi.langdetect}?query=${encodeURIComponent(query)}`;

            request(url, (err, res, body) => {
                if (err) return reject(err);

                try {
                    let result = JSON.parse(body);

                    if (result.error) return reject(result);

                    resolve(result.lan);
                } catch(err) {
                    return reject(err);
                }
            });
        });
    }
};

const language = require("./language");
const { Auto, English } = language;

module.exports = (query, opts = {}) => {
    let { from = Auto, to = English } = opts;
    let _translate = () => {
        return cookie.get().then(() => {
            return translate.v2({ query, from, to });
        });
    };

    return new Promise(resolve => {
        if (from !== Auto) {
            return resolve(_translate());
        }

        translate.langdetect(query).then(lan => {
            from = lan;
            resolve(_translate());
        });
    });
};

module.exports.language = language;
