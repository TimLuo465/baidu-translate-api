import axios from "axios";

const translate = {
    google: {
        url: `https://translate.google.com/translate_a/single?`,
        params: {
            client: 't',
            tl: opts.from,
            sl: opts.to,
            hl: opts.to,
            dt: ['at', 'bd', 'ex', 'ld', 'md', 'qca', 'rw', 'rm', 'ss', 't'],
            ie: 'UTF-8',
            oe: 'UTF-8',
            otf: 1,
            ssel: 3,
            tsel: 0,
            kc: 7,
            tk: 796902.676339,
            q: opts.query
        },
        getToken: function() {
            var params = this.params;

            
        }
    }
};

export default (opts) => {
    axios.get()
}