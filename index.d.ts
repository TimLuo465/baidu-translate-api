// Type definitions for baidu-translate-api v0.2.1
// Project:https://github.com/TimLuo465/baidu-translate-api
// Definitions by: Yesterday17 <https://github.com/Yesterday17>

export = baidu_translate_api;

declare function baidu_translate_api(
  query: string,
  opts: baidu_translate_api.options
): baidu_translate_api.returnObject;

declare namespace baidu_translate_api {
  export interface options {
    from: string;
    to: string;
  }

  export interface transObject {
    dst: string;
    src: string;
  }

  export interface returnObject {
    from: string;
    to: string;
    trans_object: transObject;
  }
}
