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

## API

### translate(query, options)

#### query 

Type: `String`

The text to be translated

#### options

Type: `Object`

- **from** Type: `String` Default: `zh`
- **to**   Type: `String` Default: `en`
- **keywords** Type: `Boolean` Default: `false`

### Did not finish, working...
