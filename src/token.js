/** 
 * https://translate.google.com/translate/releases/twsfe_w_20180521_RC03/r/js/desktop_module_main.js 
 */
let tr = null;
const window = {
    TKK: eval('((function(){var a\x3d338222765;var b\x3d924334499;return 424232+\x27.\x27+(a+b)})())')
};
const rr = a => () => a;
const sr = function (a, b) {
    for (var c = 0; c < b.length - 2; c += 3) {
        var d = b.charAt(c + 2);
        d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
        d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
        a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d
    }
    return a;
};
const ur = a => {
    if (null !== tr)
        var b = tr;
    else {
        b = rr(String.fromCharCode(84));
        var c = rr(String.fromCharCode(75));
        b = [b(), b()];
        b[1] = c();
        b = (tr = window[b.join(c())] || "") || ""
    }
    var d = rr(String.fromCharCode(116));
    c = rr(String.fromCharCode(107));
    d = [d(), d()];
    d[1] = c();
    c = "&" + d.join("") + "=";
    d = b.split(".");
    b = Number(d[0]) || 0;
    for (var e = [], f = 0, g = 0; g < a.length; g++) {
        var l = a.charCodeAt(g);
        128 > l ? e[f++] = l : (2048 > l ? e[f++] = l >> 6 | 192 : (55296 == (l & 64512) && g + 1 < a.length && 56320 == (a.charCodeAt(g + 1) & 64512) ? (l = 65536 + ((l & 1023) << 10) + (a.charCodeAt(++g) & 1023),
            e[f++] = l >> 18 | 240,
            e[f++] = l >> 12 & 63 | 128) : e[f++] = l >> 12 | 224,
            e[f++] = l >> 6 & 63 | 128),
            e[f++] = l & 63 | 128)
    }
    a = b;
    for (f = 0; f < e.length; f++)
        a += e[f],
            a = sr(a, "+-a^+6");
    a = sr(a, "+-3^+b+-f");
    a ^= Number(d[1]) || 0;
    0 > a && (a = (a & 2147483647) + 2147483648);
    a %= 1E6;
    return c + (a.toString() + "." + (a ^ b))
};

module.exports = {
    get: () => {

    }
}