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
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _pages_Logout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/Logout */ "./assets/js/pages/Logout.js");
/* harmony import */ var _pages_Layout__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/Layout */ "./assets/js/pages/Layout.js");
/* harmony import */ var _pages_Homepage__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/Homepage */ "./assets/js/pages/Homepage.js");
/* harmony import */ var _pages_Readme__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/Readme */ "./assets/js/pages/Readme.js");
/* harmony import */ var _pages_Party__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/Party */ "./assets/js/pages/Party.js");
/* harmony import */ var _pages_MyActivities__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/MyActivities */ "./assets/js/pages/MyActivities.js");
/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-uuid */ "./node_modules/react-uuid/uuid.js");
/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react_uuid__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useQuery.mjs");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/query-core/build/lib/queryClient.mjs");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }























function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


 // import { Routes } from 'react-router-dom';








 // import {StrictMode} from 'react';
// import {createRoot} from 'react-dom/client';



var Main = function Main() {
  var checkIfLoggedIn = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var route, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              route = '/api/homepage/nav';
              _context.next = 3;
              return fetch(route);

            case 3:
              response = _context.sent;
              return _context.abrupt("return", response.json());

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function checkIfLoggedIn() {
      return _ref.apply(this, arguments);
    };
  }();

  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_30__.useQuery)(['user'], function () {
    return checkIfLoggedIn();
  }),
      data = _useQuery.data,
      status = _useQuery.status; // USUŃ


  console.log(data, status);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement((react__WEBPACK_IMPORTED_MODULE_21___default().Fragment), null, status == "success" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_31__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_32__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_32__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_pages_Layout__WEBPACK_IMPORTED_MODULE_24__["default"], {
      user: data.user
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_32__.Route, {
    index: true,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_pages_Homepage__WEBPACK_IMPORTED_MODULE_25__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_32__.Route, {
    path: "readme",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_pages_Readme__WEBPACK_IMPORTED_MODULE_26__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_32__.Route, {
    path: "my-activities",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_pages_MyActivities__WEBPACK_IMPORTED_MODULE_28__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_32__.Route, {
    path: "party/show/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_pages_Party__WEBPACK_IMPORTED_MODULE_27__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_32__.Route, {
    path: "logout",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_pages_Logout__WEBPACK_IMPORTED_MODULE_23__["default"], null)
  })))) : 'loading');
};

var MainPage = function MainPage() {
  var queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_33__.QueryClient();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_34__.QueryClientProvider, {
    client: queryClient
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(Main, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);
var container = document.getElementById('root');
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_22__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(MainPage, null));

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/OverlayTrigger */ "./node_modules/react-bootstrap/esm/OverlayTrigger.js");
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Tooltip */ "./node_modules/react-bootstrap/esm/Tooltip.js");






function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var PartyItem = function PartyItem(_ref) {
  var activity = _ref.activity,
      userData = _ref.userData;
  var partyRoute = '/party/show/' + activity.id;
  var invitationalLink = '/game/invite/' + activity.slug;

  var optionsTooltip = function optionsTooltip(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
      id: "options-tooltip"
    }, props), "Options");
  };

  var hostTooltip = function hostTooltip(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
      id: "options-tooltip"
    }, props), "You are host of this game");
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
  }, activity.hosted == userData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_8__["default"], {
    delay: {
      show: 250,
      hide: 400
    },
    overlay: hostTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("i", {
    id: "{{game.id}}",
    className: "fa-solid fa-user-gear info-icon",
    "data-bs-toggle": "modal",
    "data-bs-target": "#adminOptions"
  }, " ")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("td", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
    to: partyRoute,
    className: "text-dark text-bold"
  }, " show "))));
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
  var userData = _ref.userData;

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
      activity: activity,
      userData: userData
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




var Navbar = function Navbar(_ref) {
  var userData = _ref.userData;
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
  var allNavbarItems = [navItem1, navItem2, navItem3, navItem4, navItem5, navItem6, navItem7]; // const [user,setUser] = useState(userData);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      navbar = _useState2[0],
      setNavbar = _useState2[1]; // console.log("nav user: ",userData);


  var createNavbar = function createNavbar() {
    var navbarContent = [];
    allNavbarItems.forEach(function (item) {
      if (userData == null) {
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
  }, [userData]);
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
      item: navItem,
      user: userData
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");




var NavItem = function NavItem(_ref) {
  var item = _ref.item,
      user = _ref.user;

  // const classNames = "nav-link fs-4 nav-menu-item";
  if (item.type == 'special') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
      className: "nav-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
      to: item.route,
      className: "nav-link fs-4 nav-menu-item "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "border border-2 rounded square-button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("i", {
      className: "fa-solid fa-plus "
    })))));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
      className: "nav-item "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
      to: item.route,
      className: "nav-link fs-4 nav-menu-item "
    }, " ", item.name, " ")));
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavItem);

/***/ }),

/***/ "./assets/js/components/party/Day.js":
/*!*******************************************!*\
  !*** ./assets/js/components/party/Day.js ***!
  \*******************************************/
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
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useQuery.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
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





var Day = function Day(_ref) {
  var dayData = _ref.dayData,
      setActiveDay = _ref.setActiveDay,
      activeDay = _ref.activeDay;

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_25__.useParams)(),
      id = _useParams.id;

  var dateString = dayData.date.substring(0, 10);
  var queryKey = id + '-' + dateString;

  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_26__.useQuery)({
    queryKey: [queryKey],
    queryFn: function queryFn() {
      return getDayData();
    },
    refetchOnWindowFocus: false
  }),
      data = _useQuery.data,
      status = _useQuery.status;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isActive = _useState2[0],
      setIsActive = _useState2[1];

  var getDayData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var route, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // console.log(dateString);
              route = 'http://127.0.0.1/api/day/' + id + '/' + dateString;
              _context.next = 3;
              return fetch(route);

            case 3:
              response = _context.sent;
              return _context.abrupt("return", response.json());

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getDayData() {
      return _ref2.apply(this, arguments);
    };
  }();

  var pickDate = function pickDate(day) {
    setActiveDay(day);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_24__.useEffect)(function () {
    if (status == 'success' && typeof activeDay !== 'undefined' && isActive) {
      // console.log(data.dayInfo);
      pickDate(data.dayInfo);
    } else {}
  }, [data]);
  (0,react__WEBPACK_IMPORTED_MODULE_24__.useEffect)(function () {
    if (typeof activeDay !== 'undefined' && typeof activeDay.date !== 'undefined' && activeDay.date == dayData.date) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [activeDay]);
  (0,react__WEBPACK_IMPORTED_MODULE_24__.useEffect)(function () {
    if (typeof activeDay === 'undefined' && typeof data !== 'undefined' && dayData.today) {
      // console.log('pick');
      setActiveDay(data.dayInfo);
    }
  }, [status]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement((react__WEBPACK_IMPORTED_MODULE_24___default().Fragment), null, status == 'success' ?
  /*#__PURE__*/
  //success 
  react__WEBPACK_IMPORTED_MODULE_24___default().createElement("td", {
    className: isActive ? data.dayInfo.status + " p-0  picked-date" : data.dayInfo.status + " p-0",
    onClick: function onClick() {
      return pickDate(data.dayInfo);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "calendar-day"
  }, data.dayInfo.number), data.dayInfo.status == "CANCELED" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "players-left-to-vote",
    "data-bs-toggle": "tooltip",
    "data-bs-title": "Some members are unavailable"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("i", {
    className: "fa-solid fa-xmark "
  })) : '', data.dayInfo.status == "VOTED" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement((react__WEBPACK_IMPORTED_MODULE_24___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "players-left-to-vote",
    "data-bs-toggle": "tooltip",
    "data-bs-title": "{{day.playersLeftToVote}} more to vote"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("i", {
    className: "fa-sharp fa-solid fa-arrows-rotate"
  }, data.dayInfo.remainingVoters)), !data.dayInfo.playerStatus ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "players-vote-status",
    "data-bs-toggle": "tooltip",
    "data-bs-title": "{{day.playersLeftToVote}} more to vote"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("i", {
    className: "fa-sharp fa-solid fa-exclamation"
  })) : '') : '', data.dayInfo.status == "MISSED" ?
  /*#__PURE__*/
  // <i class="fa-solid fa-ban"></i>
  react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "players-left-to-vote"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("i", {
    className: "fa-solid fa-ban",
    "data-bs-toggle": "tooltip",
    "data-bs-title": "Missed schedules"
  })) : '', data.dayInfo.status == "GAMEDAY" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "players-left-to-vote"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("i", {
    className: "fa-solid fa-check ",
    "data-bs-toggle": "tooltip",
    "data-bs-title": "Missed schedules"
  })) : '') : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "calendar-day"
  }, dayData.number)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Day);

/***/ }),

/***/ "./assets/js/components/party/Form.js":
/*!********************************************!*\
  !*** ./assets/js/components/party/Form.js ***!
  \********************************************/
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
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
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
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useMutation.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_animate_height__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-animate-height */ "./node_modules/react-animate-height/dist/esm/index.js");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useQuery.mjs");
/* harmony import */ var _SubmitToast__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./SubmitToast */ "./assets/js/components/party/SubmitToast.js");
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









var Form = function Form(_ref) {
  var activeDay = _ref.activeDay;
  var queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_30__.useQueryClient)();

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_31__.useParams)(),
      id = _useParams.id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_27__.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      day = _useState2[0],
      setDay = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_27__.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      month = _useState4[0],
      setMonth = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_27__.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      year = _useState6[0],
      setYear = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_27__.useState)(1),
      _useState8 = _slicedToArray(_useState7, 2),
      voteStatus = _useState8[0],
      setVoteStatus = _useState8[1];

  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_32__.useQuery)({
    queryKey: [id + '-' + year + '-' + month + '-' + day + '-' + 'votes'],
    queryFn: function queryFn() {
      return getVotes();
    },
    refetchOnWindowFocus: false
  }),
      data = _useQuery.data,
      status = _useQuery.status;

  var getVotes = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var route, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              route = 'http://127.0.0.1/api/get-votes/' + id + '/' + year + '-' + month + '-' + day;
              _context.next = 3;
              return fetch(route);

            case 3:
              response = _context.sent;
              return _context.abrupt("return", response.json());

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getVotes() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_27__.useEffect)(function () {
    if (typeof activeDay !== 'undefined') {
      var splitedDate = activeDay.date.substring(0, 10).split('-');
      setDay(parseInt(splitedDate[2]));
      setMonth(parseInt(splitedDate[1]));
      setYear(splitedDate[0]);
    }
  }, [activeDay]);

  var checkVoteStatus = function checkVoteStatus(event) {
    setVoteStatus(event.target.value);
  };

  var dataMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_33__.useMutation)({
    mutationFn: function mutationFn(event) {
      event.preventDefault(); // console.log(id);

      var formData = new FormData(event.target);
      var response = fetch('/api/send-vote/' + id, {
        method: 'POST',
        body: formData
      });
      return response;
    },
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries([id + '-' + activeDay.date.substring(0, 10)]);
      queryClient.invalidateQueries([id + '-' + year + '-' + month + '-' + day + '-' + 'votes']);
    }
  });
  var deleteVoteMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_33__.useMutation)({
    mutationFn: function mutationFn(event) {
      event.preventDefault(); // console.log(id);
      // const formData = new FormData(event.target)

      var voteId = event.target.id;

      if (confirm('This vote will be deleted permanently! Day status may be changed')) {
        var response = fetch('/api/vote/delete/' + voteId, {
          method: 'POST' // body: formData,

        });
        return response;
      }

      return false;
    },
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries([id + '-' + year + '-' + month + '-' + day + '-' + 'votes']);
      queryClient.invalidateQueries([id + '-' + activeDay.date.substring(0, 10)]);
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement((react__WEBPACK_IMPORTED_MODULE_27___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "row g-3 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "col-xl-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "border bg-light form-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "d-flex flex-row justify-content-center party-header bg-dark bg-gradient mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: ""
  }, "PLACE YOUR VOTE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("form", {
    name: "vote",
    method: "post",
    onSubmit: dataMutation.mutate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "row custom-form-row pt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "col-3 custom-form-label "
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("select", {
    className: voteStatus == 0 ? "form-select-lg bg-red " : "form-select-lg bg-green",
    onChange: checkVoteStatus,
    id: "vote_vote",
    name: "vote[vote]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    className: "bg-green",
    value: "1"
  }, "I'm in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    className: "bg-red",
    value: "0"
  }, "I'm out"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "row hidden-date"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "col-3 custom-form-label"
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("select", {
    className: "form-select",
    id: "vote_date_month",
    name: "vote[date][month]",
    readOnly: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    selected: true,
    value: month
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("select", {
    className: "form-select",
    id: "vote_date_day",
    name: "vote[date][day]",
    readOnly: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    selected: true,
    value: day
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("select", {
    className: "form-select",
    id: "vote_date_year",
    name: "vote[date][year]",
    readOnly: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    selected: true,
    value: year
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "row mt-3 custom-form-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "col-3 custom-form-label "
  }, "Start"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "form-time-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("select", {
    className: "form-select-lg  time-select",
    id: "vote_startTime_hour",
    name: "vote[startTime][hour]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "0"
  }, "00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "1"
  }, "01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "2"
  }, "02"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "3"
  }, "03"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "4"
  }, "04"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "5"
  }, "05"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "6"
  }, "06"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "7"
  }, "07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "8"
  }, "08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "9"
  }, "09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "11"
  }, "11"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "12"
  }, "12"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "13"
  }, "13"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "14"
  }, "14"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "15"
  }, "15"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "16"
  }, "16"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "17"
  }, "17"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "18"
  }, "18"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "19"
  }, "19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "20"
  }, "20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "21"
  }, "21"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "22"
  }, "22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "23"
  }, "23"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "form-time-separator"
  }, ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "form-time-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("select", {
    className: "form-select-lg time-select",
    id: "vote_startTime_minute",
    name: "vote[startTime][minute]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "0"
  }, "00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "1"
  }, "01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "2"
  }, "02"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "3"
  }, "03"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "4"
  }, "04"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "5"
  }, "05"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "6"
  }, "06"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "7"
  }, "07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "8"
  }, "08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "9"
  }, "09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "11"
  }, "11"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "12"
  }, "12"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "13"
  }, "13"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "14"
  }, "14"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "15"
  }, "15"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "16"
  }, "16"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "17"
  }, "17"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "18"
  }, "18"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "19"
  }, "19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "20"
  }, "20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "21"
  }, "21"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "22"
  }, "22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "23"
  }, "23"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "24"
  }, "24"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "25"
  }, "25"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "26"
  }, "26"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "27"
  }, "27"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "28"
  }, "28"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "29"
  }, "29"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "30"
  }, "30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "31"
  }, "31"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "32"
  }, "32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "33"
  }, "33"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "34"
  }, "34"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "35"
  }, "35"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "36"
  }, "36"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "37"
  }, "37"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "38"
  }, "38"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "39"
  }, "39"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "40"
  }, "40"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "41"
  }, "41"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "42"
  }, "42"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "43"
  }, "43"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "44"
  }, "44"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "45"
  }, "45"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "46"
  }, "46"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "47"
  }, "47"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "48"
  }, "48"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "49"
  }, "49"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "50"
  }, "50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "51"
  }, "51"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "52"
  }, "52"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "53"
  }, "53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "54"
  }, "54"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "55"
  }, "55"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "56"
  }, "56"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "57"
  }, "57"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "58"
  }, "58"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "59"
  }, "59"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "row mt-3 custom-form-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "col-3 custom-form-label"
  }, "Finish"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "form-time-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("select", {
    className: "form-select-lg time-select",
    id: "vote_finishTime_hour",
    name: "vote[finishTime][hour]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "0"
  }, "00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "1"
  }, "01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "2"
  }, "02"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "3"
  }, "03"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "4"
  }, "04"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "5"
  }, "05"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "6"
  }, "06"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "7"
  }, "07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "8"
  }, "08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "9"
  }, "09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "11"
  }, "11"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "12"
  }, "12"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "13"
  }, "13"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "14"
  }, "14"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "15"
  }, "15"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "16"
  }, "16"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "17"
  }, "17"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "18"
  }, "18"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "19"
  }, "19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "20"
  }, "20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "21"
  }, "21"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "22"
  }, "22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "23"
  }, "23"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "form-time-separator"
  }, ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "form-time-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("select", {
    className: "form-select-lg time-select",
    id: "vote_finishTime_minute",
    name: "vote[finishTime][minute]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "0"
  }, "00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "1"
  }, "01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "2"
  }, "02"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "3"
  }, "03"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "4"
  }, "04"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "5"
  }, "05"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "6"
  }, "06"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "7"
  }, "07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "8"
  }, "08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "9"
  }, "09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "11"
  }, "11"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "12"
  }, "12"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "13"
  }, "13"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "14"
  }, "14"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "15"
  }, "15"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "16"
  }, "16"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "17"
  }, "17"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "18"
  }, "18"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "19"
  }, "19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "20"
  }, "20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "21"
  }, "21"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "22"
  }, "22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "23"
  }, "23"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "24"
  }, "24"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "25"
  }, "25"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "26"
  }, "26"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "27"
  }, "27"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "28"
  }, "28"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "29"
  }, "29"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "30"
  }, "30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "31"
  }, "31"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "32"
  }, "32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "33"
  }, "33"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "34"
  }, "34"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "35"
  }, "35"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "36"
  }, "36"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "37"
  }, "37"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "38"
  }, "38"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "39"
  }, "39"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "40"
  }, "40"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "41"
  }, "41"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "42"
  }, "42"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "43"
  }, "43"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "44"
  }, "44"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "45"
  }, "45"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "46"
  }, "46"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "47"
  }, "47"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "48"
  }, "48"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "49"
  }, "49"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "50"
  }, "50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "51"
  }, "51"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "52"
  }, "52"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "53"
  }, "53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "54"
  }, "54"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "55"
  }, "55"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "56"
  }, "56"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "57"
  }, "57"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "58"
  }, "58"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("option", {
    value: "59"
  }, "59"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "row mt-3 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("button", {
    type: "submit",
    className: "btn btn-lg btn-dark"
  }, "Save")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "col-xl-6 animation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "border bg-light form-panel animation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "d-flex flex-row justify-content-center party-header bg-dark bg-gradient animation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "p-0"
  }, "DATE INFO")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("p", {
    className: "date-display border-bottom  pb-3 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("b", null, day, "-", month, "-", year))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("p", {
    className: "info-display border-bottom pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("span", {
    className: "info-label bg-white"
  }, "VOTING STATUS")), typeof activeDay !== 'undefined' && activeDay.status == 'CANCELED' ? 'Some members are unavailable' : '', typeof activeDay !== 'undefined' && activeDay.status == 'MISSED' ? 'Schedules missed' : '', typeof activeDay !== 'undefined' && activeDay.status == 'VOTED' ? 'Voting in progress' : '', typeof activeDay !== 'undefined' && activeDay.status == 'EMPTY' ? 'Noone voted yet' : '', typeof activeDay !== 'undefined' && activeDay.status == 'GAMEDAY' ? 'Schedules matched!' : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("p", {
    className: "info-display border-bottom pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("span", {
    className: "info-label bg-white"
  }, "YOUR STATUS")), typeof activeDay !== 'undefined' && activeDay.playerStatus ? 'Voted' : "You didn't vote")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("p", {
    className: "info-display border-bottom pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("span", {
    className: "info-label bg-white"
  }, "WAITING FOR")), typeof activeDay !== 'undefined' && activeDay.remainingVoters !== 'undefined' ? activeDay.remainingVoters + ' member(s)' : "")), typeof activeDay !== 'undefined' && activeDay.status == 'GAMEDAY' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("p", {
    className: "info-display border-bottom pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("span", {
    className: "info-label bg-white"
  }, "HOURS")), typeof activeDay !== 'undefined' && activeDay.hours !== 'undefined' ? activeDay.hours.map(function (range) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", null, '- st: ' + range.start.substring(11, 16) + ' <-> fin: ' + range.finish.substring(11, 16));
  }) : "")) : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "col-12 table-cell"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "border bg-light form-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "d-flex flex-row justify-content-center party-header bg-dark bg-gradient"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "p-0"
  }, "YOUR VOTES")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "row"
  }, status == 'success' ? data.votes.map(function (event) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
      className: "custom-vote-display "
    }, event.start + ' - ' + event.finish, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("span", {
      className: "vote-trash"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("i", {
      id: event.id,
      className: "fa-solid fa-trash-can",
      onClick: deleteVoteMutation.mutate
    })));
  }) : 'Loading...')))), dataMutation.isSuccess ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement(_SubmitToast__WEBPACK_IMPORTED_MODULE_29__["default"], {
    type: "success",
    message: "Your vote has been sent"
  }) : null, deleteVoteMutation.isSuccess ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement(_SubmitToast__WEBPACK_IMPORTED_MODULE_29__["default"], {
    type: "success",
    message: "Your vote has been deleted"
  }) : null);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ "./assets/js/components/party/SubmitToast.js":
/*!***************************************************!*\
  !*** ./assets/js/components/party/SubmitToast.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/ToastContainer.js");
/* harmony import */ var react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap/Toast */ "./node_modules/react-bootstrap/esm/Toast.js");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var SubmitToast = function SubmitToast(_ref) {
  var type = _ref.type,
      message = _ref.message;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      showA = _useState2[0],
      setShowA = _useState2[1];

  var toggleShowA = function toggleShowA() {
    return setShowA(!showA);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "toasted",
    containerPosition: "absolute",
    position: "middle-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_14__["default"], {
    bg: type,
    show: showA,
    onClose: toggleShowA,
    delay: 2000,
    autohide: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_14__["default"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("strong", {
    className: "me-auto"
  }, message))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubmitToast);

/***/ }),

/***/ "./assets/js/components/party/Week.js":
/*!********************************************!*\
  !*** ./assets/js/components/party/Week.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
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
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _Day__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Day */ "./assets/js/components/party/Day.js");
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Week = function Week(_ref) {
  var weekData = _ref.weekData,
      activeDay = _ref.activeDay,
      setActiveDay = _ref.setActiveDay;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(weekData),
      _useState2 = _slicedToArray(_useState, 2),
      week = _useState2[0],
      setWeek = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      dataLoaded = _useState4[0],
      setDataLoaded = _useState4[1];

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_17__.useParams)(),
      id = _useParams.id;

  (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(function () {
    if (typeof weekData !== 'undefined') {
      setDataLoaded(true);
    }
  }, [week]); // console.log(activeDay.date);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement((react__WEBPACK_IMPORTED_MODULE_15___default().Fragment), null, dataLoaded ? week.map(function (day) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(_Day__WEBPACK_IMPORTED_MODULE_16__["default"], {
      key: id + '-' + day.monthNumber.toString() + "-" + day.number.toString(),
      dayData: day,
      activeDay: activeDay,
      setActiveDay: setActiveDay
    });
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("td", null, "'false'"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Week);

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
    'text': "Invite your friends"
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

/***/ "./assets/js/pages/Layout.js":
/*!***********************************!*\
  !*** ./assets/js/pages/Layout.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_use_load__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-use-load */ "./node_modules/react-use-load/dist/index.js");
/* harmony import */ var react_use_load__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_use_load__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_nav_NavBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/nav/NavBar */ "./assets/js/components/nav/NavBar.js");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





 // import useLoad from 'react-use-load';



var Layout = function Layout(_ref) {
  var user = _ref.user;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(user),
      _useState2 = _slicedToArray(_useState, 2),
      userId = _useState2[0],
      setUserId = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement((react__WEBPACK_IMPORTED_MODULE_12___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_components_nav_NavBar__WEBPACK_IMPORTED_MODULE_14__["default"], {
    userData: user
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Outlet, {
    context: [userId, setUserId]
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./assets/js/pages/Logout.js":
/*!***********************************!*\
  !*** ./assets/js/pages/Logout.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Logout = function Logout() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "display-5"
  }, "Logout")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logout);

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
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_myActivities_PartyList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/myActivities/PartyList */ "./assets/js/components/myActivities/PartyList.js");
/* harmony import */ var _components_homepage_Box__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/homepage/Box */ "./assets/js/components/homepage/Box.js");
/* harmony import */ var _components_homepage_Disclaimer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/homepage/Disclaimer */ "./assets/js/components/homepage/Disclaimer.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var MyActivities = function MyActivities() {
  var _useOutletContext = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.useOutletContext)(),
      _useOutletContext2 = _slicedToArray(_useOutletContext, 2),
      user = _useOutletContext2[0],
      setUser = _useOutletContext2[1];

  var box1 = {
    'title': 'Create party',
    'icon': 'fa-regular fa-users-between-lines fa-8x m-3 mb-5',
    'text': 'Make a new recouring activity to manage'
  }; // const boxContent = [box1, box2, box3];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement((react__WEBPACK_IMPORTED_MODULE_12___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "row justify-content-center mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("h1", {
    className: "display-6 text-center universal-shadow-text"
  }, "List of parties")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("div", {
    className: "row justify-content-center mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_components_myActivities_PartyList__WEBPACK_IMPORTED_MODULE_13__["default"], {
    userData: user
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyActivities);

/***/ }),

/***/ "./assets/js/pages/Party.js":
/*!**********************************!*\
  !*** ./assets/js/pages/Party.js ***!
  \**********************************/
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
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
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
/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-uuid */ "./node_modules/react-uuid/uuid.js");
/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react_uuid__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_party_Week__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../components/party/Week */ "./assets/js/components/party/Week.js");
/* harmony import */ var _components_party_Form__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../components/party/Form */ "./assets/js/components/party/Form.js");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useQuery.mjs");
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








var Party = function Party() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_29__.useParams)(),
      id = _useParams.id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_25__.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      activeDay = _useState2[0],
      setActiveDay = _useState2[1]; // const { data, status } = useQuery(['calendar'], () => getCalendarData());
  // const {gamedata , gameDataStatus} = useQuery(['game'], () => getGameData());


  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_30__.useQuery)({
    queryKey: ['gameData'],
    queryFn: function queryFn() {
      return getGameData();
    } // refetchOnWindowFocus: false,

  }),
      game = _useQuery.data,
      gameStatus = _useQuery.status;

  var _useQuery2 = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_30__.useQuery)({
    queryKey: ['calendar'],
    queryFn: function queryFn() {
      return getCalendarData();
    },
    refetchOnWindowFocus: false
  }),
      data = _useQuery2.data,
      status = _useQuery2.status;

  var getCalendarData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var calendarRoute, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              calendarRoute = 'http://127.0.0.1/api/calendar/' + id;
              _context.next = 3;
              return fetch(calendarRoute);

            case 3:
              response = _context.sent;
              return _context.abrupt("return", response.json());

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getCalendarData() {
      return _ref.apply(this, arguments);
    };
  }();

  var getGameData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var gameRoute, response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              gameRoute = 'http://127.0.0.1/api/game-data/' + id;
              _context2.next = 3;
              return fetch(gameRoute);

            case 3:
              response = _context2.sent;
              return _context2.abrupt("return", response.json());

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getGameData() {
      return _ref2.apply(this, arguments);
    };
  }(); // console.log(data, status);
  // console.log(game, gameStatus);


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement((react__WEBPACK_IMPORTED_MODULE_25___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "row mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "col-xl-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("table", {
    className: "table calendar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("caption", {
    className: "bg-dark bg-gradient"
  }, "MONTH DISPLAY"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", {
    scope: "col"
  }, "Mon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", {
    scope: "col"
  }, "Tue"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", {
    scope: "col"
  }, "Wed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", {
    scope: "col"
  }, "Thu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", {
    scope: "col"
  }, "Fri"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", {
    scope: "col"
  }, "Sat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("th", {
    scope: "col"
  }, "Sun"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("tbody", null, status == 'success' ? data.calendar.map(function (week, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(_components_party_Week__WEBPACK_IMPORTED_MODULE_27__["default"], {
      key: id + '-' + index,
      weekData: week,
      activeDay: activeDay,
      setActiveDay: setActiveDay
    }));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", null, "loading"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "col-xl-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(_components_party_Form__WEBPACK_IMPORTED_MODULE_28__["default"], {
    activeDay: activeDay
  }))), gameStatus == 'success' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "row mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "col-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "border bg-light form-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "d-flex flex-row justify-content-center party-header bg-dark bg-gradient"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "p-0"
  }, "PARTY INFO")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "col-6 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("p", {
    className: "party-name border-bottom pt-2 pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("span", {
    className: "info-label bg-white"
  }, "PARTY NAME")), " ", game.partyInfo.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("p", {
    className: "party-name  border-bottom pt-2 pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("span", {
    className: "info-label bg-white"
  }, "ACTIVITY")), " ", game.partyInfo.activity))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("p", {
    className: "info-display border-bottom   pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("span", {
    className: "info-label bg-white"
  }, "DESCRIPTION")), " ", game.partyInfo.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("p", {
    className: "info-display border-bottom pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("span", {
    className: "info-label bg-white"
  }, "MEMBERS")), game.partyInfo.activeMembers.map(function (player) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("span", {
      className: "player-name"
    }, " ", player.name);
  })))))) : '');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Party);

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-5836df"], () => (__webpack_exec__("./assets/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBRyxTQUFTLEVBQUM7RUFBYixnQkFBaUQsb0ZBQUc7SUFBTSxTQUFTLEVBQUM7RUFBaEIsaUJBQUgsQ0FBakQsT0FBa0hpSixJQUFJLENBQUNPLFNBQUwsQ0FBZTlJLFdBQWpJLENBREosQ0FoQkosZUFtQkk7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDSTtJQUFHLFNBQVMsRUFBQztFQUFiLGdCQUNJLG9GQUFHO0lBQU0sU0FBUyxFQUFDO0VBQWhCLGFBQUgsQ0FESixFQUVLdUksSUFBSSxDQUFDTyxTQUFMLENBQWVDLGFBQWYsQ0FBNkJ2SCxHQUE3QixDQUFpQyxVQUFDd0gsTUFBRDtJQUFBLG9CQUM5QjtNQUFNLFNBQVMsRUFBQztJQUFoQixRQUFnQ0EsTUFBTSxDQUFDaEksSUFBdkMsQ0FEOEI7RUFBQSxDQUFqQyxDQUZMLENBREosQ0FuQkosQ0FEUixDQURJLENBREgsR0FrQ0csRUEvRVIsQ0FESjtBQW9GSCxDQXpIRDs7QUEySEEsaUVBQWVwRSxLQUFmOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BJQTs7QUFFQSxJQUFNRCxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0VBQ2pCLG9CQUNJLHVJQUNJO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBQ0k7SUFBSSxTQUFTLEVBQUM7RUFBZCxZQURKLENBREosQ0FESjtBQU9ILENBUkQ7O0FBVUEsaUVBQWVBLE1BQWY7Ozs7Ozs7Ozs7OztBQ1pBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9NYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9ob21lcGFnZS9Cb3guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvaG9tZXBhZ2UvRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9teUFjdGl2aXRpZXMvUGFydHlJdGVtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL215QWN0aXZpdGllcy9QYXJ0eUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbmF2L05hdkJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9uYXYvTmF2SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0eS9EYXkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydHkvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0eS9TdWJtaXRUb2FzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0eS9XZWVrLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9Ib21lcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9Mb2dvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL015QWN0aXZpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvUGFydHkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL1JlYWRtZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3N0eWxlcy9jYWxlbmRhci5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3N0eWxlcy9nYW1lLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2pzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvanMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcclxuLy8gaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlcywgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXHJcbmltcG9ydCBMb2dvdXQgZnJvbSBcIi4vcGFnZXMvTG9nb3V0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vcGFnZXMvTGF5b3V0XCI7XHJcbmltcG9ydCBIb21lcGFnZSBmcm9tIFwiLi9wYWdlcy9Ib21lcGFnZVwiO1xyXG5pbXBvcnQgUmVhZG1lIGZyb20gXCIuL3BhZ2VzL1JlYWRtZVwiO1xyXG5pbXBvcnQgUGFydHkgZnJvbSBcIi4vcGFnZXMvUGFydHlcIjtcclxuaW1wb3J0IE15QWN0aXZpdGllcyBmcm9tIFwiLi9wYWdlcy9NeUFjdGl2aXRpZXNcIjtcclxuaW1wb3J0IHV1aWQgZnJvbSAncmVhY3QtdXVpZCc7XHJcblxyXG4vLyBpbXBvcnQge1N0cmljdE1vZGV9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcclxuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIsIHVzZVF1ZXJ5IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcclxuXHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNoZWNrSWZMb2dnZWRJbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByb3V0ZSA9ICcvYXBpL2hvbWVwYWdlL25hdic7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyb3V0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gdXNlUXVlcnkoWyd1c2VyJ10sICgpID0+IGNoZWNrSWZMb2dnZWRJbigpKTtcclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgLy8gVVNVxYNcclxuICAgIGNvbnNvbGUubG9nKGRhdGEsIHN0YXR1cyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIHtzdGF0dXMgPT0gXCJzdWNjZXNzXCIgPyAoXHJcbiAgICAgICAgICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICB7LyogdXNlciA6IHtkYXRhLnVzZXJ9ICovfVxyXG4gICAgICAgICAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8TGF5b3V0IHVzZXI9e2RhdGEudXNlcn0vPn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgaW5kZXggZWxlbWVudD17PEhvbWVwYWdlIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJyZWFkbWVcIiBlbGVtZW50PXs8UmVhZG1lIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJteS1hY3Rpdml0aWVzXCIgZWxlbWVudD17PE15QWN0aXZpdGllcyAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwicGFydHkvc2hvdy86aWRcIiBlbGVtZW50PXs8UGFydHkgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cImxvZ291dFwiIGVsZW1lbnQ9ezxMb2dvdXQgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgIDwvUm91dGVzPlxyXG4gICAgICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgJ2xvYWRpbmcnXHJcbiAgICAgICAgKSB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IE1haW5QYWdlID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxyXG4gICAgICAgICAgICAgICAgPE1haW4gLz5cclxuICAgICAgICAgICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxyXG4gICAgICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlO1xyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcclxuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcclxucm9vdC5yZW5kZXIoXHJcbiAgICA8TWFpblBhZ2UgIC8+XHJcbik7XHJcblxyXG5cclxuXHJcblxyXG4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcbiBcclxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL2NhbGVuZGFyLmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMvZ2FtZS5jc3MnO1xyXG5cclxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCAnLi9ib290c3RyYXAnO1xyXG4gXHJcbnJlcXVpcmUoJy4vTWFpbicpO1xyXG5cclxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jb25zdCBCb3ggPSAoe2NvbnRlbnR9KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHBhcnR5LWhlYWRlciBwdC0xIHBiLTEgYmctZ3JhZGllbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y29udGVudC50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBiZy1saWdodCBiZy1ncmFkaWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17Y29udGVudC5pY29ufT48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYmctbGlnaHQgcC0yIGJvcmRlciBmdy1saWdodCB0ZXh0LWNlbnRlciB0ZXh0LW1kIGJnLWdyYWRpZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbnRlbnQudGV4dH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm94IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IERpc2NsYWltZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1hdXRvIHAtMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxlYWQgbWItMVwiPkRpc2NsYWltZXIhISE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+VG8gamVzdCBNVlAgLSBtaW5pbXVtIHZpYWJsZSBwcm9kdWN0PC9iPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwa2EgcG93aW5uYSBkemlhxYJhxIcgaSBtb8W8ZW15IGplaiB1xbx5xIcgZG8gb3JnYW5pemFjamkgbmFzenljaCBnaWVyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBaYXBld25lIGlzdG5pZWrEhSBpbm5lIGkgbGVwc3plIG5hcnrEmWR6aWEgZG8gY3plZ2/FmyB0YWtpZWdvLCBhbGUgZGxhIG1uaWUgamVzdCB0byB6YWdhZG5pZW5pZSBuYSBrdMOzcnltIHNpxJkgdWN6xJkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV3N6eXN0a28gamVzdCB3IGrEmXp5a3UgYW5naWVsc2tpbSwgYm8gcm9iacSZIHRvIHNvYmllIHcgcmFtYWNoIHByb2pla3R1IGRvIHBvcnRmb2xpby5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCxJlkxJkgZ28gcm96YnVkb3dheXdhxYIgeiBjemFzZW0sIG5hIHJhemllIG1hIHBvZHN0YXdvd2UgZnVua2NqZSBpIGJ5bGUgamFraSBmcm9udGVuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaXNjbGFpbWVyIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGFzeW5jIH0gZnJvbSAncmVnZW5lcmF0b3ItcnVudGltZSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgT3ZlcmxheVRyaWdnZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL092ZXJsYXlUcmlnZ2VyJztcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Rvb2x0aXAnO1xyXG5cclxuXHJcbmNvbnN0IFBhcnR5SXRlbSA9ICh7YWN0aXZpdHksIHVzZXJEYXRhfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHBhcnR5Um91dGUgPSAnL3BhcnR5L3Nob3cvJyArIGFjdGl2aXR5LmlkO1xyXG4gICAgY29uc3QgaW52aXRhdGlvbmFsTGluayA9ICcvZ2FtZS9pbnZpdGUvJyArIGFjdGl2aXR5LnNsdWc7XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnNUb29sdGlwID0gKHByb3BzKSA9PiAoXHJcbiAgICAgICAgICA8VG9vbHRpcCBpZD1cIm9wdGlvbnMtdG9vbHRpcFwiIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIE9wdGlvbnNcclxuICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBob3N0VG9vbHRpcCA9IChwcm9wcykgPT4gKFxyXG4gICAgICAgICAgICA8VG9vbHRpcCBpZD1cIm9wdGlvbnMtdG9vbHRpcFwiIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgICAgWW91IGFyZSBob3N0IG9mIHRoaXMgZ2FtZVxyXG4gICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvblRvb2x0aXAgPSAocHJvcHMpID0+IChcclxuICAgICAgICAgICAgPFRvb2x0aXAgaWQ9XCJkZXNjcmlwdGlvbi10b29sdGlwXCIgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgICB7YWN0aXZpdHkuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxvY2tlZFRvb2x0aXAgPSAocHJvcHMpID0+IChcclxuICAgICAgICA8VG9vbHRpcCBpZD1cImxvY2tlZC10b29sdGlwXCIgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgR2FtZSBpcyBsb2NrZWRcclxuICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGlua1Rvb2x0aXAgPSAocHJvcHMpID0+IChcclxuICAgICAgICAgICAgPFRvb2x0aXAgaWQ9XCJsaW5rLXRvb2x0aXBcIiB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICAgICAgQ2xpY2sgdG8gY29weSBpbnZpdGF0aW9uYWwgbGlua1xyXG4gICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29weUludmlMaW5rID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBIVFRQXHJcbiAgICAgICAgICAgIGxldCB0ZXh0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXHJcbiAgICAgICAgICAgIHRleHRGaWVsZC5pbm5lclRleHQgPSBpbnZpdGF0aW9uYWxMaW5rXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dEZpZWxkKVxyXG4gICAgICAgICAgICB0ZXh0RmllbGQuc2VsZWN0KClcclxuICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKVxyXG4gICAgICAgICAgICB0ZXh0RmllbGQucmVtb3ZlKClcclxuICAgICAgICAgICAgYWxlcnQoaW52aXRhdGlvbmFsTGluayk7XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDx0cj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCAgY2xhc3NOYW1lPVwiZ2FtZS10YWJsZSBob3N0IGJnLWxpZ2h0IHAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZpdHkuaG9zdGVkID09IHVzZXJEYXRhID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9e3sgc2hvdzogMjUwLCBoaWRlOiA0MDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9e2hvc3RUb29sdGlwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBpZD1cInt7Z2FtZS5pZH19XCIgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtdXNlci1nZWFyIGluZm8taWNvblwiIGRhdGEtYnMtdG9nZ2xlPVwibW9kYWxcIiAgZGF0YS1icy10YXJnZXQ9XCIjYWRtaW5PcHRpb25zXCI+IDwvaT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9e3sgc2hvdzogMjUwLCBoaWRlOiA0MDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9e29wdGlvbnNUb29sdGlwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBpZD1cInt7Z2FtZS5pZH19XCIgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtZ2VhcnMgaW5mby1pY29uXCIgZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiIGRhdGEtYnMtdGl0bGU9XCJPcHRpb25zXCIgZGF0YS1icy10YXJnZXQ9XCIjdXNlck9wdGlvbnNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImdhbWUtdGFibGUgYmctbGlnaHRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpdml0eS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImdhbWUtdGFibGUgYmctbGlnaHQgaG9zdCBwLTBcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9e3sgc2hvdzogMjUwLCBoaWRlOiA0MDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9e2Rlc2NyaXB0aW9uVG9vbHRpcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtY2lyY2xlLWluZm8gaW5mby1pY29uXCIgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlIGJnLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpdml0eS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlIGJnLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpdml0eS5wbGF5ZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImdhbWUtdGFibGUgYmctbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2aXR5LmxvY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9e3sgc2hvdzogMjUwLCBoaWRlOiA0MDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9e2xvY2tlZFRvb2x0aXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtbG9jayBpbmZvLWljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9e3sgc2hvdzogMjUwLCBoaWRlOiA0MDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9e2xpbmtUb29sdGlwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tnYW1lLnNsdWd9fVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWxpbmsgaW5mby1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb3B5SW52aUxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlIGJnLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFhYLlhYLlhYWFhcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlIGJnLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtwYXJ0eVJvdXRlfSBjbGFzc05hbWU9XCJ0ZXh0LWRhcmsgdGV4dC1ib2xkXCIgPiBzaG93IDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxhIGNsYXNzTmFtZT1cInRleHQtZGFyayB0ZXh0LWJvbGRcIiBocmVmPXtwYXJ0eVJvdXRlfT5TaG93PC9hPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICA8Lz5cclxuICAgICAgICApICAgICAgICAgIFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFydHlJdGVtIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQYXJ0eUl0ZW0gZnJvbSAnLi9QYXJ0eUl0ZW0nO1xyXG5cclxuY29uc3QgUGFydHlMaXN0ID0gKHt1c2VyRGF0YX0pID0+IHtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IFthY3Rpdml0eUxpc3QsIHNldEFjdGl2aXR5TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgZ2V0QWN0aXZpdHlMaXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvdXRlID0gJy9hcGkvbXktYWN0aXZpdGllcyc7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtyb3V0ZX1gKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICBzZXRBY3Rpdml0eUxpc3QoZGF0YS5hY3Rpdml0eVRhYmxlKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldEFjdGl2aXR5TGlzdCgpO1xyXG4gICAgfSxbXSk7XHJcbiAgICAgICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSBwYXJ0eS1saXN0IGJnLWRhcmsgYmctZ3JhZGllbnRcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlLWhlYWRlciBob3N0IGJnLWRhcmsgYmctZ3JhZGllbnRcIiBzY29wZT1cImNvbFwiPjwvdGg+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZ2FtZS10YWJsZS1oZWFkZXIgYmctZGFyayBiZy1ncmFkaWVudFwiIHNjb3BlPVwiY29sXCI+UGFydHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZ2FtZS10YWJsZS1oZWFkZXIgaG9zdCBiZy1kYXJrIGJnLWdyYWRpZW50XCIgc2NvcGU9XCJjb2xcIj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZ2FtZS10YWJsZS1oZWFkZXIgYmctZGFyayBiZy1ncmFkaWVudFwiIHNjb3BlPVwiY29sXCI+QWN0aXZpdHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZ2FtZS10YWJsZS1oZWFkZXIgYmctZGFyayBiZy1ncmFkaWVudFwiIHNjb3BlPVwiY29sXCI+TWVtYmVyczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlLWhlYWRlciBiZy1kYXJrIGJnLWdyYWRpZW50XCIgc2NvcGU9XCJjb2xcIj5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZ2FtZS10YWJsZS1oZWFkZXIgYmctZGFyayBiZy1ncmFkaWVudFwiIHNjb3BlPVwiY29sXCI+TmV4dCBzZXNzaW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImdhbWUtdGFibGUtaGVhZGVyIGJnLWRhcmsgYmctZ3JhZGllbnRcIiBzY29wZT1cImNvbFwiPkxpbms8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge2FjdGl2aXR5TGlzdC5tYXAoKGFjdGl2aXR5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFBhcnR5SXRlbSBrZXk9e2FjdGl2aXR5LmlkfSBhY3Rpdml0eT17YWN0aXZpdHl9IHVzZXJEYXRhPXt1c2VyRGF0YX0vPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgICkgICAgICAgICAgXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXJ0eUxpc3QiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdkl0ZW0gZnJvbSAnLi9OYXZJdGVtJztcclxuXHJcblxyXG5jb25zdCBOYXZiYXIgPSAoe3VzZXJEYXRhfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IG5hdkl0ZW0xID0ge1xyXG4gICAgICAgICduYW1lJzogJ0hvbWUnLFxyXG4gICAgICAgICdyb3V0ZSc6ICcvJyxcclxuICAgICAgICAndHlwZSc6ICdvcGVuJyxcclxuICAgICAgICAnYWN0aXZlJzogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbmF2SXRlbTIgPSB7XHJcbiAgICAgICAgJ25hbWUnOiAnTXkgQWN0aXZpdGllcycsXHJcbiAgICAgICAgJ3JvdXRlJzogJy9teS1hY3Rpdml0aWVzJyxcclxuICAgICAgICAndHlwZSc6ICdsb2dnZWRJbicsXHJcbiAgICAgICAgJ2FjdGl2ZSc6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG5hdkl0ZW0zID0ge1xyXG4gICAgICAgICduYW1lJzogJ1JlYWRNZScsXHJcbiAgICAgICAgJ3JvdXRlJzogJy9yZWFkbWUnLFxyXG4gICAgICAgICd0eXBlJzogJ29wZW4nLFxyXG4gICAgICAgICdhY3RpdmUnOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBuYXZJdGVtNCA9IHtcclxuICAgICAgICAnbmFtZSc6ICcrJyxcclxuICAgICAgICAncm91dGUnOiAnL2dhbWUvY3JlYXRlJyxcclxuICAgICAgICAndHlwZSc6ICdzcGVjaWFsJyxcclxuICAgICAgICAnYWN0aXZlJzogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbmF2SXRlbTUgPSB7XHJcbiAgICAgICAgJ25hbWUnOiAnTG9nb3V0JyxcclxuICAgICAgICAncm91dGUnOiAnL2xvZ291dCcsXHJcbiAgICAgICAgJ3R5cGUnOiAnbG9nZ2VkSW4nLFxyXG4gICAgICAgICdhY3RpdmUnOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBuYXZJdGVtNiA9IHtcclxuICAgICAgICAnbmFtZSc6ICdMb2dpbicsXHJcbiAgICAgICAgJ3JvdXRlJzogJy9sb2dpbicsXHJcbiAgICAgICAgJ3R5cGUnOiAnbG9nZ2VkT3V0JyxcclxuICAgICAgICAnYWN0aXZlJzogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbmF2SXRlbTcgPSB7XHJcbiAgICAgICAgJ25hbWUnOiAnUmVnaXN0ZXInLFxyXG4gICAgICAgICdyb3V0ZSc6ICcvcmVnaXN0ZXInLFxyXG4gICAgICAgICd0eXBlJzogJ2xvZ2dlZE91dCcsXHJcbiAgICAgICAgJ2FjdGl2ZSc6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGFsbE5hdmJhckl0ZW1zID0gW25hdkl0ZW0xLCBuYXZJdGVtMiwgbmF2SXRlbTMsIG5hdkl0ZW00LCBuYXZJdGVtNSwgbmF2SXRlbTYsIG5hdkl0ZW03XTtcclxuXHJcbiAgICAvLyBjb25zdCBbdXNlcixzZXRVc2VyXSA9IHVzZVN0YXRlKHVzZXJEYXRhKTtcclxuICAgIGNvbnN0IFtuYXZiYXIsc2V0TmF2YmFyXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwibmF2IHVzZXI6IFwiLHVzZXJEYXRhKTtcclxuICAgIGNvbnN0IGNyZWF0ZU5hdmJhciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBuYXZiYXJDb250ZW50ID0gW107XHJcbiAgICAgICAgYWxsTmF2YmFySXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzZXJEYXRhID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT0gJ2xvZ2dlZE91dCcgfHwgaXRlbS50eXBlID09ICdvcGVuJyApIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXZiYXJDb250ZW50LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGl0ZW0udHlwZSA9PSAnbG9nZ2VkSW4nIHx8IGl0ZW0udHlwZSA9PSAnc3BlY2lhbCcgfHwgaXRlbS50eXBlID09ICdvcGVuJyApIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXZiYXJDb250ZW50LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXROYXZiYXIobmF2YmFyQ29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjcmVhdGVOYXZiYXIoKTtcclxuICAgIH0sW3VzZXJEYXRhXSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7LyogbmF2YmFyIHVzZXIgPSB7dXNlckRhdGF9OyAqL31cclxuICAgICAgICAgICAgey8qIFBBR0UgVElUTEUgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdkaXNwbGF5LTEgdW5pdmVyc2FsLXNoYWRvdy10ZXh0Jz5IQVJNT048L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3VuZGVkLXdyYXBwZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGJnLWRhcmsgYmctZ3JhZGllbnQgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBDT0xBUFNFIEJVVFRPTiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLWJzLXRhcmdldD1cIiNuYXZiYXJOYXZcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyTmF2XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE5BViBJVEVNUyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZSBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgaWQ9XCJuYXZiYXJOYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbS0wIGFsaWduLW1pZGRsZVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYXZiYXIubWFwKChuYXZJdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0ga2V5PXtuYXZJdGVtLm5hbWV9IGl0ZW09e25hdkl0ZW19IHVzZXI9e3VzZXJEYXRhfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgT3V0bGV0LCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IE5hdkl0ZW0gPSAoe2l0ZW0sIHVzZXJ9KSA9PiB7XHJcblxyXG4gICAgLy8gY29uc3QgY2xhc3NOYW1lcyA9IFwibmF2LWxpbmsgZnMtNCBuYXYtbWVudS1pdGVtXCI7XHJcblxyXG4gICAgaWYgKGl0ZW0udHlwZSA9PSAnc3BlY2lhbCcpIHtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2l0ZW0ucm91dGV9IGNsYXNzTmFtZT1cIm5hdi1saW5rIGZzLTQgbmF2LW1lbnUtaXRlbSBcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZSA9IFwiYm9yZGVyIGJvcmRlci0yIHJvdW5kZWQgc3F1YXJlLWJ1dHRvblwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLXBsdXMgXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSAgICAgICAgICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17aXRlbS5yb3V0ZX0gY2xhc3NOYW1lPVwibmF2LWxpbmsgZnMtNCBuYXYtbWVudS1pdGVtIFwiID4ge2l0ZW0ubmFtZX0gPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkl0ZW0iLCJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmNvbnN0IERheSA9ICh7ZGF5RGF0YSwgc2V0QWN0aXZlRGF5LCBhY3RpdmVEYXl9KSA9PiB7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBkYXlEYXRhLmRhdGUuc3Vic3RyaW5nKDAsMTApO1xyXG4gICAgY29uc3QgcXVlcnlLZXkgPSBpZCArICctJyArIGRhdGVTdHJpbmc7XHJcbiAgICBcclxuICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSB1c2VRdWVyeSh7XHJcbiAgICAgICAgcXVlcnlLZXk6IFtxdWVyeUtleV0sIFxyXG4gICAgICAgIHF1ZXJ5Rm46ICgpID0+IGdldERheURhdGEoKSxcclxuICAgICAgICByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgZ2V0RGF5RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRlU3RyaW5nKTtcclxuICAgICAgICBjb25zdCByb3V0ZSA9ICdodHRwOi8vMTI3LjAuMC4xL2FwaS9kYXkvJysgaWQgKycvJysgZGF0ZVN0cmluZyA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyb3V0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwaWNrRGF0ZSA9IChkYXkpID0+IHtcclxuICAgICAgICBzZXRBY3RpdmVEYXkoZGF5KTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT0gJ3N1Y2Nlc3MnICYmIHR5cGVvZiBhY3RpdmVEYXkgIT09ICd1bmRlZmluZWQnICAmJiBpc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLmRheUluZm8pO1xyXG4gICAgICAgICAgICBwaWNrRGF0ZShkYXRhLmRheUluZm8pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxbZGF0YV0pO1xyXG4gICAgXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhY3RpdmVEYXkgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBhY3RpdmVEYXkuZGF0ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgYWN0aXZlRGF5LmRhdGUgPT0gZGF5RGF0YS5kYXRlKSB7XHJcbiAgICAgICAgICAgIHNldElzQWN0aXZlKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldElzQWN0aXZlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFthY3RpdmVEYXldKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYWN0aXZlRGF5ID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZGF0YSAhPT0gJ3VuZGVmaW5lZCcgJiYgZGF5RGF0YS50b2RheSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncGljaycpO1xyXG4gICAgICAgICAgICBzZXRBY3RpdmVEYXkoZGF0YS5kYXlJbmZvKTtcclxuICAgICAgICB9XHJcbiAgICB9LFtzdGF0dXNdKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIHtzdGF0dXMgPT0nc3VjY2VzcycgPyAoXHJcbiAgICAgICAgICAvL3N1Y2Nlc3MgXHJcbiAgICAgICAgICA8dGQgXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2lzQWN0aXZlID8gZGF0YS5kYXlJbmZvLnN0YXR1cyArIFwiIHAtMCAgcGlja2VkLWRhdGVcIiA6ICBkYXRhLmRheUluZm8uc3RhdHVzICsgXCIgcC0wXCIgfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcGlja0RhdGUoZGF0YS5kYXlJbmZvKX0+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXItZGF5XCIgPiAgICAgXHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhLmRheUluZm8ubnVtYmVyfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICB7LyogQUREIFRPT0xUSVAhISEhISEhISEgKi99XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAge2RhdGEuZGF5SW5mby5zdGF0dXMgPT0gXCJDQU5DRUxFRFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXJzLWxlZnQtdG8tdm90ZVwiIGRhdGEtYnMtdG9nZ2xlPVwidG9vbHRpcFwiIGRhdGEtYnMtdGl0bGU9XCJTb21lIG1lbWJlcnMgYXJlIHVuYXZhaWxhYmxlXCI+PGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEteG1hcmsgXCI+PC9pPjwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgIHsvKiBBREQgVE9PTFRJUCEhISEhISEhISAqL31cclxuICAgICAgICAgICAgICB7ZGF0YS5kYXlJbmZvLnN0YXR1cyA9PSBcIlZPVEVEXCIgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVycy1sZWZ0LXRvLXZvdGVcIiBkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIiBkYXRhLWJzLXRpdGxlPVwie3tkYXkucGxheWVyc0xlZnRUb1ZvdGV9fSBtb3JlIHRvIHZvdGVcIj48aSBjbGFzc05hbWU9XCJmYS1zaGFycCBmYS1zb2xpZCBmYS1hcnJvd3Mtcm90YXRlXCI+e2RhdGEuZGF5SW5mby5yZW1haW5pbmdWb3RlcnN9PC9pPjwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7IWRhdGEuZGF5SW5mby5wbGF5ZXJTdGF0dXMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVycy12b3RlLXN0YXR1c1wiIGRhdGEtYnMtdG9nZ2xlPVwidG9vbHRpcFwiIGRhdGEtYnMtdGl0bGU9XCJ7e2RheS5wbGF5ZXJzTGVmdFRvVm90ZX19IG1vcmUgdG8gdm90ZVwiPjxpIGNsYXNzTmFtZT1cImZhLXNoYXJwIGZhLXNvbGlkIGZhLWV4Y2xhbWF0aW9uXCI+PC9pPjwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICApIDogJyd9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgIHtkYXRhLmRheUluZm8uc3RhdHVzID09IFwiTUlTU0VEXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgIC8vIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtYmFuXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVycy1sZWZ0LXRvLXZvdGVcIj48aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1iYW5cIiBkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIiBkYXRhLWJzLXRpdGxlPVwiTWlzc2VkIHNjaGVkdWxlc1wiPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAge2RhdGEuZGF5SW5mby5zdGF0dXMgPT0gXCJHQU1FREFZXCIgPyAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVycy1sZWZ0LXRvLXZvdGVcIj48aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1jaGVjayBcIiBkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIiBkYXRhLWJzLXRpdGxlPVwiTWlzc2VkIHNjaGVkdWxlc1wiPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPHRkPiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGVuZGFyLWRheVwiID4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXlEYXRhLm51bWJlcn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF5XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgUXVlcnlDbGllbnQsIHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XHJcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBBbmltYXRlSGVpZ2h0IGZyb20gJ3JlYWN0LWFuaW1hdGUtaGVpZ2h0JztcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBTdWJtaXRUb2FzdCBmcm9tICcuL1N1Ym1pdFRvYXN0JztcclxuXHJcbmNvbnN0IEZvcm0gPSAoe2FjdGl2ZURheX0pID0+IHtcclxuXHJcblxyXG4gICAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gICAgY29uc3QgW2RheSxzZXREYXldID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFttb250aCxzZXRNb250aF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3llYXIsIHNldFllYXJdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICBjb25zdCBbdm90ZVN0YXR1cywgc2V0Vm90ZVN0YXR1c10gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gdXNlUXVlcnkoe1xyXG4gICAgICAgIHF1ZXJ5S2V5OiBbaWQgKyAnLScrIHllYXIgKyAnLScrbW9udGggKyctJyArZGF5KyctJysgJ3ZvdGVzJ10sIFxyXG4gICAgICAgIHF1ZXJ5Rm46ICgpID0+IGdldFZvdGVzKCksXHJcbiAgICAgICAgcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZ2V0Vm90ZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgcm91dGUgPSAnaHR0cDovLzEyNy4wLjAuMS9hcGkvZ2V0LXZvdGVzLycrIGlkICsnLycrIHllYXIgKyAnLScrbW9udGggKyctJyArZGF5IDtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJvdXRlKTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIGFjdGl2ZURheSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3BsaXRlZERhdGUgPSBhY3RpdmVEYXkuZGF0ZS5zdWJzdHJpbmcoMCwxMCkuc3BsaXQoJy0nKTtcclxuICAgICAgICAgICAgc2V0RGF5KHBhcnNlSW50KHNwbGl0ZWREYXRlWzJdKSk7XHJcbiAgICAgICAgICAgIHNldE1vbnRoKHBhcnNlSW50KHNwbGl0ZWREYXRlWzFdKSk7XHJcbiAgICAgICAgICAgIHNldFllYXIoc3BsaXRlZERhdGVbMF0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sW2FjdGl2ZURheV0pO1xyXG5cclxuICAgXHJcbiAgICBjb25zdCBjaGVja1ZvdGVTdGF0dXMgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRWb3RlU3RhdHVzKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YU11dGF0aW9uID0gdXNlTXV0YXRpb24oe1xyXG4gICAgICAgIG11dGF0aW9uRm46IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldClcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSAgZmV0Y2goJy9hcGkvc2VuZC12b3RlLycrIGlkLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAgICAgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW2lkKyctJythY3RpdmVEYXkuZGF0ZS5zdWJzdHJpbmcoMCwxMCldKTtcclxuICAgICAgICAgICAgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW2lkICsgJy0nKyB5ZWFyICsgJy0nK21vbnRoICsnLScgK2RheSsnLScrICd2b3RlcyddKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgZGVsZXRlVm90ZU11dGF0aW9uID0gdXNlTXV0YXRpb24oe1xyXG4gICAgICAgIG11dGF0aW9uRm46IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpZCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldClcclxuICAgICAgICAgICAgY29uc3Qgdm90ZUlkID0gZXZlbnQudGFyZ2V0LmlkO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbmZpcm0oJ1RoaXMgdm90ZSB3aWxsIGJlIGRlbGV0ZWQgcGVybWFuZW50bHkhIERheSBzdGF0dXMgbWF5IGJlIGNoYW5nZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSAgZmV0Y2goJy9hcGkvdm90ZS9kZWxldGUvJysgdm90ZUlkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9keTogZm9ybURhdGEsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gIGZhbHNlO1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbaWQgKyAnLScrIHllYXIgKyAnLScrbW9udGggKyctJyArZGF5KyctJysgJ3ZvdGVzJ10pXHJcbiAgICAgICAgICAgIHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtpZCsnLScrYWN0aXZlRGF5LmRhdGUuc3Vic3RyaW5nKDAsMTApXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGctMyBcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBGT1JNICovfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYmctbGlnaHQgZm9ybS1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHBhcnR5LWhlYWRlciBiZy1kYXJrIGJnLWdyYWRpZW50IG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQTEFDRSBZT1VSIFZPVEVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBuYW1lPVwidm90ZVwiIG1ldGhvZD1cInBvc3RcIiBvblN1Ym1pdD17ZGF0YU11dGF0aW9uLm11dGF0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjdXN0b20tZm9ybS1yb3cgcHQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTMgY3VzdG9tLWZvcm0tbGFiZWwgXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJcIj48L3NwYW4+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGF0dXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPXt2b3RlU3RhdHVzID09IDAgPyBcImZvcm0tc2VsZWN0LWxnIGJnLXJlZCBcIiA6IFwiZm9ybS1zZWxlY3QtbGcgYmctZ3JlZW5cIiB9IG9uQ2hhbmdlPXtjaGVja1ZvdGVTdGF0dXN9IGlkPVwidm90ZV92b3RlXCIgbmFtZT1cInZvdGVbdm90ZV1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGNsYXNzTmFtZT1cImJnLWdyZWVuXCIgdmFsdWU9XCIxXCIgPkknbSBpbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gY2xhc3NOYW1lPVwiYmctcmVkXCIgdmFsdWU9XCIwXCIgPkknbSBvdXQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBoaWRkZW4tZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTMgY3VzdG9tLWZvcm0tbGFiZWxcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIiBpZD1cInZvdGVfZGF0ZV9tb250aFwiIG5hbWU9XCJ2b3RlW2RhdGVdW21vbnRoXVwiIHJlYWRPbmx5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9e21vbnRofT48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdFwiIGlkPVwidm90ZV9kYXRlX2RheVwiIG5hbWU9XCJ2b3RlW2RhdGVdW2RheV1cIiByZWFkT25seT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPXtkYXl9Pjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCIgaWQ9XCJ2b3RlX2RhdGVfeWVhclwiIG5hbWU9XCJ2b3RlW2RhdGVdW3llYXJdXCIgcmVhZE9ubHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZCB2YWx1ZT17eWVhcn0+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zIGN1c3RvbS1mb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTMgY3VzdG9tLWZvcm0tbGFiZWwgXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tdGltZS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0LWxnICB0aW1lLXNlbGVjdFwiIGlkPVwidm90ZV9zdGFydFRpbWVfaG91clwiIG5hbWU9XCJ2b3RlW3N0YXJ0VGltZV1baG91cl1cIj48b3B0aW9uIHZhbHVlPVwiMFwiPjAwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjFcIj4wMTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyXCI+MDI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiM1wiPjAzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjRcIj4wNDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1XCI+MDU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNlwiPjA2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjdcIj4wNzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI4XCI+MDg8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiOVwiPjA5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjEwXCI+MTA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTFcIj4xMTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxMlwiPjEyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjEzXCI+MTM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTRcIj4xNDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxNVwiPjE1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE2XCI+MTY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTdcIj4xNzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxOFwiPjE4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE5XCI+MTk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjBcIj4yMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyMVwiPjIxPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIyXCI+MjI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjNcIj4yMzwvb3B0aW9uPjwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXRpbWUtc2VwYXJhdG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS10aW1lLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3QtbGcgdGltZS1zZWxlY3RcIiBpZD1cInZvdGVfc3RhcnRUaW1lX21pbnV0ZVwiIG5hbWU9XCJ2b3RlW3N0YXJ0VGltZV1bbWludXRlXVwiPjxvcHRpb24gdmFsdWU9XCIwXCI+MDA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMVwiPjAxPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjJcIj4wMjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzXCI+MDM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNFwiPjA0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjVcIj4wNTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI2XCI+MDY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiN1wiPjA3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjhcIj4wODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI5XCI+MDk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTBcIj4xMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxMVwiPjExPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjEyXCI+MTI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTNcIj4xMzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxNFwiPjE0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE1XCI+MTU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTZcIj4xNjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxN1wiPjE3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE4XCI+MTg8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTlcIj4xOTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyMFwiPjIwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIxXCI+MjE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjJcIj4yMjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyM1wiPjIzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI0XCI+MjQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjVcIj4yNTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyNlwiPjI2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI3XCI+Mjc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjhcIj4yODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyOVwiPjI5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjMwXCI+MzA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzFcIj4zMTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzMlwiPjMyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjMzXCI+MzM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzRcIj4zNDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzNVwiPjM1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM2XCI+MzY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzdcIj4zNzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzOFwiPjM4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM5XCI+Mzk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDBcIj40MDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0MVwiPjQxPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQyXCI+NDI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDNcIj40Mzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0NFwiPjQ0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQ1XCI+NDU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDZcIj40Njwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0N1wiPjQ3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQ4XCI+NDg8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDlcIj40OTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1MFwiPjUwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjUxXCI+NTE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTJcIj41Mjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1M1wiPjUzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU0XCI+NTQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTVcIj41NTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1NlwiPjU2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU3XCI+NTc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNThcIj41ODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1OVwiPjU5PC9vcHRpb24+PC9zZWxlY3Q+ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTMgY3VzdG9tLWZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMyBjdXN0b20tZm9ybS1sYWJlbFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmluaXNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS10aW1lLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0LWxnIHRpbWUtc2VsZWN0XCIgaWQ9XCJ2b3RlX2ZpbmlzaFRpbWVfaG91clwiIG5hbWU9XCJ2b3RlW2ZpbmlzaFRpbWVdW2hvdXJdXCI+PG9wdGlvbiB2YWx1ZT1cIjBcIj4wMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxXCI+MDE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMlwiPjAyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjNcIj4wMzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0XCI+MDQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNVwiPjA1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjZcIj4wNjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI3XCI+MDc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiOFwiPjA4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjlcIj4wOTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxMFwiPjEwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjExXCI+MTE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTJcIj4xMjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxM1wiPjEzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE0XCI+MTQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTVcIj4xNTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxNlwiPjE2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE3XCI+MTc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMThcIj4xODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxOVwiPjE5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIwXCI+MjA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjFcIj4yMTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyMlwiPjIyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIzXCI+MjM8L29wdGlvbj48L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS10aW1lLXNlcGFyYXRvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXRpbWUtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3QtbGcgdGltZS1zZWxlY3RcIiBpZD1cInZvdGVfZmluaXNoVGltZV9taW51dGVcIiBuYW1lPVwidm90ZVtmaW5pc2hUaW1lXVttaW51dGVdXCI+PG9wdGlvbiB2YWx1ZT1cIjBcIj4wMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxXCI+MDE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMlwiPjAyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjNcIj4wMzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0XCI+MDQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNVwiPjA1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjZcIj4wNjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI3XCI+MDc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiOFwiPjA4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjlcIj4wOTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxMFwiPjEwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjExXCI+MTE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTJcIj4xMjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxM1wiPjEzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE0XCI+MTQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTVcIj4xNTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxNlwiPjE2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE3XCI+MTc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMThcIj4xODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxOVwiPjE5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIwXCI+MjA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjFcIj4yMTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyMlwiPjIyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIzXCI+MjM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjRcIj4yNDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyNVwiPjI1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI2XCI+MjY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjdcIj4yNzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyOFwiPjI4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI5XCI+Mjk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzBcIj4zMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzMVwiPjMxPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjMyXCI+MzI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzNcIj4zMzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzNFwiPjM0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM1XCI+MzU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzZcIj4zNjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzN1wiPjM3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM4XCI+Mzg8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzlcIj4zOTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0MFwiPjQwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQxXCI+NDE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDJcIj40Mjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0M1wiPjQzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQ0XCI+NDQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDVcIj40NTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0NlwiPjQ2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQ3XCI+NDc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDhcIj40ODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0OVwiPjQ5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjUwXCI+NTA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTFcIj41MTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1MlwiPjUyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjUzXCI+NTM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTRcIj41NDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1NVwiPjU1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU2XCI+NTY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTdcIj41Nzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1OFwiPjU4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU5XCI+NTk8L29wdGlvbj48L3NlbGVjdD4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1sZyBidG4tZGFya1wiPlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTYgYW5pbWF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogSU5GT1JNQVRJT04gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYmctbGlnaHQgZm9ybS1wYW5lbCBhbmltYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBwYXJ0eS1oZWFkZXIgYmctZGFyayBiZy1ncmFkaWVudCBhbmltYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEQVRFIElORk9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkYXRlLWRpc3BsYXkgYm9yZGVyLWJvdHRvbSAgcGItMyBcIj48Yj57ZGF5fS17bW9udGh9LXt5ZWFyfTwvYj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5mby1kaXNwbGF5IGJvcmRlci1ib3R0b20gcGItM1wiPjxiPjxzcGFuIGNsYXNzTmFtZT1cImluZm8tbGFiZWwgYmctd2hpdGVcIj5WT1RJTkcgU1RBVFVTPC9zcGFuPjwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZW9mIGFjdGl2ZURheSAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBhY3RpdmVEYXkuc3RhdHVzID09ICdDQU5DRUxFRCcgPyAoJ1NvbWUgbWVtYmVycyBhcmUgdW5hdmFpbGFibGUnKSA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlb2YgYWN0aXZlRGF5ICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIGFjdGl2ZURheS5zdGF0dXMgPT0gJ01JU1NFRCcgPyAoJ1NjaGVkdWxlcyBtaXNzZWQnKSA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlb2YgYWN0aXZlRGF5ICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIGFjdGl2ZURheS5zdGF0dXMgPT0gJ1ZPVEVEJyA/ICgnVm90aW5nIGluIHByb2dyZXNzJykgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZW9mIGFjdGl2ZURheSAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBhY3RpdmVEYXkuc3RhdHVzID09ICdFTVBUWScgPyAoJ05vb25lIHZvdGVkIHlldCcpIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGVvZiBhY3RpdmVEYXkgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgYWN0aXZlRGF5LnN0YXR1cyA9PSAnR0FNRURBWScgPyAoJ1NjaGVkdWxlcyBtYXRjaGVkIScpIDogJyd9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmZvLWRpc3BsYXkgYm9yZGVyLWJvdHRvbSBwYi0zXCI+PGI+PHNwYW4gY2xhc3NOYW1lPVwiaW5mby1sYWJlbCBiZy13aGl0ZVwiPllPVVIgU1RBVFVTPC9zcGFuPjwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZW9mIGFjdGl2ZURheSAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBhY3RpdmVEYXkucGxheWVyU3RhdHVzID8gJ1ZvdGVkJyA6IFwiWW91IGRpZG4ndCB2b3RlXCJ9ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmZvLWRpc3BsYXkgYm9yZGVyLWJvdHRvbSBwYi0zXCI+PGI+PHNwYW4gY2xhc3NOYW1lPVwiaW5mby1sYWJlbCBiZy13aGl0ZVwiPldBSVRJTkcgRk9SPC9zcGFuPjwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZW9mIGFjdGl2ZURheSAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAgYWN0aXZlRGF5LnJlbWFpbmluZ1ZvdGVycyAhPT0gJ3VuZGVmaW5lZCcgID8gYWN0aXZlRGF5LnJlbWFpbmluZ1ZvdGVycyArICcgbWVtYmVyKHMpJyA6IFwiXCJ9ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZW9mIGFjdGl2ZURheSAhPT0gJ3VuZGVmaW5lZCcgJiYgYWN0aXZlRGF5LnN0YXR1cyA9PSAnR0FNRURBWScgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluZm8tZGlzcGxheSBib3JkZXItYm90dG9tIHBiLTNcIj48Yj48c3BhbiBjbGFzc05hbWU9XCJpbmZvLWxhYmVsIGJnLXdoaXRlXCI+SE9VUlM8L3NwYW4+PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGVvZiBhY3RpdmVEYXkgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgIGFjdGl2ZURheS5ob3VycyAhPT0gJ3VuZGVmaW5lZCcgID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlRGF5LmhvdXJzLm1hcCgocmFuZ2UpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57Jy0gc3Q6ICcrcmFuZ2Uuc3RhcnQuc3Vic3RyaW5nKDExLDE2KSsnIDwtPiBmaW46ICcgK3JhbmdlLmZpbmlzaC5zdWJzdHJpbmcoMTEsMTYpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogXCJcIn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFZPVEVTICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGFibGUtY2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJnLWxpZ2h0IGZvcm0tcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBwYXJ0eS1oZWFkZXIgYmctZGFyayBiZy1ncmFkaWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlPVVIgVk9URVMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdHVzID09ICdzdWNjZXNzJyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudm90ZXMubWFwKChldmVudCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjdXN0b20tdm90ZS1kaXNwbGF5ICc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtldmVudC5zdGFydCsgJyAtICcgKyBldmVudC5maW5pc2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICBjbGFzc05hbWU9XCJ2b3RlLXRyYXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBpZD17ZXZlbnQuaWR9IGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLXRyYXNoLWNhblwiIG9uQ2xpY2s9e2RlbGV0ZVZvdGVNdXRhdGlvbi5tdXRhdGV9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICdMb2FkaW5nLi4uJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IHRhYmxlLWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBiZy1saWdodCBmb3JtLXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHBhcnR5LWhlYWRlciBiZy1kYXJrIGJnLWdyYWRpZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQUkVTRVRTXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbWluZyBzb29uLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICB7ZGF0YU11dGF0aW9uLmlzU3VjY2VzcyA/IFxyXG4gICAgICAgICAgICAoICBcclxuICAgICAgICAgICAgICAgIDxTdWJtaXRUb2FzdCB0eXBlPSdzdWNjZXNzJyBtZXNzYWdlPSdZb3VyIHZvdGUgaGFzIGJlZW4gc2VudCcvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICB7ZGVsZXRlVm90ZU11dGF0aW9uLmlzU3VjY2VzcyA/IFxyXG4gICAgICAgICAgICAoICBcclxuICAgICAgICAgICAgICAgIDxTdWJtaXRUb2FzdCB0eXBlPSdzdWNjZXNzJyBtZXNzYWdlPSdZb3VyIHZvdGUgaGFzIGJlZW4gZGVsZXRlZCcvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xyXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xyXG5pbXBvcnQgVG9hc3QgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1RvYXN0JztcclxuXHJcblxyXG5jb25zdCBTdWJtaXRUb2FzdCA9ICh7dHlwZSwgbWVzc2FnZX0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbc2hvd0EsIHNldFNob3dBXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZVNob3dBID0gKCkgPT4gc2V0U2hvd0EoIXNob3dBKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIGNsYXNzTmFtZT0ndG9hc3RlZCcgY29udGFpbmVyUG9zaXRpb249J2Fic29sdXRlJyBwb3NpdGlvbj0nbWlkZGxlLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICA8VG9hc3QgYmc9e3R5cGV9IHNob3c9e3Nob3dBfSBvbkNsb3NlPXt0b2dnbGVTaG93QX0gZGVsYXk9ezIwMDB9IGF1dG9oaWRlPlxyXG4gICAgICAgICAgICAgICAgPFRvYXN0LkhlYWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJtZS1hdXRvXCI+e21lc3NhZ2V9PC9zdHJvbmc+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9Ub2FzdC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICB7LyogPFRvYXN0LkJvZHkgPllvdXIgdm90ZSBoYXMgYmVlbiBzZW5kPC9Ub2FzdC5Cb2R5PiAqL31cclxuICAgICAgICAgICAgICAgIDwvVG9hc3Q+XHJcbiAgICAgICAgICAgIDwvVG9hc3RDb250YWluZXI+XHJcbiAgICBcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1Ym1pdFRvYXN0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBEYXkgZnJvbSAnLi9EYXknO1xyXG5jb25zdCBXZWVrID0gKHt3ZWVrRGF0YSwgYWN0aXZlRGF5LCBzZXRBY3RpdmVEYXl9KSA9PiB7XHJcblxyXG5cclxuICAgIGNvbnN0IFt3ZWVrLCBzZXRXZWVrXSA9ICB1c2VTdGF0ZSh3ZWVrRGF0YSk7XHJcbiAgICBjb25zdCBbZGF0YUxvYWRlZCwgc2V0RGF0YUxvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBcclxuICAgIGxldCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB3ZWVrRGF0YSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgc2V0RGF0YUxvYWRlZCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFt3ZWVrXSk7XHJcbiAgICBcclxuICAgIC8vIGNvbnNvbGUubG9nKGFjdGl2ZURheS5kYXRlKTtcclxuICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG5cclxuICAgICAgICB7ZGF0YUxvYWRlZCA/IChcclxuICAgICAgICAgICAgICAgIHdlZWsubWFwKChkYXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPERheSBcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZCsnLScrZGF5Lm1vbnRoTnVtYmVyLnRvU3RyaW5nKCkgK1wiLVwiKyBkYXkubnVtYmVyLnRvU3RyaW5nKCl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlEYXRhID0ge2RheX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZURheT17YWN0aXZlRGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVEYXk9e3NldEFjdGl2ZURheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAnZmFsc2UnXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICl9ICAgXHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBXZWVrIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCb3ggZnJvbSAnLi4vY29tcG9uZW50cy9ob21lcGFnZS9Cb3gnO1xyXG5pbXBvcnQgRGlzY2xhaW1lciBmcm9tICcuLi9jb21wb25lbnRzL2hvbWVwYWdlL0Rpc2NsYWltZXInO1xyXG5cclxuY29uc3QgSG9tZXBhZ2UgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgYm94MSA9IHtcclxuICAgICAgICAndGl0bGUnOiAnQ3JlYXRlIHBhcnR5JyxcclxuICAgICAgICAnaWNvbic6ICdmYS1yZWd1bGFyIGZhLXVzZXJzLWJldHdlZW4tbGluZXMgZmEtOHggbS0zIG1iLTUnLFxyXG4gICAgICAgICd0ZXh0JzogJ01ha2UgYSBuZXcgcmVjb3VyaW5nIGFjdGl2aXR5IHRvIG1hbmFnZSdcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYm94MiA9IHtcclxuICAgICAgICAndGl0bGUnOiAnQWRkIE1lbWJlcnMnLFxyXG4gICAgICAgICdpY29uJzogJ2ZhLXJlZ3VsYXIgZmEtcGVvcGxlLXB1bGxpbmcgZmEtOHggbS0zIG1iLTUnLFxyXG4gICAgICAgICd0ZXh0JzogXCJJbnZpdGUgeW91ciBmcmllbmRzXCJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYm94MyA9IHtcclxuICAgICAgICAndGl0bGUnOiAnRmluZCBkYXRlJyxcclxuICAgICAgICAnaWNvbic6ICdmYS1yZWd1bGFyIGZhLWNhbGVuZGFyLWNoZWNrIGZhLTh4IG0tMyBtYi01JyxcclxuICAgICAgICAndGV4dCc6ICcgUGxhY2UgeW91ciB2b3RlcyBhbmQgYXBwIHdpbGwgZG8gdGhlIHJlc3QnXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJveENvbnRlbnQgPSBbYm94MSwgYm94MiwgYm94M107XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0zJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteGwtOSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpc2NsYWltZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZGlzcGxheS02IHRleHQtY2VudGVyIHVuaXZlcnNhbC1zaGFkb3ctdGV4dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdlbGNvbWVcclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14bC05Jz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2xlYWQnPlxyXG4gICAgICAgICAgICAgICAgICAgIEhBUk1PTiBpcyBhbiBhcHAgdGhhdCBoZWxwcyB0byBmaW5kIG1hdGNoaW5nIHNjaGVkdWxlcyBpbiBwYXJ0eSBvZiBmZXcgcGVvcGUgYXJyYW5nZWQgZm9yIHJlY2N1cmluZ1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2aXRpZXMgbGlrZSBzcG9ydHMsIGJvYXJkIGdhbWVzLCBkaWdpdGFsIGdhbWVzIG9yIHBva2VyLiBUaGUgbWV0aG9kb2xvZ3kgaXMgd3JwYWVkIGluIDMgc2lwbXBsZSBwaW50cyBiZWxvd1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dCB5b3Ugd2lsbCBmaW5kICBtb3JlIGluIGRlcHRoIGluc3RydWN0cmlvbnMgdW5kZXIgPGI+dGhpcyBsaW5rPC9iPi4gWW91IGNhbiBhbHNvIGdldCBmdWxsIGRvY3VtZW50YXRpb24gb24gbXkgPGI+Z2l0aHViPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0zJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteGwtOSAnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBnLTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Ym94Q29udGVudC5tYXAoKGJveCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBrZXk9e2JveC50aXRsZX0gY29udGVudD17Ym94fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE91dGxldCwgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VMb2FkIGZyb20gJ3JlYWN0LXVzZS1sb2FkJztcclxuaW1wb3J0IHsgdXNlTG9hZFN0YXRlLCBMb2FkaW5nIH0gZnJvbSAncmVhY3QtdXNlLWxvYWQnO1xyXG4vLyBpbXBvcnQgdXNlTG9hZCBmcm9tICdyZWFjdC11c2UtbG9hZCc7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXYvTmF2QmFyJ1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHt1c2VyfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt1c2VySWQsc2V0VXNlcklkXSA9IHVzZVN0YXRlKHVzZXIpO1xyXG4gICAgXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgey8qIDxEYXRhQ29tcG9uZW50IC8+ICovfVxyXG4gICAgICAgICAgICB7LyogVXNlciA9IHt1c2VyfSAqL31cclxuICAgICAgICAgICAgPE5hdkJhciB1c2VyRGF0YT17dXNlcn0vPlxyXG4gICAgICAgICAgICA8T3V0bGV0IGNvbnRleHQ9e1t1c2VySWQsc2V0VXNlcklkXX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZGlzcGxheS01Jz5Mb2dvdXQ8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nb3V0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUGFydHlMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbXlBY3Rpdml0aWVzL1BhcnR5TGlzdCc7XHJcbmltcG9ydCBCb3ggZnJvbSAnLi4vY29tcG9uZW50cy9ob21lcGFnZS9Cb3gnO1xyXG5pbXBvcnQgRGlzY2xhaW1lciBmcm9tICcuLi9jb21wb25lbnRzL2hvbWVwYWdlL0Rpc2NsYWltZXInO1xyXG5pbXBvcnQgeyB1c2VPdXRsZXRDb250ZXh0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IE15QWN0aXZpdGllcyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbdXNlcixzZXRVc2VyXSA9ICB1c2VPdXRsZXRDb250ZXh0KCk7XHJcblxyXG4gICAgY29uc3QgYm94MSA9IHtcclxuICAgICAgICAndGl0bGUnOiAnQ3JlYXRlIHBhcnR5JyxcclxuICAgICAgICAnaWNvbic6ICdmYS1yZWd1bGFyIGZhLXVzZXJzLWJldHdlZW4tbGluZXMgZmEtOHggbS0zIG1iLTUnLFxyXG4gICAgICAgICd0ZXh0JzogJ01ha2UgYSBuZXcgcmVjb3VyaW5nIGFjdGl2aXR5IHRvIG1hbmFnZSdcclxuICAgIH07XHJcblxyXG5cclxuICAgIC8vIGNvbnN0IGJveENvbnRlbnQgPSBbYm94MSwgYm94MiwgYm94M107XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgey8qIGFjdGkgOiB7dXNlcn0gKi99XHJcbiAgICAgICAgICAgIHsvKiB0aXRsZSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTQnPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZGlzcGxheS02IHRleHQtY2VudGVyIHVuaXZlcnNhbC1zaGFkb3ctdGV4dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgTGlzdCBvZiBwYXJ0aWVzXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiB0YWJsZSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTQnPlxyXG4gICAgICAgICAgICAgICAgPFBhcnR5TGlzdCB1c2VyRGF0YT17dXNlcn0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFjdGl2aXRpZXM7IiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXVpZCBmcm9tICdyZWFjdC11dWlkJztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBXZWVrIGZyb20gJy4uL2NvbXBvbmVudHMvcGFydHkvV2Vlayc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvcGFydHkvRm9ybSc7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcclxuXHJcblxyXG5cclxuY29uc3QgUGFydHkgPSAoKSA9PiB7XHJcblxyXG4gICAgbGV0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG5cclxuICAgIGNvbnN0IFthY3RpdmVEYXksIHNldEFjdGl2ZURheV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIC8vIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSB1c2VRdWVyeShbJ2NhbGVuZGFyJ10sICgpID0+IGdldENhbGVuZGFyRGF0YSgpKTtcclxuICAgIC8vIGNvbnN0IHtnYW1lZGF0YSAsIGdhbWVEYXRhU3RhdHVzfSA9IHVzZVF1ZXJ5KFsnZ2FtZSddLCAoKSA9PiBnZXRHYW1lRGF0YSgpKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IGdhbWUsIHN0YXR1czogZ2FtZVN0YXR1cyB9ID0gdXNlUXVlcnkoe1xyXG4gICAgICAgIHF1ZXJ5S2V5OiBbJ2dhbWVEYXRhJ10sIFxyXG4gICAgICAgIHF1ZXJ5Rm46ICgpID0+IGdldEdhbWVEYXRhKCksXHJcbiAgICAgICAgLy8gcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHVzZVF1ZXJ5KHtcclxuICAgICAgICBxdWVyeUtleTogWydjYWxlbmRhciddLCBcclxuICAgICAgICBxdWVyeUZuOiAoKSA9PiBnZXRDYWxlbmRhckRhdGEoKSxcclxuICAgICAgICByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIFxyXG4gXHJcblxyXG4gICAgY29uc3QgZ2V0Q2FsZW5kYXJEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNhbGVuZGFyUm91dGUgPSAnaHR0cDovLzEyNy4wLjAuMS9hcGkvY2FsZW5kYXIvJysgaWQgO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goY2FsZW5kYXJSb3V0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRHYW1lRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBnYW1lUm91dGUgPSAnaHR0cDovLzEyNy4wLjAuMS9hcGkvZ2FtZS1kYXRhLycrIGlkIDtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGdhbWVSb3V0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEsIHN0YXR1cyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhnYW1lLCBnYW1lU3RhdHVzKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTQnPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZGlzcGxheS02IHRleHQtY2VudGVyIHVuaXZlcnNhbC1zaGFkb3ctdGV4dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgUGFydHkgWFhYXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTNcIj5cclxuICAgICAgICAgICAgICAgIHsvKiB0YWJsZSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgY2FsZW5kYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNhcHRpb24gY2xhc3NOYW1lPVwiYmctZGFyayBiZy1ncmFkaWVudFwiID5NT05USCBESVNQTEFZPC9jYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Nb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+VHVlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPldlZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5UaHU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+RnJpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlNhdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5TdW48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdHVzID09ICdzdWNjZXNzJyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuY2FsZW5kYXIubWFwKCh3ZWVrLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdlZWsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWQrJy0nK2luZGV4fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Vla0RhdGEgPSB7d2Vla30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZURheT17YWN0aXZlRGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVEYXk9e3NldEFjdGl2ZURheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoPHRyPjx0ZD5sb2FkaW5nPC90ZD48L3RyPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+ICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBGT1JNICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIGFjdGl2ZURheT17YWN0aXZlRGF5fS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7Z2FtZVN0YXR1cyA9PSAnc3VjY2VzcycgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYmctbGlnaHQgZm9ybS1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHBhcnR5LWhlYWRlciBiZy1kYXJrIGJnLWdyYWRpZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUEFSVFkgSU5GT1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFydHktbmFtZSBib3JkZXItYm90dG9tIHB0LTIgcGItM1wiPjxiPjxzcGFuIGNsYXNzTmFtZT1cImluZm8tbGFiZWwgYmctd2hpdGVcIj5QQVJUWSBOQU1FPC9zcGFuPjwvYj4ge2dhbWUucGFydHlJbmZvLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFydHktbmFtZSAgYm9yZGVyLWJvdHRvbSBwdC0yIHBiLTNcIj48Yj48c3BhbiBjbGFzc05hbWU9XCJpbmZvLWxhYmVsIGJnLXdoaXRlXCI+QUNUSVZJVFk8L3NwYW4+PC9iPiB7Z2FtZS5wYXJ0eUluZm8uYWN0aXZpdHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluZm8tZGlzcGxheSBib3JkZXItYm90dG9tICAgcGItM1wiPjxiPjxzcGFuIGNsYXNzTmFtZT1cImluZm8tbGFiZWwgYmctd2hpdGVcIj5ERVNDUklQVElPTjwvc3Bhbj48L2I+IHtnYW1lLnBhcnR5SW5mby5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5mby1kaXNwbGF5IGJvcmRlci1ib3R0b20gcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPjxzcGFuIGNsYXNzTmFtZT1cImluZm8tbGFiZWwgYmctd2hpdGVcIj5NRU1CRVJTPC9zcGFuPjwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2FtZS5wYXJ0eUluZm8uYWN0aXZlTWVtYmVycy5tYXAoKHBsYXllcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbGF5ZXItbmFtZVwiPiB7cGxheWVyLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogJyd9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXJ0eTsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgUmVhZG1lID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZGlzcGxheS01Jz5SZWFkbWU8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhZG1lOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiUmVhY3QiLCJjcmVhdGVSb290IiwiQnJvd3NlclJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwiTG9nb3V0IiwiTGF5b3V0IiwiSG9tZXBhZ2UiLCJSZWFkbWUiLCJQYXJ0eSIsIk15QWN0aXZpdGllcyIsInV1aWQiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJ1c2VRdWVyeSIsIk1haW4iLCJjaGVja0lmTG9nZ2VkSW4iLCJyb3V0ZSIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiTWFpblBhZ2UiLCJxdWVyeUNsaWVudCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwicmVxdWlyZSIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJjb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJCb3giLCJjb250ZW50IiwidGl0bGUiLCJpY29uIiwidGV4dCIsIkRpc2NsYWltZXIiLCJhc3luYyIsIkxpbmsiLCJPdmVybGF5VHJpZ2dlciIsIlRvb2x0aXAiLCJQYXJ0eUl0ZW0iLCJhY3Rpdml0eSIsInVzZXJEYXRhIiwicGFydHlSb3V0ZSIsImlkIiwiaW52aXRhdGlvbmFsTGluayIsInNsdWciLCJvcHRpb25zVG9vbHRpcCIsInByb3BzIiwiaG9zdFRvb2x0aXAiLCJkZXNjcmlwdGlvblRvb2x0aXAiLCJkZXNjcmlwdGlvbiIsImxvY2tlZFRvb2x0aXAiLCJsaW5rVG9vbHRpcCIsImNvcHlJbnZpTGluayIsInRleHRGaWVsZCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsInJlbW92ZSIsImFsZXJ0IiwiaG9zdGVkIiwic2hvdyIsImhpZGUiLCJuYW1lIiwicGxheWVycyIsImxvY2tlZCIsIlBhcnR5TGlzdCIsImFjdGl2aXR5TGlzdCIsInNldEFjdGl2aXR5TGlzdCIsImdldEFjdGl2aXR5TGlzdCIsImFjdGl2aXR5VGFibGUiLCJtYXAiLCJOYXZJdGVtIiwiTmF2YmFyIiwibmF2SXRlbTEiLCJuYXZJdGVtMiIsIm5hdkl0ZW0zIiwibmF2SXRlbTQiLCJuYXZJdGVtNSIsIm5hdkl0ZW02IiwibmF2SXRlbTciLCJhbGxOYXZiYXJJdGVtcyIsIm5hdmJhciIsInNldE5hdmJhciIsImNyZWF0ZU5hdmJhciIsIm5hdmJhckNvbnRlbnQiLCJmb3JFYWNoIiwiaXRlbSIsInR5cGUiLCJwdXNoIiwibmF2SXRlbSIsIk91dGxldCIsInVzZVBhcmFtcyIsIkRheSIsImRheURhdGEiLCJzZXRBY3RpdmVEYXkiLCJhY3RpdmVEYXkiLCJkYXRlU3RyaW5nIiwiZGF0ZSIsInN1YnN0cmluZyIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsImdldERheURhdGEiLCJyZWZldGNoT25XaW5kb3dGb2N1cyIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJwaWNrRGF0ZSIsImRheSIsImRheUluZm8iLCJ0b2RheSIsIm51bWJlciIsInJlbWFpbmluZ1ZvdGVycyIsInBsYXllclN0YXR1cyIsInVzZU11dGF0aW9uIiwidXNlUXVlcnlDbGllbnQiLCJBbmltYXRlSGVpZ2h0IiwiVG9hc3QiLCJTdWJtaXRUb2FzdCIsIkZvcm0iLCJzZXREYXkiLCJtb250aCIsInNldE1vbnRoIiwieWVhciIsInNldFllYXIiLCJ2b3RlU3RhdHVzIiwic2V0Vm90ZVN0YXR1cyIsImdldFZvdGVzIiwic3BsaXRlZERhdGUiLCJzcGxpdCIsInBhcnNlSW50IiwiY2hlY2tWb3RlU3RhdHVzIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRhdGFNdXRhdGlvbiIsIm11dGF0aW9uRm4iLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJtZXRob2QiLCJvblN1Y2Nlc3MiLCJpbnZhbGlkYXRlUXVlcmllcyIsImRlbGV0ZVZvdGVNdXRhdGlvbiIsInZvdGVJZCIsImNvbmZpcm0iLCJtdXRhdGUiLCJob3VycyIsInJhbmdlIiwic3RhcnQiLCJmaW5pc2giLCJ2b3RlcyIsImlzU3VjY2VzcyIsIlRvYXN0Q29udGFpbmVyIiwiQnV0dG9uIiwiQ29sIiwiUm93IiwibWVzc2FnZSIsInNob3dBIiwic2V0U2hvd0EiLCJ0b2dnbGVTaG93QSIsIldlZWsiLCJ3ZWVrRGF0YSIsIndlZWsiLCJzZXRXZWVrIiwiZGF0YUxvYWRlZCIsInNldERhdGFMb2FkZWQiLCJtb250aE51bWJlciIsInRvU3RyaW5nIiwiYm94MSIsImJveDIiLCJib3gzIiwiYm94Q29udGVudCIsImJveCIsInVzZUxvYWQiLCJ1c2VMb2FkU3RhdGUiLCJMb2FkaW5nIiwiTmF2QmFyIiwidXNlcklkIiwic2V0VXNlcklkIiwidXNlT3V0bGV0Q29udGV4dCIsInNldFVzZXIiLCJnZXRHYW1lRGF0YSIsImdhbWUiLCJnYW1lU3RhdHVzIiwiZ2V0Q2FsZW5kYXJEYXRhIiwiY2FsZW5kYXJSb3V0ZSIsImdhbWVSb3V0ZSIsImNhbGVuZGFyIiwiaW5kZXgiLCJwYXJ0eUluZm8iLCJhY3RpdmVNZW1iZXJzIiwicGxheWVyIl0sInNvdXJjZVJvb3QiOiIifQ==