"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,_toPropertyKey(i.key),i)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);var i=r.call(e,t||"default");if("object"!==_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}window.TTCOM_Scripts=window.TTCOM_Scripts||{},window.TTCOM_Scripts.PromiseHandler=function(){function t(e){_classCallCheck(this,t),this._criteria=[],this.promiseHandlerNameSpace=e,this.promiseRejectedReason=void 0,this._events={}}return _createClass(t,[{key:"createEvents",value:function(){window.Event&&(this._events.resolved=new Event("".concat(this.promiseHandlerNameSpace,".performanceBeaconPromisesResolved"))),window.CustomEvent?this._events.rejected=new CustomEvent("".concat(this.promiseHandlerNameSpace,".performanceBeaconPromisesRejected"),{detail:this.promiseRejectedReason}):window.Event&&(this._events.rejected=new Event("".concat(this.promiseHandlerNameSpace,".performanceBeaconPromisesRejected")))}},{key:"registerCriterion",value:function(e){var t=!1;return e instanceof Promise&&(t=!0,this._criteria.push(e)),t}},{key:"registerCriteria",value:function(e){var t=this;e.forEach(function(e){t.registerCriterion(e)})}},{key:"evaluateCriteria",value:function(){var t=this;return Promise.all(this._criteria).then(function(){t._events.resolved&&document.dispatchEvent(t._events.resolved)}).catch(function(e){t.promiseRejectedReason=e,t._events.rejected&&document.dispatchEvent(t._events.rejected)})}},{key:"resetCriteria",value:function(){return this._criteria=[],this.countCriteria()}},{key:"countCriteria",value:function(){return this._criteria.length}}]),t}();