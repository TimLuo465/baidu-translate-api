const axios = require("axios");

const translate = {
    google: {
        url: `https://translate.google.com/translate_a/single`,
        getToken: function(opts) {
            let params = {
                client: 't',
                tl: opts.from,
                sl: opts.to,
                hl: opts.to,
                dt: ['at', 'bd', 'ex', 'ld', 'md', 'qca', 'rw', 'rm', 'ss', 't'],
                ie: 'UTF-8',
                oe: 'UTF-8',
                otf: 1,
                ssel: 0,
                tsel: 0,
                kc: 1,
                tk: 796902.676339,
                q: opts.query
            };
            let tokens = Object.keys(params);
            let len = tokens.length;

            return tokens.reduce((prev, key, i) => {
                let param = `${key}=${params[key]}${len - 1 > i ? "&" : ""}`;

                if(key === "dt") {
                    param = params.dt.reduce((prev, k) => prev + `dt=${k}&` , "");
                }

                return prev + param;
            }, "");
        }
    }
};

module.exports = (opts) => {
    let g = translate.google;
    let url = `${g.url}?${g.getToken(opts)}`;
    console.log(url)
    axios.get(url).then(res => {
        console.log(res);
    });
}