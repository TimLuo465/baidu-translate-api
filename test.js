const test = require("ava");

const translate = require("./index");

test('translate without any options', async t => {
    try {
        const res = await translate("让我们来翻译吧!");
        const { trans_result, from, to } = res;

        t.is(trans_result.src, "让我们来翻译吧!");
        t.is(trans_result.dst, "Let's translate!");
        t.is(from, "zh");
        t.is(to, "en");
    } catch (err) {
        t.fail(err);
    }
});

test('translate with options', async t => {
    try {
        const res = await translate("让我们来翻译吧!", {
            to: "cht"
        });
        const { trans_result, from, to } = res;

        t.is(trans_result.src, "让我们来翻译吧!");
        t.is(trans_result.dst, "讓我們來翻譯吧！");
        t.is(from, "zh");
        t.is(to, "cht");
    } catch (err) {
        t.fail(err);
    }
});

test('translate with error handler', async t => {
    await translate("让我们来翻译吧!", {
        from: "",
        to: "en"
    }).catch(err => {
        t.is(err.error, 999)
    });
});
