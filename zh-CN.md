# baidu-translate-api [![npm](https://img.shields.io/npm/v/baidu-translate-api.svg)](https://www.npmjs.com/package/baidu-translate-api)

一个免费且不受限制的百度翻译API


## 安装

``` npm install --save baidu-translate-api ```

or

``` yarn add baidu-translate-api ```

## 用法

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

请求翻译的文本

#### options

Type: `Object`

- **from** 

    Type: `String` Default: `auto`
    
    翻译源语言或`auto`，支持的语言 - [Languages ](#languages)
    
- **to**   
    Type: `String`  Default: `en`

    译文语言. 支持的语言 [Languages ](#languages)
    
### 返回 `object`:
- `from` - 源语言
- `to` - 译文语言
- `trans_result` *(object)*

    - `dst` - 译文
    - `src` - 请求翻译的文本
## Languages

abbr | name
---|---
auto | 自动检测
zh | 中文
en | 英文
yue	| 粤语
wyw	| 文言文
jp	| 日语
kor	| 韩语
fra	| 法语
spa	| 西班牙语
th	| 泰语
ara	| 阿拉伯语
ru	| 俄语
pt	| 葡萄牙语
de	| 德语
it	| 意大利语
el	| 希腊语
nl	| 荷兰语
pl	| 波兰语
bul	| 保加利亚语
est	| 爱沙尼亚语
dan	| 丹麦语
fin	| 芬兰语
cs	| 捷克语
rom	| 罗马尼亚语
slo	| 斯洛文尼亚语
swe	| 瑞典语
hu	| 匈牙利语
cht	| 繁体中文
vie	| 越南语

## 后记

欢迎star和issues. 如果这个库对你有帮助的话，请给他一颗小星星吧！你的支持是我最大的动力。