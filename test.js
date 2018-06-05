const test = require("ava");

const translate = require("./index");

test('translate without any options', async t => {
    try {
        const res = await translate("让我们来翻译吧!");
        const data = res.data;

        t.is(data.dst, "Let's translate it!");
    } catch (err) {
        t.fail(err);
    }
});

test('translate with auto to dutch', async t => {
    try {
        const res = await translate("ให้เราแปลมัน!", { form: "auto" });
        const data = res.data;

        t.is(data.dst, "We translate it!")
    } catch (err) {
        t.fail(err);
    }
});