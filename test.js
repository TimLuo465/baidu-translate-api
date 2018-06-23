const test = require("ava");

const translate = require("./index");

test('translate without any options', async t => {
    try {
        const res = await translate("让我们来翻译吧!");
        const { trans_result, from, to } = res;

        t.is(trans_result.src, "让我们来翻译吧!");
        t.is(trans_result.dst, "Let's translate it!");
        t.is(from, "zh");
        t.is(to, "en");
    } catch (err) {
        t.fail(err);
    }
});

test('translate with options', async t => {
    try {
        const res = await translate("让我们来翻译吧!", {
            to: "kor"
        });
        const { trans_result, from, to } = res;

        t.is(trans_result.src, "让我们来翻译吧!");
        t.is(trans_result.dst, "번역해 주세요!");
        t.is(from, "en");
        t.is(to, "kor");
    } catch (err) {
        t.fail(err);
    }
});