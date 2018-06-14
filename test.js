const test = require("ava");

const translate = require("./index");

test('translate without any options', async t => {
    try {
        const res = await translate("让我们来翻译吧!");
        const { trans_result, from, to } = res;

        t.is(trans_result.dst, "Let's translate it!");
        t.is(trans_result.src, "让我们来翻译吧!");
        t.is(from, "zh");
        t.is(to, "en");
    } catch (err) {
        t.fail(err);
    }
});