!function(){"use strict";var e,o,t="smartlook_picker",r=(null===(e=document.currentScript)||void 0===e?void 0:e.src.replace("recorder.js","picker.56c596a7337bbc7b1d6c.js"))||"",n=function(){function e(){}return e.shouldStart=function(){var e;try{e=window.sessionStorage.getItem(t)||window.localStorage.getItem(t)}catch(e){}return!!e||document.referrer.indexOf("picker/4f249306-efd5-4127-b768-79a6750a7c5d-ca97caf7-335a-4e1f-b047-be42cb6098f9")>-1},e.start=function(){var e=document.createElement("script");e.src=r,document.head.append(e);try{window.sessionStorage.setItem(t,"1")}catch(e){}},e}(),i=(null===(o=document.currentScript)||void 0===o?void 0:o.src)||"",d=function(){var e=document.createElement("script");e.src=i.replace("recorder.js","es6/init.b7e2f628530db00a579a.js"),e.type="module";var o=document.createElement("script");o.src=i.replace("recorder.js","es5/init.1c348889f1f7d5ed9721.js"),o.noModule=!0,"noModule"in document.createElement("script")?(document.head.appendChild(e),document.head.appendChild(o)):document.head.appendChild(o)};if(void 0===window.smartlook)console.warn("Smartlook script was loaded without initializing `window.smartlook` object.",document.currentScript);else if(void 0!==Number.parseInt&&"nodeName"in Node.prototype){window.smartlook.scriptSource=i.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^/]+$/,"/");var c=document.querySelectorAll('[src$="smartlook.com/recorder.js"]');if(c.length>1&&console.warn("Smartlook web-sdk loaded ".concat(c.length,"x.")),window.smartlook.isRecorderScriptLoaded)console.warn("Smartlook initialization ignored in this script.",document.currentScript);else if(n.shouldStart())n.start();else try{!function(){var e,o,t,r,n,i,d,c,a;return-1===[window.queueMicrotask,Array.from,null===(e=Array.prototype)||void 0===e?void 0:e.find,null===(o=Array.prototype)||void 0===o?void 0:o.flat,null===(t=Array.prototype)||void 0===t?void 0:t.flatMap,null===(r=Array.prototype)||void 0===r?void 0:r.includes,null===(n=Element.prototype)||void 0===n?void 0:n.append,null===(i=Event.prototype)||void 0===i?void 0:i.composedPath,"getRootNode"in(Node.prototype||{}),"isConnected"in(Node.prototype||{}),Object.assign,Object.entries,Object.fromEntries,Object.hasOwn,Object.setPrototypeOf,Object.values,String.prototype.includes,String.prototype.endsWith,String.prototype.startsWith,window.fetch,window.AbortController,window.MessageChannel,window.MessagePort,null===(d=window.navigator)||void 0===d?void 0:d.sendBeacon,window.requestIdleCallback,null===(c=window.Promise)||void 0===c?void 0:c.any,window.ResizeObserver,null===(a=window.Symbol)||void 0===a?void 0:a.asyncIterator,window.Reflect,window.Uint8Array.prototype.reduce].map(Boolean).indexOf(!1)}()?function(){var e=i.replace("recorder.js","polyfills.2429440db1e65aeefd7f.js"),o=document.createElement("script");o.src=e;var t=function(e){var r;(void 0===(r=e).isTrusted||r.isTrusted)&&(o.removeEventListener("load",t,!0),d())};o.addEventListener("load",t,!0),document.head.appendChild(o)}():d()}finally{window.smartlook.isRecorderScriptLoaded=!0}}else console.warn("Smartlook is not recording. Unsupported browser detected.")}();