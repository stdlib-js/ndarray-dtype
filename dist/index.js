"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=n(function(d,t){
var u=require('@stdlib/ndarray-base-assert-is-data-type/dist'),a=require('@stdlib/error-tools-fmtprodmsg/dist');function o(e){var r;if(typeof e!="object"||e===null)throw new TypeError(a('nullDv',e));if(r=e.dtype,u(r))return r;throw new TypeError(a("invalid argument. Must provide an ndarray having a supported data type. Value: `%s`.",r))}t.exports=o
});var p=i();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
