# baidu-translate-api [![npm](https://img.shields.io/npm/v/baidu-translate-api.svg)](https://www.npmjs.com/package/baidu-translate-api)

A free and unlimited API for Baidu Translate

## Translations

- [中文](https://github.com/TimLuo465/baidu-translate-api/blob/master/zh-CN.md)

## Install

``` 
npm install --save baidu-translate-api 
```

or

``` 
yarn add baidu-translate-api
```

## Usage

``` js
const translate = require("baidu-translate-api");

translate("让我们来翻译吧!").then(res => {
    console.log(res.trans_result.dst);
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
    
    The language in which the query text or `auto`. Contain in [Languages ](#languages)

- **to**   

    Type: `String`  Default: `en`

    The language in which the text should be translated. Contain in [Languages ](#languages)
    
- **requestOpts**   

    Type: `RequestOptions`  Default: `{}`

    reference [request options](https://github.com/request/request#requestoptions-callback)
### Returns an `object`:
- `from` - The lanuage in which the query text.
- `to`
- `trans_result` *(object)*

    - `dst` - The translation
    - `src` - The source *(equal to query)*

## setGlobalConfig(config)
 name | desc
 ---  | ---
 useLocalStore | store the token config in memory. default: false.

## Languages

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

## AFTERWORD

If this repo helped you, give me a star and it's the greatest encouragement to me. 