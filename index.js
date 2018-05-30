// const cookie = require("./src/cookie");

// cookie.get().then(cookies => {
//     console.log(cookies)
// });

// const token = require("./src/token");

// token.get().then(res => {
//     console.log(res);
// });

const translate = require("./src/translate");

translate("我们来翻译!").then(res => {
    // console.log(res);
    console.log(res.data[0].dst);
});