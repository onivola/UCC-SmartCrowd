"use strict";!function(){var s=function(e){var r=e||"";return[{regex:/=(em_[^_]*_[^_]*_[^_]*)_([^&]*)/g,replacementPattern:"=$1_SANITIZED"},{regex:/=[^@&]*[@][^&]*/g,replacementPattern:"=SANITIZED"}].forEach(function(e){r=r.replace(e.regex,e.replacementPattern)}),r};window.TTCOM_Scripts||(window.TTCOM_Scripts={}),window.TTCOM_Scripts.splunk=function(){var t={},o=window.appVars,e=o&&o.csLogging&&o.csLogging.cookiesToInclude,i=o.csLogging&&o.csLogging.urlParamsToExclude,a=o.csLogging&&o.csLogging.csaEnabled||!1,c=(window.coreServiceAdapter||{}).logger||{},g={errorUrl:"",logKey:"",logValue:"",errorMessage:"",lineNumber:-1,userAgent:navigator&&navigator.userAgent?navigator.userAgent:"",pageUrl:function(){var e,r=(e=window.location)&&e.href?e.href.split("?")[0]:"",n=window.location&&window.location.search;if(0===n.length)return r;try{var o=function e(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"";return r===decodeURIComponent(r)?r:e(decodeURIComponent(r))}(n),t=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",n=new URLSearchParams(e);return r.trim().split(",").forEach(function(e){n.delete(e)}),n.toString()}(s(o),i);return"".concat(r,"?").concat(t)}catch(e){return"".concat(r).concat(n)}}(),cookieIds:e};t.encodeOptionsForLogging=function(e,r){for(var n in e=e||{})if(e.hasOwnProperty(n)){var o=e[n];0<=r.indexOf(n)?e[n]=encodeURI(o):e[n]=encodeURIComponent(o)}},t.param=function(r){return Object.keys(r).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(r[e])}).join("&")},t.sanitizeForLogging=s;return t.logMessage=function(e){if(a&&o.csLogging.enabled){var r=e.errorMessage||e.prettyMessage||e.logValue||"unclassified error",n=e.level||"error";return c[n](r,e)}!function(e){var r={};if(window.fetch&&e.url&&o&&o.csLogging&&o.csLogging.enabled){var n=Object.assign({},g,e);t.encodeOptionsForLogging(n,["url","errorUrl"]),n.errorUrl&&n.errorUrl.length&&(n.errorUrl=t.sanitizeForLogging(n.errorUrl)),r=fetch(n.url,{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8"},credentials:"same-origin",body:t.param(n)})}}(e)},t.logError=function(e,r,n,o){return t.logMessage(Object.assign(e,{errorMessage:r||"",lineNumber:o||-1,errorUrl:n||""}))},t}()}();