# baidu-translate-api

A free and unlimited API for Baidu Translate

## Translations

- [中文](https://github.com/TimLuo465/baidu-translate-api/zh-CN.md)

## Usage

``` js
const translate = require("./index");

translate("让我们来翻译吧!").then(res => {
    console.log(res.dst);
    // Let's translate it!
});

```

## API

### translate(query, options)

#### query 

Type: `String`

The text to be translated

#### options

Type: `Object`

- **from** 

    Type: `String` Default: `auto`
    
    The language in which the text should be translated
- **to**   
    Type: `String`  Default: `en`

    The language in which the text should be translated
### Returns an `object`:
- `from` 
## Languages Support

abbr | name
---|---
auto | Automatic detection
zh | Chinese
en | English
yue	| Cantonese
wyw	| Classical Chinese
jp	| Japanese
kor	| Korean
fra	| French
spa	| Spanish
th	| Thai
ara	| Arabic
ru	| Russian
pt	| Portuguese
de	| German
it	| Italian
el	| Greek language
nl	| Dutch
pl	| Polish
bul	| Bulgarian
est	| Estonian
dan	| Danish
fin	| Finnish
cs	| Czech
rom	| Romanian
slo	| Slovenia
swe	| Swedish
hu	| Hungarian
cht	| Traditional Chinese
vie	| Vietnamese
### Did not finish, working...
