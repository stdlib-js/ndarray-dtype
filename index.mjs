// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-data-type@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function e(e){var a;if("object"!=typeof e||null===e)throw new TypeError(t("invalid argument. Must provide an ndarray. Value: `%s`.",e));if(a=e.dtype,r(a))return a;throw new TypeError(t("invalid argument. Must provide an ndarray having a supported data type. Value: `%s`.",a))}export{e as default};
//# sourceMappingURL=index.mjs.map
