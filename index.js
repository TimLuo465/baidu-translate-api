const cookie = require("./src/cookie");

cookie.get().then(cookies => {
    console.log(cookies)
});