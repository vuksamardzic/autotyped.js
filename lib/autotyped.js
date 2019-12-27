(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Autotyped"] = factory();
	else
		root["Autotyped"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lib/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lib/js/config.js":
/*!******************************!*\
  !*** ./src/lib/js/config.js ***!
  \******************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\nvar config = {\n  selector: '.at-init',\n  animate: true,\n  animation: 'bounce',\n  speed: 200,\n  text: []\n};\n\n//# sourceURL=webpack://Autotyped/./src/lib/js/config.js?");

/***/ }),

/***/ "./src/lib/js/helpers.js":
/*!*******************************!*\
  !*** ./src/lib/js/helpers.js ***!
  \*******************************/
/*! exports provided: $$, addClass, removeClass, hasClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$$\", function() { return $$; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addClass\", function() { return addClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeClass\", function() { return removeClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasClass\", function() { return hasClass; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar $$ = function $$(selector) {\n  return _toConsumableArray(document.querySelectorAll(selector));\n};\nvar addClass = function addClass(el, c) {\n  el.classList.add(c);\n};\nvar removeClass = function removeClass(el, c) {\n  el.classList.remove(c);\n};\nvar hasClass = function hasClass(el, c) {\n  return el.classList.contains(c);\n};\n\n//# sourceURL=webpack://Autotyped/./src/lib/js/helpers.js?");

/***/ }),

/***/ "./src/lib/js/index.js":
/*!*****************************!*\
  !*** ./src/lib/js/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Autotyped; });\n/* harmony import */ var _scss_autotyped_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/autotyped.scss */ \"./src/lib/scss/autotyped.scss\");\n/* harmony import */ var _scss_autotyped_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_autotyped_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/lib/js/config.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./src/lib/js/helpers.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar Autotyped =\n/*#__PURE__*/\nfunction () {\n  function Autotyped() {\n    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.at-init';\n    var settings = arguments.length > 1 ? arguments[1] : undefined;\n\n    _classCallCheck(this, Autotyped);\n\n    this.el = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"$$\"])(selector);\n    this.text = this.el.map(function (t) {\n      return t.innerText;\n    });\n    this.interval = [];\n    this.settings = Object.assign({}, _config__WEBPACK_IMPORTED_MODULE_1__[\"config\"], settings);\n  }\n\n  _createClass(Autotyped, [{\n    key: \"init\",\n    value: function init(settings) {\n      var _this = this;\n\n      this._assignSettings(settings);\n\n      this._clearInterval();\n\n      this.el.forEach(function (i, index) {\n        _this._render(index);\n      });\n    }\n  }, {\n    key: \"_render\",\n    value: function _render(i) {\n      var _this2 = this;\n\n      var text = this.settings.text.length ? this.settings.text[i].split('') : this.text[i].split('');\n      var raw = '';\n\n      if (!Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"hasClass\"])(this.el[i], 'at-running')) {\n        var w = this.el[i].clientWidth;\n        var h = this.el[i].clientHeight;\n        this.el[i].style.width = \"\".concat(w, \"px\");\n        this.el[i].style.height = \"\".concat(h, \"px\");\n        this.el[i].innerHTML = '';\n        Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"addClass\"])(this.el[i], 'at-running');\n\n        if (Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"hasClass\"])(this.el[i], 'at-done')) {\n          Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"removeClass\"])(this.el[i], 'at-done');\n        }\n\n        var interval = setInterval(function () {\n          if (!text.length) {\n            clearInterval(_this2.interval[i]);\n            _this2.el[i].innerHTML = raw;\n\n            if (Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"hasClass\"])(_this2.el[i], 'at-running')) {\n              Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"removeClass\"])(_this2.el[i], 'at-running');\n              Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"addClass\"])(_this2.el[i], 'at-done');\n\n              _this2.el[i].style.removeProperty('width');\n\n              _this2.el[i].style.removeProperty('height');\n            }\n          } else {\n            var _char = text[0];\n            _this2.el[i].innerHTML = raw;\n            _this2.el[i].innerHTML += _this2.settings.animate ? \"<span class=\\\"at-\".concat(_this2.settings.animation, \"\\\"\\n                                                        style=\\\"animation-duration: \").concat(_this2.settings.speed, \"ms\\\">\").concat(_char, \"</span>\") : _char;\n            raw += _char;\n            text.splice(0, 1);\n\n            if (_char === ' ') {\n              raw += ' ';\n            }\n          }\n        }, this.settings.speed);\n        this.interval.push(interval);\n      }\n    }\n  }, {\n    key: \"_clearInterval\",\n    value: function _clearInterval() {\n      var _this3 = this;\n\n      this.interval.forEach(function (i, index) {\n        if (i) {\n          clearInterval(i);\n          _this3.el[index].innerHTML = _this3.text[index];\n          Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"removeClass\"])(_this3.el[index], 'at-running');\n        }\n      });\n      this.interval = [];\n    }\n  }, {\n    key: \"_assignSettings\",\n    value: function _assignSettings(settings) {\n      if (settings) {\n        this.settings = Object.assign({}, _config__WEBPACK_IMPORTED_MODULE_1__[\"config\"], settings);\n      }\n    }\n  }]);\n\n  return Autotyped;\n}();\n\n\n\n//# sourceURL=webpack://Autotyped/./src/lib/js/index.js?");

/***/ }),

/***/ "./src/lib/scss/autotyped.scss":
/*!*************************************!*\
  !*** ./src/lib/scss/autotyped.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://Autotyped/./src/lib/scss/autotyped.scss?");

/***/ })

/******/ })["default"];
});