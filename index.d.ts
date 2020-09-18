export = baidu_translate_api;

declare function baidu_translate_api(
  query: string,
  opts?: baidu_translate_api.options
): Promise<baidu_translate_api.returnObject>;

declare namespace baidu_translate_api {
  export interface options {
    from?: string;
    to?: string;
    requestOpts?: any;
  }

  type GlobalConfig = {
    useLocalStore: boolean
  }

  export function setGlobalConfig(config: GlobalConfig): void;
  
  export interface transResult {
    dst: string;
    src: string;
  }

  export interface returnObject {
    from: string;
    to: string;
    trans_result: transResult;
  }

  export enum language {
    Auto = "auto",
    Chinese = "zh",
    English = "en",
    Cantonese = "yue",
    ClassicalChinese = "wyw",
    Japanese = "jp",
    Korean = "kor",
    French = "fra",
    Spanish = "spa",
    Thai = "th",
    Arabic = "ara",
    Russian = "ru",
    Portuguese = "pt",
    German = "de",
    Italian = "it",
    Greek = "el",
    Dutch = "nl",
    Polish = "pl",
    Bulgarian = "bul",
    Estonian = "est",
    Danish = "dan",
    Finnish = "fin",
    Czech = "cs",
    Romanian = "rom",
    Slovenia = "slo",
    Swedish = "swe",
    Hungarian = "hu",
    TraditionalChinese = "cht",
    Vietnamese = "vie"
  }
}
