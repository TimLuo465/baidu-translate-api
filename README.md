# baidu-translate-api

A free and unlimited API for Baidu Translate

## Usage

``` js
const translate = require("./index");

translate("让我们来翻译吧!").then(res => {
    console.log(res.dst);
    // Let's translate it!
});

```

``` js
const translate = require("./index");

translate("让我们来翻译吧!").then(res => {
    console.log(res.keywords);
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

- **from** Type: `String` Default: `auto`
- **to**   Type: `String` Default: `en`
- **keywords** Type: `Boolean` Default: `false`

## Languages

abbr | name
---|---
auto | Automatic detection
zh | Chinese
en | English

### Did not finish, working...