(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/js/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!*******************************************************************************************************************!*\
  !*** ./assets/js/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \*******************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/js/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/js/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/js/controllers/hello_controller.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/js/controllers/hello_controller.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);



/***/ }),

/***/ "./assets/js/Main.js":
/*!***************************!*\
  !*** ./assets/js/Main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/App */ "./assets/js/components/App.js");
/* harmony import */ var _pages_Homepage__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/Homepage */ "./assets/js/pages/Homepage.js");
/* harmony import */ var _pages_Readme__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/Readme */ "./assets/js/pages/Readme.js");
/* harmony import */ var _pages_MyActivities__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/MyActivities */ "./assets/js/pages/MyActivities.js");
/* harmony import */ var _components_nav_NavBar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/nav/NavBar */ "./assets/js/components/nav/NavBar.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }


























function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // import { Routes } from 'react-router-dom';







 // import {StrictMode} from 'react';
// import {createRoot} from 'react-dom/client';

var Main = function Main() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var checkIfLoggedIn = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var loginRoute, response, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              loginRoute = '/api/homepage/nav';
              _context.next = 3;
              return fetch("".concat(loginRoute));

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              data = _context.sent;
              setUser(data.user); // return(data.user);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function checkIfLoggedIn() {
      return _ref.apply(this, arguments);
    };
  }(); // console.log(user);


  (0,react__WEBPACK_IMPORTED_MODULE_24__.useEffect)(function () {
    checkIfLoggedIn(); // setUser(checkIfLoggedIn());
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement((react__WEBPACK_IMPORTED_MODULE_24___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_components_nav_NavBar__WEBPACK_IMPORTED_MODULE_30__["default"], {
    props: user
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_31__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_32__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_32__.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_pages_Homepage__WEBPACK_IMPORTED_MODULE_27__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_32__.Route, {
    exact: true,
    path: "/readme",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_pages_Readme__WEBPACK_IMPORTED_MODULE_28__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_32__.Route, {
    exact: true,
    path: "/my-activities",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_pages_MyActivities__WEBPACK_IMPORTED_MODULE_29__["default"], null)
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

if (document.getElementById('root')) {
  react_dom__WEBPACK_IMPORTED_MODULE_25__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(Main, null), document.getElementById('root'));
}

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/js/styles/app.css");
/* harmony import */ var _styles_calendar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/calendar.css */ "./assets/js/styles/calendar.css");
/* harmony import */ var _styles_game_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/game.css */ "./assets/js/styles/game.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bootstrap */ "./assets/js/bootstrap.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)


 // start the Stimulus application



__webpack_require__(/*! ./Main */ "./assets/js/Main.js");

/***/ }),

/***/ "./assets/js/bootstrap.js":
/*!********************************!*\
  !*** ./assets/js/bootstrap.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/js/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/components/App.js":
/*!*************************************!*\
  !*** ./assets/js/components/App.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "ASD")));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./assets/js/components/homepage/Box.js":
/*!**********************************************!*\
  !*** ./assets/js/components/homepage/Box.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Box = function Box(_ref) {
  var content = _ref.content;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex flex-row justify-content-center party-header pt-1 pb-1 bg-gradient"
  }, content.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex flex-row justify-content-center bg-light bg-gradient"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: content.icon
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex flex-row justify-content-center bg-light p-2 border fw-light text-center text-md bg-gradient"
  }, content.text)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Box);

/***/ }),

/***/ "./assets/js/components/homepage/Disclaimer.js":
/*!*****************************************************!*\
  !*** ./assets/js/components/homepage/Disclaimer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Disclaimer = function Disclaimer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-auto p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "alert alert-danger",
    role: "alert"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "lead mb-1"
  }, "Disclaimer!!!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "To jest MVP - minimum viable product")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Apka powinna dzia\u0142a\u0107 i mo\u017Cemy jej u\u017Cy\u0107 do organizacji naszych gier. Zapewne istniej\u0105 inne i lepsze narz\u0119dzia do czego\u015B takiego, ale dla mnie jest to zagadnienie na kt\xF3rym si\u0119 ucz\u0119."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Wszystko jest w j\u0119zyku angielskim, bo robi\u0119 to sobie w ramach projektu do portfolio."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "B\u0119d\u0119 go rozbudowaywa\u0142 z czasem, na razie ma podstawowe funkcje i byle jaki frontend")))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Disclaimer);

/***/ }),

/***/ "./assets/js/components/myActivities/PartyItem.js":
/*!********************************************************!*\
  !*** ./assets/js/components/myActivities/PartyItem.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/OverlayTrigger */ "./node_modules/react-bootstrap/esm/OverlayTrigger.js");
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Tooltip */ "./node_modules/react-bootstrap/esm/Tooltip.js");






function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var PartyItem = function PartyItem(_ref) {
  var activity = _ref.activity;
  var partyRoute = '/game/show/' + activity.id;
  var invitationalLink = '/game/invite/' + activity.slug;

  var optionsTooltip = function optionsTooltip(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
      id: "options-tooltip"
    }, props), "Options");
  };

  var descriptionTooltip = function descriptionTooltip(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
      id: "description-tooltip"
    }, props), activity.description);
  };

  var lockedTooltip = function lockedTooltip(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
      id: "locked-tooltip"
    }, props), "Game is locked");
  };

  var linkTooltip = function linkTooltip(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
      id: "link-tooltip"
    }, props), "Click to copy invitational link");
  };

  var copyInviLink = function copyInviLink() {
    // HTTP
    var textField = document.createElement('textarea');
    textField.innerText = invitationalLink;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    alert(invitationalLink);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("td", {
    className: "game-table host bg-light p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_8__["default"], {
    delay: {
      show: 250,
      hide: 400
    },
    overlay: optionsTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("i", {
    id: "{{game.id}}",
    className: "fa-solid fa-gears info-icon",
    "data-bs-toggle": "modal",
    "data-bs-title": "Options",
    "data-bs-target": "#userOptions"
  }, " "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("td", {
    className: "game-table bg-light"
  }, activity.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("td", {
    className: "game-table bg-light host p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_8__["default"], {
    delay: {
      show: 250,
      hide: 400
    },
    overlay: descriptionTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("i", {
    className: "fa-solid fa-circle-info info-icon"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("td", {
    className: "game-table bg-light"
  }, activity.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("td", {
    className: "game-table bg-light"
  }, activity.players), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("td", {
    className: "game-table bg-light"
  }, activity.locked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_8__["default"], {
    delay: {
      show: 250,
      hide: 400
    },
    overlay: lockedTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("i", {
    className: "fa-solid fa-lock info-icon"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_8__["default"], {
    delay: {
      show: 250,
      hide: 400
    },
    overlay: linkTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("i", {
    id: "{{game.slug}}",
    className: "fa-solid fa-link info-icon",
    onClick: copyInviLink
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("td", {
    className: "game-table bg-light"
  }, "XX.XX.XXXX"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("td", {
    className: "game-table bg-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("a", {
    className: "text-dark text-bold",
    href: partyRoute
  }, "Show"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PartyItem);

/***/ }),

/***/ "./assets/js/components/myActivities/PartyList.js":
/*!********************************************************!*\
  !*** ./assets/js/components/myActivities/PartyList.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _PartyItem__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./PartyItem */ "./assets/js/components/myActivities/PartyItem.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }



























function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var PartyList = function PartyList(_ref) {
  var item = _ref.item;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_25__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      activityList = _useState2[0],
      setActivityList = _useState2[1];

  var getActivityList = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var route, response, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              route = '/api/my-activities';
              _context.next = 3;
              return fetch("".concat(route));

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              data = _context.sent;
              setActivityList(data.activityTable);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getActivityList() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_25__.useEffect)(function () {
    getActivityList();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement((react__WEBPACK_IMPORTED_MODULE_25___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("table", {
    className: "table party-list bg-dark bg-gradient"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", {
    className: "game-table-header host bg-dark bg-gradient",
    scope: "col"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", {
    className: "game-table-header bg-dark bg-gradient",
    scope: "col"
  }, "Party"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", {
    className: "game-table-header host bg-dark bg-gradient",
    scope: "col"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", {
    className: "game-table-header bg-dark bg-gradient",
    scope: "col"
  }, "Activity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", {
    className: "game-table-header bg-dark bg-gradient",
    scope: "col"
  }, "Members"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", {
    className: "game-table-header bg-dark bg-gradient",
    scope: "col"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", {
    className: "game-table-header bg-dark bg-gradient",
    scope: "col"
  }, "Next session"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", {
    className: "game-table-header bg-dark bg-gradient",
    scope: "col"
  }, "Link"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("tbody", null, activityList.map(function (activity) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(_PartyItem__WEBPACK_IMPORTED_MODULE_26__["default"], {
      key: activity.id,
      activity: activity
    });
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PartyList);

/***/ }),

/***/ "./assets/js/components/nav/NavBar.js":
/*!********************************************!*\
  !*** ./assets/js/components/nav/NavBar.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./NavItem */ "./assets/js/components/nav/NavItem.js");















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Navbar = function Navbar(props) {
  var navItem1 = {
    'name': 'Home',
    'route': '/',
    'type': 'open',
    'active': false
  };
  var navItem2 = {
    'name': 'My Activities',
    'route': '/my-activities',
    'type': 'loggedIn',
    'active': false
  };
  var navItem3 = {
    'name': 'ReadMe',
    'route': '/readme',
    'type': 'open',
    'active': false
  };
  var navItem4 = {
    'name': '+',
    'route': '/game/create',
    'type': 'special',
    'active': false
  };
  var navItem5 = {
    'name': 'Logout',
    'route': '/logout',
    'type': 'loggedIn',
    'active': false
  };
  var navItem6 = {
    'name': 'Login',
    'route': '/login',
    'type': 'loggedOut',
    'active': false
  };
  var navItem7 = {
    'name': 'Register',
    'route': '/register',
    'type': 'loggedOut',
    'active': false
  };
  var allNavbarItems = [navItem1, navItem2, navItem3, navItem4, navItem5, navItem6, navItem7];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(props),
      _useState2 = _slicedToArray(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      navbar = _useState4[0],
      setNavbar = _useState4[1];

  var createNavbar = function createNavbar() {
    var navbarContent = [];
    allNavbarItems.forEach(function (item) {
      if (user == null) {
        if (item.type == 'loggedOut' || item.type == 'open') {
          navbarContent.push(item);
        }
      } else {
        if (item.type == 'loggedIn' || item.type == 'special' || item.type == 'open') {
          navbarContent.push(item);
        }
      }
    });
    setNavbar(navbarContent);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(function () {
    createNavbar();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement((react__WEBPACK_IMPORTED_MODULE_14___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "row text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("h1", {
    className: "display-1 universal-shadow-text"
  }, "HARMON")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "rounded-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("nav", {
    className: "navbar navbar-expand-lg navbar-dark bg-dark bg-gradient m-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "container-fluid m-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navbarNav",
    "aria-controls": "navbarNav",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "collapse navbar-collapse justify-content-center",
    id: "navbarNav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("ul", {
    className: "navbar-nav m-0 align-middle"
  }, navbar.map(function (navItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_NavItem__WEBPACK_IMPORTED_MODULE_15__["default"], {
      key: navItem.name,
      item: navItem
    });
  }))))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./assets/js/components/nav/NavItem.js":
/*!*********************************************!*\
  !*** ./assets/js/components/nav/NavItem.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var NavItem = function NavItem(_ref) {
  var item = _ref.item;

  // const classNames = "nav-link fs-4 nav-menu-item";
  if (item.type == 'special') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
      className: "nav-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
      className: "nav-link fs-4 nav-menu-item",
      href: item.route
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "border border-2 rounded square-button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("i", {
      className: "fa-solid fa-plus "
    })))));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
      className: "nav-item "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
      className: "nav-link fs-4 nav-menu-item ",
      href: item.route
    }, item.name)));
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavItem);

/***/ }),

/***/ "./assets/js/pages/Homepage.js":
/*!*************************************!*\
  !*** ./assets/js/pages/Homepage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_homepage_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/homepage/Box */ "./assets/js/components/homepage/Box.js");
/* harmony import */ var _components_homepage_Disclaimer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/homepage/Disclaimer */ "./assets/js/components/homepage/Disclaimer.js");





var Homepage = function Homepage() {
  var box1 = {
    'title': 'Create party',
    'icon': 'fa-regular fa-users-between-lines fa-8x m-3 mb-5',
    'text': 'Make a new recouring activity to manage'
  };
  var box2 = {
    'title': 'Add Members',
    'icon': 'fa-regular fa-people-pulling fa-8x m-3 mb-5',
    'text': "Everything is awesome when you're part of a team!"
  };
  var box3 = {
    'title': 'Find date',
    'icon': 'fa-regular fa-calendar-check fa-8x m-3 mb-5',
    'text': ' Place your votes and app will do the rest'
  };
  var boxContent = [box1, box2, box3];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "row justify-content-center mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "col-xl-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_homepage_Disclaimer__WEBPACK_IMPORTED_MODULE_3__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h1", {
    className: "display-6 text-center universal-shadow-text"
  }, "Welcome"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "col-xl-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "lead"
  }, "HARMON is an app that helps to find matching schedules in party of few peope arranged for reccuring activities like sports, board games, digital games or poker. The methodology is wrpaed in 3 sipmple pints below but you will find  more in depth instructrions under ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("b", null, "this link"), ". You can also get full documentation on my ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("b", null, "github")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "row justify-content-center mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "col-xl-9 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "row justify-content-center g-4"
  }, boxContent.map(function (box) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_homepage_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: box.title,
      content: box
    });
  })))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);

/***/ }),

/***/ "./assets/js/pages/MyActivities.js":
/*!*****************************************!*\
  !*** ./assets/js/pages/MyActivities.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_myActivities_PartyList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/myActivities/PartyList */ "./assets/js/components/myActivities/PartyList.js");
/* harmony import */ var _components_homepage_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/homepage/Box */ "./assets/js/components/homepage/Box.js");
/* harmony import */ var _components_homepage_Disclaimer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/homepage/Disclaimer */ "./assets/js/components/homepage/Disclaimer.js");





var MyActivities = function MyActivities() {
  var box1 = {
    'title': 'Create party',
    'icon': 'fa-regular fa-users-between-lines fa-8x m-3 mb-5',
    'text': 'Make a new recouring activity to manage'
  }; // const boxContent = [box1, box2, box3];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row justify-content-center mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "display-6 text-center universal-shadow-text"
  }, "List of parties")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row justify-content-center mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_myActivities_PartyList__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyActivities);

/***/ }),

/***/ "./assets/js/pages/Readme.js":
/*!***********************************!*\
  !*** ./assets/js/pages/Readme.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Readme = function Readme() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "display-5"
  }, "Readme")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Readme);

/***/ }),

/***/ "./assets/js/styles/app.css":
/*!**********************************!*\
  !*** ./assets/js/styles/app.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/js/styles/calendar.css":
/*!***************************************!*\
  !*** ./assets/js/styles/calendar.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/js/styles/game.css":
/*!***********************************!*\
  !*** ./assets/js/styles/game.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-16a2a3"], () => (__webpack_exec__("./assets/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0ksMkRBQUMsMEVBQUQsT0FESixDQVRKLENBREo7QUFpQkgsQ0E1QkQ7O0FBOEJBLGlFQUFlaEYsWUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7O0FBRUEsSUFBTUQsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtFQUNqQixvQkFDSSx1SUFDSTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNJO0lBQUksU0FBUyxFQUFDO0VBQWQsWUFESixDQURKLENBREo7QUFPSCxDQVJEOztBQVVBLGlFQUFlQSxNQUFmOzs7Ozs7Ozs7Ozs7QUNaQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hvbWVwYWdlL0JveC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9ob21lcGFnZS9EaXNjbGFpbWVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL215QWN0aXZpdGllcy9QYXJ0eUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXlBY3Rpdml0aWVzL1BhcnR5TGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9uYXYvTmF2QmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL25hdi9OYXZJdGVtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9Ib21lcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvTXlBY3Rpdml0aWVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9SZWFkbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3N0eWxlcy9hcHAuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zdHlsZXMvY2FsZW5kYXIuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zdHlsZXMvZ2FtZS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9qcy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2pzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuLy8gaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZXMsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xyXG5pbXBvcnQgSG9tZXBhZ2UgZnJvbSBcIi4vcGFnZXMvSG9tZXBhZ2VcIjtcclxuaW1wb3J0IFJlYWRtZSBmcm9tIFwiLi9wYWdlcy9SZWFkbWVcIjtcclxuaW1wb3J0IE15QWN0aXZpdGllcyBmcm9tIFwiLi9wYWdlcy9NeUFjdGl2aXRpZXNcIjtcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuL2NvbXBvbmVudHMvbmF2L05hdkJhcidcclxuLy8gaW1wb3J0IHtTdHJpY3RNb2RlfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt1c2VyLHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgY2hlY2tJZkxvZ2dlZEluID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvZ2luUm91dGUgPSAnL2FwaS9ob21lcGFnZS9uYXYnO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7bG9naW5Sb3V0ZX1gKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHNldFVzZXIoZGF0YS51c2VyKTtcclxuICAgICAgICAvLyByZXR1cm4oZGF0YS51c2VyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNoZWNrSWZMb2dnZWRJbigpO1xyXG4gICAgICAgIC8vIHNldFVzZXIoY2hlY2tJZkxvZ2dlZEluKCkpO1xyXG5cclxuICAgIH0sW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8TmF2QmFyIHByb3BzPXt1c2VyfS8+XHJcbiAgICAgICAgPFJvdXRlcj5cclxuICAgICAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiICBlbGVtZW50PXs8SG9tZXBhZ2UgLz59IC8+XHJcbiAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9yZWFkbWVcIiAgZWxlbWVudD17PFJlYWRtZSAvPn0gLz5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL215LWFjdGl2aXRpZXNcIiAgZWxlbWVudD17PE15QWN0aXZpdGllcyAvPn0gLz5cclxuICAgICAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgICAgPC9Sb3V0ZXI+XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuXHJcbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKSB7XHJcbiAgICBSZWFjdERPTS5yZW5kZXIoPE1haW4gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xyXG59XHJcblxyXG5cclxuIiwiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG4gXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlcy9jYWxlbmRhci5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL2dhbWUuY3NzJztcclxuXHJcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcclxuIFxyXG5yZXF1aXJlKCcuL01haW4nKTtcclxuXHJcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIEFTRCAgIFxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3QgQm94ID0gKHtjb250ZW50fSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBwYXJ0eS1oZWFkZXIgcHQtMSBwYi0xIGJnLWdyYWRpZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbnRlbnQudGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYmctbGlnaHQgYmctZ3JhZGllbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2NvbnRlbnQuaWNvbn0+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGJnLWxpZ2h0IHAtMiBib3JkZXIgZnctbGlnaHQgdGV4dC1jZW50ZXIgdGV4dC1tZCBiZy1ncmFkaWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb250ZW50LnRleHR9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJveCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBEaXNjbGFpbWVyID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtYXV0byBwLTAnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJsZWFkIG1iLTFcIj5EaXNjbGFpbWVyISEhPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPlRvIGplc3QgTVZQIC0gbWluaW11bSB2aWFibGUgcHJvZHVjdDwvYj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcGthIHBvd2lubmEgZHppYcWCYcSHIGkgbW/FvGVteSBqZWogdcW8ecSHIGRvIG9yZ2FuaXphY2ppIG5hc3p5Y2ggZ2llci5cclxuICAgICAgICAgICAgICAgICAgICAgICAgWmFwZXduZSBpc3RuaWVqxIUgaW5uZSBpIGxlcHN6ZSBuYXJ6xJlkemlhIGRvIGN6ZWdvxZsgdGFraWVnbywgYWxlIGRsYSBtbmllIGplc3QgdG8gemFnYWRuaWVuaWUgbmEga3TDs3J5bSBzacSZIHVjesSZLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdzenlzdGtvIGplc3QgdyBqxJl6eWt1IGFuZ2llbHNraW0sIGJvIHJvYmnEmSB0byBzb2JpZSB3IHJhbWFjaCBwcm9qZWt0dSBkbyBwb3J0Zm9saW8uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQsSZZMSZIGdvIHJvemJ1ZG93YXl3YcWCIHogY3phc2VtLCBuYSByYXppZSBtYSBwb2RzdGF3b3dlIGZ1bmtjamUgaSBieWxlIGpha2kgZnJvbnRlbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlzY2xhaW1lciIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBhc3luYyB9IGZyb20gJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUnO1xyXG5pbXBvcnQgT3ZlcmxheVRyaWdnZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL092ZXJsYXlUcmlnZ2VyJztcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Rvb2x0aXAnO1xyXG5cclxuXHJcbmNvbnN0IFBhcnR5SXRlbSA9ICh7YWN0aXZpdHl9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgcGFydHlSb3V0ZSA9ICcvZ2FtZS9zaG93LycgKyBhY3Rpdml0eS5pZDtcclxuICAgIGNvbnN0IGludml0YXRpb25hbExpbmsgPSAnL2dhbWUvaW52aXRlLycgKyBhY3Rpdml0eS5zbHVnO1xyXG5cclxuICAgICAgICBjb25zdCBvcHRpb25zVG9vbHRpcCA9IChwcm9wcykgPT4gKFxyXG4gICAgICAgICAgPFRvb2x0aXAgaWQ9XCJvcHRpb25zLXRvb2x0aXBcIiB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICBPcHRpb25zXHJcbiAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25Ub29sdGlwID0gKHByb3BzKSA9PiAoXHJcbiAgICAgICAgICAgIDxUb29sdGlwIGlkPVwiZGVzY3JpcHRpb24tdG9vbHRpcFwiIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgICAge2FjdGl2aXR5LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBsb2NrZWRUb29sdGlwID0gKHByb3BzKSA9PiAoXHJcbiAgICAgICAgPFRvb2x0aXAgaWQ9XCJsb2NrZWQtdG9vbHRpcFwiIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIEdhbWUgaXMgbG9ja2VkXHJcbiAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpbmtUb29sdGlwID0gKHByb3BzKSA9PiAoXHJcbiAgICAgICAgICAgIDxUb29sdGlwIGlkPVwibGluay10b29sdGlwXCIgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgICAgIENsaWNrIHRvIGNvcHkgaW52aXRhdGlvbmFsIGxpbmtcclxuICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvcHlJbnZpTGluayA9ICgpID0+IHtcclxuICAgICAgICAgICAgLy8gSFRUUFxyXG4gICAgICAgICAgICBsZXQgdGV4dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxyXG4gICAgICAgICAgICB0ZXh0RmllbGQuaW5uZXJUZXh0ID0gaW52aXRhdGlvbmFsTGlua1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRGaWVsZClcclxuICAgICAgICAgICAgdGV4dEZpZWxkLnNlbGVjdCgpXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5JylcclxuICAgICAgICAgICAgdGV4dEZpZWxkLnJlbW92ZSgpXHJcbiAgICAgICAgICAgIGFsZXJ0KGludml0YXRpb25hbExpbmspO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8dHI+ICBcclxuICAgICAgICAgICAgICAgICAgICA8dGQgIGNsYXNzTmFtZT1cImdhbWUtdGFibGUgaG9zdCBiZy1saWdodCBwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17eyBzaG93OiAyNTAsIGhpZGU6IDQwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17b3B0aW9uc1Rvb2x0aXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGlkPVwie3tnYW1lLmlkfX1cIiBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1nZWFycyBpbmZvLWljb25cIiBkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS1icy10aXRsZT1cIk9wdGlvbnNcIiBkYXRhLWJzLXRhcmdldD1cIiN1c2VyT3B0aW9uc1wiPiA8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZ2FtZS10YWJsZSBiZy1saWdodFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2aXR5Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZ2FtZS10YWJsZSBiZy1saWdodCBob3N0IHAtMFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17eyBzaG93OiAyNTAsIGhpZGU6IDQwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17ZGVzY3JpcHRpb25Ub29sdGlwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1jaXJjbGUtaW5mbyBpbmZvLWljb25cIiA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImdhbWUtdGFibGUgYmctbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2aXR5LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImdhbWUtdGFibGUgYmctbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2aXR5LnBsYXllcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZ2FtZS10YWJsZSBiZy1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZpdHkubG9ja2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17eyBzaG93OiAyNTAsIGhpZGU6IDQwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17bG9ja2VkVG9vbHRpcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1sb2NrIGluZm8taWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17eyBzaG93OiAyNTAsIGhpZGU6IDQwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17bGlua1Rvb2x0aXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2dhbWUuc2x1Z319XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtbGluayBpbmZvLWljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NvcHlJbnZpTGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImdhbWUtdGFibGUgYmctbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgWFguWFguWFhYWFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImdhbWUtdGFibGUgYmctbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1kYXJrIHRleHQtYm9sZFwiIGhyZWY9e3BhcnR5Um91dGV9PlNob3c8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKSAgICAgICAgICBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcnR5SXRlbSIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUGFydHlJdGVtIGZyb20gJy4vUGFydHlJdGVtJztcclxuXHJcbmNvbnN0IFBhcnR5TGlzdCA9ICh7aXRlbX0pID0+IHtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IFthY3Rpdml0eUxpc3QsIHNldEFjdGl2aXR5TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgZ2V0QWN0aXZpdHlMaXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvdXRlID0gJy9hcGkvbXktYWN0aXZpdGllcyc7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtyb3V0ZX1gKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICBzZXRBY3Rpdml0eUxpc3QoZGF0YS5hY3Rpdml0eVRhYmxlKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldEFjdGl2aXR5TGlzdCgpO1xyXG4gICAgfSxbXSk7XHJcbiAgICAgICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSBwYXJ0eS1saXN0IGJnLWRhcmsgYmctZ3JhZGllbnRcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlLWhlYWRlciBob3N0IGJnLWRhcmsgYmctZ3JhZGllbnRcIiBzY29wZT1cImNvbFwiPjwvdGg+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZ2FtZS10YWJsZS1oZWFkZXIgYmctZGFyayBiZy1ncmFkaWVudFwiIHNjb3BlPVwiY29sXCI+UGFydHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZ2FtZS10YWJsZS1oZWFkZXIgaG9zdCBiZy1kYXJrIGJnLWdyYWRpZW50XCIgc2NvcGU9XCJjb2xcIj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZ2FtZS10YWJsZS1oZWFkZXIgYmctZGFyayBiZy1ncmFkaWVudFwiIHNjb3BlPVwiY29sXCI+QWN0aXZpdHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZ2FtZS10YWJsZS1oZWFkZXIgYmctZGFyayBiZy1ncmFkaWVudFwiIHNjb3BlPVwiY29sXCI+TWVtYmVyczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlLWhlYWRlciBiZy1kYXJrIGJnLWdyYWRpZW50XCIgc2NvcGU9XCJjb2xcIj5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZ2FtZS10YWJsZS1oZWFkZXIgYmctZGFyayBiZy1ncmFkaWVudFwiIHNjb3BlPVwiY29sXCI+TmV4dCBzZXNzaW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImdhbWUtdGFibGUtaGVhZGVyIGJnLWRhcmsgYmctZ3JhZGllbnRcIiBzY29wZT1cImNvbFwiPkxpbms8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge2FjdGl2aXR5TGlzdC5tYXAoKGFjdGl2aXR5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFBhcnR5SXRlbSBrZXk9e2FjdGl2aXR5LmlkfSBhY3Rpdml0eT17YWN0aXZpdHl9IC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKSAgICAgICAgICBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcnR5TGlzdCIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmF2SXRlbSBmcm9tICcuL05hdkl0ZW0nO1xyXG5cclxuXHJcbmNvbnN0IE5hdmJhciA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IG5hdkl0ZW0xID0ge1xyXG4gICAgICAgICduYW1lJzogJ0hvbWUnLFxyXG4gICAgICAgICdyb3V0ZSc6ICcvJyxcclxuICAgICAgICAndHlwZSc6ICdvcGVuJyxcclxuICAgICAgICAnYWN0aXZlJzogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbmF2SXRlbTIgPSB7XHJcbiAgICAgICAgJ25hbWUnOiAnTXkgQWN0aXZpdGllcycsXHJcbiAgICAgICAgJ3JvdXRlJzogJy9teS1hY3Rpdml0aWVzJyxcclxuICAgICAgICAndHlwZSc6ICdsb2dnZWRJbicsXHJcbiAgICAgICAgJ2FjdGl2ZSc6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG5hdkl0ZW0zID0ge1xyXG4gICAgICAgICduYW1lJzogJ1JlYWRNZScsXHJcbiAgICAgICAgJ3JvdXRlJzogJy9yZWFkbWUnLFxyXG4gICAgICAgICd0eXBlJzogJ29wZW4nLFxyXG4gICAgICAgICdhY3RpdmUnOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBuYXZJdGVtNCA9IHtcclxuICAgICAgICAnbmFtZSc6ICcrJyxcclxuICAgICAgICAncm91dGUnOiAnL2dhbWUvY3JlYXRlJyxcclxuICAgICAgICAndHlwZSc6ICdzcGVjaWFsJyxcclxuICAgICAgICAnYWN0aXZlJzogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbmF2SXRlbTUgPSB7XHJcbiAgICAgICAgJ25hbWUnOiAnTG9nb3V0JyxcclxuICAgICAgICAncm91dGUnOiAnL2xvZ291dCcsXHJcbiAgICAgICAgJ3R5cGUnOiAnbG9nZ2VkSW4nLFxyXG4gICAgICAgICdhY3RpdmUnOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBuYXZJdGVtNiA9IHtcclxuICAgICAgICAnbmFtZSc6ICdMb2dpbicsXHJcbiAgICAgICAgJ3JvdXRlJzogJy9sb2dpbicsXHJcbiAgICAgICAgJ3R5cGUnOiAnbG9nZ2VkT3V0JyxcclxuICAgICAgICAnYWN0aXZlJzogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbmF2SXRlbTcgPSB7XHJcbiAgICAgICAgJ25hbWUnOiAnUmVnaXN0ZXInLFxyXG4gICAgICAgICdyb3V0ZSc6ICcvcmVnaXN0ZXInLFxyXG4gICAgICAgICd0eXBlJzogJ2xvZ2dlZE91dCcsXHJcbiAgICAgICAgJ2FjdGl2ZSc6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGFsbE5hdmJhckl0ZW1zID0gW25hdkl0ZW0xLCBuYXZJdGVtMiwgbmF2SXRlbTMsIG5hdkl0ZW00LCBuYXZJdGVtNSwgbmF2SXRlbTYsIG5hdkl0ZW03XTtcclxuXHJcbiAgICBjb25zdCBbdXNlcixzZXRVc2VyXSA9IHVzZVN0YXRlKHByb3BzKTtcclxuICAgIGNvbnN0IFtuYXZiYXIsc2V0TmF2YmFyXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBjcmVhdGVOYXZiYXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmF2YmFyQ29udGVudCA9IFtdO1xyXG4gICAgICAgIGFsbE5hdmJhckl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT0gJ2xvZ2dlZE91dCcgfHwgaXRlbS50eXBlID09ICdvcGVuJyApIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXZiYXJDb250ZW50LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGl0ZW0udHlwZSA9PSAnbG9nZ2VkSW4nIHx8IGl0ZW0udHlwZSA9PSAnc3BlY2lhbCcgfHwgaXRlbS50eXBlID09ICdvcGVuJyApIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXZiYXJDb250ZW50LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0TmF2YmFyKG5hdmJhckNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY3JlYXRlTmF2YmFyKCk7XHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgey8qIFBBR0UgVElUTEUgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdkaXNwbGF5LTEgdW5pdmVyc2FsLXNoYWRvdy10ZXh0Jz5IQVJNT048L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3VuZGVkLXdyYXBwZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGJnLWRhcmsgYmctZ3JhZGllbnQgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBDT0xBUFNFIEJVVFRPTiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLWJzLXRhcmdldD1cIiNuYXZiYXJOYXZcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyTmF2XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE5BViBJVEVNUyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZSBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgaWQ9XCJuYXZiYXJOYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbS0wIGFsaWduLW1pZGRsZVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYXZiYXIubWFwKChuYXZJdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0ga2V5PXtuYXZJdGVtLm5hbWV9IGl0ZW09e25hdkl0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jb25zdCBOYXZJdGVtID0gKHtpdGVtfSkgPT4ge1xyXG5cclxuICAgIC8vIGNvbnN0IGNsYXNzTmFtZXMgPSBcIm5hdi1saW5rIGZzLTQgbmF2LW1lbnUtaXRlbVwiO1xyXG5cclxuICAgIGlmIChpdGVtLnR5cGUgPT0gJ3NwZWNpYWwnKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIGZzLTQgbmF2LW1lbnUtaXRlbVwiICBocmVmPXtpdGVtLnJvdXRlfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZSA9IFwiYm9yZGVyIGJvcmRlci0yIHJvdW5kZWQgc3F1YXJlLWJ1dHRvblwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLXBsdXMgXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSAgICAgICAgICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBmcy00IG5hdi1tZW51LWl0ZW0gXCIgIGhyZWY9e2l0ZW0ucm91dGV9ID57aXRlbS5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2SXRlbSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQm94IGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZXBhZ2UvQm94JztcclxuaW1wb3J0IERpc2NsYWltZXIgZnJvbSAnLi4vY29tcG9uZW50cy9ob21lcGFnZS9EaXNjbGFpbWVyJztcclxuXHJcbmNvbnN0IEhvbWVwYWdlID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGJveDEgPSB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0NyZWF0ZSBwYXJ0eScsXHJcbiAgICAgICAgJ2ljb24nOiAnZmEtcmVndWxhciBmYS11c2Vycy1iZXR3ZWVuLWxpbmVzIGZhLTh4IG0tMyBtYi01JyxcclxuICAgICAgICAndGV4dCc6ICdNYWtlIGEgbmV3IHJlY291cmluZyBhY3Rpdml0eSB0byBtYW5hZ2UnXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJveDIgPSB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0FkZCBNZW1iZXJzJyxcclxuICAgICAgICAnaWNvbic6ICdmYS1yZWd1bGFyIGZhLXBlb3BsZS1wdWxsaW5nIGZhLTh4IG0tMyBtYi01JyxcclxuICAgICAgICAndGV4dCc6IFwiRXZlcnl0aGluZyBpcyBhd2Vzb21lIHdoZW4geW91J3JlIHBhcnQgb2YgYSB0ZWFtIVwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJveDMgPSB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0ZpbmQgZGF0ZScsXHJcbiAgICAgICAgJ2ljb24nOiAnZmEtcmVndWxhciBmYS1jYWxlbmRhci1jaGVjayBmYS04eCBtLTMgbWItNScsXHJcbiAgICAgICAgJ3RleHQnOiAnIFBsYWNlIHlvdXIgdm90ZXMgYW5kIGFwcCB3aWxsIGRvIHRoZSByZXN0J1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBib3hDb250ZW50ID0gW2JveDEsIGJveDIsIGJveDNdO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhsLTknPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXNjbGFpbWVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2Rpc3BsYXktNiB0ZXh0LWNlbnRlciB1bml2ZXJzYWwtc2hhZG93LXRleHQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXZWxjb21lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteGwtOSc+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdsZWFkJz5cclxuICAgICAgICAgICAgICAgICAgICBIQVJNT04gaXMgYW4gYXBwIHRoYXQgaGVscHMgdG8gZmluZCBtYXRjaGluZyBzY2hlZHVsZXMgaW4gcGFydHkgb2YgZmV3IHBlb3BlIGFycmFuZ2VkIGZvciByZWNjdXJpbmdcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpdml0aWVzIGxpa2Ugc3BvcnRzLCBib2FyZCBnYW1lcywgZGlnaXRhbCBnYW1lcyBvciBwb2tlci4gVGhlIG1ldGhvZG9sb2d5IGlzIHdycGFlZCBpbiAzIHNpcG1wbGUgcGludHMgYmVsb3dcclxuICAgICAgICAgICAgICAgICAgICBidXQgeW91IHdpbGwgZmluZCAgbW9yZSBpbiBkZXB0aCBpbnN0cnVjdHJpb25zIHVuZGVyIDxiPnRoaXMgbGluazwvYj4uIFlvdSBjYW4gYWxzbyBnZXQgZnVsbCBkb2N1bWVudGF0aW9uIG9uIG15IDxiPmdpdGh1YjwvYj5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhsLTkgJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgZy00Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JveENvbnRlbnQubWFwKChib3gpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3gga2V5PXtib3gudGl0bGV9IGNvbnRlbnQ9e2JveH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBhcnR5TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL215QWN0aXZpdGllcy9QYXJ0eUxpc3QnO1xyXG5pbXBvcnQgQm94IGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZXBhZ2UvQm94JztcclxuaW1wb3J0IERpc2NsYWltZXIgZnJvbSAnLi4vY29tcG9uZW50cy9ob21lcGFnZS9EaXNjbGFpbWVyJztcclxuXHJcbmNvbnN0IE15QWN0aXZpdGllcyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBib3gxID0ge1xyXG4gICAgICAgICd0aXRsZSc6ICdDcmVhdGUgcGFydHknLFxyXG4gICAgICAgICdpY29uJzogJ2ZhLXJlZ3VsYXIgZmEtdXNlcnMtYmV0d2Vlbi1saW5lcyBmYS04eCBtLTMgbWItNScsXHJcbiAgICAgICAgJ3RleHQnOiAnTWFrZSBhIG5ldyByZWNvdXJpbmcgYWN0aXZpdHkgdG8gbWFuYWdlJ1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLy8gY29uc3QgYm94Q29udGVudCA9IFtib3gxLCBib3gyLCBib3gzXTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgey8qIHRpdGxlICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtNCc+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdkaXNwbGF5LTYgdGV4dC1jZW50ZXIgdW5pdmVyc2FsLXNoYWRvdy10ZXh0Jz5cclxuICAgICAgICAgICAgICAgICAgICBMaXN0IG9mIHBhcnRpZXNcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIHRhYmxlICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtNCc+XHJcbiAgICAgICAgICAgICAgICA8UGFydHlMaXN0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QWN0aXZpdGllczsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgUmVhZG1lID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZGlzcGxheS01Jz5SZWFkbWU8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhZG1lOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiUmVhY3QiLCJSZWFjdERPTSIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiQXBwIiwiSG9tZXBhZ2UiLCJSZWFkbWUiLCJNeUFjdGl2aXRpZXMiLCJOYXZCYXIiLCJNYWluIiwidXNlciIsInNldFVzZXIiLCJjaGVja0lmTG9nZ2VkSW4iLCJsb2dpblJvdXRlIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsInJlcXVpcmUiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwiY29udGV4dCIsIkJveCIsImNvbnRlbnQiLCJ0aXRsZSIsImljb24iLCJ0ZXh0IiwiRGlzY2xhaW1lciIsImFzeW5jIiwiT3ZlcmxheVRyaWdnZXIiLCJUb29sdGlwIiwiUGFydHlJdGVtIiwiYWN0aXZpdHkiLCJwYXJ0eVJvdXRlIiwiaWQiLCJpbnZpdGF0aW9uYWxMaW5rIiwic2x1ZyIsIm9wdGlvbnNUb29sdGlwIiwicHJvcHMiLCJkZXNjcmlwdGlvblRvb2x0aXAiLCJkZXNjcmlwdGlvbiIsImxvY2tlZFRvb2x0aXAiLCJsaW5rVG9vbHRpcCIsImNvcHlJbnZpTGluayIsInRleHRGaWVsZCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsInJlbW92ZSIsImFsZXJ0Iiwic2hvdyIsImhpZGUiLCJuYW1lIiwicGxheWVycyIsImxvY2tlZCIsIlBhcnR5TGlzdCIsIml0ZW0iLCJhY3Rpdml0eUxpc3QiLCJzZXRBY3Rpdml0eUxpc3QiLCJnZXRBY3Rpdml0eUxpc3QiLCJyb3V0ZSIsImFjdGl2aXR5VGFibGUiLCJtYXAiLCJOYXZJdGVtIiwiTmF2YmFyIiwibmF2SXRlbTEiLCJuYXZJdGVtMiIsIm5hdkl0ZW0zIiwibmF2SXRlbTQiLCJuYXZJdGVtNSIsIm5hdkl0ZW02IiwibmF2SXRlbTciLCJhbGxOYXZiYXJJdGVtcyIsIm5hdmJhciIsInNldE5hdmJhciIsImNyZWF0ZU5hdmJhciIsIm5hdmJhckNvbnRlbnQiLCJmb3JFYWNoIiwidHlwZSIsInB1c2giLCJuYXZJdGVtIiwiYm94MSIsImJveDIiLCJib3gzIiwiYm94Q29udGVudCIsImJveCJdLCJzb3VyY2VSb290IjoiIn0=