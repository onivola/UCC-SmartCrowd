"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,_toPropertyKey(i.key),i)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0===o)return("string"===e?String:Number)(t);var i=o.call(t,e||"default");if("object"!==_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}!function(){var t,e,o=function(){function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck(this,e),this.cookies=t.cookies}return _createClass(e,[{key:"exec",value:function(){"4"===this.cookies.get("productid")&&this.cookies.set("productid","",{domain:".intuit.com"}),this.cookies.get("vitaSiteId")&&this.cookies.set("vitaSiteId","",{domain:".intuit.com"})}}]),e}();t=window.Cookies,e=function(){new o({cookies:t}).exec()},"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()}();