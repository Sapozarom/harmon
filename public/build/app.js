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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement((react__WEBPACK_IMPORTED_MODULE_21___default().Fragment), null, status == "success" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_31__.BrowserRouter, null, "user : ", data.user, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_32__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_32__.Route, {
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
    if (typeof activeDay !== 'undefined' && activeDay.date == dayData.date) {
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
  })) : '', data.dayInfo.status == "VOTED" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "players-left-to-vote",
    "data-bs-toggle": "tooltip",
    "data-bs-title": "{{day.playersLeftToVote}} more to vote"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("i", {
    className: "fa-sharp fa-solid fa-arrows-rotate"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("b", null, dayData.playersLeftToVote)) : '', data.dayInfo.status == "MISSED" ?
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
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useMutation.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Form = function Form(_ref) {
  var activeDay = _ref.activeDay;
  var queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_16__.useQueryClient)();

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_17__.useParams)(),
      id = _useParams.id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      day = _useState2[0],
      setDay = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      month = _useState4[0],
      setMonth = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      year = _useState6[0],
      setYear = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(1),
      _useState8 = _slicedToArray(_useState7, 2),
      voteStatus = _useState8[0],
      setVoteStatus = _useState8[1];

  (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(function () {
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

  var dataMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_18__.useMutation)({
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
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement((react__WEBPACK_IMPORTED_MODULE_15___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("p", {
    className: "lead"
  }, day, "-", month, "-", year), typeof activeDay !== 'undefined' ? activeDay.status : 'status unknown', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("form", {
    name: "vote",
    method: "post",
    onSubmit: dataMutation.mutate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "col-4"
  }, "Your vote"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("select", {
    className: voteStatus == 0 ? "form-select bg-red" : "form-select bg-green",
    onChange: checkVoteStatus,
    id: "vote_vote",
    name: "vote[vote]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    className: "bg-green",
    value: "1"
  }, "I'm in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    className: "bg-red",
    value: "0"
  }, "I'm out"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "row hidden-date"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "col-4"
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("select", {
    className: "form-select",
    id: "vote_date_month",
    name: "vote[date][month]",
    readOnly: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    selected: true,
    value: month
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("select", {
    className: "form-select",
    id: "vote_date_day",
    name: "vote[date][day]",
    readOnly: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    selected: true,
    value: day
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("select", {
    className: "form-select",
    id: "vote_date_year",
    name: "vote[date][year]",
    readOnly: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    selected: true,
    value: year
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "row mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "col-4"
  }, "Start time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "form-time-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("select", {
    className: "form-select ",
    id: "vote_startTime_hour",
    name: "vote[startTime][hour]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "0"
  }, "00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "1"
  }, "01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "2"
  }, "02"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "3"
  }, "03"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "4"
  }, "04"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "5"
  }, "05"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "6"
  }, "06"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "7"
  }, "07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "8"
  }, "08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "9"
  }, "09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "11"
  }, "11"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "12"
  }, "12"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "13"
  }, "13"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "14"
  }, "14"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "15"
  }, "15"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "16"
  }, "16"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "17"
  }, "17"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "18"
  }, "18"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "19"
  }, "19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "20"
  }, "20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "21"
  }, "21"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "22"
  }, "22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "23"
  }, "23"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "form-time-separator"
  }, ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "form-time-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("select", {
    className: "form-select",
    id: "vote_startTime_minute",
    name: "vote[startTime][minute]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "0"
  }, "00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "1"
  }, "01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "2"
  }, "02"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "3"
  }, "03"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "4"
  }, "04"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "5"
  }, "05"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "6"
  }, "06"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "7"
  }, "07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "8"
  }, "08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "9"
  }, "09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "11"
  }, "11"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "12"
  }, "12"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "13"
  }, "13"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "14"
  }, "14"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "15"
  }, "15"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "16"
  }, "16"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "17"
  }, "17"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "18"
  }, "18"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "19"
  }, "19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "20"
  }, "20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "21"
  }, "21"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "22"
  }, "22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "23"
  }, "23"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "24"
  }, "24"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "25"
  }, "25"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "26"
  }, "26"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "27"
  }, "27"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "28"
  }, "28"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "29"
  }, "29"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "30"
  }, "30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "31"
  }, "31"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "32"
  }, "32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "33"
  }, "33"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "34"
  }, "34"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "35"
  }, "35"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "36"
  }, "36"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "37"
  }, "37"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "38"
  }, "38"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "39"
  }, "39"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "40"
  }, "40"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "41"
  }, "41"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "42"
  }, "42"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "43"
  }, "43"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "44"
  }, "44"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "45"
  }, "45"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "46"
  }, "46"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "47"
  }, "47"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "48"
  }, "48"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "49"
  }, "49"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "50"
  }, "50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "51"
  }, "51"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "52"
  }, "52"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "53"
  }, "53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "54"
  }, "54"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "55"
  }, "55"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "56"
  }, "56"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "57"
  }, "57"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "58"
  }, "58"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "59"
  }, "59"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "row mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "col-4"
  }, "Finish time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "form-time-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("select", {
    className: "form-select",
    id: "vote_finishTime_hour",
    name: "vote[finishTime][hour]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "0"
  }, "00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "1"
  }, "01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "2"
  }, "02"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "3"
  }, "03"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "4"
  }, "04"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "5"
  }, "05"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "6"
  }, "06"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "7"
  }, "07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "8"
  }, "08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "9"
  }, "09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "11"
  }, "11"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "12"
  }, "12"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "13"
  }, "13"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "14"
  }, "14"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "15"
  }, "15"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "16"
  }, "16"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "17"
  }, "17"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "18"
  }, "18"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "19"
  }, "19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "20"
  }, "20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "21"
  }, "21"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "22"
  }, "22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "23"
  }, "23"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "form-time-separator"
  }, ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "form-time-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("select", {
    className: "form-select",
    id: "vote_finishTime_minute",
    name: "vote[finishTime][minute]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "0"
  }, "00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "1"
  }, "01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "2"
  }, "02"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "3"
  }, "03"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "4"
  }, "04"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "5"
  }, "05"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "6"
  }, "06"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "7"
  }, "07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "8"
  }, "08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "9"
  }, "09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "11"
  }, "11"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "12"
  }, "12"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "13"
  }, "13"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "14"
  }, "14"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "15"
  }, "15"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "16"
  }, "16"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "17"
  }, "17"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "18"
  }, "18"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "19"
  }, "19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "20"
  }, "20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "21"
  }, "21"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "22"
  }, "22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "23"
  }, "23"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "24"
  }, "24"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "25"
  }, "25"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "26"
  }, "26"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "27"
  }, "27"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "28"
  }, "28"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "29"
  }, "29"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "30"
  }, "30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "31"
  }, "31"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "32"
  }, "32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "33"
  }, "33"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "34"
  }, "34"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "35"
  }, "35"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "36"
  }, "36"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "37"
  }, "37"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "38"
  }, "38"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "39"
  }, "39"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "40"
  }, "40"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "41"
  }, "41"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "42"
  }, "42"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "43"
  }, "43"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "44"
  }, "44"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "45"
  }, "45"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "46"
  }, "46"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "47"
  }, "47"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "48"
  }, "48"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "49"
  }, "49"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "50"
  }, "50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "51"
  }, "51"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "52"
  }, "52"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "53"
  }, "53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "54"
  }, "54"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "55"
  }, "55"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "56"
  }, "56"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "57"
  }, "57"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "58"
  }, "58"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("option", {
    value: "59"
  }, "59"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "row mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("button", {
    type: "submit",
    className: "btn btn-dark"
  }, "Save")))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

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
      setActiveDay = _useState2[1];

  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_30__.useQuery)(['calendar'], function () {
    return getCalendarData();
  }),
      data = _useQuery.data,
      status = _useQuery.status;

  var getCalendarData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var loginRoute, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              loginRoute = 'http://127.0.0.1/api/calendar/' + id;
              _context.next = 3;
              return fetch(loginRoute);

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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement((react__WEBPACK_IMPORTED_MODULE_25___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "row justify-content-center mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("h1", {
    className: "display-6 text-center universal-shadow-text"
  }, "Party XXX")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "col-lg-6"
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
    className: "col-lg-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(_components_party_Form__WEBPACK_IMPORTED_MODULE_28__["default"], {
    activeDay: activeDay
  }))));
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-51353b"], () => (__webpack_exec__("./assets/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQSxpRUFBZTtBQUNmLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0REO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7V0FFSSxtQkFBVTtNQUNOLEtBQUtDLE9BQUwsQ0FBYUMsV0FBYixHQUEyQixtRUFBM0I7SUFDSDs7OztFQUh3QkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQ1Y3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBOztBQUNBOztBQUdBLElBQU1rQixJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0VBRWYsSUFBTUMsZUFBZTtJQUFBLHNFQUFHO01BQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUNkQyxLQURjLEdBQ04sbUJBRE07Y0FBQTtjQUFBLE9BRUdDLEtBQUssQ0FBQ0QsS0FBRCxDQUZSOztZQUFBO2NBRWRFLFFBRmM7Y0FBQSxpQ0FHYkEsUUFBUSxDQUFDQyxJQUFULEVBSGE7O1lBQUE7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUEsQ0FBSDs7SUFBQSxnQkFBZkosZUFBZTtNQUFBO0lBQUE7RUFBQSxHQUFyQjs7RUFNQSxnQkFBeUJGLGdFQUFRLENBQUMsQ0FBQyxNQUFELENBQUQsRUFBVztJQUFBLE9BQU1FLGVBQWUsRUFBckI7RUFBQSxDQUFYLENBQWpDO0VBQUEsSUFBUUssSUFBUixhQUFRQSxJQUFSO0VBQUEsSUFBY0MsTUFBZCxhQUFjQSxNQUFkLENBUmUsQ0FZZjs7O0VBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaLEVBQWtCQyxNQUFsQjtFQUVBLG9CQUNJLDRIQUNDQSxNQUFNLElBQUksU0FBVixnQkFDRyw0REFBQyw0REFBRCxtQkFDUUQsSUFBSSxDQUFDSSxJQURiLGVBRUksNERBQUMscURBQUQscUJBQ0ksNERBQUMsb0RBQUQ7SUFBTyxJQUFJLEVBQUMsR0FBWjtJQUFnQixPQUFPLGVBQUUsNERBQUMsc0RBQUQ7TUFBUSxJQUFJLEVBQUVKLElBQUksQ0FBQ0k7SUFBbkI7RUFBekIsZ0JBQ1EsNERBQUMsb0RBQUQ7SUFBTyxLQUFLLE1BQVo7SUFBYSxPQUFPLGVBQUUsNERBQUMsd0RBQUQ7RUFBdEIsRUFEUixlQUVRLDREQUFDLG9EQUFEO0lBQU8sSUFBSSxFQUFDLFFBQVo7SUFBcUIsT0FBTyxlQUFFLDREQUFDLHNEQUFEO0VBQTlCLEVBRlIsZUFHUSw0REFBQyxvREFBRDtJQUFPLElBQUksRUFBQyxlQUFaO0lBQTRCLE9BQU8sZUFBRSw0REFBQyw0REFBRDtFQUFyQyxFQUhSLGVBSVEsNERBQUMsb0RBQUQ7SUFBTyxJQUFJLEVBQUMsZ0JBQVo7SUFBNkIsT0FBTyxlQUFFLDREQUFDLHFEQUFEO0VBQXRDLEVBSlIsZUFLUSw0REFBQyxvREFBRDtJQUFPLElBQUksRUFBQyxRQUFaO0lBQXFCLE9BQU8sZUFBRSw0REFBQyxzREFBRDtFQUE5QixFQUxSLENBREosQ0FGSixDQURILEdBY0csU0FmSixDQURKO0FBcUJILENBcENEOztBQXdDQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0VBRW5CLElBQU1DLFdBQVcsR0FBRyxJQUFJZiwrREFBSixFQUFwQjtFQUVJLG9CQUNJLDREQUFDLHVFQUFEO0lBQXFCLE1BQU0sRUFBRWU7RUFBN0IsZ0JBQ0ksNERBQUMsSUFBRCxPQURKLENBREo7QUFLUCxDQVREOztBQVdBLGlFQUFlRCxRQUFmO0FBRUEsSUFBTUUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBbEI7QUFDQSxJQUFNQyxJQUFJLEdBQUc5Qiw2REFBVSxDQUFDMkIsU0FBRCxDQUF2QjtBQUNBRyxJQUFJLENBQUNDLE1BQUwsZUFDSSw0REFBQyxRQUFELE9BREo7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7O0FBRUFDLG1CQUFPLENBQUMsbUNBQUQsQ0FBUDs7Ozs7Ozs7Ozs7Ozs7OztDQ2JBOztBQUNPLElBQU1FLEdBQUcsR0FBR0QsMEVBQWdCLENBQUNELDRJQUFELENBQTVCLEVBTVA7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTs7QUFHQSxJQUFNTyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFlO0VBQUEsSUFBYkMsT0FBYSxRQUFiQSxPQUFhO0VBQ25CLG9CQUNBLHVJQUNJO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBQ0k7SUFBSyxTQUFTLEVBQUM7RUFBZixHQUNLQSxPQUFPLENBQUNDLEtBRGIsQ0FESixlQUlJO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBQ0k7SUFBRyxTQUFTLEVBQUVELE9BQU8sQ0FBQ0U7RUFBdEIsRUFESixDQUpKLGVBT0k7SUFBSyxTQUFTLEVBQUM7RUFBZixHQUNLRixPQUFPLENBQUNHLElBRGIsQ0FQSixDQURKLENBREE7QUFlSCxDQWhCTDs7QUFtQkEsaUVBQWVKLEdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBOztBQUVBLElBQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07RUFDakIsb0JBQ0EsdUlBQ0k7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDSTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNJO0lBQUssU0FBUyxFQUFDLG9CQUFmO0lBQW9DLElBQUksRUFBQztFQUF6QyxnQkFDSTtJQUFJLFNBQVMsRUFBQztFQUFkLG1CQURKLGVBRUksbUZBQ0EsNkdBREEsQ0FGSixlQU1JLGtUQU5KLGVBWUksdUtBWkosZUFpQkksMktBakJKLENBREosQ0FESixDQURKLENBREE7QUE4QkgsQ0EvQkw7O0FBa0NBLGlFQUFlQSxVQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUssU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBMEI7RUFBQSxJQUF4QkMsUUFBd0IsUUFBeEJBLFFBQXdCO0VBQUEsSUFBZEMsUUFBYyxRQUFkQSxRQUFjO0VBRXhDLElBQU1DLFVBQVUsR0FBRyxpQkFBaUJGLFFBQVEsQ0FBQ0csRUFBN0M7RUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBa0JKLFFBQVEsQ0FBQ0ssSUFBcEQ7O0VBRUksSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFEO0lBQUEsb0JBQ3JCLDJEQUFDLCtEQUFEO01BQVMsRUFBRSxFQUFDO0lBQVosR0FBa0NBLEtBQWxDLGFBRHFCO0VBQUEsQ0FBdkI7O0VBTUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0QsS0FBRDtJQUFBLG9CQUNoQiwyREFBQywrREFBRDtNQUFTLEVBQUUsRUFBQztJQUFaLEdBQWtDQSxLQUFsQywrQkFEZ0I7RUFBQSxDQUFwQjs7RUFNQSxJQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNGLEtBQUQ7SUFBQSxvQkFDdkIsMkRBQUMsK0RBQUQ7TUFBUyxFQUFFLEVBQUM7SUFBWixHQUFzQ0EsS0FBdEMsR0FDR1AsUUFBUSxDQUFDVSxXQURaLENBRHVCO0VBQUEsQ0FBM0I7O0VBTUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDSixLQUFEO0lBQUEsb0JBQ3RCLDJEQUFDLCtEQUFEO01BQVMsRUFBRSxFQUFDO0lBQVosR0FBaUNBLEtBQWpDLG9CQURzQjtFQUFBLENBQXRCOztFQU1BLElBQU1LLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNMLEtBQUQ7SUFBQSxvQkFDaEIsMkRBQUMsK0RBQUQ7TUFBUyxFQUFFLEVBQUM7SUFBWixHQUErQkEsS0FBL0IscUNBRGdCO0VBQUEsQ0FBcEI7O0VBTUEsSUFBTU0sWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtJQUN2QjtJQUNBLElBQUlDLFNBQVMsR0FBR3BDLFFBQVEsQ0FBQ3FDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBaEI7SUFDQUQsU0FBUyxDQUFDRSxTQUFWLEdBQXNCWixnQkFBdEI7SUFDQTFCLFFBQVEsQ0FBQ3VDLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkosU0FBMUI7SUFDQUEsU0FBUyxDQUFDSyxNQUFWO0lBQ0F6QyxRQUFRLENBQUMwQyxXQUFULENBQXFCLE1BQXJCO0lBQ0FOLFNBQVMsQ0FBQ08sTUFBVjtJQUNBQyxLQUFLLENBQUNsQixnQkFBRCxDQUFMO0VBQ0gsQ0FURDs7RUFVSixvQkFDUSx1SUFDSSxvRkFDSTtJQUFLLFNBQVMsRUFBQztFQUFmLEdBQ0tKLFFBQVEsQ0FBQ3VCLE1BQVQsSUFBbUJ0QixRQUFuQixnQkFFRywyREFBQyxzRUFBRDtJQUNBLEtBQUssRUFBRTtNQUFFdUIsSUFBSSxFQUFFLEdBQVI7TUFBYUMsSUFBSSxFQUFFO0lBQW5CLENBRFA7SUFFQSxPQUFPLEVBQUVqQjtFQUZULGdCQUlBO0lBQUcsRUFBRSxFQUFDLGFBQU47SUFBb0IsU0FBUyxFQUFDLGlDQUE5QjtJQUFnRSxrQkFBZSxPQUEvRTtJQUF3RixrQkFBZTtFQUF2RyxPQUpBLENBRkgsZ0JBWUcsMkRBQUMsc0VBQUQ7SUFDQSxLQUFLLEVBQUU7TUFBRWdCLElBQUksRUFBRSxHQUFSO01BQWFDLElBQUksRUFBRTtJQUFuQixDQURQO0lBRUEsT0FBTyxFQUFFbkI7RUFGVCxnQkFJQTtJQUFHLEVBQUUsRUFBQyxhQUFOO0lBQW9CLFNBQVMsRUFBQyw2QkFBOUI7SUFBNEQsa0JBQWUsT0FBM0U7SUFBbUYsaUJBQWMsU0FBakc7SUFBMkcsa0JBQWU7RUFBMUgsRUFKQSxDQWJSLENBREosZUF1Qkk7SUFBSSxTQUFTLEVBQUM7RUFBZCxHQUNLTixRQUFRLENBQUMwQixJQURkLENBdkJKLGVBMEJJO0lBQUksU0FBUyxFQUFDO0VBQWQsZ0JBQ0ksMkRBQUMsc0VBQUQ7SUFDSSxLQUFLLEVBQUU7TUFBRUYsSUFBSSxFQUFFLEdBQVI7TUFBYUMsSUFBSSxFQUFFO0lBQW5CLENBRFg7SUFFSSxPQUFPLEVBQUVoQjtFQUZiLGdCQUlJO0lBQUcsU0FBUyxFQUFDO0VBQWIsRUFKSixDQURKLENBMUJKLGVBa0NJO0lBQUksU0FBUyxFQUFDO0VBQWQsR0FDS1QsUUFBUSxDQUFDVCxLQURkLENBbENKLGVBcUNJO0lBQUksU0FBUyxFQUFDO0VBQWQsR0FDS1MsUUFBUSxDQUFDMkIsT0FEZCxDQXJDSixlQXdDSTtJQUFJLFNBQVMsRUFBQztFQUFkLEdBQ0szQixRQUFRLENBQUM0QixNQUFULGdCQUVHLDJEQUFDLHNFQUFEO0lBQ0EsS0FBSyxFQUFFO01BQUVKLElBQUksRUFBRSxHQUFSO01BQWFDLElBQUksRUFBRTtJQUFuQixDQURQO0lBRUEsT0FBTyxFQUFFZDtFQUZULGdCQUlJO0lBQUcsU0FBUyxFQUFDO0VBQWIsRUFKSixDQUZILGdCQVVHLDJEQUFDLHNFQUFEO0lBQ0EsS0FBSyxFQUFFO01BQUVhLElBQUksRUFBRSxHQUFSO01BQWFDLElBQUksRUFBRTtJQUFuQixDQURQO0lBRUEsT0FBTyxFQUFFYjtFQUZULGdCQUlJO0lBQ0EsRUFBRSxFQUFDLGVBREg7SUFFQSxTQUFTLEVBQUMsNEJBRlY7SUFHQSxPQUFPLEVBQUVDO0VBSFQsRUFKSixDQVhSLENBeENKLGVBZ0VJO0lBQUksU0FBUyxFQUFDO0VBQWQsZ0JBaEVKLGVBbUVJO0lBQUksU0FBUyxFQUFDO0VBQWQsZ0JBQ0ksMkRBQUMsa0RBQUQ7SUFBTSxFQUFFLEVBQUVYLFVBQVY7SUFBc0IsU0FBUyxFQUFDO0VBQWhDLFlBREosQ0FuRUosQ0FESixDQURSO0FBNkVILENBMUhEOztBQTRIQSxpRUFBZUgsU0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0NsSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUFDQTs7QUFFQSxJQUFNOEIsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBZ0I7RUFBQSxJQUFkNUIsUUFBYyxRQUFkQSxRQUFjOztFQUc5QixnQkFBd0NmLGdEQUFRLENBQUMsRUFBRCxDQUFoRDtFQUFBO0VBQUEsSUFBTzRDLFlBQVA7RUFBQSxJQUFxQkMsZUFBckI7O0VBRUEsSUFBTUMsZUFBZTtJQUFBLHVFQUFHO01BQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUNkbEUsS0FEYyxHQUNOLG9CQURNO2NBQUE7Y0FBQSxPQUVHQyxLQUFLLFdBQUlELEtBQUosRUFGUjs7WUFBQTtjQUVkRSxRQUZjO2NBQUE7Y0FBQSxPQUdEQSxRQUFRLENBQUNDLElBQVQsRUFIQzs7WUFBQTtjQUdkQyxJQUhjO2NBS3BCNkQsZUFBZSxDQUFDN0QsSUFBSSxDQUFDK0QsYUFBTixDQUFmOztZQUxvQjtZQUFBO2NBQUE7VUFBQTtRQUFBO01BQUE7SUFBQSxDQUFIOztJQUFBLGdCQUFmRCxlQUFlO01BQUE7SUFBQTtFQUFBLEdBQXJCOztFQVFBNUMsaURBQVMsQ0FBQyxZQUFNO0lBQ1o0QyxlQUFlO0VBQ2xCLENBRlEsRUFFUCxFQUZPLENBQVQ7RUFJQSxvQkFDSSx5SUFDSTtJQUFPLFNBQVMsRUFBQztFQUFqQixnQkFDSSx3RkFDSSxxRkFDSTtJQUFJLFNBQVMsRUFBQyw0Q0FBZDtJQUEyRCxLQUFLLEVBQUM7RUFBakUsRUFESixlQUVJO0lBQUksU0FBUyxFQUFDLHVDQUFkO0lBQXNELEtBQUssRUFBQztFQUE1RCxXQUZKLGVBR0k7SUFBSSxTQUFTLEVBQUMsNENBQWQ7SUFBMkQsS0FBSyxFQUFDO0VBQWpFLEVBSEosZUFJSTtJQUFJLFNBQVMsRUFBQyx1Q0FBZDtJQUFzRCxLQUFLLEVBQUM7RUFBNUQsY0FKSixlQUtJO0lBQUksU0FBUyxFQUFDLHVDQUFkO0lBQXNELEtBQUssRUFBQztFQUE1RCxhQUxKLGVBTUk7SUFBSSxTQUFTLEVBQUMsdUNBQWQ7SUFBc0QsS0FBSyxFQUFDO0VBQTVELFlBTkosZUFPSTtJQUFJLFNBQVMsRUFBQyx1Q0FBZDtJQUFzRCxLQUFLLEVBQUM7RUFBNUQsa0JBUEosZUFRSTtJQUFJLFNBQVMsRUFBQyx1Q0FBZDtJQUFzRCxLQUFLLEVBQUM7RUFBNUQsVUFSSixDQURKLENBREosZUFhSSwyRUFDQ0YsWUFBWSxDQUFDSSxHQUFiLENBQWlCLFVBQUNsQyxRQUFEO0lBQUEsb0JBQ2QsNERBQUMsbURBQUQ7TUFBVyxHQUFHLEVBQUVBLFFBQVEsQ0FBQ0csRUFBekI7TUFBNkIsUUFBUSxFQUFFSCxRQUF2QztNQUFpRCxRQUFRLEVBQUVDO0lBQTNELEVBRGM7RUFBQSxDQUFqQixDQURELENBYkosQ0FESixDQURKO0FBeUJILENBMUNEOztBQTRDQSxpRUFBZTRCLFNBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7QUFDQTs7QUFHQSxJQUFNTyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFnQjtFQUFBLElBQWRuQyxRQUFjLFFBQWRBLFFBQWM7RUFFM0IsSUFBTW9DLFFBQVEsR0FBRztJQUNiLFFBQVEsTUFESztJQUViLFNBQVMsR0FGSTtJQUdiLFFBQVEsTUFISztJQUliLFVBQVU7RUFKRyxDQUFqQjtFQU9BLElBQU1DLFFBQVEsR0FBRztJQUNiLFFBQVEsZUFESztJQUViLFNBQVMsZ0JBRkk7SUFHYixRQUFRLFVBSEs7SUFJYixVQUFVO0VBSkcsQ0FBakI7RUFPQSxJQUFNQyxRQUFRLEdBQUc7SUFDYixRQUFRLFFBREs7SUFFYixTQUFTLFNBRkk7SUFHYixRQUFRLE1BSEs7SUFJYixVQUFVO0VBSkcsQ0FBakI7RUFPQSxJQUFNQyxRQUFRLEdBQUc7SUFDYixRQUFRLEdBREs7SUFFYixTQUFTLGNBRkk7SUFHYixRQUFRLFNBSEs7SUFJYixVQUFVO0VBSkcsQ0FBakI7RUFPQSxJQUFNQyxRQUFRLEdBQUc7SUFDYixRQUFRLFFBREs7SUFFYixTQUFTLFNBRkk7SUFHYixRQUFRLFVBSEs7SUFJYixVQUFVO0VBSkcsQ0FBakI7RUFPQSxJQUFNQyxRQUFRLEdBQUc7SUFDYixRQUFRLE9BREs7SUFFYixTQUFTLFFBRkk7SUFHYixRQUFRLFdBSEs7SUFJYixVQUFVO0VBSkcsQ0FBakI7RUFPQSxJQUFNQyxRQUFRLEdBQUc7SUFDYixRQUFRLFVBREs7SUFFYixTQUFTLFdBRkk7SUFHYixRQUFRLFdBSEs7SUFJYixVQUFVO0VBSkcsQ0FBakI7RUFPQSxJQUFNQyxjQUFjLEdBQUcsQ0FBQ1AsUUFBRCxFQUFXQyxRQUFYLEVBQXFCQyxRQUFyQixFQUErQkMsUUFBL0IsRUFBeUNDLFFBQXpDLEVBQW1EQyxRQUFuRCxFQUE2REMsUUFBN0QsQ0FBdkIsQ0FuRDJCLENBcUQzQjs7RUFDQSxnQkFBMkJ6RCxnREFBUSxDQUFDLEVBQUQsQ0FBbkM7RUFBQTtFQUFBLElBQU8yRCxNQUFQO0VBQUEsSUFBY0MsU0FBZCxpQkF0RDJCLENBdUQzQjs7O0VBQ0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtJQUN2QixJQUFNQyxhQUFhLEdBQUcsRUFBdEI7SUFDQUosY0FBYyxDQUFDSyxPQUFmLENBQXVCLFVBQUFDLElBQUksRUFBSTtNQUMzQixJQUFJakQsUUFBUSxJQUFJLElBQWhCLEVBQXNCO1FBQ2xCLElBQUlpRCxJQUFJLENBQUNDLElBQUwsSUFBYSxXQUFiLElBQTRCRCxJQUFJLENBQUNDLElBQUwsSUFBYSxNQUE3QyxFQUFzRDtVQUNsREgsYUFBYSxDQUFDSSxJQUFkLENBQW1CRixJQUFuQjtRQUNIO01BQ0osQ0FKRCxNQUlPO1FBQ0gsSUFBS0EsSUFBSSxDQUFDQyxJQUFMLElBQWEsVUFBYixJQUEyQkQsSUFBSSxDQUFDQyxJQUFMLElBQWEsU0FBeEMsSUFBcURELElBQUksQ0FBQ0MsSUFBTCxJQUFhLE1BQXZFLEVBQWdGO1VBQzVFSCxhQUFhLENBQUNJLElBQWQsQ0FBbUJGLElBQW5CO1FBQ0g7TUFDSjtJQUNKLENBVkQ7SUFXQUosU0FBUyxDQUFDRSxhQUFELENBQVQ7RUFDSCxDQWREOztFQWdCQTVELGlEQUFTLENBQUMsWUFBTTtJQUNaMkQsWUFBWTtFQUNmLENBRlEsRUFFUCxDQUFDOUMsUUFBRCxDQUZPLENBQVQ7RUFLSSxvQkFDSSx5SUFHSTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNJO0lBQUksU0FBUyxFQUFDO0VBQWQsWUFESixDQUhKLGVBT0k7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDSTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNJO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBQ0k7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFFSTtJQUFRLFNBQVMsRUFBQyxnQkFBbEI7SUFBbUMsSUFBSSxFQUFDLFFBQXhDO0lBQWlELGtCQUFlLFVBQWhFO0lBQTJFLGtCQUFlLFlBQTFGO0lBQXVHLGlCQUFjLFdBQXJIO0lBQWlJLGlCQUFjLE9BQS9JO0lBQXVKLGNBQVc7RUFBbEssZ0JBQ0k7SUFBTSxTQUFTLEVBQUM7RUFBaEIsRUFESixDQUZKLGVBT0k7SUFBSyxTQUFTLEVBQUMsaURBQWY7SUFBaUUsRUFBRSxFQUFDO0VBQXBFLGdCQUNJO0lBQUksU0FBUyxFQUFDO0VBQWQsR0FFSzRDLE1BQU0sQ0FBQ1gsR0FBUCxDQUFXLFVBQUNtQixPQUFEO0lBQUEsb0JBQ1IsNERBQUMsaURBQUQ7TUFBUyxHQUFHLEVBQUVBLE9BQU8sQ0FBQzNCLElBQXRCO01BQTRCLElBQUksRUFBRTJCLE9BQWxDO01BQTJDLElBQUksRUFBRXBEO0lBQWpELEVBRFE7RUFBQSxDQUFYLENBRkwsQ0FESixDQVBKLENBREosQ0FESixDQURKLENBUEosQ0FESjtBQWlDSCxDQTlHTDs7QUFpSEEsaUVBQWVtQyxNQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySEE7QUFDQTs7QUFFQSxJQUFNRCxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFrQjtFQUFBLElBQWhCZSxJQUFnQixRQUFoQkEsSUFBZ0I7RUFBQSxJQUFWNUUsSUFBVSxRQUFWQSxJQUFVOztFQUU5QjtFQUVBLElBQUk0RSxJQUFJLENBQUNDLElBQUwsSUFBYSxTQUFqQixFQUE0QjtJQUV4QixvQkFDSSx1SUFDSTtNQUFJLFNBQVMsRUFBQztJQUFkLGdCQUNJLDJEQUFDLGtEQUFEO01BQU0sRUFBRSxFQUFFRCxJQUFJLENBQUNwRixLQUFmO01BQXNCLFNBQVMsRUFBQztJQUFoQyxnQkFDSTtNQUFNLFNBQVMsRUFBRztJQUFsQixnQkFDSTtNQUFHLFNBQVMsRUFBQztJQUFiLEVBREosQ0FESixDQURKLENBREosQ0FESjtFQVdILENBYkQsTUFhTztJQUNILG9CQUNJLHVJQUNJO01BQUksU0FBUyxFQUFDO0lBQWQsZ0JBQ0ksMkRBQUMsa0RBQUQ7TUFBTSxFQUFFLEVBQUVvRixJQUFJLENBQUNwRixLQUFmO01BQXNCLFNBQVMsRUFBQztJQUFoQyxRQUFrRW9GLElBQUksQ0FBQ3hCLElBQXZFLE1BREosQ0FESixDQURKO0VBT0g7QUFFSixDQTNCRDs7QUE2QkEsaUVBQWVTLE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0MvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTXFCLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQXdDO0VBQUEsSUFBdENDLE9BQXNDLFFBQXRDQSxPQUFzQztFQUFBLElBQTdCQyxZQUE2QixRQUE3QkEsWUFBNkI7RUFBQSxJQUFmQyxTQUFlLFFBQWZBLFNBQWU7O0VBSWhELGlCQUFlSiw0REFBUyxFQUF4QjtFQUFBLElBQVFwRCxFQUFSLGNBQVFBLEVBQVI7O0VBQ0EsSUFBTXlELFVBQVUsR0FBR0gsT0FBTyxDQUFDSSxJQUFSLENBQWFDLFNBQWIsQ0FBdUIsQ0FBdkIsRUFBeUIsRUFBekIsQ0FBbkI7RUFDQSxJQUFNQyxRQUFRLEdBQUc1RCxFQUFFLEdBQUcsR0FBTCxHQUFXeUQsVUFBNUI7O0VBRUEsZ0JBQXlCakcsZ0VBQVEsQ0FBQztJQUM5Qm9HLFFBQVEsRUFBRSxDQUFDQSxRQUFELENBRG9CO0lBRTlCQyxPQUFPLEVBQUU7TUFBQSxPQUFNQyxVQUFVLEVBQWhCO0lBQUEsQ0FGcUI7SUFHOUJDLG9CQUFvQixFQUFFO0VBSFEsQ0FBRCxDQUFqQztFQUFBLElBQVFoRyxJQUFSLGFBQVFBLElBQVI7RUFBQSxJQUFjQyxNQUFkLGFBQWNBLE1BQWQ7O0VBS0EsZ0JBQStCZSxnREFBUSxDQUFDLEtBQUQsQ0FBdkM7RUFBQTtFQUFBLElBQU9pRixRQUFQO0VBQUEsSUFBaUJDLFdBQWpCOztFQUVBLElBQU1ILFVBQVU7SUFBQSx1RUFBRztNQUFBO01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FDZjtjQUNNbkcsS0FGUyxHQUVELDhCQUE2QnFDLEVBQTdCLEdBQWlDLEdBQWpDLEdBQXNDeUQsVUFGckM7Y0FBQTtjQUFBLE9BR1E3RixLQUFLLENBQUNELEtBQUQsQ0FIYjs7WUFBQTtjQUdURSxRQUhTO2NBQUEsaUNBSVJBLFFBQVEsQ0FBQ0MsSUFBVCxFQUpROztZQUFBO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBLENBQUg7O0lBQUEsZ0JBQVZnRyxVQUFVO01BQUE7SUFBQTtFQUFBLEdBQWhCOztFQU9BLElBQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEdBQUQsRUFBUztJQUN0QlosWUFBWSxDQUFDWSxHQUFELENBQVo7RUFDSCxDQUZEOztFQU9BbEYsaURBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBSSxPQUFPdUUsU0FBUCxLQUFxQixXQUFyQixJQUFvQ0EsU0FBUyxDQUFDRSxJQUFWLElBQWtCSixPQUFPLENBQUNJLElBQWxFLEVBQXdFO01BQ3BFTyxXQUFXLENBQUMsSUFBRCxDQUFYO0lBQ0gsQ0FGRCxNQUVPO01BQ0hBLFdBQVcsQ0FBQyxLQUFELENBQVg7SUFDSDtFQUNKLENBTlEsRUFNUCxDQUFDVCxTQUFELENBTk8sQ0FBVDtFQVFBdkUsaURBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBSSxPQUFPdUUsU0FBUCxLQUFxQixXQUFyQixJQUFvQyxPQUFPekYsSUFBUCxLQUFnQixXQUFwRCxJQUFtRXVGLE9BQU8sQ0FBQ2MsS0FBL0UsRUFBc0Y7TUFDbEY7TUFDQWIsWUFBWSxDQUFDeEYsSUFBSSxDQUFDc0csT0FBTixDQUFaO0lBQ0g7RUFDSixDQUxRLEVBS1AsQ0FBQ3JHLE1BQUQsQ0FMTyxDQUFUO0VBUUEsb0JBQ0ksNEhBQ0NBLE1BQU0sSUFBRyxTQUFUO0VBQUE7RUFDQztFQUNBO0lBQ0EsU0FBUyxFQUFFZ0csUUFBUSxHQUFHakcsSUFBSSxDQUFDc0csT0FBTCxDQUFhckcsTUFBYixHQUFzQixtQkFBekIsR0FBZ0RELElBQUksQ0FBQ3NHLE9BQUwsQ0FBYXJHLE1BQWIsR0FBc0IsTUFEekY7SUFFQSxPQUFPLEVBQUU7TUFBQSxPQUFNa0csUUFBUSxDQUFDbkcsSUFBSSxDQUFDc0csT0FBTixDQUFkO0lBQUE7RUFGVCxnQkFJSTtJQUFLLFNBQVMsRUFBQztFQUFmLEdBQ0t0RyxJQUFJLENBQUNzRyxPQUFMLENBQWFDLE1BRGxCLENBSkosRUFVS3ZHLElBQUksQ0FBQ3NHLE9BQUwsQ0FBYXJHLE1BQWIsSUFBdUIsVUFBdkIsZ0JBQ087SUFBSyxTQUFTLEVBQUMsc0JBQWY7SUFBc0Msa0JBQWUsU0FBckQ7SUFBK0QsaUJBQWM7RUFBN0UsZ0JBQTRHO0lBQUcsU0FBUyxFQUFDO0VBQWIsRUFBNUcsQ0FEUCxHQUdELEVBYkosRUFpQktELElBQUksQ0FBQ3NHLE9BQUwsQ0FBYXJHLE1BQWIsSUFBdUIsT0FBdkIsZ0JBQ0c7SUFBSyxTQUFTLEVBQUMsc0JBQWY7SUFBc0Msa0JBQWUsU0FBckQ7SUFBK0QsaUJBQWM7RUFBN0UsZ0JBQXNIO0lBQUcsU0FBUyxFQUFDO0VBQWIsRUFBdEgsZUFBNEssdUVBQUlzRixPQUFPLENBQUNpQixpQkFBWixDQUE1SyxDQURILEdBR0QsRUFwQkosRUF1Qkt4RyxJQUFJLENBQUNzRyxPQUFMLENBQWFyRyxNQUFiLElBQXVCLFFBQXZCO0VBQUE7RUFDRztFQUNLO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBQXNDO0lBQUcsU0FBUyxFQUFDLGlCQUFiO0lBQStCLGtCQUFlLFNBQTlDO0lBQXdELGlCQUFjO0VBQXRFLEVBQXRDLENBRlIsR0FJRCxFQTNCSixFQThCS0QsSUFBSSxDQUFDc0csT0FBTCxDQUFhckcsTUFBYixJQUF1QixTQUF2QixnQkFFUTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUFzQztJQUFHLFNBQVMsRUFBQyxvQkFBYjtJQUFrQyxrQkFBZSxTQUFqRDtJQUEyRCxpQkFBYztFQUF6RSxFQUF0QyxDQUZSLEdBSUQsRUFsQ0osQ0FGRCxnQkF3Q0cscUZBQ0k7SUFBSyxTQUFTLEVBQUM7RUFBZixHQUNLc0YsT0FBTyxDQUFDZ0IsTUFEYixDQURKLENBekNKLENBREo7QUFtREMsQ0FoR0w7O0FBa0dBLGlFQUFlakIsR0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEdBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNcUIsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBaUI7RUFBQSxJQUFmbEIsU0FBZSxRQUFmQSxTQUFlO0VBRzFCLElBQU1uRixXQUFXLEdBQUdvRyxzRUFBYyxFQUFsQzs7RUFFQSxpQkFBY3JCLDREQUFTLEVBQXZCO0VBQUEsSUFBUXBELEVBQVIsY0FBUUEsRUFBUjs7RUFDQSxnQkFBcUJqQixnREFBUSxFQUE3QjtFQUFBO0VBQUEsSUFBT29GLEdBQVA7RUFBQSxJQUFXUSxNQUFYOztFQUNBLGlCQUF5QjVGLGdEQUFRLEVBQWpDO0VBQUE7RUFBQSxJQUFPNkYsS0FBUDtFQUFBLElBQWFDLFFBQWI7O0VBQ0EsaUJBQXdCOUYsZ0RBQVEsRUFBaEM7RUFBQTtFQUFBLElBQU8rRixJQUFQO0VBQUEsSUFBYUMsT0FBYjs7RUFFQSxpQkFBb0NoRyxnREFBUSxDQUFDLENBQUQsQ0FBNUM7RUFBQTtFQUFBLElBQU9pRyxVQUFQO0VBQUEsSUFBbUJDLGFBQW5COztFQUVBaEcsaURBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBSSxPQUFPdUUsU0FBUCxLQUFxQixXQUF6QixFQUFzQztNQUNsQyxJQUFNMEIsV0FBVyxHQUFHMUIsU0FBUyxDQUFDRSxJQUFWLENBQWVDLFNBQWYsQ0FBeUIsQ0FBekIsRUFBMkIsRUFBM0IsRUFBK0J3QixLQUEvQixDQUFxQyxHQUFyQyxDQUFwQjtNQUNBUixNQUFNLENBQUNTLFFBQVEsQ0FBQ0YsV0FBVyxDQUFDLENBQUQsQ0FBWixDQUFULENBQU47TUFDQUwsUUFBUSxDQUFDTyxRQUFRLENBQUNGLFdBQVcsQ0FBQyxDQUFELENBQVosQ0FBVCxDQUFSO01BQ0FILE9BQU8sQ0FBQ0csV0FBVyxDQUFDLENBQUQsQ0FBWixDQUFQO0lBQ0g7RUFDSixDQVBRLEVBT1AsQ0FBQzFCLFNBQUQsQ0FQTyxDQUFUOztFQVVBLElBQU02QixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztJQUMvQkwsYUFBYSxDQUFDSyxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFiO0VBQ0gsQ0FGRDs7RUFJQSxJQUFNQyxZQUFZLEdBQUdqQixtRUFBVyxDQUFDO0lBQzdCa0IsVUFBVSxFQUFFLG9CQUFDSixLQUFELEVBQVc7TUFDbkJBLEtBQUssQ0FBQ0ssY0FBTixHQURtQixDQUVuQjs7TUFDQSxJQUFNQyxRQUFRLEdBQUcsSUFBSUMsUUFBSixDQUFhUCxLQUFLLENBQUNDLE1BQW5CLENBQWpCO01BQ0EsSUFBTTFILFFBQVEsR0FBSUQsS0FBSyxDQUFDLG9CQUFtQm9DLEVBQXBCLEVBQXdCO1FBQzNDOEYsTUFBTSxFQUFFLE1BRG1DO1FBRTNDaEYsSUFBSSxFQUFFOEU7TUFGcUMsQ0FBeEIsQ0FBdkI7TUFJQSxPQUFPL0gsUUFBUDtJQUNILENBVjRCO0lBVzdCa0ksU0FBUyxFQUFFLHFCQUFNO01BQ2IxSCxXQUFXLENBQUMySCxpQkFBWixDQUE4QixDQUFDaEcsRUFBRSxHQUFDLEdBQUgsR0FBT3dELFNBQVMsQ0FBQ0UsSUFBVixDQUFlQyxTQUFmLENBQXlCLENBQXpCLEVBQTJCLEVBQTNCLENBQVIsQ0FBOUI7SUFDSDtFQWI0QixDQUFELENBQWhDO0VBZ0JBLG9CQUNJLHlJQUNJO0lBQUcsU0FBUyxFQUFDO0VBQWIsR0FBcUJRLEdBQXJCLE9BQTJCUyxLQUEzQixPQUFtQ0UsSUFBbkMsQ0FESixFQUVLLE9BQU90QixTQUFQLEtBQXFCLFdBQXJCLEdBQW9DQSxTQUFTLENBQUN4RixNQUE5QyxHQUF1RCxnQkFGNUQsZUFHSTtJQUFNLElBQUksRUFBQyxNQUFYO0lBQWtCLE1BQU0sRUFBQyxNQUF6QjtJQUFnQyxRQUFRLEVBQUV5SCxZQUFZLENBQUNRO0VBQXZELGdCQUNJO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBQ0k7SUFBSyxTQUFTLEVBQUM7RUFBZixlQURKLGVBS0k7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDSSxzRkFDSTtJQUFRLFNBQVMsRUFBRWpCLFVBQVUsSUFBSSxDQUFkLEdBQWtCLG9CQUFsQixHQUF5QyxzQkFBNUQ7SUFBcUYsUUFBUSxFQUFFSyxlQUEvRjtJQUFnSCxFQUFFLEVBQUMsV0FBbkg7SUFBK0gsSUFBSSxFQUFDO0VBQXBJLGdCQUNJO0lBQVEsU0FBUyxFQUFDLFVBQWxCO0lBQTZCLEtBQUssRUFBQztFQUFuQyxZQURKLGVBRUk7SUFBUSxTQUFTLEVBQUMsUUFBbEI7SUFBMkIsS0FBSyxFQUFDO0VBQWpDLGFBRkosQ0FESixDQURKLENBTEosQ0FESixlQWlCSTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNJO0lBQUssU0FBUyxFQUFDO0VBQWYsVUFESixlQUlJO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBRUksc0ZBQ0k7SUFBUSxTQUFTLEVBQUMsYUFBbEI7SUFBZ0MsRUFBRSxFQUFDLGlCQUFuQztJQUFxRCxJQUFJLEVBQUMsbUJBQTFEO0lBQThFLFFBQVE7RUFBdEYsZ0JBQ0k7SUFBUSxRQUFRLE1BQWhCO0lBQWlCLEtBQUssRUFBRVQ7RUFBeEIsRUFESixDQURKLGVBSUk7SUFBUSxTQUFTLEVBQUMsYUFBbEI7SUFBZ0MsRUFBRSxFQUFDLGVBQW5DO0lBQW1ELElBQUksRUFBQyxpQkFBeEQ7SUFBMEUsUUFBUTtFQUFsRixnQkFDSTtJQUFRLFFBQVEsTUFBaEI7SUFBaUIsS0FBSyxFQUFFVDtFQUF4QixFQURKLENBSkosZUFPSTtJQUFRLFNBQVMsRUFBQyxhQUFsQjtJQUFnQyxFQUFFLEVBQUMsZ0JBQW5DO0lBQW9ELElBQUksRUFBQyxrQkFBekQ7SUFBNEUsUUFBUTtFQUFwRixnQkFDSTtJQUFRLFFBQVEsTUFBaEI7SUFBaUIsS0FBSyxFQUFFVztFQUF4QixFQURKLENBUEosQ0FGSixDQUpKLENBakJKLGVBc0NJO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBQ0k7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFESixlQUtJO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBRUk7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDQTtJQUFRLFNBQVMsRUFBQyxjQUFsQjtJQUFpQyxFQUFFLEVBQUMscUJBQXBDO0lBQTBELElBQUksRUFBQztFQUEvRCxnQkFBdUY7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUF2RixlQUFvSDtJQUFRLEtBQUssRUFBQztFQUFkLFFBQXBILGVBQWlKO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBakosZUFBOEs7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUE5SyxlQUEyTTtJQUFRLEtBQUssRUFBQztFQUFkLFFBQTNNLGVBQXdPO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBeE8sZUFBcVE7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUFyUSxlQUFrUztJQUFRLEtBQUssRUFBQztFQUFkLFFBQWxTLGVBQStUO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBL1QsZUFBNFY7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUE1VixlQUF5WDtJQUFRLEtBQUssRUFBQztFQUFkLFFBQXpYLGVBQXVaO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBdlosZUFBcWI7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUFyYixlQUFtZDtJQUFRLEtBQUssRUFBQztFQUFkLFFBQW5kLGVBQWlmO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBamYsZUFBK2dCO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBL2dCLGVBQTZpQjtJQUFRLEtBQUssRUFBQztFQUFkLFFBQTdpQixlQUEya0I7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUEza0IsZUFBeW1CO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBem1CLGVBQXVvQjtJQUFRLEtBQUssRUFBQztFQUFkLFFBQXZvQixlQUFxcUI7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUFycUIsZUFBbXNCO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBbnNCLGVBQWl1QjtJQUFRLEtBQUssRUFBQztFQUFkLFFBQWp1QixlQUErdkI7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUEvdkIsQ0FEQSxDQUZKLGVBS0k7SUFBSyxTQUFTLEVBQUM7RUFBZixPQUxKLGVBUUk7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDQTtJQUFRLFNBQVMsRUFBQyxhQUFsQjtJQUFnQyxFQUFFLEVBQUMsdUJBQW5DO0lBQTJELElBQUksRUFBQztFQUFoRSxnQkFBMEY7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUExRixlQUF1SDtJQUFRLEtBQUssRUFBQztFQUFkLFFBQXZILGVBQW9KO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBcEosZUFBaUw7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUFqTCxlQUE4TTtJQUFRLEtBQUssRUFBQztFQUFkLFFBQTlNLGVBQTJPO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBM08sZUFBd1E7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUF4USxlQUFxUztJQUFRLEtBQUssRUFBQztFQUFkLFFBQXJTLGVBQWtVO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBbFUsZUFBK1Y7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUEvVixlQUE0WDtJQUFRLEtBQUssRUFBQztFQUFkLFFBQTVYLGVBQTBaO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBMVosZUFBd2I7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUF4YixlQUFzZDtJQUFRLEtBQUssRUFBQztFQUFkLFFBQXRkLGVBQW9mO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBcGYsZUFBa2hCO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBbGhCLGVBQWdqQjtJQUFRLEtBQUssRUFBQztFQUFkLFFBQWhqQixlQUE4a0I7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUE5a0IsZUFBNG1CO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBNW1CLGVBQTBvQjtJQUFRLEtBQUssRUFBQztFQUFkLFFBQTFvQixlQUF3cUI7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUF4cUIsZUFBc3NCO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBdHNCLGVBQW91QjtJQUFRLEtBQUssRUFBQztFQUFkLFFBQXB1QixlQUFrd0I7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUFsd0IsZUFBZ3lCO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBaHlCLGVBQTh6QjtJQUFRLEtBQUssRUFBQztFQUFkLFFBQTl6QixlQUE0MUI7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUE1MUIsZUFBMDNCO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBMTNCLGVBQXc1QjtJQUFRLEtBQUssRUFBQztFQUFkLFFBQXg1QixlQUFzN0I7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUF0N0IsZUFBbzlCO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBcDlCLGVBQWsvQjtJQUFRLEtBQUssRUFBQztFQUFkLFFBQWwvQixlQUFnaEM7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUFoaEMsZUFBOGlDO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBOWlDLGVBQTRrQztJQUFRLEtBQUssRUFBQztFQUFkLFFBQTVrQyxlQUEwbUM7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUExbUMsZUFBd29DO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBeG9DLGVBQXNxQztJQUFRLEtBQUssRUFBQztFQUFkLFFBQXRxQyxlQUFvc0M7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUFwc0MsZUFBa3VDO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBbHVDLGVBQWd3QztJQUFRLEtBQUssRUFBQztFQUFkLFFBQWh3QyxlQUE4eEM7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUE5eEMsZUFBNHpDO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBNXpDLGVBQTAxQztJQUFRLEtBQUssRUFBQztFQUFkLFFBQTExQyxlQUF3M0M7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUF4M0MsZUFBczVDO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBdDVDLGVBQW83QztJQUFRLEtBQUssRUFBQztFQUFkLFFBQXA3QyxlQUFrOUM7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUFsOUMsZUFBZy9DO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBaC9DLGVBQThnRDtJQUFRLEtBQUssRUFBQztFQUFkLFFBQTlnRCxlQUE0aUQ7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUE1aUQsZUFBMGtEO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBMWtELGVBQXdtRDtJQUFRLEtBQUssRUFBQztFQUFkLFFBQXhtRCxlQUFzb0Q7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUF0b0QsZUFBb3FEO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBcHFELGVBQWtzRDtJQUFRLEtBQUssRUFBQztFQUFkLFFBQWxzRCxlQUFndUQ7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUFodUQsZUFBOHZEO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBOXZELGVBQTR4RDtJQUFRLEtBQUssRUFBQztFQUFkLFFBQTV4RCxlQUEwekQ7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUExekQsQ0FEQSxDQVJKLENBTEosQ0F0Q0osZUF5REk7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDSTtJQUFLLFNBQVMsRUFBQztFQUFmLGlCQURKLGVBS0k7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFFSTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNJO0lBQVEsU0FBUyxFQUFDLGFBQWxCO0lBQWdDLEVBQUUsRUFBQyxzQkFBbkM7SUFBMEQsSUFBSSxFQUFDO0VBQS9ELGdCQUF3RjtJQUFRLEtBQUssRUFBQztFQUFkLFFBQXhGLGVBQXFIO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBckgsZUFBa0o7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUFsSixlQUErSztJQUFRLEtBQUssRUFBQztFQUFkLFFBQS9LLGVBQTRNO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBNU0sZUFBeU87SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUF6TyxlQUFzUTtJQUFRLEtBQUssRUFBQztFQUFkLFFBQXRRLGVBQW1TO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBblMsZUFBZ1U7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUFoVSxlQUE2VjtJQUFRLEtBQUssRUFBQztFQUFkLFFBQTdWLGVBQTBYO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBMVgsZUFBd1o7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUF4WixlQUFzYjtJQUFRLEtBQUssRUFBQztFQUFkLFFBQXRiLGVBQW9kO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBcGQsZUFBa2Y7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUFsZixlQUFnaEI7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUFoaEIsZUFBOGlCO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBOWlCLGVBQTRrQjtJQUFRLEtBQUssRUFBQztFQUFkLFFBQTVrQixlQUEwbUI7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUExbUIsZUFBd29CO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBeG9CLGVBQXNxQjtJQUFRLEtBQUssRUFBQztFQUFkLFFBQXRxQixlQUFvc0I7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUFwc0IsZUFBa3VCO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBbHVCLGVBQWd3QjtJQUFRLEtBQUssRUFBQztFQUFkLFFBQWh3QixDQURKLENBRkosZUFLSTtJQUFLLFNBQVMsRUFBQztFQUFmLE9BTEosZUFRSTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNJO0lBQVEsU0FBUyxFQUFDLGFBQWxCO0lBQWdDLEVBQUUsRUFBQyx3QkFBbkM7SUFBNEQsSUFBSSxFQUFDO0VBQWpFLGdCQUE0RjtJQUFRLEtBQUssRUFBQztFQUFkLFFBQTVGLGVBQXlIO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBekgsZUFBc0o7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUF0SixlQUFtTDtJQUFRLEtBQUssRUFBQztFQUFkLFFBQW5MLGVBQWdOO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBaE4sZUFBNk87SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUE3TyxlQUEwUTtJQUFRLEtBQUssRUFBQztFQUFkLFFBQTFRLGVBQXVTO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBdlMsZUFBb1U7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUFwVSxlQUFpVztJQUFRLEtBQUssRUFBQztFQUFkLFFBQWpXLGVBQThYO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBOVgsZUFBNFo7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUE1WixlQUEwYjtJQUFRLEtBQUssRUFBQztFQUFkLFFBQTFiLGVBQXdkO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBeGQsZUFBc2Y7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUF0ZixlQUFvaEI7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUFwaEIsZUFBa2pCO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBbGpCLGVBQWdsQjtJQUFRLEtBQUssRUFBQztFQUFkLFFBQWhsQixlQUE4bUI7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUE5bUIsZUFBNG9CO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBNW9CLGVBQTBxQjtJQUFRLEtBQUssRUFBQztFQUFkLFFBQTFxQixlQUF3c0I7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUF4c0IsZUFBc3VCO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBdHVCLGVBQW93QjtJQUFRLEtBQUssRUFBQztFQUFkLFFBQXB3QixlQUFreUI7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUFseUIsZUFBZzBCO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBaDBCLGVBQTgxQjtJQUFRLEtBQUssRUFBQztFQUFkLFFBQTkxQixlQUE0M0I7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUE1M0IsZUFBMDVCO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBMTVCLGVBQXc3QjtJQUFRLEtBQUssRUFBQztFQUFkLFFBQXg3QixlQUFzOUI7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUF0OUIsZUFBby9CO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBcC9CLGVBQWtoQztJQUFRLEtBQUssRUFBQztFQUFkLFFBQWxoQyxlQUFnakM7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUFoakMsZUFBOGtDO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBOWtDLGVBQTRtQztJQUFRLEtBQUssRUFBQztFQUFkLFFBQTVtQyxlQUEwb0M7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUExb0MsZUFBd3FDO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBeHFDLGVBQXNzQztJQUFRLEtBQUssRUFBQztFQUFkLFFBQXRzQyxlQUFvdUM7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUFwdUMsZUFBa3dDO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBbHdDLGVBQWd5QztJQUFRLEtBQUssRUFBQztFQUFkLFFBQWh5QyxlQUE4ekM7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUE5ekMsZUFBNDFDO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBNTFDLGVBQTAzQztJQUFRLEtBQUssRUFBQztFQUFkLFFBQTEzQyxlQUF3NUM7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUF4NUMsZUFBczdDO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBdDdDLGVBQW85QztJQUFRLEtBQUssRUFBQztFQUFkLFFBQXA5QyxlQUFrL0M7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUFsL0MsZUFBZ2hEO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBaGhELGVBQThpRDtJQUFRLEtBQUssRUFBQztFQUFkLFFBQTlpRCxlQUE0a0Q7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUE1a0QsZUFBMG1EO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBMW1ELGVBQXdvRDtJQUFRLEtBQUssRUFBQztFQUFkLFFBQXhvRCxlQUFzcUQ7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUF0cUQsZUFBb3NEO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBcHNELGVBQWt1RDtJQUFRLEtBQUssRUFBQztFQUFkLFFBQWx1RCxlQUFnd0Q7SUFBUSxLQUFLLEVBQUM7RUFBZCxRQUFod0QsZUFBOHhEO0lBQVEsS0FBSyxFQUFDO0VBQWQsUUFBOXhELGVBQTR6RDtJQUFRLEtBQUssRUFBQztFQUFkLFFBQTV6RCxDQURKLENBUkosQ0FMSixDQXpESixlQTRFSTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNJO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBQ0k7SUFBUSxJQUFJLEVBQUMsUUFBYjtJQUFzQixTQUFTLEVBQUM7RUFBaEMsVUFESixDQURKLENBNUVKLENBSEosQ0FESjtBQTBGSCxDQXBJRDs7QUFzSUEsaUVBQWVKLElBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUlBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNd0IsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBeUM7RUFBQSxJQUF2Q0MsUUFBdUMsUUFBdkNBLFFBQXVDO0VBQUEsSUFBN0IzQyxTQUE2QixRQUE3QkEsU0FBNkI7RUFBQSxJQUFsQkQsWUFBa0IsUUFBbEJBLFlBQWtCOztFQUdsRCxnQkFBeUJ4RSxnREFBUSxDQUFDb0gsUUFBRCxDQUFqQztFQUFBO0VBQUEsSUFBT0MsSUFBUDtFQUFBLElBQWFDLE9BQWI7O0VBQ0EsaUJBQW9DdEgsZ0RBQVEsQ0FBQyxLQUFELENBQTVDO0VBQUE7RUFBQSxJQUFPdUgsVUFBUDtFQUFBLElBQW1CQyxhQUFuQjs7RUFFQSxpQkFBYW5ELDREQUFTLEVBQXRCO0VBQUEsSUFBTXBELEVBQU4sY0FBTUEsRUFBTjs7RUFHQWYsaURBQVMsQ0FBQyxZQUFNO0lBRVosSUFBSSxPQUFPa0gsUUFBUCxLQUFvQixXQUF4QixFQUFxQztNQUNqQ0ksYUFBYSxDQUFDLElBQUQsQ0FBYjtJQUNIO0VBQ0osQ0FMUSxFQUtQLENBQUNILElBQUQsQ0FMTyxDQUFULENBVGtELENBZ0JsRDs7RUFFSSxvQkFDQSw0SEFFQ0UsVUFBVSxHQUNIRixJQUFJLENBQUNyRSxHQUFMLENBQVMsVUFBQ29DLEdBQUQ7SUFBQSxvQkFDRCw0REFBQyw2Q0FBRDtNQUNBLEdBQUcsRUFBRW5FLEVBQUUsR0FBQyxHQUFILEdBQU9tRSxHQUFHLENBQUNxQyxXQUFKLENBQWdCQyxRQUFoQixFQUFQLEdBQW1DLEdBQW5DLEdBQXdDdEMsR0FBRyxDQUFDRyxNQUFKLENBQVdtQyxRQUFYLEVBRDdDO01BRUEsT0FBTyxFQUFJdEMsR0FGWDtNQUdBLFNBQVMsRUFBRVgsU0FIWDtNQUlBLFlBQVksRUFBRUQ7SUFKZCxFQURDO0VBQUEsQ0FBVCxDQURHLGdCQVdILGtGQWJSLENBREE7QUFzQkgsQ0F4Q0w7O0FBMkNBLGlFQUFlMkMsSUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTWpKLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07RUFFbkIsSUFBTXlKLElBQUksR0FBRztJQUNULFNBQVMsY0FEQTtJQUVULFFBQVEsa0RBRkM7SUFHVCxRQUFRO0VBSEMsQ0FBYjtFQU1BLElBQU1DLElBQUksR0FBRztJQUNULFNBQVMsYUFEQTtJQUVULFFBQVEsNkNBRkM7SUFHVCxRQUFRO0VBSEMsQ0FBYjtFQU1BLElBQU1DLElBQUksR0FBRztJQUNULFNBQVMsV0FEQTtJQUVULFFBQVEsNkNBRkM7SUFHVCxRQUFRO0VBSEMsQ0FBYjtFQU1BLElBQU1DLFVBQVUsR0FBRyxDQUFDSCxJQUFELEVBQU9DLElBQVAsRUFBYUMsSUFBYixDQUFuQjtFQUVBLG9CQUNJLHVJQUNJO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBQ0k7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDSSwyREFBQyx1RUFBRCxPQURKLENBREosQ0FESixlQU9JO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBQ1E7SUFBSSxTQUFTLEVBQUM7RUFBZCxhQURSLGVBSUk7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFFSTtJQUFHLFNBQVMsRUFBQztFQUFiLDZSQUdxRCxrRkFIckQsK0RBR2lILCtFQUhqSCxDQUZKLENBSkosQ0FQSixlQXFCSTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNJO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBQ0k7SUFBSyxTQUFTLEVBQUM7RUFBZixHQUNLQyxVQUFVLENBQUM5RSxHQUFYLENBQWUsVUFBQytFLEdBQUQ7SUFBQSxvQkFDWiwyREFBQyxnRUFBRDtNQUFLLEdBQUcsRUFBRUEsR0FBRyxDQUFDMUgsS0FBZDtNQUFxQixPQUFPLEVBQUUwSDtJQUE5QixFQURZO0VBQUEsQ0FBZixDQURMLENBREosQ0FESixDQXJCSixDQURKO0FBb0NILENBMUREOztBQTREQSxpRUFBZTdKLFFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTs7QUFFQSxJQUFNRCxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFZO0VBQUEsSUFBVm1CLElBQVUsUUFBVkEsSUFBVTs7RUFFdkIsZ0JBQTJCWSxnREFBUSxDQUFDWixJQUFELENBQW5DO0VBQUE7RUFBQSxJQUFPZ0osTUFBUDtFQUFBLElBQWNDLFNBQWQ7O0VBRUYsb0JBQ0UseUlBQ0ksc0ZBR0ksNERBQUMsK0RBQUQ7SUFBUSxRQUFRLEVBQUVqSjtFQUFsQixFQUhKLGVBSUksNERBQUMscURBQUQ7SUFBUSxPQUFPLEVBQUUsQ0FBQ2dKLE1BQUQsRUFBUUMsU0FBUjtFQUFqQixFQUpKLENBREosQ0FERjtBQVVELENBZEQ7O0FBZ0JBLGlFQUFlcEssTUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7O0FBRUEsSUFBTUQsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtFQUNqQixvQkFDSSx1SUFDSTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNJO0lBQUksU0FBUyxFQUFDO0VBQWQsWUFESixDQURKLENBREo7QUFPSCxDQVJEOztBQVVBLGlFQUFlQSxNQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0VBRXZCLHdCQUF3QmlLLG1FQUFnQixFQUF4QztFQUFBO0VBQUEsSUFBT2xKLElBQVA7RUFBQSxJQUFZbUosT0FBWjs7RUFFQSxJQUFNWixJQUFJLEdBQUc7SUFDVCxTQUFTLGNBREE7SUFFVCxRQUFRLGtEQUZDO0lBR1QsUUFBUTtFQUhDLENBQWIsQ0FKdUIsQ0FXdkI7O0VBRUEsb0JBQ0kseUlBR0k7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDSTtJQUFJLFNBQVMsRUFBQztFQUFkLHFCQURKLENBSEosZUFVSTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNJLDREQUFDLDJFQUFEO0lBQVcsUUFBUSxFQUFFdkk7RUFBckIsRUFESixDQVZKLENBREo7QUFrQkgsQ0EvQkQ7O0FBaUNBLGlFQUFlZixZQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NDdENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNRCxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0VBRWhCLGlCQUFhaUcsNERBQVMsRUFBdEI7RUFBQSxJQUFNcEQsRUFBTixjQUFNQSxFQUFOOztFQUVBLGdCQUFrQ2pCLGdEQUFRLEVBQTFDO0VBQUE7RUFBQSxJQUFPeUUsU0FBUDtFQUFBLElBQWtCRCxZQUFsQjs7RUFFQSxnQkFBeUIvRixnRUFBUSxDQUFDLENBQUMsVUFBRCxDQUFELEVBQWU7SUFBQSxPQUFNK0osZUFBZSxFQUFyQjtFQUFBLENBQWYsQ0FBakM7RUFBQSxJQUFReEosSUFBUixhQUFRQSxJQUFSO0VBQUEsSUFBY0MsTUFBZCxhQUFjQSxNQUFkOztFQUVBLElBQU11SixlQUFlO0lBQUEsc0VBQUc7TUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBO2NBRWRDLFVBRmMsR0FFRCxtQ0FBa0N4SCxFQUZqQztjQUFBO2NBQUEsT0FHR3BDLEtBQUssQ0FBQzRKLFVBQUQsQ0FIUjs7WUFBQTtjQUdkM0osUUFIYztjQUFBLGlDQUliQSxRQUFRLENBQUNDLElBQVQsRUFKYTs7WUFBQTtZQUFBO2NBQUE7VUFBQTtRQUFBO01BQUE7SUFBQSxDQUFIOztJQUFBLGdCQUFmeUosZUFBZTtNQUFBO0lBQUE7RUFBQSxHQUFyQjs7RUFRQSxvQkFDSSx5SUFDSTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNJO0lBQUksU0FBUyxFQUFDO0VBQWQsZUFESixDQURKLGVBTUk7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFFSTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNJO0lBQU8sU0FBUyxFQUFDO0VBQWpCLGdCQUNJO0lBQVMsU0FBUyxFQUFDO0VBQW5CLG1CQURKLGVBRUksd0ZBQ0kscUZBQ0E7SUFBSSxLQUFLLEVBQUM7RUFBVixTQURBLGVBRUE7SUFBSSxLQUFLLEVBQUM7RUFBVixTQUZBLGVBR0E7SUFBSSxLQUFLLEVBQUM7RUFBVixTQUhBLGVBSUE7SUFBSSxLQUFLLEVBQUM7RUFBVixTQUpBLGVBS0E7SUFBSSxLQUFLLEVBQUM7RUFBVixTQUxBLGVBTUE7SUFBSSxLQUFLLEVBQUM7RUFBVixTQU5BLGVBT0E7SUFBSSxLQUFLLEVBQUM7RUFBVixTQVBBLENBREosQ0FGSixlQWFJLDJFQUNDdkosTUFBTSxJQUFJLFNBQVYsR0FDR0QsSUFBSSxDQUFDMEosUUFBTCxDQUFjMUYsR0FBZCxDQUFrQixVQUFDcUUsSUFBRCxFQUFPc0IsS0FBUDtJQUFBLG9CQUNkLHFGQUNJLDREQUFDLCtEQUFEO01BQ0EsR0FBRyxFQUFFMUgsRUFBRSxHQUFDLEdBQUgsR0FBTzBILEtBRFo7TUFFQSxRQUFRLEVBQUl0QixJQUZaO01BR0EsU0FBUyxFQUFFNUMsU0FIWDtNQUlBLFlBQVksRUFBRUQ7SUFKZCxFQURKLENBRGM7RUFBQSxDQUFsQixDQURILGdCQVdJLHFGQUFJLGtGQUFKLENBWkwsQ0FiSixDQURKLENBRkosZUFrQ0k7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDSSw0REFBQywrREFBRDtJQUFNLFNBQVMsRUFBRUM7RUFBakIsRUFESixDQWxDSixDQU5KLENBREo7QUErQ0gsQ0EvREQ7O0FBaUVBLGlFQUFlckcsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7O0FBRUEsSUFBTUQsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtFQUNqQixvQkFDSSx1SUFDSTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNJO0lBQUksU0FBUyxFQUFDO0VBQWQsWUFESixDQURKLENBREo7QUFPSCxDQVJEOztBQVVBLGlFQUFlQSxNQUFmOzs7Ozs7Ozs7Ozs7QUNaQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvaG9tZXBhZ2UvQm94LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hvbWVwYWdlL0Rpc2NsYWltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXlBY3Rpdml0aWVzL1BhcnR5SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9teUFjdGl2aXRpZXMvUGFydHlMaXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL25hdi9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbmF2L05hdkl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydHkvRGF5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnR5L0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydHkvV2Vlay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvSG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvTG9nb3V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9NeUFjdGl2aXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL1BhcnR5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9SZWFkbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3N0eWxlcy9hcHAuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zdHlsZXMvY2FsZW5kYXIuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zdHlsZXMvZ2FtZS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9qcy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2pzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XHJcbi8vIGltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyLCBSb3V0ZXMsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxyXG5pbXBvcnQgTG9nb3V0IGZyb20gXCIuL3BhZ2VzL0xvZ291dFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL3BhZ2VzL0xheW91dFwiO1xyXG5pbXBvcnQgSG9tZXBhZ2UgZnJvbSBcIi4vcGFnZXMvSG9tZXBhZ2VcIjtcclxuaW1wb3J0IFJlYWRtZSBmcm9tIFwiLi9wYWdlcy9SZWFkbWVcIjtcclxuaW1wb3J0IFBhcnR5IGZyb20gXCIuL3BhZ2VzL1BhcnR5XCI7XHJcbmltcG9ydCBNeUFjdGl2aXRpZXMgZnJvbSBcIi4vcGFnZXMvTXlBY3Rpdml0aWVzXCI7XHJcbmltcG9ydCB1dWlkIGZyb20gJ3JlYWN0LXV1aWQnO1xyXG5cclxuLy8gaW1wb3J0IHtTdHJpY3RNb2RlfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XHJcbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyLCB1c2VRdWVyeSB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XHJcblxyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBjaGVja0lmTG9nZ2VkSW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgcm91dGUgPSAnL2FwaS9ob21lcGFnZS9uYXYnO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocm91dGUpO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHVzZVF1ZXJ5KFsndXNlciddLCAoKSA9PiBjaGVja0lmTG9nZ2VkSW4oKSk7XHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIC8vIFVTVcWDXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLCBzdGF0dXMpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7c3RhdHVzID09IFwic3VjY2Vzc1wiID8gKFxyXG4gICAgICAgICAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgICAgICAgdXNlciA6IHtkYXRhLnVzZXJ9XHJcbiAgICAgICAgICAgICAgICA8Um91dGVzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxMYXlvdXQgdXNlcj17ZGF0YS51c2VyfS8+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBpbmRleCBlbGVtZW50PXs8SG9tZXBhZ2UgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cInJlYWRtZVwiIGVsZW1lbnQ9ezxSZWFkbWUgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIm15LWFjdGl2aXRpZXNcIiBlbGVtZW50PXs8TXlBY3Rpdml0aWVzIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJwYXJ0eS9zaG93LzppZFwiIGVsZW1lbnQ9ezxQYXJ0eSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwibG9nb3V0XCIgZWxlbWVudD17PExvZ291dCAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgICAgICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAnbG9hZGluZydcclxuICAgICAgICApIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgTWFpblBhZ2UgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KCk7XHJcblxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XHJcbiAgICAgICAgICAgICAgICA8TWFpbiAvPlxyXG4gICAgICAgICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XHJcbiAgICAgICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpblBhZ2U7XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xyXG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xyXG5yb290LnJlbmRlcihcclxuICAgIDxNYWluUGFnZSAgLz5cclxuKTtcclxuXHJcblxyXG5cclxuXHJcbiIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuIFxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMvY2FsZW5kYXIuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlcy9nYW1lLmNzcyc7XHJcblxyXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XHJcbiBcclxucmVxdWlyZSgnLi9NYWluJyk7XHJcblxyXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNvbnN0IEJveCA9ICh7Y29udGVudH0pID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgcGFydHktaGVhZGVyIHB0LTEgcGItMSBiZy1ncmFkaWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb250ZW50LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGJnLWxpZ2h0IGJnLWdyYWRpZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtjb250ZW50Lmljb259PjwvaT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBiZy1saWdodCBwLTIgYm9yZGVyIGZ3LWxpZ2h0IHRleHQtY2VudGVyIHRleHQtbWQgYmctZ3JhZGllbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y29udGVudC50ZXh0fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgRGlzY2xhaW1lciA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWF1dG8gcC0wJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibGVhZCBtYi0xXCI+RGlzY2xhaW1lciEhITwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj5UbyBqZXN0IE1WUCAtIG1pbmltdW0gdmlhYmxlIHByb2R1Y3Q8L2I+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBrYSBwb3dpbm5hIGR6aWHFgmHEhyBpIG1vxbxlbXkgamVqIHXFvHnEhyBkbyBvcmdhbml6YWNqaSBuYXN6eWNoIGdpZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFphcGV3bmUgaXN0bmllasSFIGlubmUgaSBsZXBzemUgbmFyesSZZHppYSBkbyBjemVnb8WbIHRha2llZ28sIGFsZSBkbGEgbW5pZSBqZXN0IHRvIHphZ2FkbmllbmllIG5hIGt0w7NyeW0gc2nEmSB1Y3rEmS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXc3p5c3RrbyBqZXN0IHcgasSZenlrdSBhbmdpZWxza2ltLCBibyByb2JpxJkgdG8gc29iaWUgdyByYW1hY2ggcHJvamVrdHUgZG8gcG9ydGZvbGlvLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIELEmWTEmSBnbyByb3pidWRvd2F5d2HFgiB6IGN6YXNlbSwgbmEgcmF6aWUgbWEgcG9kc3Rhd293ZSBmdW5rY2plIGkgYnlsZSBqYWtpIGZyb250ZW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpc2NsYWltZXIiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgYXN5bmMgfSBmcm9tICdyZWdlbmVyYXRvci1ydW50aW1lJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBPdmVybGF5VHJpZ2dlciBmcm9tICdyZWFjdC1ib290c3RyYXAvT3ZlcmxheVRyaWdnZXInO1xyXG5pbXBvcnQgVG9vbHRpcCBmcm9tICdyZWFjdC1ib290c3RyYXAvVG9vbHRpcCc7XHJcblxyXG5cclxuY29uc3QgUGFydHlJdGVtID0gKHthY3Rpdml0eSwgdXNlckRhdGF9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgcGFydHlSb3V0ZSA9ICcvcGFydHkvc2hvdy8nICsgYWN0aXZpdHkuaWQ7XHJcbiAgICBjb25zdCBpbnZpdGF0aW9uYWxMaW5rID0gJy9nYW1lL2ludml0ZS8nICsgYWN0aXZpdHkuc2x1ZztcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uc1Rvb2x0aXAgPSAocHJvcHMpID0+IChcclxuICAgICAgICAgIDxUb29sdGlwIGlkPVwib3B0aW9ucy10b29sdGlwXCIgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgT3B0aW9uc1xyXG4gICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGhvc3RUb29sdGlwID0gKHByb3BzKSA9PiAoXHJcbiAgICAgICAgICAgIDxUb29sdGlwIGlkPVwib3B0aW9ucy10b29sdGlwXCIgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgICBZb3UgYXJlIGhvc3Qgb2YgdGhpcyBnYW1lXHJcbiAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uVG9vbHRpcCA9IChwcm9wcykgPT4gKFxyXG4gICAgICAgICAgICA8VG9vbHRpcCBpZD1cImRlc2NyaXB0aW9uLXRvb2x0aXBcIiB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICAgIHthY3Rpdml0eS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgbG9ja2VkVG9vbHRpcCA9IChwcm9wcykgPT4gKFxyXG4gICAgICAgIDxUb29sdGlwIGlkPVwibG9ja2VkLXRvb2x0aXBcIiB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICBHYW1lIGlzIGxvY2tlZFxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBsaW5rVG9vbHRpcCA9IChwcm9wcykgPT4gKFxyXG4gICAgICAgICAgICA8VG9vbHRpcCBpZD1cImxpbmstdG9vbHRpcFwiIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgICAgICBDbGljayB0byBjb3B5IGludml0YXRpb25hbCBsaW5rXHJcbiAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBjb3B5SW52aUxpbmsgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEhUVFBcclxuICAgICAgICAgICAgbGV0IHRleHRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcclxuICAgICAgICAgICAgdGV4dEZpZWxkLmlubmVyVGV4dCA9IGludml0YXRpb25hbExpbmtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0RmllbGQpXHJcbiAgICAgICAgICAgIHRleHRGaWVsZC5zZWxlY3QoKVxyXG4gICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpXHJcbiAgICAgICAgICAgIHRleHRGaWVsZC5yZW1vdmUoKVxyXG4gICAgICAgICAgICBhbGVydChpbnZpdGF0aW9uYWxMaW5rKTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHRyPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHRkICBjbGFzc05hbWU9XCJnYW1lLXRhYmxlIGhvc3QgYmctbGlnaHQgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpdml0eS5ob3N0ZWQgPT0gdXNlckRhdGEgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17eyBzaG93OiAyNTAsIGhpZGU6IDQwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17aG9zdFRvb2x0aXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGlkPVwie3tnYW1lLmlkfX1cIiBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS11c2VyLWdlYXIgaW5mby1pY29uXCIgZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiICBkYXRhLWJzLXRhcmdldD1cIiNhZG1pbk9wdGlvbnNcIj4gPC9pPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17eyBzaG93OiAyNTAsIGhpZGU6IDQwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17b3B0aW9uc1Rvb2x0aXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGlkPVwie3tnYW1lLmlkfX1cIiBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1nZWFycyBpbmZvLWljb25cIiBkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS1icy10aXRsZT1cIk9wdGlvbnNcIiBkYXRhLWJzLXRhcmdldD1cIiN1c2VyT3B0aW9uc1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZ2FtZS10YWJsZSBiZy1saWdodFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2aXR5Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZ2FtZS10YWJsZSBiZy1saWdodCBob3N0IHAtMFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17eyBzaG93OiAyNTAsIGhpZGU6IDQwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17ZGVzY3JpcHRpb25Ub29sdGlwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1jaXJjbGUtaW5mbyBpbmZvLWljb25cIiA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImdhbWUtdGFibGUgYmctbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2aXR5LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImdhbWUtdGFibGUgYmctbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2aXR5LnBsYXllcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZ2FtZS10YWJsZSBiZy1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZpdHkubG9ja2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17eyBzaG93OiAyNTAsIGhpZGU6IDQwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17bG9ja2VkVG9vbHRpcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1sb2NrIGluZm8taWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17eyBzaG93OiAyNTAsIGhpZGU6IDQwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17bGlua1Rvb2x0aXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2dhbWUuc2x1Z319XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtbGluayBpbmZvLWljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NvcHlJbnZpTGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImdhbWUtdGFibGUgYmctbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgWFguWFguWFhYWFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImdhbWUtdGFibGUgYmctbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e3BhcnR5Um91dGV9IGNsYXNzTmFtZT1cInRleHQtZGFyayB0ZXh0LWJvbGRcIiA+IHNob3cgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGEgY2xhc3NOYW1lPVwidGV4dC1kYXJrIHRleHQtYm9sZFwiIGhyZWY9e3BhcnR5Um91dGV9PlNob3c8L2E+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgICkgICAgICAgICAgXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXJ0eUl0ZW0iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBhcnR5SXRlbSBmcm9tICcuL1BhcnR5SXRlbSc7XHJcblxyXG5jb25zdCBQYXJ0eUxpc3QgPSAoe3VzZXJEYXRhfSkgPT4ge1xyXG5cclxuICAgIFxyXG4gICAgY29uc3QgW2FjdGl2aXR5TGlzdCwgc2V0QWN0aXZpdHlMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBnZXRBY3Rpdml0eUxpc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgcm91dGUgPSAnL2FwaS9teS1hY3Rpdml0aWVzJztcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3JvdXRlfWApO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIHNldEFjdGl2aXR5TGlzdChkYXRhLmFjdGl2aXR5VGFibGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0QWN0aXZpdHlMaXN0KCk7XHJcbiAgICB9LFtdKTtcclxuICAgICAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHBhcnR5LWxpc3QgYmctZGFyayBiZy1ncmFkaWVudFwiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImdhbWUtdGFibGUtaGVhZGVyIGhvc3QgYmctZGFyayBiZy1ncmFkaWVudFwiIHNjb3BlPVwiY29sXCI+PC90aD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlLWhlYWRlciBiZy1kYXJrIGJnLWdyYWRpZW50XCIgc2NvcGU9XCJjb2xcIj5QYXJ0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlLWhlYWRlciBob3N0IGJnLWRhcmsgYmctZ3JhZGllbnRcIiBzY29wZT1cImNvbFwiPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlLWhlYWRlciBiZy1kYXJrIGJnLWdyYWRpZW50XCIgc2NvcGU9XCJjb2xcIj5BY3Rpdml0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlLWhlYWRlciBiZy1kYXJrIGJnLWdyYWRpZW50XCIgc2NvcGU9XCJjb2xcIj5NZW1iZXJzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImdhbWUtdGFibGUtaGVhZGVyIGJnLWRhcmsgYmctZ3JhZGllbnRcIiBzY29wZT1cImNvbFwiPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlLWhlYWRlciBiZy1kYXJrIGJnLWdyYWRpZW50XCIgc2NvcGU9XCJjb2xcIj5OZXh0IHNlc3Npb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZ2FtZS10YWJsZS1oZWFkZXIgYmctZGFyayBiZy1ncmFkaWVudFwiIHNjb3BlPVwiY29sXCI+TGluazwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7YWN0aXZpdHlMaXN0Lm1hcCgoYWN0aXZpdHkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8UGFydHlJdGVtIGtleT17YWN0aXZpdHkuaWR9IGFjdGl2aXR5PXthY3Rpdml0eX0gdXNlckRhdGE9e3VzZXJEYXRhfS8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKSAgICAgICAgICBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcnR5TGlzdCIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmF2SXRlbSBmcm9tICcuL05hdkl0ZW0nO1xyXG5cclxuXHJcbmNvbnN0IE5hdmJhciA9ICh7dXNlckRhdGF9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgbmF2SXRlbTEgPSB7XHJcbiAgICAgICAgJ25hbWUnOiAnSG9tZScsXHJcbiAgICAgICAgJ3JvdXRlJzogJy8nLFxyXG4gICAgICAgICd0eXBlJzogJ29wZW4nLFxyXG4gICAgICAgICdhY3RpdmUnOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBuYXZJdGVtMiA9IHtcclxuICAgICAgICAnbmFtZSc6ICdNeSBBY3Rpdml0aWVzJyxcclxuICAgICAgICAncm91dGUnOiAnL215LWFjdGl2aXRpZXMnLFxyXG4gICAgICAgICd0eXBlJzogJ2xvZ2dlZEluJyxcclxuICAgICAgICAnYWN0aXZlJzogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbmF2SXRlbTMgPSB7XHJcbiAgICAgICAgJ25hbWUnOiAnUmVhZE1lJyxcclxuICAgICAgICAncm91dGUnOiAnL3JlYWRtZScsXHJcbiAgICAgICAgJ3R5cGUnOiAnb3BlbicsXHJcbiAgICAgICAgJ2FjdGl2ZSc6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG5hdkl0ZW00ID0ge1xyXG4gICAgICAgICduYW1lJzogJysnLFxyXG4gICAgICAgICdyb3V0ZSc6ICcvZ2FtZS9jcmVhdGUnLFxyXG4gICAgICAgICd0eXBlJzogJ3NwZWNpYWwnLFxyXG4gICAgICAgICdhY3RpdmUnOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBuYXZJdGVtNSA9IHtcclxuICAgICAgICAnbmFtZSc6ICdMb2dvdXQnLFxyXG4gICAgICAgICdyb3V0ZSc6ICcvbG9nb3V0JyxcclxuICAgICAgICAndHlwZSc6ICdsb2dnZWRJbicsXHJcbiAgICAgICAgJ2FjdGl2ZSc6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG5hdkl0ZW02ID0ge1xyXG4gICAgICAgICduYW1lJzogJ0xvZ2luJyxcclxuICAgICAgICAncm91dGUnOiAnL2xvZ2luJyxcclxuICAgICAgICAndHlwZSc6ICdsb2dnZWRPdXQnLFxyXG4gICAgICAgICdhY3RpdmUnOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBuYXZJdGVtNyA9IHtcclxuICAgICAgICAnbmFtZSc6ICdSZWdpc3RlcicsXHJcbiAgICAgICAgJ3JvdXRlJzogJy9yZWdpc3RlcicsXHJcbiAgICAgICAgJ3R5cGUnOiAnbG9nZ2VkT3V0JyxcclxuICAgICAgICAnYWN0aXZlJzogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYWxsTmF2YmFySXRlbXMgPSBbbmF2SXRlbTEsIG5hdkl0ZW0yLCBuYXZJdGVtMywgbmF2SXRlbTQsIG5hdkl0ZW01LCBuYXZJdGVtNiwgbmF2SXRlbTddO1xyXG5cclxuICAgIC8vIGNvbnN0IFt1c2VyLHNldFVzZXJdID0gdXNlU3RhdGUodXNlckRhdGEpO1xyXG4gICAgY29uc3QgW25hdmJhcixzZXROYXZiYXJdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJuYXYgdXNlcjogXCIsdXNlckRhdGEpO1xyXG4gICAgY29uc3QgY3JlYXRlTmF2YmFyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hdmJhckNvbnRlbnQgPSBbXTtcclxuICAgICAgICBhbGxOYXZiYXJJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZiAodXNlckRhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSA9PSAnbG9nZ2VkT3V0JyB8fCBpdGVtLnR5cGUgPT0gJ29wZW4nICkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdmJhckNvbnRlbnQucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICggaXRlbS50eXBlID09ICdsb2dnZWRJbicgfHwgaXRlbS50eXBlID09ICdzcGVjaWFsJyB8fCBpdGVtLnR5cGUgPT0gJ29wZW4nICkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdmJhckNvbnRlbnQucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldE5hdmJhcihuYXZiYXJDb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNyZWF0ZU5hdmJhcigpO1xyXG4gICAgfSxbdXNlckRhdGFdKTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHsvKiBuYXZiYXIgdXNlciA9IHt1c2VyRGF0YX07ICovfVxyXG4gICAgICAgICAgICB7LyogUEFHRSBUSVRMRSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgdGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2Rpc3BsYXktMSB1bml2ZXJzYWwtc2hhZG93LXRleHQnPkhBUk1PTjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdW5kZWQtd3JhcHBlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWRhcmsgYmctZGFyayBiZy1ncmFkaWVudCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIENPTEFQU0UgQlVUVE9OICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtYnMtdGFyZ2V0PVwiI25hdmJhck5hdlwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJOYXZcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogTkFWIElURU1TICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiBpZD1cIm5hdmJhck5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtLTAgYWxpZ24tbWlkZGxlXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hdmJhci5tYXAoKG5hdkl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBrZXk9e25hdkl0ZW0ubmFtZX0gaXRlbT17bmF2SXRlbX0gdXNlcj17dXNlckRhdGF9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25hdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhciIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBPdXRsZXQsIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgTmF2SXRlbSA9ICh7aXRlbSwgdXNlcn0pID0+IHtcclxuXHJcbiAgICAvLyBjb25zdCBjbGFzc05hbWVzID0gXCJuYXYtbGluayBmcy00IG5hdi1tZW51LWl0ZW1cIjtcclxuXHJcbiAgICBpZiAoaXRlbS50eXBlID09ICdzcGVjaWFsJykge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17aXRlbS5yb3V0ZX0gY2xhc3NOYW1lPVwibmF2LWxpbmsgZnMtNCBuYXYtbWVudS1pdGVtIFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lID0gXCJib3JkZXIgYm9yZGVyLTIgcm91bmRlZCBzcXVhcmUtYnV0dG9uXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtcGx1cyBcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApICAgICAgICAgIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtpdGVtLnJvdXRlfSBjbGFzc05hbWU9XCJuYXYtbGluayBmcy00IG5hdi1tZW51LWl0ZW0gXCIgPiB7aXRlbS5uYW1lfSA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2SXRlbSIsImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3QgRGF5ID0gKHtkYXlEYXRhLCBzZXRBY3RpdmVEYXksIGFjdGl2ZURheX0pID0+IHtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gICAgY29uc3QgZGF0ZVN0cmluZyA9IGRheURhdGEuZGF0ZS5zdWJzdHJpbmcoMCwxMCk7XHJcbiAgICBjb25zdCBxdWVyeUtleSA9IGlkICsgJy0nICsgZGF0ZVN0cmluZztcclxuICAgIFxyXG4gICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHVzZVF1ZXJ5KHtcclxuICAgICAgICBxdWVyeUtleTogW3F1ZXJ5S2V5XSwgXHJcbiAgICAgICAgcXVlcnlGbjogKCkgPT4gZ2V0RGF5RGF0YSgpLFxyXG4gICAgICAgIHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV09IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBnZXREYXlEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGVTdHJpbmcpO1xyXG4gICAgICAgIGNvbnN0IHJvdXRlID0gJ2h0dHA6Ly8xMjcuMC4wLjEvYXBpL2RheS8nKyBpZCArJy8nKyBkYXRlU3RyaW5nIDtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJvdXRlKTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBpY2tEYXRlID0gKGRheSkgPT4ge1xyXG4gICAgICAgIHNldEFjdGl2ZURheShkYXkpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhY3RpdmVEYXkgIT09ICd1bmRlZmluZWQnICYmIGFjdGl2ZURheS5kYXRlID09IGRheURhdGEuZGF0ZSkge1xyXG4gICAgICAgICAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJc0FjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbYWN0aXZlRGF5XSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIGFjdGl2ZURheSA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRhdGEgIT09ICd1bmRlZmluZWQnICYmIGRheURhdGEudG9kYXkpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3BpY2snKTtcclxuICAgICAgICAgICAgc2V0QWN0aXZlRGF5KGRhdGEuZGF5SW5mbyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbc3RhdHVzXSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7c3RhdHVzID09J3N1Y2Nlc3MnID8gKFxyXG4gICAgICAgICAgLy9zdWNjZXNzIFxyXG4gICAgICAgICAgPHRkIFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IGRhdGEuZGF5SW5mby5zdGF0dXMgKyBcIiBwLTAgIHBpY2tlZC1kYXRlXCIgOiAgZGF0YS5kYXlJbmZvLnN0YXR1cyArIFwiIHAtMFwiIH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHBpY2tEYXRlKGRhdGEuZGF5SW5mbyl9PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGVuZGFyLWRheVwiID4gICAgIFxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YS5kYXlJbmZvLm51bWJlcn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgey8qIEFERCBUT09MVElQISEhISEhISEhICovfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHtkYXRhLmRheUluZm8uc3RhdHVzID09IFwiQ0FOQ0VMRURcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVycy1sZWZ0LXRvLXZvdGVcIiBkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIiBkYXRhLWJzLXRpdGxlPVwiU29tZSBtZW1iZXJzIGFyZSB1bmF2YWlsYWJsZVwiPjxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLXhtYXJrIFwiPjwvaT48L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICB7LyogQUREIFRPT0xUSVAhISEhISEhISEgKi99XHJcbiAgICAgICAgICAgICAge2RhdGEuZGF5SW5mby5zdGF0dXMgPT0gXCJWT1RFRFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllcnMtbGVmdC10by12b3RlXCIgZGF0YS1icy10b2dnbGU9XCJ0b29sdGlwXCIgZGF0YS1icy10aXRsZT1cInt7ZGF5LnBsYXllcnNMZWZ0VG9Wb3RlfX0gbW9yZSB0byB2b3RlXCI+PGkgY2xhc3NOYW1lPVwiZmEtc2hhcnAgZmEtc29saWQgZmEtYXJyb3dzLXJvdGF0ZVwiPjwvaT48Yj57ZGF5RGF0YS5wbGF5ZXJzTGVmdFRvVm90ZX08L2I+PC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAge2RhdGEuZGF5SW5mby5zdGF0dXMgPT0gXCJNSVNTRURcIiA/IChcclxuICAgICAgICAgICAgICAgICAgLy8gPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1iYW5cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXJzLWxlZnQtdG8tdm90ZVwiPjxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWJhblwiIGRhdGEtYnMtdG9nZ2xlPVwidG9vbHRpcFwiIGRhdGEtYnMtdGl0bGU9XCJNaXNzZWQgc2NoZWR1bGVzXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICB7ZGF0YS5kYXlJbmZvLnN0YXR1cyA9PSBcIkdBTUVEQVlcIiA/IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXJzLWxlZnQtdG8tdm90ZVwiPjxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWNoZWNrIFwiIGRhdGEtYnMtdG9nZ2xlPVwidG9vbHRpcFwiIGRhdGEtYnMtdGl0bGU9XCJNaXNzZWQgc2NoZWR1bGVzXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8dGQ+ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXItZGF5XCIgPiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge2RheURhdGEubnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgKX1cclxuICAgICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXlcclxuXHJcblxyXG4iLCJpbXBvcnQgeyBRdWVyeUNsaWVudCwgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcclxuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmNvbnN0IEZvcm0gPSAoe2FjdGl2ZURheX0pID0+IHtcclxuXHJcblxyXG4gICAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgaWQgfT0gdXNlUGFyYW1zKCk7XHJcbiAgICBjb25zdCBbZGF5LHNldERheV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW21vbnRoLHNldE1vbnRoXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbeWVhciwgc2V0WWVhcl0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IFt2b3RlU3RhdHVzLCBzZXRWb3RlU3RhdHVzXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhY3RpdmVEYXkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0ZWREYXRlID0gYWN0aXZlRGF5LmRhdGUuc3Vic3RyaW5nKDAsMTApLnNwbGl0KCctJyk7XHJcbiAgICAgICAgICAgIHNldERheShwYXJzZUludChzcGxpdGVkRGF0ZVsyXSkpO1xyXG4gICAgICAgICAgICBzZXRNb250aChwYXJzZUludChzcGxpdGVkRGF0ZVsxXSkpO1xyXG4gICAgICAgICAgICBzZXRZZWFyKHNwbGl0ZWREYXRlWzBdKTtcclxuICAgICAgICB9XHJcbiAgICB9LFthY3RpdmVEYXldKTtcclxuXHJcbiAgIFxyXG4gICAgY29uc3QgY2hlY2tWb3RlU3RhdHVzID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0Vm90ZVN0YXR1cyhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGFNdXRhdGlvbiA9IHVzZU11dGF0aW9uKHtcclxuICAgICAgICBtdXRhdGlvbkZuOiAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaWQpO1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gIGZldGNoKCcvYXBpL3NlbmQtdm90ZS8nKyBpZCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtpZCsnLScrYWN0aXZlRGF5LmRhdGUuc3Vic3RyaW5nKDAsMTApXSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+e2RheX0te21vbnRofS17eWVhcn08L3A+XHJcbiAgICAgICAgICAgIHt0eXBlb2YgYWN0aXZlRGF5ICE9PSAndW5kZWZpbmVkJyA/ICBhY3RpdmVEYXkuc3RhdHVzIDogJ3N0YXR1cyB1bmtub3duJ31cclxuICAgICAgICAgICAgPGZvcm0gbmFtZT1cInZvdGVcIiBtZXRob2Q9XCJwb3N0XCIgb25TdWJtaXQ9e2RhdGFNdXRhdGlvbi5tdXRhdGV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgXCIgaWQ9XCJ2b3RlX2RhdGVcIiBuYW1lPVwidm90ZVtkYXRlXVwiIHZhbHVlPXthY3RpdmVEYXRlfSByZWFkb25seS8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIFlvdXIgdm90ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9e3ZvdGVTdGF0dXMgPT0gMCA/IFwiZm9ybS1zZWxlY3QgYmctcmVkXCIgOiBcImZvcm0tc2VsZWN0IGJnLWdyZWVuXCIgfSBvbkNoYW5nZT17Y2hlY2tWb3RlU3RhdHVzfSBpZD1cInZvdGVfdm90ZVwiIG5hbWU9XCJ2b3RlW3ZvdGVdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBjbGFzc05hbWU9XCJiZy1ncmVlblwiIHZhbHVlPVwiMVwiID5JJ20gaW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGNsYXNzTmFtZT1cImJnLXJlZFwiIHZhbHVlPVwiMFwiID5JJ20gb3V0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgaGlkZGVuLWRhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCIgaWQ9XCJ2b3RlX2RhdGVfbW9udGhcIiBuYW1lPVwidm90ZVtkYXRlXVttb250aF1cIiByZWFkT25seT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPXttb250aH0+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIiBpZD1cInZvdGVfZGF0ZV9kYXlcIiBuYW1lPVwidm90ZVtkYXRlXVtkYXldXCIgcmVhZE9ubHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZCB2YWx1ZT17ZGF5fT48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdFwiIGlkPVwidm90ZV9kYXRlX3llYXJcIiBuYW1lPVwidm90ZVtkYXRlXVt5ZWFyXVwiIHJlYWRPbmx5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9e3llYXJ9Pjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgXCIgaWQ9XCJ2b3RlX2RhdGVcIiBuYW1lPVwidm90ZVtkYXRlXVwiIHZhbHVlPXthY3RpdmVEYXRlfSByZWFkb25seS8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdGFydCB0aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS10aW1lLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3QgXCIgaWQ9XCJ2b3RlX3N0YXJ0VGltZV9ob3VyXCIgbmFtZT1cInZvdGVbc3RhcnRUaW1lXVtob3VyXVwiPjxvcHRpb24gdmFsdWU9XCIwXCI+MDA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMVwiPjAxPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjJcIj4wMjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzXCI+MDM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNFwiPjA0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjVcIj4wNTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI2XCI+MDY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiN1wiPjA3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjhcIj4wODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI5XCI+MDk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTBcIj4xMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxMVwiPjExPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjEyXCI+MTI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTNcIj4xMzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxNFwiPjE0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE1XCI+MTU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTZcIj4xNjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxN1wiPjE3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE4XCI+MTg8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTlcIj4xOTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyMFwiPjIwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIxXCI+MjE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjJcIj4yMjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyM1wiPjIzPC9vcHRpb24+PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tdGltZS1zZXBhcmF0b3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXRpbWUtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdFwiIGlkPVwidm90ZV9zdGFydFRpbWVfbWludXRlXCIgbmFtZT1cInZvdGVbc3RhcnRUaW1lXVttaW51dGVdXCI+PG9wdGlvbiB2YWx1ZT1cIjBcIj4wMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxXCI+MDE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMlwiPjAyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjNcIj4wMzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0XCI+MDQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNVwiPjA1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjZcIj4wNjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI3XCI+MDc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiOFwiPjA4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjlcIj4wOTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxMFwiPjEwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjExXCI+MTE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTJcIj4xMjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxM1wiPjEzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE0XCI+MTQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTVcIj4xNTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxNlwiPjE2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE3XCI+MTc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMThcIj4xODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxOVwiPjE5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIwXCI+MjA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjFcIj4yMTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyMlwiPjIyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIzXCI+MjM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjRcIj4yNDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyNVwiPjI1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI2XCI+MjY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjdcIj4yNzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyOFwiPjI4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI5XCI+Mjk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzBcIj4zMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzMVwiPjMxPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjMyXCI+MzI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzNcIj4zMzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzNFwiPjM0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM1XCI+MzU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzZcIj4zNjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzN1wiPjM3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM4XCI+Mzg8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzlcIj4zOTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0MFwiPjQwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQxXCI+NDE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDJcIj40Mjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0M1wiPjQzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQ0XCI+NDQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDVcIj40NTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0NlwiPjQ2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQ3XCI+NDc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDhcIj40ODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0OVwiPjQ5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjUwXCI+NTA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTFcIj41MTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1MlwiPjUyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjUzXCI+NTM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTRcIj41NDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1NVwiPjU1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU2XCI+NTY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTdcIj41Nzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1OFwiPjU4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU5XCI+NTk8L29wdGlvbj48L3NlbGVjdD4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cImZvcm0tY29udHJvbCBcIiBpZD1cInZvdGVfZGF0ZVwiIG5hbWU9XCJ2b3RlW2RhdGVdXCIgdmFsdWU9e2FjdGl2ZURhdGV9IHJlYWRvbmx5Lz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbmlzaCB0aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS10aW1lLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCIgaWQ9XCJ2b3RlX2ZpbmlzaFRpbWVfaG91clwiIG5hbWU9XCJ2b3RlW2ZpbmlzaFRpbWVdW2hvdXJdXCI+PG9wdGlvbiB2YWx1ZT1cIjBcIj4wMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxXCI+MDE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMlwiPjAyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjNcIj4wMzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0XCI+MDQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNVwiPjA1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjZcIj4wNjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI3XCI+MDc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiOFwiPjA4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjlcIj4wOTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxMFwiPjEwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjExXCI+MTE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTJcIj4xMjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxM1wiPjEzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE0XCI+MTQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTVcIj4xNTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxNlwiPjE2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE3XCI+MTc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMThcIj4xODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxOVwiPjE5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIwXCI+MjA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjFcIj4yMTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyMlwiPjIyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIzXCI+MjM8L29wdGlvbj48L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS10aW1lLXNlcGFyYXRvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXRpbWUtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIiBpZD1cInZvdGVfZmluaXNoVGltZV9taW51dGVcIiBuYW1lPVwidm90ZVtmaW5pc2hUaW1lXVttaW51dGVdXCI+PG9wdGlvbiB2YWx1ZT1cIjBcIj4wMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxXCI+MDE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMlwiPjAyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjNcIj4wMzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0XCI+MDQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNVwiPjA1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjZcIj4wNjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI3XCI+MDc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiOFwiPjA4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjlcIj4wOTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxMFwiPjEwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjExXCI+MTE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTJcIj4xMjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxM1wiPjEzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE0XCI+MTQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTVcIj4xNTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxNlwiPjE2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE3XCI+MTc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMThcIj4xODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxOVwiPjE5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIwXCI+MjA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjFcIj4yMTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyMlwiPjIyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIzXCI+MjM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjRcIj4yNDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyNVwiPjI1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI2XCI+MjY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjdcIj4yNzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyOFwiPjI4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI5XCI+Mjk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzBcIj4zMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzMVwiPjMxPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjMyXCI+MzI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzNcIj4zMzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzNFwiPjM0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM1XCI+MzU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzZcIj4zNjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzN1wiPjM3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM4XCI+Mzg8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzlcIj4zOTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0MFwiPjQwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQxXCI+NDE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDJcIj40Mjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0M1wiPjQzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQ0XCI+NDQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDVcIj40NTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0NlwiPjQ2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQ3XCI+NDc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDhcIj40ODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0OVwiPjQ5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjUwXCI+NTA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTFcIj41MTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1MlwiPjUyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjUzXCI+NTM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTRcIj41NDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1NVwiPjU1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU2XCI+NTY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTdcIj41Nzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1OFwiPjU4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU5XCI+NTk8L29wdGlvbj48L3NlbGVjdD4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFya1wiPlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBEYXkgZnJvbSAnLi9EYXknO1xyXG5jb25zdCBXZWVrID0gKHt3ZWVrRGF0YSwgYWN0aXZlRGF5LCBzZXRBY3RpdmVEYXl9KSA9PiB7XHJcblxyXG5cclxuICAgIGNvbnN0IFt3ZWVrLCBzZXRXZWVrXSA9ICB1c2VTdGF0ZSh3ZWVrRGF0YSk7XHJcbiAgICBjb25zdCBbZGF0YUxvYWRlZCwgc2V0RGF0YUxvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBcclxuICAgIGxldCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB3ZWVrRGF0YSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgc2V0RGF0YUxvYWRlZCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFt3ZWVrXSk7XHJcbiAgICBcclxuICAgIC8vIGNvbnNvbGUubG9nKGFjdGl2ZURheS5kYXRlKTtcclxuICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG5cclxuICAgICAgICB7ZGF0YUxvYWRlZCA/IChcclxuICAgICAgICAgICAgICAgIHdlZWsubWFwKChkYXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPERheSBcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZCsnLScrZGF5Lm1vbnRoTnVtYmVyLnRvU3RyaW5nKCkgK1wiLVwiKyBkYXkubnVtYmVyLnRvU3RyaW5nKCl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlEYXRhID0ge2RheX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZURheT17YWN0aXZlRGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVEYXk9e3NldEFjdGl2ZURheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAnZmFsc2UnXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICl9ICAgXHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBXZWVrIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCb3ggZnJvbSAnLi4vY29tcG9uZW50cy9ob21lcGFnZS9Cb3gnO1xyXG5pbXBvcnQgRGlzY2xhaW1lciBmcm9tICcuLi9jb21wb25lbnRzL2hvbWVwYWdlL0Rpc2NsYWltZXInO1xyXG5cclxuY29uc3QgSG9tZXBhZ2UgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgYm94MSA9IHtcclxuICAgICAgICAndGl0bGUnOiAnQ3JlYXRlIHBhcnR5JyxcclxuICAgICAgICAnaWNvbic6ICdmYS1yZWd1bGFyIGZhLXVzZXJzLWJldHdlZW4tbGluZXMgZmEtOHggbS0zIG1iLTUnLFxyXG4gICAgICAgICd0ZXh0JzogJ01ha2UgYSBuZXcgcmVjb3VyaW5nIGFjdGl2aXR5IHRvIG1hbmFnZSdcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYm94MiA9IHtcclxuICAgICAgICAndGl0bGUnOiAnQWRkIE1lbWJlcnMnLFxyXG4gICAgICAgICdpY29uJzogJ2ZhLXJlZ3VsYXIgZmEtcGVvcGxlLXB1bGxpbmcgZmEtOHggbS0zIG1iLTUnLFxyXG4gICAgICAgICd0ZXh0JzogXCJFdmVyeXRoaW5nIGlzIGF3ZXNvbWUgd2hlbiB5b3UncmUgcGFydCBvZiBhIHRlYW0hXCJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYm94MyA9IHtcclxuICAgICAgICAndGl0bGUnOiAnRmluZCBkYXRlJyxcclxuICAgICAgICAnaWNvbic6ICdmYS1yZWd1bGFyIGZhLWNhbGVuZGFyLWNoZWNrIGZhLTh4IG0tMyBtYi01JyxcclxuICAgICAgICAndGV4dCc6ICcgUGxhY2UgeW91ciB2b3RlcyBhbmQgYXBwIHdpbGwgZG8gdGhlIHJlc3QnXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJveENvbnRlbnQgPSBbYm94MSwgYm94MiwgYm94M107XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0zJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteGwtOSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpc2NsYWltZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZGlzcGxheS02IHRleHQtY2VudGVyIHVuaXZlcnNhbC1zaGFkb3ctdGV4dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdlbGNvbWVcclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14bC05Jz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2xlYWQnPlxyXG4gICAgICAgICAgICAgICAgICAgIEhBUk1PTiBpcyBhbiBhcHAgdGhhdCBoZWxwcyB0byBmaW5kIG1hdGNoaW5nIHNjaGVkdWxlcyBpbiBwYXJ0eSBvZiBmZXcgcGVvcGUgYXJyYW5nZWQgZm9yIHJlY2N1cmluZ1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2aXRpZXMgbGlrZSBzcG9ydHMsIGJvYXJkIGdhbWVzLCBkaWdpdGFsIGdhbWVzIG9yIHBva2VyLiBUaGUgbWV0aG9kb2xvZ3kgaXMgd3JwYWVkIGluIDMgc2lwbXBsZSBwaW50cyBiZWxvd1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dCB5b3Ugd2lsbCBmaW5kICBtb3JlIGluIGRlcHRoIGluc3RydWN0cmlvbnMgdW5kZXIgPGI+dGhpcyBsaW5rPC9iPi4gWW91IGNhbiBhbHNvIGdldCBmdWxsIGRvY3VtZW50YXRpb24gb24gbXkgPGI+Z2l0aHViPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0zJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteGwtOSAnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBnLTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Ym94Q29udGVudC5tYXAoKGJveCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBrZXk9e2JveC50aXRsZX0gY29udGVudD17Ym94fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE91dGxldCwgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VMb2FkIGZyb20gJ3JlYWN0LXVzZS1sb2FkJztcclxuaW1wb3J0IHsgdXNlTG9hZFN0YXRlLCBMb2FkaW5nIH0gZnJvbSAncmVhY3QtdXNlLWxvYWQnO1xyXG4vLyBpbXBvcnQgdXNlTG9hZCBmcm9tICdyZWFjdC11c2UtbG9hZCc7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXYvTmF2QmFyJ1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHt1c2VyfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt1c2VySWQsc2V0VXNlcklkXSA9IHVzZVN0YXRlKHVzZXIpO1xyXG4gICAgXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgey8qIDxEYXRhQ29tcG9uZW50IC8+ICovfVxyXG4gICAgICAgICAgICB7LyogVXNlciA9IHt1c2VyfSAqL31cclxuICAgICAgICAgICAgPE5hdkJhciB1c2VyRGF0YT17dXNlcn0vPlxyXG4gICAgICAgICAgICA8T3V0bGV0IGNvbnRleHQ9e1t1c2VySWQsc2V0VXNlcklkXX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZGlzcGxheS01Jz5Mb2dvdXQ8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nb3V0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUGFydHlMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbXlBY3Rpdml0aWVzL1BhcnR5TGlzdCc7XHJcbmltcG9ydCBCb3ggZnJvbSAnLi4vY29tcG9uZW50cy9ob21lcGFnZS9Cb3gnO1xyXG5pbXBvcnQgRGlzY2xhaW1lciBmcm9tICcuLi9jb21wb25lbnRzL2hvbWVwYWdlL0Rpc2NsYWltZXInO1xyXG5pbXBvcnQgeyB1c2VPdXRsZXRDb250ZXh0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IE15QWN0aXZpdGllcyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbdXNlcixzZXRVc2VyXSA9ICB1c2VPdXRsZXRDb250ZXh0KCk7XHJcblxyXG4gICAgY29uc3QgYm94MSA9IHtcclxuICAgICAgICAndGl0bGUnOiAnQ3JlYXRlIHBhcnR5JyxcclxuICAgICAgICAnaWNvbic6ICdmYS1yZWd1bGFyIGZhLXVzZXJzLWJldHdlZW4tbGluZXMgZmEtOHggbS0zIG1iLTUnLFxyXG4gICAgICAgICd0ZXh0JzogJ01ha2UgYSBuZXcgcmVjb3VyaW5nIGFjdGl2aXR5IHRvIG1hbmFnZSdcclxuICAgIH07XHJcblxyXG5cclxuICAgIC8vIGNvbnN0IGJveENvbnRlbnQgPSBbYm94MSwgYm94MiwgYm94M107XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgey8qIGFjdGkgOiB7dXNlcn0gKi99XHJcbiAgICAgICAgICAgIHsvKiB0aXRsZSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTQnPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZGlzcGxheS02IHRleHQtY2VudGVyIHVuaXZlcnNhbC1zaGFkb3ctdGV4dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgTGlzdCBvZiBwYXJ0aWVzXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiB0YWJsZSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTQnPlxyXG4gICAgICAgICAgICAgICAgPFBhcnR5TGlzdCB1c2VyRGF0YT17dXNlcn0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFjdGl2aXRpZXM7IiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXVpZCBmcm9tICdyZWFjdC11dWlkJztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBXZWVrIGZyb20gJy4uL2NvbXBvbmVudHMvcGFydHkvV2Vlayc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvcGFydHkvRm9ybSc7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcclxuXHJcblxyXG5cclxuY29uc3QgUGFydHkgPSAoKSA9PiB7XHJcblxyXG4gICAgbGV0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG5cclxuICAgIGNvbnN0IFthY3RpdmVEYXksIHNldEFjdGl2ZURheV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSB1c2VRdWVyeShbJ2NhbGVuZGFyJ10sICgpID0+IGdldENhbGVuZGFyRGF0YSgpKTtcclxuXHJcbiAgICBjb25zdCBnZXRDYWxlbmRhckRhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgbG9naW5Sb3V0ZSA9ICdodHRwOi8vMTI3LjAuMC4xL2FwaS9jYWxlbmRhci8nKyBpZCA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChsb2dpblJvdXRlKTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTQnPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZGlzcGxheS02IHRleHQtY2VudGVyIHVuaXZlcnNhbC1zaGFkb3ctdGV4dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgUGFydHkgWFhYXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIHsvKiB0YWJsZSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgY2FsZW5kYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNhcHRpb24gY2xhc3NOYW1lPVwiYmctZGFyayBiZy1ncmFkaWVudFwiID5NT05USCBESVNQTEFZPC9jYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Nb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+VHVlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPldlZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5UaHU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+RnJpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlNhdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5TdW48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdHVzID09ICdzdWNjZXNzJyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuY2FsZW5kYXIubWFwKCh3ZWVrLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdlZWsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWQrJy0nK2luZGV4fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Vla0RhdGEgPSB7d2Vla30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZURheT17YWN0aXZlRGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVEYXk9e3NldEFjdGl2ZURheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoPHRyPjx0ZD5sb2FkaW5nPC90ZD48L3RyPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+ICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBGT1JNICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIGFjdGl2ZURheT17YWN0aXZlRGF5fS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcnR5OyIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBSZWFkbWUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdkaXNwbGF5LTUnPlJlYWRtZTwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFkbWU7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJSZWFjdCIsImNyZWF0ZVJvb3QiLCJCcm93c2VyUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJMb2dvdXQiLCJMYXlvdXQiLCJIb21lcGFnZSIsIlJlYWRtZSIsIlBhcnR5IiwiTXlBY3Rpdml0aWVzIiwidXVpZCIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsInVzZVF1ZXJ5IiwiTWFpbiIsImNoZWNrSWZMb2dnZWRJbiIsInJvdXRlIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJNYWluUGFnZSIsInF1ZXJ5Q2xpZW50IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiLCJyZXF1aXJlIiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsImNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIkJveCIsImNvbnRlbnQiLCJ0aXRsZSIsImljb24iLCJ0ZXh0IiwiRGlzY2xhaW1lciIsImFzeW5jIiwiTGluayIsIk92ZXJsYXlUcmlnZ2VyIiwiVG9vbHRpcCIsIlBhcnR5SXRlbSIsImFjdGl2aXR5IiwidXNlckRhdGEiLCJwYXJ0eVJvdXRlIiwiaWQiLCJpbnZpdGF0aW9uYWxMaW5rIiwic2x1ZyIsIm9wdGlvbnNUb29sdGlwIiwicHJvcHMiLCJob3N0VG9vbHRpcCIsImRlc2NyaXB0aW9uVG9vbHRpcCIsImRlc2NyaXB0aW9uIiwibG9ja2VkVG9vbHRpcCIsImxpbmtUb29sdGlwIiwiY29weUludmlMaW5rIiwidGV4dEZpZWxkIiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwicmVtb3ZlIiwiYWxlcnQiLCJob3N0ZWQiLCJzaG93IiwiaGlkZSIsIm5hbWUiLCJwbGF5ZXJzIiwibG9ja2VkIiwiUGFydHlMaXN0IiwiYWN0aXZpdHlMaXN0Iiwic2V0QWN0aXZpdHlMaXN0IiwiZ2V0QWN0aXZpdHlMaXN0IiwiYWN0aXZpdHlUYWJsZSIsIm1hcCIsIk5hdkl0ZW0iLCJOYXZiYXIiLCJuYXZJdGVtMSIsIm5hdkl0ZW0yIiwibmF2SXRlbTMiLCJuYXZJdGVtNCIsIm5hdkl0ZW01IiwibmF2SXRlbTYiLCJuYXZJdGVtNyIsImFsbE5hdmJhckl0ZW1zIiwibmF2YmFyIiwic2V0TmF2YmFyIiwiY3JlYXRlTmF2YmFyIiwibmF2YmFyQ29udGVudCIsImZvckVhY2giLCJpdGVtIiwidHlwZSIsInB1c2giLCJuYXZJdGVtIiwiT3V0bGV0IiwidXNlUGFyYW1zIiwiRGF5IiwiZGF5RGF0YSIsInNldEFjdGl2ZURheSIsImFjdGl2ZURheSIsImRhdGVTdHJpbmciLCJkYXRlIiwic3Vic3RyaW5nIiwicXVlcnlLZXkiLCJxdWVyeUZuIiwiZ2V0RGF5RGF0YSIsInJlZmV0Y2hPbldpbmRvd0ZvY3VzIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsInBpY2tEYXRlIiwiZGF5IiwidG9kYXkiLCJkYXlJbmZvIiwibnVtYmVyIiwicGxheWVyc0xlZnRUb1ZvdGUiLCJ1c2VNdXRhdGlvbiIsInVzZVF1ZXJ5Q2xpZW50IiwiRm9ybSIsInNldERheSIsIm1vbnRoIiwic2V0TW9udGgiLCJ5ZWFyIiwic2V0WWVhciIsInZvdGVTdGF0dXMiLCJzZXRWb3RlU3RhdHVzIiwic3BsaXRlZERhdGUiLCJzcGxpdCIsInBhcnNlSW50IiwiY2hlY2tWb3RlU3RhdHVzIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRhdGFNdXRhdGlvbiIsIm11dGF0aW9uRm4iLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJtZXRob2QiLCJvblN1Y2Nlc3MiLCJpbnZhbGlkYXRlUXVlcmllcyIsIm11dGF0ZSIsIldlZWsiLCJ3ZWVrRGF0YSIsIndlZWsiLCJzZXRXZWVrIiwiZGF0YUxvYWRlZCIsInNldERhdGFMb2FkZWQiLCJtb250aE51bWJlciIsInRvU3RyaW5nIiwiYm94MSIsImJveDIiLCJib3gzIiwiYm94Q29udGVudCIsImJveCIsInVzZUxvYWQiLCJ1c2VMb2FkU3RhdGUiLCJMb2FkaW5nIiwiTmF2QmFyIiwidXNlcklkIiwic2V0VXNlcklkIiwidXNlT3V0bGV0Q29udGV4dCIsInNldFVzZXIiLCJnZXRDYWxlbmRhckRhdGEiLCJsb2dpblJvdXRlIiwiY2FsZW5kYXIiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=