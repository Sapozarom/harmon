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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _pages_Logout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/Logout */ "./assets/js/pages/Logout.js");
/* harmony import */ var _pages_Layout__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/Layout */ "./assets/js/pages/Layout.js");
/* harmony import */ var _pages_Homepage__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/Homepage */ "./assets/js/pages/Homepage.js");
/* harmony import */ var _pages_Readme__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/Readme */ "./assets/js/pages/Readme.js");
/* harmony import */ var _pages_Party__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/Party */ "./assets/js/pages/Party.js");
/* harmony import */ var _pages_MyActivities__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/MyActivities */ "./assets/js/pages/MyActivities.js");
/* harmony import */ var _pages_HostOptions__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/HostOptions */ "./assets/js/pages/HostOptions.js");
/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! react-uuid */ "./node_modules/react-uuid/uuid.js");
/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(react_uuid__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useQuery.mjs");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/query-core/build/lib/queryClient.mjs");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs");
/* harmony import */ var _pages_Login__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/Login */ "./assets/js/pages/Login.js");
/* harmony import */ var _pages_CreateParty__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/CreateParty */ "./assets/js/pages/CreateParty.js");
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

  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_33__.useQuery)(['user'], function () {
    return checkIfLoggedIn();
  }),
      data = _useQuery.data,
      status = _useQuery.status; // USUŃ


  console.log(data, status);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement((react__WEBPACK_IMPORTED_MODULE_21___default().Fragment), null, status == "success" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_34__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_35__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_35__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_pages_Layout__WEBPACK_IMPORTED_MODULE_24__["default"], {
      user: data.user
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_35__.Route, {
    index: true,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_pages_Homepage__WEBPACK_IMPORTED_MODULE_25__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_35__.Route, {
    path: "readme",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_pages_Readme__WEBPACK_IMPORTED_MODULE_26__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_35__.Route, {
    path: "my-activities",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_pages_MyActivities__WEBPACK_IMPORTED_MODULE_28__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_35__.Route, {
    path: "party/show/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_pages_Party__WEBPACK_IMPORTED_MODULE_27__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_35__.Route, {
    path: "party/options/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_pages_HostOptions__WEBPACK_IMPORTED_MODULE_29__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_35__.Route, {
    path: "party/create",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_pages_CreateParty__WEBPACK_IMPORTED_MODULE_32__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_35__.Route, {
    path: "logout",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_pages_Logout__WEBPACK_IMPORTED_MODULE_23__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_35__.Route, {
    path: "login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_pages_Login__WEBPACK_IMPORTED_MODULE_31__["default"], null)
  })))) : 'loading');
};

var MainPage = function MainPage() {
  var queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_36__.QueryClient();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_37__.QueryClientProvider, {
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
    className: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex flex-row justify-content-center party-header pt-1 pb-1 bg-gradient"
  }, content.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex flex-row justify-content-center bg-light bg-gradient pt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: content.icon
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex flex-row justify-content-center bg-light p-2 border fw-light text-center text-md bg-gradient"
  }, content.text))));
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

/***/ "./assets/js/components/myActivities/MemberOptions.js":
/*!************************************************************!*\
  !*** ./assets/js/components/myActivities/MemberOptions.js ***!
  \************************************************************/
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
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useMutation.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");







function MemberOptions(_ref) {
  var showMemberOptions = _ref.showMemberOptions,
      handleCloseMemberOpt = _ref.handleCloseMemberOpt,
      partyId = _ref.partyId,
      activeMember = _ref.activeMember;
  var queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();
  var inactiveMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)({
    mutationFn: function mutationFn(event) {
      event.preventDefault();
      var response = fetch('/api/game/make-me-inactive/' + partyId, {
        method: 'POST',
        body: true
      });
      return response;
    },
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries(['party-list']);
    }
  });
  var leavePartyeMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)({
    mutationFn: function mutationFn(event) {
      event.preventDefault();
      var response = fetch('/api/game/leave/' + partyId, {
        method: 'POST',
        body: true
      });
      return response;
    },
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries(['party-list']);
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    show: showMemberOptions,
    onHide: handleCloseMemberOpt
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__["default"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__["default"].Title, null, "Party Options for ", partyId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("small", null, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__["default"].Body, null, activeMember ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
    className: "btn btn-dark dropdown-toggle",
    "data-bs-toggle": "collapse",
    href: "#makeMeInactive",
    role: "button",
    "aria-expanded": "false",
    "aria-controls": "makeMeInactive"
  }, "Make me inactive")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "collapse",
    id: "makeMeInactive"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "card card-body"
  }, "Inactive users can't vote  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("b", null, " Only a party creator can change your status to active"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
    className: "btn btn-danger mt-2",
    onClick: inactiveMutation.mutate
  }, "Proceed")))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
    className: "btn btn-dark dropdown-toggle mt-2",
    "data-bs-toggle": "collapse",
    href: "#leaveGame",
    role: "button",
    "aria-expanded": "false",
    "aria-controls": "leaveGame"
  }, "Leave party")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "collapse",
    id: "leaveGame"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "card card-body"
  }, "After you leave party, you would not be able to open game panel. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("b", null, "You can't rejoin party if it's locked"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
    className: "btn btn-danger mt-2",
    onClick: leavePartyeMutation.mutate
  }, "Proceed")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__["default"].Footer, null)));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MemberOptions);

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
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
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
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap/OverlayTrigger */ "./node_modules/react-bootstrap/esm/OverlayTrigger.js");
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bootstrap/Tooltip */ "./node_modules/react-bootstrap/esm/Tooltip.js");
/* harmony import */ var _MemberOptions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MemberOptions */ "./assets/js/components/myActivities/MemberOptions.js");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var PartyItem = function PartyItem(_ref) {
  var activity = _ref.activity,
      userData = _ref.userData;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showMemberOptions = _useState2[0],
      setShowMemberOptions = _useState2[1];

  var handleCloseMemberOpt = function handleCloseMemberOpt() {
    return setShowMemberOptions(false);
  };

  var handleShowMemberOpt = function handleShowMemberOpt() {
    return setShowMemberOptions(true);
  };

  var hostOptionsRoute = '/party/options/' + activity.id;
  var partyRoute = '/party/show/' + activity.id;
  var invitationalLink = '/game/invite/' + activity.slug;

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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement((react__WEBPACK_IMPORTED_MODULE_12___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("td", {
    className: "game-table host bg-light p-0"
  }, activity.hosted == userData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_15__["default"], {
    delay: {
      show: 250,
      hide: 400
    },
    overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_16__["default"], {
      id: "host-tooltip"
    }, "You are host of this party")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Link, {
    to: hostOptionsRoute,
    className: "options-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("i", {
    className: "fa-solid fa-user-gear info-icon"
  }, " "))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_15__["default"], {
    delay: {
      show: 250,
      hide: 400
    },
    overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_16__["default"], {
      id: "options-tooltip"
    }, "Options")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("i", {
    id: "{{game.id}}",
    className: "fa-solid fa-gears info-icon",
    onClick: handleShowMemberOpt
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("td", {
    className: "game-table bg-light"
  }, activity.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("td", {
    className: "game-table bg-light host p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_15__["default"], {
    delay: {
      show: 250,
      hide: 400
    },
    overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_16__["default"], {
      id: "options-tooltip"
    }, activity.description)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("i", {
    className: "fa-solid fa-circle-info info-icon"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("td", {
    className: "game-table bg-light"
  }, activity.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("td", {
    className: "game-table bg-light"
  }, activity.players), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("td", {
    className: "game-table bg-light"
  }, activity.locked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_15__["default"], {
    delay: {
      show: 250,
      hide: 400
    },
    overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_16__["default"], {
      id: "options-tooltip"
    }, "This party is locked")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("i", {
    className: "fa-solid fa-lock info-icon"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_15__["default"], {
    delay: {
      show: 250,
      hide: 400
    },
    overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_16__["default"], {
      id: "options-tooltip"
    }, "Copy invitational link")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("i", {
    className: "fa-solid fa-link info-icon",
    onClick: copyInviLink
  })), activity.isActive ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_15__["default"], {
    delay: {
      show: 250,
      hide: 400
    },
    overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_16__["default"], {
      id: "options-tooltip"
    }, "You are ACTIVE member")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("i", {
    className: "fa-solid fa-person-running status-spacer"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_15__["default"], {
    delay: {
      show: 250,
      hide: 400
    },
    overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_16__["default"], {
      id: "options-tooltip"
    }, "You are INACTIVE member")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("i", {
    className: "fa-solid fa-bed status-spacer"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("td", {
    className: "game-table bg-light"
  }, "comming soon..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("td", {
    className: "game-table bg-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Link, {
    to: partyRoute,
    className: "text-dark text-bold"
  }, " show "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_MemberOptions__WEBPACK_IMPORTED_MODULE_14__["default"], {
    showMemberOptions: showMemberOptions,
    handleCloseMemberOpt: handleCloseMemberOpt,
    partyId: activity.id,
    activeMember: activity.isActive
  }));
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
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useQuery.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _PartyItem__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./PartyItem */ "./assets/js/components/myActivities/PartyItem.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
























function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var PartyList = function PartyList(_ref) {
  var userData = _ref.userData;

  // const [activityList, setActivityList] = useQuery(['party-list']);
  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_24__.useQuery)({
    queryKey: ['party-list'],
    queryFn: function queryFn() {
      return getActivityList();
    },
    refetchOnWindowFocus: false
  }),
      activityList = _useQuery.data,
      activityListStatus = _useQuery.status; // const [activityList, setActivityList] = useState([]);


  var getActivityList = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var route, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              route = '/api/my-activities';
              _context.next = 3;
              return fetch("".concat(route));

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

    return function getActivityList() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement((react__WEBPACK_IMPORTED_MODULE_22___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("table", {
    className: "table party-list bg-dark bg-gradient"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", {
    className: "game-table-header host bg-dark bg-gradient",
    scope: "col"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", {
    className: "game-table-header bg-dark bg-gradient",
    scope: "col"
  }, "Party"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", {
    className: "game-table-header host bg-dark bg-gradient",
    scope: "col"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", {
    className: "game-table-header bg-dark bg-gradient",
    scope: "col"
  }, "Activity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", {
    className: "game-table-header bg-dark bg-gradient",
    scope: "col"
  }, "Members"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", {
    className: "game-table-header bg-dark bg-gradient",
    scope: "col"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", {
    className: "game-table-header bg-dark bg-gradient",
    scope: "col"
  }, "Next session"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", {
    className: "game-table-header bg-dark bg-gradient",
    scope: "col"
  }, "Link"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("tbody", null, activityListStatus == "success" ? activityList.activityTable.map(function (activity) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_PartyItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
      key: activity.id,
      activity: activity,
      userData: userData
    });
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("tr", null))));
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
    'route': '/party/create',
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
  var allNavbarItems = [navItem1, navItem2, navItem3, navItem4, // navItem5, 
  navItem6, navItem7]; // const [user,setUser] = useState(userData);

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
  }), userData !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("a", {
    href: "/logout",
    className: "nav-link fs-4 nav-menu-item"
  }, " Logout")) : '')))))));
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", null, range.start.substring(11, 16) + ' <-> ' + range.finish.substring(11, 16));
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
    }, !event.voteType ? "I'm out" : event.start + ' - ' + event.finish, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("span", {
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement((react__WEBPACK_IMPORTED_MODULE_15___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("tr", null, dataLoaded ? week.map(function (day) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(_Day__WEBPACK_IMPORTED_MODULE_16__["default"], {
      key: id + '-' + day.monthNumber.toString() + "-" + day.number.toString(),
      dayData: day,
      activeDay: activeDay,
      setActiveDay: setActiveDay
    });
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("td", null, "'false'")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Week);

/***/ }),

/***/ "./assets/js/pages/CreateParty.js":
/*!****************************************!*\
  !*** ./assets/js/pages/CreateParty.js ***!
  \****************************************/
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
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useMutation.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");






var CreateParty = function CreateParty() {
  var queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  var createGameMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation)({
    mutationFn: function mutationFn(event) {
      event.preventDefault();
      var formData = new FormData(event.target);
      var response = fetch('/api/game/create', {
        method: 'POST',
        body: formData
      });
      return response;
    },
    onSuccess: function onSuccess() {
      // queryClient.invalidateQueries(['party-list']);
      queryClient.invalidateQueries(['party-list']);
      navigate('/my-activities'); // console.log('Party was created!');
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "col-9 col-auto bg-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h1", {
    className: "display-6 text-center"
  }, "Create Party"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("form", {
    name: "game",
    method: "post",
    onSubmit: createGameMutation.mutate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    id: "game"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", {
    htmlFor: "game_name",
    className: "form-label"
  }, "Party name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    type: "text",
    id: "game_name",
    name: "game[name]",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", {
    htmlFor: "game_title",
    className: "form-label"
  }, "Activity name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    type: "text",
    id: "game_title",
    name: "game[title]",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", {
    htmlFor: "game_description",
    className: "form-label"
  }, "Descriprion:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("textarea", {
    id: "game_description",
    name: "game[description]",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", {
    htmlFor: "game_minSessionLength",
    className: "form-label"
  }, "Minimal session length (minutes):"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    type: "text",
    id: "game_minSessionLength",
    name: "game[minSessionLength]",
    className: "form-control"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    type: "submit",
    id: "game_Save",
    name: "game[Save]",
    className: "btn btn-dark btn-lg btn"
  }, "Save")))))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateParty);

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

/***/ "./assets/js/pages/HostOptions.js":
/*!****************************************!*\
  !*** ./assets/js/pages/HostOptions.js ***!
  \****************************************/
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
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useQuery.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
























function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var HostOptions = function HostOptions() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_23__.useParams)(),
      id = _useParams.id;

  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_24__.useQuery)({
    queryKey: ['gameInfo'],
    queryFn: function queryFn() {
      return getGameData();
    },
    refetchOnWindowFocus: false
  }),
      game = _useQuery.data,
      gameStatus = _useQuery.status;

  var getGameData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var gameRoute, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              gameRoute = 'http://127.0.0.1/api/game-data/' + id;
              _context.next = 3;
              return fetch(gameRoute);

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

    return function getGameData() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement((react__WEBPACK_IMPORTED_MODULE_22___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "row justify-content-center mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("h1", {
    className: "display-6 text-center universal-shadow-text"
  }, "Party host panel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "col-xl-6"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "col-xl-6"
  }, gameStatus == 'success' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "row mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "col-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "border bg-light form-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "d-flex flex-row justify-content-center party-header bg-dark bg-gradient"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "p-0"
  }, "PARTY INFO")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "col-6 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("p", {
    className: "party-name border-bottom pt-2 pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("span", {
    className: "info-label bg-white"
  }, "PARTY NAME")), " ", game.partyInfo.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("p", {
    className: "party-name  border-bottom pt-2 pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("span", {
    className: "info-label bg-white"
  }, "ACTIVITY")), " ", game.partyInfo.activity))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("p", {
    className: "info-display border-bottom   pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("span", {
    className: "info-label bg-white"
  }, "DESCRIPTION")), " ", game.partyInfo.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("p", {
    className: "info-display border-bottom pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("span", {
    className: "info-label bg-white"
  }, "MEMBERS")), game.partyInfo.activeMembers.map(function (player) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("span", {
      key: player.id,
      className: "player-name"
    }, " ", player.name);
  })))))) : '')));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HostOptions);

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

/***/ "./assets/js/pages/Login.js":
/*!**********************************!*\
  !*** ./assets/js/pages/Login.js ***!
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
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useMutation.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);





var Login = function Login() {
  var queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();
  var loginMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)({
    mutationFn: function mutationFn(event) {
      event.preventDefault(); // console.log(id);

      var formData = new FormData(event.target);
      var response = fetch('/api/login', {
        method: 'POST',
        body: formData
      });
      return response;
    },
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries(['user']);
      console.log('YAY!');
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "container mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "col-5 bg-light pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h1", {
    className: "display-5 mb-4"
  }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("form", {
    // onSubmit={loginMutation.mutate} 
    method: "post",
    action: "/login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", {
    htmlFor: "username",
    className: "form-label mt-3"
  }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    className: "form-control",
    type: "text",
    id: "username",
    name: "_username",
    defaultValue: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", {
    className: "form-label mt-3",
    htmlFor: "password"
  }, "Password:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    className: "form-control",
    type: "password",
    id: "password",
    name: "_password"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    className: "btn btn-dark mt-3",
    type: "submit"
  }, "Login"))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

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
  }();

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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(_components_party_Week__WEBPACK_IMPORTED_MODULE_27__["default"], {
      key: id + '-' + index,
      weekData: week,
      activeDay: activeDay,
      setActiveDay: setActiveDay
    });
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("td", null, "loading"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("div", {
    className: "col-xl-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(_components_party_Form__WEBPACK_IMPORTED_MODULE_28__["default"], {
    key: id,
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
      key: player.id,
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-e13d41"], () => (__webpack_exec__("./assets/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RkFBRztJQUFNLFNBQVMsRUFBQztFQUFoQixjQUFILENBQW5ELE9BQWlIMkcsSUFBSSxDQUFDRyxTQUFMLENBQWVuSSxRQUFoSSxDQURKLENBSkosQ0FQSixlQWdCSTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNJO0lBQUcsU0FBUyxFQUFDO0VBQWIsZ0JBQWlELG9GQUFHO0lBQU0sU0FBUyxFQUFDO0VBQWhCLGlCQUFILENBQWpELE9BQWtIZ0ksSUFBSSxDQUFDRyxTQUFMLENBQWU3RyxXQUFqSSxDQURKLENBaEJKLGVBbUJJO0lBQUssU0FBUyxFQUFDO0VBQWYsZ0JBQ0k7SUFBRyxTQUFTLEVBQUM7RUFBYixnQkFDSSxvRkFBRztJQUFNLFNBQVMsRUFBQztFQUFoQixhQUFILENBREosRUFFSzBHLElBQUksQ0FBQ0csU0FBTCxDQUFlQyxhQUFmLENBQTZCbEcsR0FBN0IsQ0FBaUMsVUFBQ21HLE1BQUQ7SUFBQSxvQkFDOUI7TUFBTSxHQUFHLEVBQUVBLE1BQU0sQ0FBQ2hJLEVBQWxCO01BQXNCLFNBQVMsRUFBQztJQUFoQyxRQUFnRGdJLE1BQU0sQ0FBQ2hILElBQXZELENBRDhCO0VBQUEsQ0FBakMsQ0FGTCxDQURKLENBbkJKLENBREosQ0FESixDQURILEdBaUNHLEVBekVSLENBREo7QUE4RUgsQ0FoSEQ7O0FBa0hBLGlFQUFlckYsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSEE7O0FBRUEsSUFBTUQsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtFQUNqQixvQkFDSSx1SUFDSTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNJO0lBQUksU0FBUyxFQUFDO0VBQWQsWUFESixDQURKLENBREo7QUFPSCxDQVJEOztBQVVBLGlFQUFlQSxNQUFmOzs7Ozs7Ozs7Ozs7QUNaQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvaG9tZXBhZ2UvQm94LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hvbWVwYWdlL0Rpc2NsYWltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXlBY3Rpdml0aWVzL01lbWJlck9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXlBY3Rpdml0aWVzL1BhcnR5SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9teUFjdGl2aXRpZXMvUGFydHlMaXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL25hdi9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbmF2L05hdkl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydHkvRGF5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnR5L0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydHkvU3VibWl0VG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydHkvV2Vlay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvQ3JlYXRlUGFydHkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL0hvbWVwYWdlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9Ib3N0T3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvTG9nb3V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9NeUFjdGl2aXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL1BhcnR5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9SZWFkbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3N0eWxlcy9hcHAuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zdHlsZXMvY2FsZW5kYXIuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zdHlsZXMvZ2FtZS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9qcy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2pzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XHJcbi8vIGltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyLCBSb3V0ZXMsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxyXG5pbXBvcnQgTG9nb3V0IGZyb20gXCIuL3BhZ2VzL0xvZ291dFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL3BhZ2VzL0xheW91dFwiO1xyXG5pbXBvcnQgSG9tZXBhZ2UgZnJvbSBcIi4vcGFnZXMvSG9tZXBhZ2VcIjtcclxuaW1wb3J0IFJlYWRtZSBmcm9tIFwiLi9wYWdlcy9SZWFkbWVcIjtcclxuaW1wb3J0IFBhcnR5IGZyb20gXCIuL3BhZ2VzL1BhcnR5XCI7XHJcbmltcG9ydCBNeUFjdGl2aXRpZXMgZnJvbSBcIi4vcGFnZXMvTXlBY3Rpdml0aWVzXCI7XHJcbmltcG9ydCBIb3N0T3B0aW9ucyBmcm9tIFwiLi9wYWdlcy9Ib3N0T3B0aW9uc1wiO1xyXG5pbXBvcnQgdXVpZCBmcm9tICdyZWFjdC11dWlkJztcclxuXHJcbi8vIGltcG9ydCB7U3RyaWN0TW9kZX0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xyXG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciwgdXNlUXVlcnkgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi9wYWdlcy9Mb2dpbic7XHJcbmltcG9ydCBDcmVhdGVQYXJ0eSBmcm9tICcuL3BhZ2VzL0NyZWF0ZVBhcnR5JztcclxuXHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNoZWNrSWZMb2dnZWRJbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByb3V0ZSA9ICcvYXBpL2hvbWVwYWdlL25hdic7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyb3V0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gdXNlUXVlcnkoWyd1c2VyJ10sICgpID0+IGNoZWNrSWZMb2dnZWRJbigpKTtcclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgLy8gVVNVxYNcclxuICAgIGNvbnNvbGUubG9nKGRhdGEsIHN0YXR1cyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIHtzdGF0dXMgPT0gXCJzdWNjZXNzXCIgPyAoXHJcbiAgICAgICAgICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICB7LyogdXNlciA6IHtkYXRhLnVzZXJ9ICovfVxyXG4gICAgICAgICAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8TGF5b3V0IHVzZXI9e2RhdGEudXNlcn0vPn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgaW5kZXggZWxlbWVudD17PEhvbWVwYWdlIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJyZWFkbWVcIiBlbGVtZW50PXs8UmVhZG1lIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJteS1hY3Rpdml0aWVzXCIgZWxlbWVudD17PE15QWN0aXZpdGllcyAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwicGFydHkvc2hvdy86aWRcIiBlbGVtZW50PXs8UGFydHkgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cInBhcnR5L29wdGlvbnMvOmlkXCIgZWxlbWVudD17PEhvc3RPcHRpb25zIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJwYXJ0eS9jcmVhdGVcIiBlbGVtZW50PXs8Q3JlYXRlUGFydHkgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cImxvZ291dFwiIGVsZW1lbnQ9ezxMb2dvdXQgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cImxvZ2luXCIgZWxlbWVudD17PExvZ2luIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICA8L1JvdXRlcz5cclxuICAgICAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICdsb2FkaW5nJ1xyXG4gICAgICAgICkgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBNYWluUGFnZSA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cclxuICAgICAgICAgICAgICAgIDxNYWluIC8+XHJcbiAgICAgICAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cclxuICAgICAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZTtcclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XHJcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XHJcbnJvb3QucmVuZGVyKFxyXG4gICAgPE1haW5QYWdlICAvPlxyXG4pO1xyXG5cclxuXHJcblxyXG5cclxuIiwiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG4gXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlcy9jYWxlbmRhci5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL2dhbWUuY3NzJztcclxuXHJcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcclxuIFxyXG5yZXF1aXJlKCcuL01haW4nKTtcclxuXHJcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3QgQm94ID0gKHtjb250ZW50fSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHBhcnR5LWhlYWRlciBwdC0xIHBiLTEgYmctZ3JhZGllbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRlbnQudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBiZy1saWdodCBiZy1ncmFkaWVudCBwdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17Y29udGVudC5pY29ufT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBiZy1saWdodCBwLTIgYm9yZGVyIGZ3LWxpZ2h0IHRleHQtY2VudGVyIHRleHQtbWQgYmctZ3JhZGllbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRlbnQudGV4dH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm94IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IERpc2NsYWltZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1hdXRvIHAtMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxlYWQgbWItMVwiPkRpc2NsYWltZXIhISE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+VG8gamVzdCBNVlAgLSBtaW5pbXVtIHZpYWJsZSBwcm9kdWN0PC9iPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwa2EgcG93aW5uYSBkemlhxYJhxIcgaSBtb8W8ZW15IGplaiB1xbx5xIcgZG8gb3JnYW5pemFjamkgbmFzenljaCBnaWVyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBaYXBld25lIGlzdG5pZWrEhSBpbm5lIGkgbGVwc3plIG5hcnrEmWR6aWEgZG8gY3plZ2/FmyB0YWtpZWdvLCBhbGUgZGxhIG1uaWUgamVzdCB0byB6YWdhZG5pZW5pZSBuYSBrdMOzcnltIHNpxJkgdWN6xJkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV3N6eXN0a28gamVzdCB3IGrEmXp5a3UgYW5naWVsc2tpbSwgYm8gcm9iacSZIHRvIHNvYmllIHcgcmFtYWNoIHByb2pla3R1IGRvIHBvcnRmb2xpby5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCxJlkxJkgZ28gcm96YnVkb3dheXdhxYIgeiBjemFzZW0sIG5hIHJhemllIG1hIHBvZHN0YXdvd2UgZnVua2NqZSBpIGJ5bGUgamFraSBmcm9udGVuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaXNjbGFpbWVyIiwiaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcclxuXHJcbmZ1bmN0aW9uIE1lbWJlck9wdGlvbnMoe3Nob3dNZW1iZXJPcHRpb25zLCBoYW5kbGVDbG9zZU1lbWJlck9wdCwgcGFydHlJZCwgYWN0aXZlTWVtYmVyfSkge1xyXG5cclxuICBjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XHJcblxyXG4gIGNvbnN0IGluYWN0aXZlTXV0YXRpb24gPSB1c2VNdXRhdGlvbih7XHJcbiAgICBtdXRhdGlvbkZuOiAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gIGZldGNoKCcvYXBpL2dhbWUvbWFrZS1tZS1pbmFjdGl2ZS8nKyBwYXJ0eUlkLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OiB0cnVlLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSxcclxuICAgIG9uU3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgIHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFsncGFydHktbGlzdCddKTtcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCBsZWF2ZVBhcnR5ZU11dGF0aW9uID0gdXNlTXV0YXRpb24oe1xyXG4gICAgbXV0YXRpb25GbjogKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9ICBmZXRjaCgnL2FwaS9nYW1lL2xlYXZlLycrIHBhcnR5SWQsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IHRydWUsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSxcclxuICAgIG9uU3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgIHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFsncGFydHktbGlzdCddKTtcclxuICAgIH1cclxuICB9KVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNb2RhbCBzaG93PXtzaG93TWVtYmVyT3B0aW9uc30gb25IaWRlPXtoYW5kbGVDbG9zZU1lbWJlck9wdH0+XHJcbiAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cclxuICAgICAgICAgIDxNb2RhbC5UaXRsZT5QYXJ0eSBPcHRpb25zIGZvciB7cGFydHlJZH08L01vZGFsLlRpdGxlPjxzbWFsbD4gPC9zbWFsbD5cclxuICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICA8TW9kYWwuQm9keT5cclxuICAgICAgICAgIHthY3RpdmVNZW1iZXIgPyBcclxuICAgICAgICAgIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIiBocmVmPVwiI21ha2VNZUluYWN0aXZlXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJtYWtlTWVJbmFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTWFrZSBtZSBpbmFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2VcIiBpZD1cIm1ha2VNZUluYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBJbmFjdGl2ZSB1c2VycyBjYW4ndCB2b3RlICA8Yj4gT25seSBhIHBhcnR5IGNyZWF0b3IgY2FuIGNoYW5nZSB5b3VyIHN0YXR1cyB0byBhY3RpdmU8L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBtdC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aW5hY3RpdmVNdXRhdGlvbi5tdXRhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFByb2NlZWRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6ICcnfVxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGRyb3Bkb3duLXRvZ2dsZSBtdC0yXCIgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiIGhyZWY9XCIjbGVhdmVHYW1lXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJsZWF2ZUdhbWVcIj5cclxuICAgICAgICAgICAgICAgICAgTGVhdmUgcGFydHlcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlXCIgaWQ9XCJsZWF2ZUdhbWVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgIEFmdGVyIHlvdSBsZWF2ZSBwYXJ0eSwgeW91IHdvdWxkIG5vdCBiZSBhYmxlIHRvIG9wZW4gZ2FtZSBwYW5lbC4gPGI+WW91IGNhbid0IHJlam9pbiBwYXJ0eSBpZiBpdCdzIGxvY2tlZDwvYj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgbXQtMlwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2xlYXZlUGFydHllTXV0YXRpb24ubXV0YXRlfT5cclxuICAgICAgICAgICAgICAgICAgICBQcm9jZWVkXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L01vZGFsLkJvZHk+XHJcbiAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuXHJcblxyXG4gICAgICAgICAgey8qIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTWVtYmVyT3B0fT5cclxuICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTWVtYmVyT3B0fT5cclxuICAgICAgICAgICAgU2F2ZSBcclxuICAgICAgICAgIDwvQnV0dG9uPiAqL31cclxuICAgICAgICA8L01vZGFsLkZvb3Rlcj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbWJlck9wdGlvbnM7IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGFzeW5jIH0gZnJvbSAncmVnZW5lcmF0b3ItcnVudGltZSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgT3ZlcmxheVRyaWdnZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL092ZXJsYXlUcmlnZ2VyJztcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Rvb2x0aXAnO1xyXG5pbXBvcnQgTWVtYmVyT3B0aW9ucyBmcm9tICcuL01lbWJlck9wdGlvbnMnXHJcblxyXG5cclxuY29uc3QgUGFydHlJdGVtID0gKHthY3Rpdml0eSwgdXNlckRhdGF9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3Nob3dNZW1iZXJPcHRpb25zLCBzZXRTaG93TWVtYmVyT3B0aW9uc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2VNZW1iZXJPcHQgPSAoKSA9PiBzZXRTaG93TWVtYmVyT3B0aW9ucyhmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVTaG93TWVtYmVyT3B0ID0gKCkgPT4gc2V0U2hvd01lbWJlck9wdGlvbnModHJ1ZSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGhvc3RPcHRpb25zUm91dGUgPSAnL3BhcnR5L29wdGlvbnMvJyArIGFjdGl2aXR5LmlkO1xyXG4gICAgY29uc3QgcGFydHlSb3V0ZSA9ICcvcGFydHkvc2hvdy8nICsgYWN0aXZpdHkuaWQ7XHJcbiAgICBjb25zdCBpbnZpdGF0aW9uYWxMaW5rID0gJy9nYW1lL2ludml0ZS8nICsgYWN0aXZpdHkuc2x1ZztcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBjb3B5SW52aUxpbmsgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEhUVFBcclxuICAgICAgICAgICAgbGV0IHRleHRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcclxuICAgICAgICAgICAgdGV4dEZpZWxkLmlubmVyVGV4dCA9IGludml0YXRpb25hbExpbmtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0RmllbGQpXHJcbiAgICAgICAgICAgIHRleHRGaWVsZC5zZWxlY3QoKVxyXG4gICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpXHJcbiAgICAgICAgICAgIHRleHRGaWVsZC5yZW1vdmUoKVxyXG4gICAgICAgICAgICBhbGVydChpbnZpdGF0aW9uYWxMaW5rKTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHRyPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHRkICBjbGFzc05hbWU9XCJnYW1lLXRhYmxlIGhvc3QgYmctbGlnaHQgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpdml0eS5ob3N0ZWQgPT0gdXNlckRhdGEgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17eyBzaG93OiAyNTAsIGhpZGU6IDQwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGlkPVwiaG9zdC10b29sdGlwXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3UgYXJlIGhvc3Qgb2YgdGhpcyBwYXJ0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtob3N0T3B0aW9uc1JvdXRlfSBjbGFzc05hbWU9XCJvcHRpb25zLWxpbmtcIiA+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLXVzZXItZ2VhciBpbmZvLWljb25cIj4gPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17eyBzaG93OiAyNTAsIGhpZGU6IDQwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGlkPVwib3B0aW9ucy10b29sdGlwXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgaWQ9XCJ7e2dhbWUuaWR9fVwiIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWdlYXJzIGluZm8taWNvblwiIG9uQ2xpY2s9e2hhbmRsZVNob3dNZW1iZXJPcHR9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZ2FtZS10YWJsZSBiZy1saWdodFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2aXR5Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZ2FtZS10YWJsZSBiZy1saWdodCBob3N0IHAtMFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17eyBzaG93OiAyNTAsIGhpZGU6IDQwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGlkPVwib3B0aW9ucy10b29sdGlwXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZpdHkuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtY2lyY2xlLWluZm8gaW5mby1pY29uXCIgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlIGJnLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpdml0eS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlIGJnLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpdml0eS5wbGF5ZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImdhbWUtdGFibGUgYmctbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIFBBUlRZIFNUQVRVUyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2aXR5LmxvY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9e3sgc2hvdzogMjUwLCBoaWRlOiA0MDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9eyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBpZD1cIm9wdGlvbnMtdG9vbHRpcFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBwYXJ0eSBpcyBsb2NrZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWxvY2sgaW5mby1pY29uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXt7IHNob3c6IDI1MCwgaGlkZTogNDAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5PXsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgaWQ9XCJvcHRpb25zLXRvb2x0aXBcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcHkgaW52aXRhdGlvbmFsIGxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWxpbmsgaW5mby1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb3B5SW52aUxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZpdHkuaXNBY3RpdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXt7IHNob3c6IDI1MCwgaGlkZTogNDAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5PXsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgaWQ9XCJvcHRpb25zLXRvb2x0aXBcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBhcmUgQUNUSVZFIG1lbWJlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtcGVyc29uLXJ1bm5pbmcgc3RhdHVzLXNwYWNlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17eyBzaG93OiAyNTAsIGhpZGU6IDQwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGlkPVwib3B0aW9ucy10b29sdGlwXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3UgYXJlIElOQUNUSVZFIG1lbWJlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtYmVkIHN0YXR1cy1zcGFjZXJcIiA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImdhbWUtdGFibGUgYmctbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWluZyBzb29uLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZ2FtZS10YWJsZSBiZy1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17cGFydHlSb3V0ZX0gY2xhc3NOYW1lPVwidGV4dC1kYXJrIHRleHQtYm9sZFwiID4gc2hvdyA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8YSBjbGFzc05hbWU9XCJ0ZXh0LWRhcmsgdGV4dC1ib2xkXCIgaHJlZj17cGFydHlSb3V0ZX0+U2hvdzwvYT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcblxyXG4gICAgICAgICAgICAgICAgPE1lbWJlck9wdGlvbnMgXHJcbiAgICAgICAgICAgICAgICBzaG93TWVtYmVyT3B0aW9ucyA9IHtzaG93TWVtYmVyT3B0aW9uc31cclxuICAgICAgICAgICAgICAgIGhhbmRsZUNsb3NlTWVtYmVyT3B0ID0ge2hhbmRsZUNsb3NlTWVtYmVyT3B0fVxyXG4gICAgICAgICAgICAgICAgcGFydHlJZCA9IHthY3Rpdml0eS5pZH0gXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVNZW1iZXIgPSB7YWN0aXZpdHkuaXNBY3RpdmV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgICkgICAgICAgICAgXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXJ0eUl0ZW0iLCJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUGFydHlJdGVtIGZyb20gJy4vUGFydHlJdGVtJztcclxuXHJcbmNvbnN0IFBhcnR5TGlzdCA9ICh7dXNlckRhdGF9KSA9PiB7XHJcblxyXG4gICAgLy8gY29uc3QgW2FjdGl2aXR5TGlzdCwgc2V0QWN0aXZpdHlMaXN0XSA9IHVzZVF1ZXJ5KFsncGFydHktbGlzdCddKTtcclxuICAgIFxyXG4gICAgY29uc3QgeyBkYXRhOiBhY3Rpdml0eUxpc3QsIHN0YXR1czogYWN0aXZpdHlMaXN0U3RhdHVzIH0gPSB1c2VRdWVyeSh7XHJcbiAgICAgICAgcXVlcnlLZXk6IFsncGFydHktbGlzdCddLCBcclxuICAgICAgICBxdWVyeUZuOiAoKSA9PiBnZXRBY3Rpdml0eUxpc3QoKSxcclxuICAgICAgICByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy8gY29uc3QgW2FjdGl2aXR5TGlzdCwgc2V0QWN0aXZpdHlMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBnZXRBY3Rpdml0eUxpc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgcm91dGUgPSAnL2FwaS9teS1hY3Rpdml0aWVzJztcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3JvdXRlfWApO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgcGFydHktbGlzdCBiZy1kYXJrIGJnLWdyYWRpZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZ2FtZS10YWJsZS1oZWFkZXIgaG9zdCBiZy1kYXJrIGJnLWdyYWRpZW50XCIgc2NvcGU9XCJjb2xcIj48L3RoPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImdhbWUtdGFibGUtaGVhZGVyIGJnLWRhcmsgYmctZ3JhZGllbnRcIiBzY29wZT1cImNvbFwiPlBhcnR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImdhbWUtdGFibGUtaGVhZGVyIGhvc3QgYmctZGFyayBiZy1ncmFkaWVudFwiIHNjb3BlPVwiY29sXCI+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImdhbWUtdGFibGUtaGVhZGVyIGJnLWRhcmsgYmctZ3JhZGllbnRcIiBzY29wZT1cImNvbFwiPkFjdGl2aXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImdhbWUtdGFibGUtaGVhZGVyIGJnLWRhcmsgYmctZ3JhZGllbnRcIiBzY29wZT1cImNvbFwiPk1lbWJlcnM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZ2FtZS10YWJsZS1oZWFkZXIgYmctZGFyayBiZy1ncmFkaWVudFwiIHNjb3BlPVwiY29sXCI+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImdhbWUtdGFibGUtaGVhZGVyIGJnLWRhcmsgYmctZ3JhZGllbnRcIiBzY29wZT1cImNvbFwiPk5leHQgc2Vzc2lvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlLWhlYWRlciBiZy1kYXJrIGJnLWdyYWRpZW50XCIgc2NvcGU9XCJjb2xcIj5MaW5rPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7YWN0aXZpdHlMaXN0U3RhdHVzID09IFwic3VjY2Vzc1wiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpdml0eUxpc3QuYWN0aXZpdHlUYWJsZS5tYXAoKGFjdGl2aXR5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFydHlJdGVtIGtleT17YWN0aXZpdHkuaWR9IGFjdGl2aXR5PXthY3Rpdml0eX0gdXNlckRhdGE9e3VzZXJEYXRhfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKSAgICAgICAgICBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcnR5TGlzdCIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmF2SXRlbSBmcm9tICcuL05hdkl0ZW0nO1xyXG5cclxuXHJcbmNvbnN0IE5hdmJhciA9ICh7dXNlckRhdGF9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgbmF2SXRlbTEgPSB7XHJcbiAgICAgICAgJ25hbWUnOiAnSG9tZScsXHJcbiAgICAgICAgJ3JvdXRlJzogJy8nLFxyXG4gICAgICAgICd0eXBlJzogJ29wZW4nLFxyXG4gICAgICAgICdhY3RpdmUnOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBuYXZJdGVtMiA9IHtcclxuICAgICAgICAnbmFtZSc6ICdNeSBBY3Rpdml0aWVzJyxcclxuICAgICAgICAncm91dGUnOiAnL215LWFjdGl2aXRpZXMnLFxyXG4gICAgICAgICd0eXBlJzogJ2xvZ2dlZEluJyxcclxuICAgICAgICAnYWN0aXZlJzogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbmF2SXRlbTMgPSB7XHJcbiAgICAgICAgJ25hbWUnOiAnUmVhZE1lJyxcclxuICAgICAgICAncm91dGUnOiAnL3JlYWRtZScsXHJcbiAgICAgICAgJ3R5cGUnOiAnb3BlbicsXHJcbiAgICAgICAgJ2FjdGl2ZSc6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG5hdkl0ZW00ID0ge1xyXG4gICAgICAgICduYW1lJzogJysnLFxyXG4gICAgICAgICdyb3V0ZSc6ICcvcGFydHkvY3JlYXRlJyxcclxuICAgICAgICAndHlwZSc6ICdzcGVjaWFsJyxcclxuICAgICAgICAnYWN0aXZlJzogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbmF2SXRlbTUgPSB7XHJcbiAgICAgICAgJ25hbWUnOiAnTG9nb3V0JyxcclxuICAgICAgICAncm91dGUnOiAnL2xvZ291dCcsXHJcbiAgICAgICAgJ3R5cGUnOiAnbG9nZ2VkSW4nLFxyXG4gICAgICAgICdhY3RpdmUnOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBuYXZJdGVtNiA9IHtcclxuICAgICAgICAnbmFtZSc6ICdMb2dpbicsXHJcbiAgICAgICAgJ3JvdXRlJzogJy9sb2dpbicsXHJcbiAgICAgICAgJ3R5cGUnOiAnbG9nZ2VkT3V0JyxcclxuICAgICAgICAnYWN0aXZlJzogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbmF2SXRlbTcgPSB7XHJcbiAgICAgICAgJ25hbWUnOiAnUmVnaXN0ZXInLFxyXG4gICAgICAgICdyb3V0ZSc6ICcvcmVnaXN0ZXInLFxyXG4gICAgICAgICd0eXBlJzogJ2xvZ2dlZE91dCcsXHJcbiAgICAgICAgJ2FjdGl2ZSc6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGFsbE5hdmJhckl0ZW1zID0gW25hdkl0ZW0xLCBuYXZJdGVtMiwgbmF2SXRlbTMsIG5hdkl0ZW00LCBcclxuICAgICAgICAvLyBuYXZJdGVtNSwgXHJcbiAgICAgICAgbmF2SXRlbTYsIG5hdkl0ZW03XTtcclxuXHJcbiAgICAvLyBjb25zdCBbdXNlcixzZXRVc2VyXSA9IHVzZVN0YXRlKHVzZXJEYXRhKTtcclxuICAgIGNvbnN0IFtuYXZiYXIsc2V0TmF2YmFyXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwibmF2IHVzZXI6IFwiLHVzZXJEYXRhKTtcclxuICAgIGNvbnN0IGNyZWF0ZU5hdmJhciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBuYXZiYXJDb250ZW50ID0gW107XHJcbiAgICAgICAgYWxsTmF2YmFySXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzZXJEYXRhID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT0gJ2xvZ2dlZE91dCcgfHwgaXRlbS50eXBlID09ICdvcGVuJyApIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXZiYXJDb250ZW50LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGl0ZW0udHlwZSA9PSAnbG9nZ2VkSW4nIHx8IGl0ZW0udHlwZSA9PSAnc3BlY2lhbCcgfHwgaXRlbS50eXBlID09ICdvcGVuJyApIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXZiYXJDb250ZW50LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXROYXZiYXIobmF2YmFyQ29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjcmVhdGVOYXZiYXIoKTtcclxuICAgIH0sW3VzZXJEYXRhXSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7LyogbmF2YmFyIHVzZXIgPSB7dXNlckRhdGF9OyAqL31cclxuICAgICAgICAgICAgey8qIFBBR0UgVElUTEUgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdkaXNwbGF5LTEgdW5pdmVyc2FsLXNoYWRvdy10ZXh0Jz5IQVJNT048L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3VuZGVkLXdyYXBwZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGJnLWRhcmsgYmctZ3JhZGllbnQgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBDT0xBUFNFIEJVVFRPTiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLWJzLXRhcmdldD1cIiNuYXZiYXJOYXZcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyTmF2XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE5BViBJVEVNUyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZSBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgaWQ9XCJuYXZiYXJOYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbS0wIGFsaWduLW1pZGRsZVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYXZiYXIubWFwKChuYXZJdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0ga2V5PXtuYXZJdGVtLm5hbWV9IGl0ZW09e25hdkl0ZW19IHVzZXI9e3VzZXJEYXRhfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB1c2VyRGF0YSAhPT0gbnVsbCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9sb2dvdXRcImNsYXNzTmFtZT1cIm5hdi1saW5rIGZzLTQgbmF2LW1lbnUtaXRlbVwiPiBMb2dvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAnJ31cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PiBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE91dGxldCwgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jb25zdCBOYXZJdGVtID0gKHtpdGVtLCB1c2VyfSkgPT4ge1xyXG5cclxuICAgIC8vIGNvbnN0IGNsYXNzTmFtZXMgPSBcIm5hdi1saW5rIGZzLTQgbmF2LW1lbnUtaXRlbVwiO1xyXG5cclxuICAgIGlmIChpdGVtLnR5cGUgPT0gJ3NwZWNpYWwnKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtpdGVtLnJvdXRlfSBjbGFzc05hbWU9XCJuYXYtbGluayBmcy00IG5hdi1tZW51LWl0ZW0gXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWUgPSBcImJvcmRlciBib3JkZXItMiByb3VuZGVkIHNxdWFyZS1idXR0b25cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1wbHVzIFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgICAgICAgICAgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2l0ZW0ucm91dGV9IGNsYXNzTmFtZT1cIm5hdi1saW5rIGZzLTQgbmF2LW1lbnUtaXRlbSBcIiA+IHtpdGVtLm5hbWV9IDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZJdGVtIiwiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBEYXkgPSAoe2RheURhdGEsIHNldEFjdGl2ZURheSwgYWN0aXZlRGF5fSkgPT4ge1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgICBjb25zdCBkYXRlU3RyaW5nID0gZGF5RGF0YS5kYXRlLnN1YnN0cmluZygwLDEwKTtcclxuICAgIGNvbnN0IHF1ZXJ5S2V5ID0gaWQgKyAnLScgKyBkYXRlU3RyaW5nO1xyXG4gICAgXHJcbiAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gdXNlUXVlcnkoe1xyXG4gICAgICAgIHF1ZXJ5S2V5OiBbcXVlcnlLZXldLCBcclxuICAgICAgICBxdWVyeUZuOiAoKSA9PiBnZXREYXlEYXRhKCksXHJcbiAgICAgICAgcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXT0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGdldERheURhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0ZVN0cmluZyk7XHJcbiAgICAgICAgY29uc3Qgcm91dGUgPSAnaHR0cDovLzEyNy4wLjAuMS9hcGkvZGF5LycrIGlkICsnLycrIGRhdGVTdHJpbmcgO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocm91dGUpO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGlja0RhdGUgPSAoZGF5KSA9PiB7XHJcbiAgICAgICAgc2V0QWN0aXZlRGF5KGRheSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoc3RhdHVzID09ICdzdWNjZXNzJyAmJiB0eXBlb2YgYWN0aXZlRGF5ICE9PSAndW5kZWZpbmVkJyAgJiYgaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YS5kYXlJbmZvKTtcclxuICAgICAgICAgICAgcGlja0RhdGUoZGF0YS5kYXlJbmZvKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0sW2RhdGFdKTtcclxuICAgIFxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYWN0aXZlRGF5ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgYWN0aXZlRGF5LmRhdGUgIT09ICd1bmRlZmluZWQnICYmIGFjdGl2ZURheS5kYXRlID09IGRheURhdGEuZGF0ZSkge1xyXG4gICAgICAgICAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJc0FjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbYWN0aXZlRGF5XSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIGFjdGl2ZURheSA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRhdGEgIT09ICd1bmRlZmluZWQnICYmIGRheURhdGEudG9kYXkpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3BpY2snKTtcclxuICAgICAgICAgICAgc2V0QWN0aXZlRGF5KGRhdGEuZGF5SW5mbyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbc3RhdHVzXSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7c3RhdHVzID09J3N1Y2Nlc3MnID8gKFxyXG4gICAgICAgICAgLy9zdWNjZXNzIFxyXG4gICAgICAgICAgPHRkIFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IGRhdGEuZGF5SW5mby5zdGF0dXMgKyBcIiBwLTAgIHBpY2tlZC1kYXRlXCIgOiAgZGF0YS5kYXlJbmZvLnN0YXR1cyArIFwiIHAtMFwiIH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHBpY2tEYXRlKGRhdGEuZGF5SW5mbyl9PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGVuZGFyLWRheVwiID4gICAgIFxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YS5kYXlJbmZvLm51bWJlcn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgey8qIEFERCBUT09MVElQISEhISEhISEhICovfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHtkYXRhLmRheUluZm8uc3RhdHVzID09IFwiQ0FOQ0VMRURcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVycy1sZWZ0LXRvLXZvdGVcIiBkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIiBkYXRhLWJzLXRpdGxlPVwiU29tZSBtZW1iZXJzIGFyZSB1bmF2YWlsYWJsZVwiPjxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLXhtYXJrIFwiPjwvaT48L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICB7LyogQUREIFRPT0xUSVAhISEhISEhISEgKi99XHJcbiAgICAgICAgICAgICAge2RhdGEuZGF5SW5mby5zdGF0dXMgPT0gXCJWT1RFRFwiID8gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllcnMtbGVmdC10by12b3RlXCIgZGF0YS1icy10b2dnbGU9XCJ0b29sdGlwXCIgZGF0YS1icy10aXRsZT1cInt7ZGF5LnBsYXllcnNMZWZ0VG9Wb3RlfX0gbW9yZSB0byB2b3RlXCI+PGkgY2xhc3NOYW1lPVwiZmEtc2hhcnAgZmEtc29saWQgZmEtYXJyb3dzLXJvdGF0ZVwiPntkYXRhLmRheUluZm8ucmVtYWluaW5nVm90ZXJzfTwvaT48L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgeyFkYXRhLmRheUluZm8ucGxheWVyU3RhdHVzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllcnMtdm90ZS1zdGF0dXNcIiBkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIiBkYXRhLWJzLXRpdGxlPVwie3tkYXkucGxheWVyc0xlZnRUb1ZvdGV9fSBtb3JlIHRvIHZvdGVcIj48aSBjbGFzc05hbWU9XCJmYS1zaGFycCBmYS1zb2xpZCBmYS1leGNsYW1hdGlvblwiPjwvaT48L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgKSA6ICcnfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICB7ZGF0YS5kYXlJbmZvLnN0YXR1cyA9PSBcIk1JU1NFRFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAvLyA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWJhblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllcnMtbGVmdC10by12b3RlXCI+PGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtYmFuXCIgZGF0YS1icy10b2dnbGU9XCJ0b29sdGlwXCIgZGF0YS1icy10aXRsZT1cIk1pc3NlZCBzY2hlZHVsZXNcIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgIHtkYXRhLmRheUluZm8uc3RhdHVzID09IFwiR0FNRURBWVwiID8gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllcnMtbGVmdC10by12b3RlXCI+PGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtY2hlY2sgXCIgZGF0YS1icy10b2dnbGU9XCJ0b29sdGlwXCIgZGF0YS1icy10aXRsZT1cIk1pc3NlZCBzY2hlZHVsZXNcIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDx0ZD4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxlbmRhci1kYXlcIiA+ICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7ZGF5RGF0YS5udW1iZXJ9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICApfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERheVxyXG5cclxuXHJcbiIsImltcG9ydCB7IFF1ZXJ5Q2xpZW50LCB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgQW5pbWF0ZUhlaWdodCBmcm9tICdyZWFjdC1hbmltYXRlLWhlaWdodCc7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgU3VibWl0VG9hc3QgZnJvbSAnLi9TdWJtaXRUb2FzdCc7XHJcblxyXG5jb25zdCBGb3JtID0gKHthY3RpdmVEYXl9KSA9PiB7XHJcblxyXG5cclxuICAgIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcclxuXHJcbiAgICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuICAgIGNvbnN0IFtkYXksc2V0RGF5XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbbW9udGgsc2V0TW9udGhdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFt5ZWFyLCBzZXRZZWFyXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gICAgY29uc3QgW3ZvdGVTdGF0dXMsIHNldFZvdGVTdGF0dXNdID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHVzZVF1ZXJ5KHtcclxuICAgICAgICBxdWVyeUtleTogW2lkICsgJy0nKyB5ZWFyICsgJy0nK21vbnRoICsnLScgK2RheSsnLScrICd2b3RlcyddLCBcclxuICAgICAgICBxdWVyeUZuOiAoKSA9PiBnZXRWb3RlcygpLFxyXG4gICAgICAgIHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGdldFZvdGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHJvdXRlID0gJ2h0dHA6Ly8xMjcuMC4wLjEvYXBpL2dldC12b3Rlcy8nKyBpZCArJy8nKyB5ZWFyICsgJy0nK21vbnRoICsnLScgK2RheSA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyb3V0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhY3RpdmVEYXkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0ZWREYXRlID0gYWN0aXZlRGF5LmRhdGUuc3Vic3RyaW5nKDAsMTApLnNwbGl0KCctJyk7XHJcbiAgICAgICAgICAgIHNldERheShwYXJzZUludChzcGxpdGVkRGF0ZVsyXSkpO1xyXG4gICAgICAgICAgICBzZXRNb250aChwYXJzZUludChzcGxpdGVkRGF0ZVsxXSkpO1xyXG4gICAgICAgICAgICBzZXRZZWFyKHNwbGl0ZWREYXRlWzBdKTtcclxuICAgICAgICB9XHJcbiAgICB9LFthY3RpdmVEYXldKTtcclxuXHJcbiAgIFxyXG4gICAgY29uc3QgY2hlY2tWb3RlU3RhdHVzID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0Vm90ZVN0YXR1cyhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGFNdXRhdGlvbiA9IHVzZU11dGF0aW9uKHtcclxuICAgICAgICBtdXRhdGlvbkZuOiAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaWQpO1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gIGZldGNoKCcvYXBpL3NlbmQtdm90ZS8nKyBpZCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtpZCsnLScrYWN0aXZlRGF5LmRhdGUuc3Vic3RyaW5nKDAsMTApXSk7XHJcbiAgICAgICAgICAgIHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtpZCArICctJysgeWVhciArICctJyttb250aCArJy0nICtkYXkrJy0nKyAndm90ZXMnXSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZVZvdGVNdXRhdGlvbiA9IHVzZU11dGF0aW9uKHtcclxuICAgICAgICBtdXRhdGlvbkZuOiAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaWQpO1xyXG4gICAgICAgICAgICAvLyBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpXHJcbiAgICAgICAgICAgIGNvbnN0IHZvdGVJZCA9IGV2ZW50LnRhcmdldC5pZDtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25maXJtKCdUaGlzIHZvdGUgd2lsbCBiZSBkZWxldGVkIHBlcm1hbmVudGx5ISBEYXkgc3RhdHVzIG1heSBiZSBjaGFuZ2VkJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gIGZldGNoKCcvYXBpL3ZvdGUvZGVsZXRlLycrIHZvdGVJZCwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJvZHk6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuICBmYWxzZTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAgICAgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW2lkICsgJy0nKyB5ZWFyICsgJy0nK21vbnRoICsnLScgK2RheSsnLScrICd2b3RlcyddKVxyXG4gICAgICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbaWQrJy0nK2FjdGl2ZURheS5kYXRlLnN1YnN0cmluZygwLDEwKV0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBnLTMgXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogRk9STSAqL31cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJnLWxpZ2h0IGZvcm0tcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBwYXJ0eS1oZWFkZXIgYmctZGFyayBiZy1ncmFkaWVudCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUExBQ0UgWU9VUiBWT1RFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gbmFtZT1cInZvdGVcIiBtZXRob2Q9XCJwb3N0XCIgb25TdWJtaXQ9e2RhdGFNdXRhdGlvbi5tdXRhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgY3VzdG9tLWZvcm0tcm93IHB0LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zIGN1c3RvbS1mb3JtLWxhYmVsIFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwiXCI+PC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdHVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT17dm90ZVN0YXR1cyA9PSAwID8gXCJmb3JtLXNlbGVjdC1sZyBiZy1yZWQgXCIgOiBcImZvcm0tc2VsZWN0LWxnIGJnLWdyZWVuXCIgfSBvbkNoYW5nZT17Y2hlY2tWb3RlU3RhdHVzfSBpZD1cInZvdGVfdm90ZVwiIG5hbWU9XCJ2b3RlW3ZvdGVdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBjbGFzc05hbWU9XCJiZy1ncmVlblwiIHZhbHVlPVwiMVwiID5JJ20gaW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGNsYXNzTmFtZT1cImJnLXJlZFwiIHZhbHVlPVwiMFwiID5JJ20gb3V0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgaGlkZGVuLWRhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zIGN1c3RvbS1mb3JtLWxhYmVsXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCIgaWQ9XCJ2b3RlX2RhdGVfbW9udGhcIiBuYW1lPVwidm90ZVtkYXRlXVttb250aF1cIiByZWFkT25seT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPXttb250aH0+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIiBpZD1cInZvdGVfZGF0ZV9kYXlcIiBuYW1lPVwidm90ZVtkYXRlXVtkYXldXCIgcmVhZE9ubHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZCB2YWx1ZT17ZGF5fT48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdFwiIGlkPVwidm90ZV9kYXRlX3llYXJcIiBuYW1lPVwidm90ZVtkYXRlXVt5ZWFyXVwiIHJlYWRPbmx5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9e3llYXJ9Pjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMyBjdXN0b20tZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zIGN1c3RvbS1mb3JtLWxhYmVsIFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXRpbWUtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdC1sZyAgdGltZS1zZWxlY3RcIiBpZD1cInZvdGVfc3RhcnRUaW1lX2hvdXJcIiBuYW1lPVwidm90ZVtzdGFydFRpbWVdW2hvdXJdXCI+PG9wdGlvbiB2YWx1ZT1cIjBcIj4wMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxXCI+MDE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMlwiPjAyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjNcIj4wMzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0XCI+MDQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNVwiPjA1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjZcIj4wNjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI3XCI+MDc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiOFwiPjA4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjlcIj4wOTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxMFwiPjEwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjExXCI+MTE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTJcIj4xMjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxM1wiPjEzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE0XCI+MTQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTVcIj4xNTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxNlwiPjE2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE3XCI+MTc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMThcIj4xODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxOVwiPjE5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIwXCI+MjA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjFcIj4yMTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyMlwiPjIyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIzXCI+MjM8L29wdGlvbj48L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS10aW1lLXNlcGFyYXRvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tdGltZS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0LWxnIHRpbWUtc2VsZWN0XCIgaWQ9XCJ2b3RlX3N0YXJ0VGltZV9taW51dGVcIiBuYW1lPVwidm90ZVtzdGFydFRpbWVdW21pbnV0ZV1cIj48b3B0aW9uIHZhbHVlPVwiMFwiPjAwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjFcIj4wMTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyXCI+MDI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiM1wiPjAzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjRcIj4wNDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1XCI+MDU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNlwiPjA2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjdcIj4wNzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI4XCI+MDg8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiOVwiPjA5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjEwXCI+MTA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTFcIj4xMTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxMlwiPjEyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjEzXCI+MTM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTRcIj4xNDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxNVwiPjE1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE2XCI+MTY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTdcIj4xNzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxOFwiPjE4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE5XCI+MTk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjBcIj4yMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyMVwiPjIxPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIyXCI+MjI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjNcIj4yMzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyNFwiPjI0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI1XCI+MjU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjZcIj4yNjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyN1wiPjI3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI4XCI+Mjg8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjlcIj4yOTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzMFwiPjMwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjMxXCI+MzE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzJcIj4zMjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzM1wiPjMzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM0XCI+MzQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzVcIj4zNTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzNlwiPjM2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM3XCI+Mzc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzhcIj4zODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzOVwiPjM5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQwXCI+NDA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDFcIj40MTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0MlwiPjQyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQzXCI+NDM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDRcIj40NDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0NVwiPjQ1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQ2XCI+NDY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDdcIj40Nzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0OFwiPjQ4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQ5XCI+NDk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTBcIj41MDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1MVwiPjUxPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjUyXCI+NTI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTNcIj41Mzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1NFwiPjU0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU1XCI+NTU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTZcIj41Njwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1N1wiPjU3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU4XCI+NTg8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTlcIj41OTwvb3B0aW9uPjwvc2VsZWN0PiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zIGN1c3RvbS1mb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTMgY3VzdG9tLWZvcm0tbGFiZWxcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbmlzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tdGltZS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdC1sZyB0aW1lLXNlbGVjdFwiIGlkPVwidm90ZV9maW5pc2hUaW1lX2hvdXJcIiBuYW1lPVwidm90ZVtmaW5pc2hUaW1lXVtob3VyXVwiPjxvcHRpb24gdmFsdWU9XCIwXCI+MDA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMVwiPjAxPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjJcIj4wMjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzXCI+MDM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNFwiPjA0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjVcIj4wNTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI2XCI+MDY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiN1wiPjA3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjhcIj4wODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI5XCI+MDk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTBcIj4xMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxMVwiPjExPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjEyXCI+MTI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTNcIj4xMzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxNFwiPjE0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE1XCI+MTU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTZcIj4xNjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxN1wiPjE3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE4XCI+MTg8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTlcIj4xOTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyMFwiPjIwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIxXCI+MjE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjJcIj4yMjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyM1wiPjIzPC9vcHRpb24+PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tdGltZS1zZXBhcmF0b3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS10aW1lLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0LWxnIHRpbWUtc2VsZWN0XCIgaWQ9XCJ2b3RlX2ZpbmlzaFRpbWVfbWludXRlXCIgbmFtZT1cInZvdGVbZmluaXNoVGltZV1bbWludXRlXVwiPjxvcHRpb24gdmFsdWU9XCIwXCI+MDA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMVwiPjAxPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjJcIj4wMjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzXCI+MDM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNFwiPjA0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjVcIj4wNTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI2XCI+MDY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiN1wiPjA3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjhcIj4wODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI5XCI+MDk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTBcIj4xMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxMVwiPjExPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjEyXCI+MTI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTNcIj4xMzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxNFwiPjE0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE1XCI+MTU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTZcIj4xNjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxN1wiPjE3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE4XCI+MTg8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTlcIj4xOTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyMFwiPjIwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIxXCI+MjE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjJcIj4yMjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyM1wiPjIzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI0XCI+MjQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjVcIj4yNTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyNlwiPjI2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI3XCI+Mjc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjhcIj4yODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyOVwiPjI5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjMwXCI+MzA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzFcIj4zMTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzMlwiPjMyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjMzXCI+MzM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzRcIj4zNDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzNVwiPjM1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM2XCI+MzY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzdcIj4zNzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzOFwiPjM4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM5XCI+Mzk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDBcIj40MDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0MVwiPjQxPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQyXCI+NDI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDNcIj40Mzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0NFwiPjQ0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQ1XCI+NDU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDZcIj40Njwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0N1wiPjQ3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQ4XCI+NDg8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDlcIj40OTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1MFwiPjUwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjUxXCI+NTE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTJcIj41Mjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1M1wiPjUzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU0XCI+NTQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTVcIj41NTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1NlwiPjU2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU3XCI+NTc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNThcIj41ODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1OVwiPjU5PC9vcHRpb24+PC9zZWxlY3Q+ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tbGcgYnRuLWRhcmtcIj5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC02IGFuaW1hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgey8qIElORk9STUFUSU9OICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJnLWxpZ2h0IGZvcm0tcGFuZWwgYW5pbWF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgcGFydHktaGVhZGVyIGJnLWRhcmsgYmctZ3JhZGllbnQgYW5pbWF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgREFURSBJTkZPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGF0ZS1kaXNwbGF5IGJvcmRlci1ib3R0b20gIHBiLTMgXCI+PGI+e2RheX0te21vbnRofS17eWVhcn08L2I+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluZm8tZGlzcGxheSBib3JkZXItYm90dG9tIHBiLTNcIj48Yj48c3BhbiBjbGFzc05hbWU9XCJpbmZvLWxhYmVsIGJnLXdoaXRlXCI+Vk9USU5HIFNUQVRVUzwvc3Bhbj48L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGVvZiBhY3RpdmVEYXkgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgYWN0aXZlRGF5LnN0YXR1cyA9PSAnQ0FOQ0VMRUQnID8gKCdTb21lIG1lbWJlcnMgYXJlIHVuYXZhaWxhYmxlJykgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZW9mIGFjdGl2ZURheSAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBhY3RpdmVEYXkuc3RhdHVzID09ICdNSVNTRUQnID8gKCdTY2hlZHVsZXMgbWlzc2VkJykgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZW9mIGFjdGl2ZURheSAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBhY3RpdmVEYXkuc3RhdHVzID09ICdWT1RFRCcgPyAoJ1ZvdGluZyBpbiBwcm9ncmVzcycpIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGVvZiBhY3RpdmVEYXkgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgYWN0aXZlRGF5LnN0YXR1cyA9PSAnRU1QVFknID8gKCdOb29uZSB2b3RlZCB5ZXQnKSA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlb2YgYWN0aXZlRGF5ICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIGFjdGl2ZURheS5zdGF0dXMgPT0gJ0dBTUVEQVknID8gKCdTY2hlZHVsZXMgbWF0Y2hlZCEnKSA6ICcnfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5mby1kaXNwbGF5IGJvcmRlci1ib3R0b20gcGItM1wiPjxiPjxzcGFuIGNsYXNzTmFtZT1cImluZm8tbGFiZWwgYmctd2hpdGVcIj5ZT1VSIFNUQVRVUzwvc3Bhbj48L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGVvZiBhY3RpdmVEYXkgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgYWN0aXZlRGF5LnBsYXllclN0YXR1cyA/ICdWb3RlZCcgOiBcIllvdSBkaWRuJ3Qgdm90ZVwifSAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5mby1kaXNwbGF5IGJvcmRlci1ib3R0b20gcGItM1wiPjxiPjxzcGFuIGNsYXNzTmFtZT1cImluZm8tbGFiZWwgYmctd2hpdGVcIj5XQUlUSU5HIEZPUjwvc3Bhbj48L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGVvZiBhY3RpdmVEYXkgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgIGFjdGl2ZURheS5yZW1haW5pbmdWb3RlcnMgIT09ICd1bmRlZmluZWQnICA/IGFjdGl2ZURheS5yZW1haW5pbmdWb3RlcnMgKyAnIG1lbWJlcihzKScgOiBcIlwifSAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGVvZiBhY3RpdmVEYXkgIT09ICd1bmRlZmluZWQnICYmIGFjdGl2ZURheS5zdGF0dXMgPT0gJ0dBTUVEQVknID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmZvLWRpc3BsYXkgYm9yZGVyLWJvdHRvbSBwYi0zXCI+PGI+PHNwYW4gY2xhc3NOYW1lPVwiaW5mby1sYWJlbCBiZy13aGl0ZVwiPkhPVVJTPC9zcGFuPjwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlb2YgYWN0aXZlRGF5ICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmICBhY3RpdmVEYXkuaG91cnMgIT09ICd1bmRlZmluZWQnICA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZURheS5ob3Vycy5tYXAoKHJhbmdlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3JhbmdlLnN0YXJ0LnN1YnN0cmluZygxMSwxNikrJyA8LT4gJyArcmFuZ2UuZmluaXNoLnN1YnN0cmluZygxMSwxNil9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBcIlwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogVk9URVMgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0YWJsZS1jZWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYmctbGlnaHQgZm9ybS1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHBhcnR5LWhlYWRlciBiZy1kYXJrIGJnLWdyYWRpZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWU9VUiBWT1RFUyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0dXMgPT0gJ3N1Y2Nlc3MnID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS52b3Rlcy5tYXAoKGV2ZW50KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2N1c3RvbS12b3RlLWRpc3BsYXkgJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFldmVudC52b3RlVHlwZSA/IFwiSSdtIG91dFwiIDogZXZlbnQuc3RhcnQrICcgLSAnICsgZXZlbnQuZmluaXNofVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gIGNsYXNzTmFtZT1cInZvdGUtdHJhc2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGlkPXtldmVudC5pZH0gY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtdHJhc2gtY2FuXCIgb25DbGljaz17ZGVsZXRlVm90ZU11dGF0aW9uLm11dGF0ZX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogJ0xvYWRpbmcuLi4nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgdGFibGUtY2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJnLWxpZ2h0IGZvcm0tcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgcGFydHktaGVhZGVyIGJnLWRhcmsgYmctZ3JhZGllbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBSRVNFVFNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29taW5nIHNvb24uLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIHtkYXRhTXV0YXRpb24uaXNTdWNjZXNzID8gXHJcbiAgICAgICAgICAgICggIFxyXG4gICAgICAgICAgICAgICAgPFN1Ym1pdFRvYXN0IHR5cGU9J3N1Y2Nlc3MnIG1lc3NhZ2U9J1lvdXIgdm90ZSBoYXMgYmVlbiBzZW50Jy8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgIHtkZWxldGVWb3RlTXV0YXRpb24uaXNTdWNjZXNzID8gXHJcbiAgICAgICAgICAgICggIFxyXG4gICAgICAgICAgICAgICAgPFN1Ym1pdFRvYXN0IHR5cGU9J3N1Y2Nlc3MnIG1lc3NhZ2U9J1lvdXIgdm90ZSBoYXMgYmVlbiBkZWxldGVkJy8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XHJcbmltcG9ydCBUb2FzdCBmcm9tICdyZWFjdC1ib290c3RyYXAvVG9hc3QnO1xyXG5cclxuXHJcbmNvbnN0IFN1Ym1pdFRvYXN0ID0gKHt0eXBlLCBtZXNzYWdlfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzaG93QSwgc2V0U2hvd0FdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlU2hvd0EgPSAoKSA9PiBzZXRTaG93QSghc2hvd0EpO1xyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXIgY2xhc3NOYW1lPSd0b2FzdGVkJyBjb250YWluZXJQb3NpdGlvbj0nYWJzb2x1dGUnIHBvc2l0aW9uPSdtaWRkbGUtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIDxUb2FzdCBiZz17dHlwZX0gc2hvdz17c2hvd0F9IG9uQ2xvc2U9e3RvZ2dsZVNob3dBfSBkZWxheT17MjAwMH0gYXV0b2hpZGU+XHJcbiAgICAgICAgICAgICAgICA8VG9hc3QuSGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cIm1lLWF1dG9cIj57bWVzc2FnZX08L3N0cm9uZz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L1RvYXN0LkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIHsvKiA8VG9hc3QuQm9keSA+WW91ciB2b3RlIGhhcyBiZWVuIHNlbmQ8L1RvYXN0LkJvZHk+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9Ub2FzdD5cclxuICAgICAgICAgICAgPC9Ub2FzdENvbnRhaW5lcj5cclxuICAgIFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3VibWl0VG9hc3Q7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IERheSBmcm9tICcuL0RheSc7XHJcbmNvbnN0IFdlZWsgPSAoe3dlZWtEYXRhLCBhY3RpdmVEYXksIHNldEFjdGl2ZURheX0pID0+IHtcclxuXHJcblxyXG4gICAgY29uc3QgW3dlZWssIHNldFdlZWtdID0gIHVzZVN0YXRlKHdlZWtEYXRhKTtcclxuICAgIGNvbnN0IFtkYXRhTG9hZGVkLCBzZXREYXRhTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIFxyXG4gICAgbGV0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHdlZWtEYXRhICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBzZXREYXRhTG9hZGVkKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sW3dlZWtdKTtcclxuICAgIFxyXG4gICAgLy8gY29uc29sZS5sb2coYWN0aXZlRGF5LmRhdGUpO1xyXG4gICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAge2RhdGFMb2FkZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgd2Vlay5tYXAoKGRheSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERheSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWQrJy0nK2RheS5tb250aE51bWJlci50b1N0cmluZygpICtcIi1cIisgZGF5Lm51bWJlci50b1N0cmluZygpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheURhdGEgPSB7ZGF5fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZURheT17YWN0aXZlRGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlRGF5PXtzZXRBY3RpdmVEYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdmYWxzZSdcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgKX0gICBcclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2VlayIsImltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyaWVzLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5cclxuY29uc3QgQ3JlYXRlUGFydHkgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xyXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gICAgY29uc3QgY3JlYXRlR2FtZU11dGF0aW9uID0gdXNlTXV0YXRpb24oe1xyXG4gICAgICAgIG11dGF0aW9uRm46IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gIGZldGNoKCcvYXBpL2dhbWUvY3JlYXRlJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFsncGFydHktbGlzdCddKTtcclxuICAgICAgICAgICAgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoWydwYXJ0eS1saXN0J10pO1xyXG4gICAgICAgICAgICBuYXZpZ2F0ZSgnL215LWFjdGl2aXRpZXMnKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1BhcnR5IHdhcyBjcmVhdGVkIScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+ICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC05IGNvbC1hdXRvIGJnLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS02IHRleHQtY2VudGVyXCI+Q3JlYXRlIFBhcnR5PC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG5hbWU9XCJnYW1lXCIgbWV0aG9kPVwicG9zdFwiIG9uU3VibWl0PXtjcmVhdGVHYW1lTXV0YXRpb24ubXV0YXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJnYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ2FtZV9uYW1lXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlBhcnR5IG5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJnYW1lX25hbWVcIiBuYW1lPVwiZ2FtZVtuYW1lXVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJnYW1lX3RpdGxlXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkFjdGl2aXR5IG5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJnYW1lX3RpdGxlXCIgbmFtZT1cImdhbWVbdGl0bGVdXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdhbWVfZGVzY3JpcHRpb25cIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+RGVzY3JpcHJpb246PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiZ2FtZV9kZXNjcmlwdGlvblwiIG5hbWU9XCJnYW1lW2Rlc2NyaXB0aW9uXVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdhbWVfbWluU2Vzc2lvbkxlbmd0aFwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5NaW5pbWFsIHNlc3Npb24gbGVuZ3RoIChtaW51dGVzKTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImdhbWVfbWluU2Vzc2lvbkxlbmd0aFwiIG5hbWU9XCJnYW1lW21pblNlc3Npb25MZW5ndGhdXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaWQ9XCJnYW1lX1NhdmVcIiBuYW1lPVwiZ2FtZVtTYXZlXVwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBidG4tbGcgYnRuXCI+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW5wdXQgdHlwZT1cImhpZGRlblwiIGlkPVwiZ2FtZV9fdG9rZW5cIiBuYW1lPVwiZ2FtZVtfdG9rZW5dXCIgdmFsdWU9XCI1OGJkOC54TWFXN0ZybTdSdXkyRWljckxfVmFLTWdERXUwbWlRUk12UFFnNG1wT2pVLmhhblZxeC1ObmxtRTRBN0RtbzJoTXBOblpSam1xaGRjZTdLazZySGtiblNqOXFlZ0ZLS3NkdUdOQlFcIj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVBhcnR5OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQm94IGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZXBhZ2UvQm94JztcclxuaW1wb3J0IERpc2NsYWltZXIgZnJvbSAnLi4vY29tcG9uZW50cy9ob21lcGFnZS9EaXNjbGFpbWVyJztcclxuXHJcbmNvbnN0IEhvbWVwYWdlID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGJveDEgPSB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0NyZWF0ZSBwYXJ0eScsXHJcbiAgICAgICAgJ2ljb24nOiAnZmEtcmVndWxhciBmYS11c2Vycy1iZXR3ZWVuLWxpbmVzIGZhLTh4IG0tMyBtYi01JyxcclxuICAgICAgICAndGV4dCc6ICdNYWtlIGEgbmV3IHJlY291cmluZyBhY3Rpdml0eSB0byBtYW5hZ2UnXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJveDIgPSB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0FkZCBNZW1iZXJzJyxcclxuICAgICAgICAnaWNvbic6ICdmYS1yZWd1bGFyIGZhLXBlb3BsZS1wdWxsaW5nIGZhLTh4IG0tMyBtYi01JyxcclxuICAgICAgICAndGV4dCc6IFwiSW52aXRlIHlvdXIgZnJpZW5kc1wiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJveDMgPSB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0ZpbmQgZGF0ZScsXHJcbiAgICAgICAgJ2ljb24nOiAnZmEtcmVndWxhciBmYS1jYWxlbmRhci1jaGVjayBmYS04eCBtLTMgbWItNScsXHJcbiAgICAgICAgJ3RleHQnOiAnIFBsYWNlIHlvdXIgdm90ZXMgYW5kIGFwcCB3aWxsIGRvIHRoZSByZXN0J1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBib3hDb250ZW50ID0gW2JveDEsIGJveDIsIGJveDNdO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhsLTknPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXNjbGFpbWVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2Rpc3BsYXktNiB0ZXh0LWNlbnRlciB1bml2ZXJzYWwtc2hhZG93LXRleHQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXZWxjb21lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteGwtOSc+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdsZWFkJz5cclxuICAgICAgICAgICAgICAgICAgICBIQVJNT04gaXMgYW4gYXBwIHRoYXQgaGVscHMgdG8gZmluZCBtYXRjaGluZyBzY2hlZHVsZXMgaW4gcGFydHkgb2YgZmV3IHBlb3BlIGFycmFuZ2VkIGZvciByZWNjdXJpbmdcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpdml0aWVzIGxpa2Ugc3BvcnRzLCBib2FyZCBnYW1lcywgZGlnaXRhbCBnYW1lcyBvciBwb2tlci4gVGhlIG1ldGhvZG9sb2d5IGlzIHdycGFlZCBpbiAzIHNpcG1wbGUgcGludHMgYmVsb3dcclxuICAgICAgICAgICAgICAgICAgICBidXQgeW91IHdpbGwgZmluZCAgbW9yZSBpbiBkZXB0aCBpbnN0cnVjdHJpb25zIHVuZGVyIDxiPnRoaXMgbGluazwvYj4uIFlvdSBjYW4gYWxzbyBnZXQgZnVsbCBkb2N1bWVudGF0aW9uIG9uIG15IDxiPmdpdGh1YjwvYj5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhsLTkgJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgZy00Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JveENvbnRlbnQubWFwKChib3gpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3gga2V5PXtib3gudGl0bGV9IGNvbnRlbnQ9e2JveH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZTsiLCJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3QgSG9zdE9wdGlvbnMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgICBjb25zdCB7IGRhdGE6IGdhbWUsIHN0YXR1czogZ2FtZVN0YXR1cyB9ID0gdXNlUXVlcnkoe1xyXG4gICAgICAgIHF1ZXJ5S2V5OiBbJ2dhbWVJbmZvJ10sIFxyXG4gICAgICAgIHF1ZXJ5Rm46ICgpID0+IGdldEdhbWVEYXRhKCksXHJcbiAgICAgICAgcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZ2V0R2FtZURhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZ2FtZVJvdXRlID0gJ2h0dHA6Ly8xMjcuMC4wLjEvYXBpL2dhbWUtZGF0YS8nKyBpZCA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChnYW1lUm91dGUpO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC00Jz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2Rpc3BsYXktNiB0ZXh0LWNlbnRlciB1bml2ZXJzYWwtc2hhZG93LXRleHQnPlxyXG4gICAgICAgICAgICAgICAgICAgIFBhcnR5IGhvc3QgcGFuZWxcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhsLTYnPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14bC02Jz5cclxuICAgICAgICAgICAgICAgICAgICB7Z2FtZVN0YXR1cyA9PSAnc3VjY2VzcycgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYmctbGlnaHQgZm9ybS1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHBhcnR5LWhlYWRlciBiZy1kYXJrIGJnLWdyYWRpZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUEFSVFkgSU5GT1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFydHktbmFtZSBib3JkZXItYm90dG9tIHB0LTIgcGItM1wiPjxiPjxzcGFuIGNsYXNzTmFtZT1cImluZm8tbGFiZWwgYmctd2hpdGVcIj5QQVJUWSBOQU1FPC9zcGFuPjwvYj4ge2dhbWUucGFydHlJbmZvLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFydHktbmFtZSAgYm9yZGVyLWJvdHRvbSBwdC0yIHBiLTNcIj48Yj48c3BhbiBjbGFzc05hbWU9XCJpbmZvLWxhYmVsIGJnLXdoaXRlXCI+QUNUSVZJVFk8L3NwYW4+PC9iPiB7Z2FtZS5wYXJ0eUluZm8uYWN0aXZpdHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluZm8tZGlzcGxheSBib3JkZXItYm90dG9tICAgcGItM1wiPjxiPjxzcGFuIGNsYXNzTmFtZT1cImluZm8tbGFiZWwgYmctd2hpdGVcIj5ERVNDUklQVElPTjwvc3Bhbj48L2I+IHtnYW1lLnBhcnR5SW5mby5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5mby1kaXNwbGF5IGJvcmRlci1ib3R0b20gcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPjxzcGFuIGNsYXNzTmFtZT1cImluZm8tbGFiZWwgYmctd2hpdGVcIj5NRU1CRVJTPC9zcGFuPjwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2FtZS5wYXJ0eUluZm8uYWN0aXZlTWVtYmVycy5tYXAoKHBsYXllcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e3BsYXllci5pZH0gY2xhc3NOYW1lPVwicGxheWVyLW5hbWVcIj4ge3BsYXllci5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6ICcnfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb3N0T3B0aW9uczsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBPdXRsZXQsIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlTG9hZCBmcm9tICdyZWFjdC11c2UtbG9hZCc7XHJcbmltcG9ydCB7IHVzZUxvYWRTdGF0ZSwgTG9hZGluZyB9IGZyb20gJ3JlYWN0LXVzZS1sb2FkJztcclxuLy8gaW1wb3J0IHVzZUxvYWQgZnJvbSAncmVhY3QtdXNlLWxvYWQnO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2L05hdkJhcidcclxuXHJcbmNvbnN0IExheW91dCA9ICh7dXNlcn0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbdXNlcklkLHNldFVzZXJJZF0gPSB1c2VTdGF0ZSh1c2VyKTtcclxuICAgIFxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsvKiA8RGF0YUNvbXBvbmVudCAvPiAqL31cclxuICAgICAgICAgICAgey8qIFVzZXIgPSB7dXNlcn0gKi99XHJcbiAgICAgICAgICAgIDxOYXZCYXIgdXNlckRhdGE9e3VzZXJ9Lz5cclxuICAgICAgICAgICAgPE91dGxldCBjb250ZXh0PXtbdXNlcklkLHNldFVzZXJJZF19IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJpZXMsIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGxvZ2luTXV0YXRpb24gPSB1c2VNdXRhdGlvbih7XHJcbiAgICAgICAgbXV0YXRpb25GbjogKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGlkKTtcclxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KVxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9ICBmZXRjaCgnL2FwaS9sb2dpbicsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbJ3VzZXInXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdZQVkhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD4gIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC01XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNSBiZy1saWdodCBwYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTUgbWItNFwiPkxvZ2luPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvblN1Ym1pdD17bG9naW5NdXRhdGlvbi5tdXRhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q9XCJwb3N0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbCBtdC0zXCI+RW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIGlkPVwidXNlcm5hbWVcIiBuYW1lPVwiX3VzZXJuYW1lXCIgZGVmYXVsdFZhbHVlPVwiXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbCBtdC0zXCIgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgbmFtZT1cIl9wYXNzd29yZFwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgbXQtM1wiIHR5cGU9XCJzdWJtaXRcIj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZGlzcGxheS01Jz5Mb2dvdXQ8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nb3V0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUGFydHlMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbXlBY3Rpdml0aWVzL1BhcnR5TGlzdCc7XHJcbmltcG9ydCBCb3ggZnJvbSAnLi4vY29tcG9uZW50cy9ob21lcGFnZS9Cb3gnO1xyXG5pbXBvcnQgRGlzY2xhaW1lciBmcm9tICcuLi9jb21wb25lbnRzL2hvbWVwYWdlL0Rpc2NsYWltZXInO1xyXG5pbXBvcnQgeyB1c2VPdXRsZXRDb250ZXh0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IE15QWN0aXZpdGllcyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSAgdXNlT3V0bGV0Q29udGV4dCgpO1xyXG5cclxuICAgIGNvbnN0IGJveDEgPSB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0NyZWF0ZSBwYXJ0eScsXHJcbiAgICAgICAgJ2ljb24nOiAnZmEtcmVndWxhciBmYS11c2Vycy1iZXR3ZWVuLWxpbmVzIGZhLTh4IG0tMyBtYi01JyxcclxuICAgICAgICAndGV4dCc6ICdNYWtlIGEgbmV3IHJlY291cmluZyBhY3Rpdml0eSB0byBtYW5hZ2UnXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvLyBjb25zdCBib3hDb250ZW50ID0gW2JveDEsIGJveDIsIGJveDNdO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIHsvKiBhY3RpIDoge3VzZXJ9ICovfVxyXG4gICAgICAgICAgICB7LyogdGl0bGUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC00Jz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2Rpc3BsYXktNiB0ZXh0LWNlbnRlciB1bml2ZXJzYWwtc2hhZG93LXRleHQnPlxyXG4gICAgICAgICAgICAgICAgICAgIExpc3Qgb2YgcGFydGllc1xyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogdGFibGUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC00Jz5cclxuICAgICAgICAgICAgICAgIDxQYXJ0eUxpc3QgdXNlckRhdGE9e3VzZXJ9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBY3Rpdml0aWVzOyIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHV1aWQgZnJvbSAncmVhY3QtdXVpZCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgV2VlayBmcm9tICcuLi9jb21wb25lbnRzL3BhcnR5L1dlZWsnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL3BhcnR5L0Zvcm0nO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XHJcblxyXG5cclxuXHJcbmNvbnN0IFBhcnR5ID0gKCkgPT4ge1xyXG5cclxuICAgIGxldCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuXHJcbiAgICBjb25zdCBbYWN0aXZlRGF5LCBzZXRBY3RpdmVEYXldID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICAvLyBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gdXNlUXVlcnkoWydjYWxlbmRhciddLCAoKSA9PiBnZXRDYWxlbmRhckRhdGEoKSk7XHJcbiAgICAvLyBjb25zdCB7Z2FtZWRhdGEgLCBnYW1lRGF0YVN0YXR1c30gPSB1c2VRdWVyeShbJ2dhbWUnXSwgKCkgPT4gZ2V0R2FtZURhdGEoKSk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBnYW1lLCBzdGF0dXM6IGdhbWVTdGF0dXMgfSA9IHVzZVF1ZXJ5KHtcclxuICAgICAgICBxdWVyeUtleTogWydnYW1lRGF0YSddLCBcclxuICAgICAgICBxdWVyeUZuOiAoKSA9PiBnZXRHYW1lRGF0YSgpLFxyXG4gICAgICAgIC8vIHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSB1c2VRdWVyeSh7XHJcbiAgICAgICAgcXVlcnlLZXk6IFsnY2FsZW5kYXInXSwgXHJcbiAgICAgICAgcXVlcnlGbjogKCkgPT4gZ2V0Q2FsZW5kYXJEYXRhKCksXHJcbiAgICAgICAgcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGdldENhbGVuZGFyRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBjYWxlbmRhclJvdXRlID0gJ2h0dHA6Ly8xMjcuMC4wLjEvYXBpL2NhbGVuZGFyLycrIGlkIDtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGNhbGVuZGFyUm91dGUpO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0R2FtZURhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZ2FtZVJvdXRlID0gJ2h0dHA6Ly8xMjcuMC4wLjEvYXBpL2dhbWUtZGF0YS8nKyBpZCA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChnYW1lUm91dGUpO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogdGFibGUgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIGNhbGVuZGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjYXB0aW9uIGNsYXNzTmFtZT1cImJnLWRhcmsgYmctZ3JhZGllbnRcIiA+TU9OVEggRElTUExBWTwvY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+TW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlR1ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5XZWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+VGh1PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkZyaTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5TYXQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+U3VuPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXR1cyA9PSAnc3VjY2VzcycgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmNhbGVuZGFyLm1hcCgod2VlaywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V2VlayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkKyctJytpbmRleH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Vla0RhdGEgPSB7d2Vla30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlRGF5PXthY3RpdmVEYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlRGF5PXtzZXRBY3RpdmVEYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKDx0cj48dGQ+bG9hZGluZzwvdGQ+PC90cj4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPiAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogRk9STSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBrZXkgPXtpZH0gYWN0aXZlRGF5PXthY3RpdmVEYXl9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBQQVJUWSBJTkZPICovfVxyXG4gICAgICAgICAgICB7Z2FtZVN0YXR1cyA9PSAnc3VjY2VzcycgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYmctbGlnaHQgZm9ybS1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBwYXJ0eS1oZWFkZXIgYmctZGFyayBiZy1ncmFkaWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUEFSVFkgSU5GT1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJ0eS1uYW1lIGJvcmRlci1ib3R0b20gcHQtMiBwYi0zXCI+PGI+PHNwYW4gY2xhc3NOYW1lPVwiaW5mby1sYWJlbCBiZy13aGl0ZVwiPlBBUlRZIE5BTUU8L3NwYW4+PC9iPiB7Z2FtZS5wYXJ0eUluZm8ubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJ0eS1uYW1lICBib3JkZXItYm90dG9tIHB0LTIgcGItM1wiPjxiPjxzcGFuIGNsYXNzTmFtZT1cImluZm8tbGFiZWwgYmctd2hpdGVcIj5BQ1RJVklUWTwvc3Bhbj48L2I+IHtnYW1lLnBhcnR5SW5mby5hY3Rpdml0eX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmZvLWRpc3BsYXkgYm9yZGVyLWJvdHRvbSAgIHBiLTNcIj48Yj48c3BhbiBjbGFzc05hbWU9XCJpbmZvLWxhYmVsIGJnLXdoaXRlXCI+REVTQ1JJUFRJT048L3NwYW4+PC9iPiB7Z2FtZS5wYXJ0eUluZm8uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluZm8tZGlzcGxheSBib3JkZXItYm90dG9tIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+PHNwYW4gY2xhc3NOYW1lPVwiaW5mby1sYWJlbCBiZy13aGl0ZVwiPk1FTUJFUlM8L3NwYW4+PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2FtZS5wYXJ0eUluZm8uYWN0aXZlTWVtYmVycy5tYXAoKHBsYXllcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtwbGF5ZXIuaWR9IGNsYXNzTmFtZT1cInBsYXllci1uYW1lXCI+IHtwbGF5ZXIubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogJyd9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXJ0eTsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgUmVhZG1lID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZGlzcGxheS01Jz5SZWFkbWU8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhZG1lOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiUmVhY3QiLCJjcmVhdGVSb290IiwiQnJvd3NlclJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwiTG9nb3V0IiwiTGF5b3V0IiwiSG9tZXBhZ2UiLCJSZWFkbWUiLCJQYXJ0eSIsIk15QWN0aXZpdGllcyIsIkhvc3RPcHRpb25zIiwidXVpZCIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsInVzZVF1ZXJ5IiwiTG9naW4iLCJDcmVhdGVQYXJ0eSIsIk1haW4iLCJjaGVja0lmTG9nZ2VkSW4iLCJyb3V0ZSIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiTWFpblBhZ2UiLCJxdWVyeUNsaWVudCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwicmVxdWlyZSIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJjb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJCb3giLCJjb250ZW50IiwidGl0bGUiLCJpY29uIiwidGV4dCIsIkRpc2NsYWltZXIiLCJ1c2VNdXRhdGlvbiIsInVzZVF1ZXJ5Q2xpZW50IiwiQnV0dG9uIiwiTW9kYWwiLCJNZW1iZXJPcHRpb25zIiwic2hvd01lbWJlck9wdGlvbnMiLCJoYW5kbGVDbG9zZU1lbWJlck9wdCIsInBhcnR5SWQiLCJhY3RpdmVNZW1iZXIiLCJpbmFjdGl2ZU11dGF0aW9uIiwibXV0YXRpb25GbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJtZXRob2QiLCJib2R5Iiwib25TdWNjZXNzIiwiaW52YWxpZGF0ZVF1ZXJpZXMiLCJsZWF2ZVBhcnR5ZU11dGF0aW9uIiwibXV0YXRlIiwiYXN5bmMiLCJMaW5rIiwiT3ZlcmxheVRyaWdnZXIiLCJUb29sdGlwIiwiUGFydHlJdGVtIiwiYWN0aXZpdHkiLCJ1c2VyRGF0YSIsInNldFNob3dNZW1iZXJPcHRpb25zIiwiaGFuZGxlU2hvd01lbWJlck9wdCIsImhvc3RPcHRpb25zUm91dGUiLCJpZCIsInBhcnR5Um91dGUiLCJpbnZpdGF0aW9uYWxMaW5rIiwic2x1ZyIsImNvcHlJbnZpTGluayIsInRleHRGaWVsZCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJhcHBlbmRDaGlsZCIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwicmVtb3ZlIiwiYWxlcnQiLCJob3N0ZWQiLCJzaG93IiwiaGlkZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInBsYXllcnMiLCJsb2NrZWQiLCJpc0FjdGl2ZSIsIlBhcnR5TGlzdCIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsImdldEFjdGl2aXR5TGlzdCIsInJlZmV0Y2hPbldpbmRvd0ZvY3VzIiwiYWN0aXZpdHlMaXN0IiwiYWN0aXZpdHlMaXN0U3RhdHVzIiwiYWN0aXZpdHlUYWJsZSIsIm1hcCIsIk5hdkl0ZW0iLCJOYXZiYXIiLCJuYXZJdGVtMSIsIm5hdkl0ZW0yIiwibmF2SXRlbTMiLCJuYXZJdGVtNCIsIm5hdkl0ZW01IiwibmF2SXRlbTYiLCJuYXZJdGVtNyIsImFsbE5hdmJhckl0ZW1zIiwibmF2YmFyIiwic2V0TmF2YmFyIiwiY3JlYXRlTmF2YmFyIiwibmF2YmFyQ29udGVudCIsImZvckVhY2giLCJpdGVtIiwidHlwZSIsInB1c2giLCJuYXZJdGVtIiwiT3V0bGV0IiwidXNlUGFyYW1zIiwiRGF5IiwiZGF5RGF0YSIsInNldEFjdGl2ZURheSIsImFjdGl2ZURheSIsImRhdGVTdHJpbmciLCJkYXRlIiwic3Vic3RyaW5nIiwiZ2V0RGF5RGF0YSIsInNldElzQWN0aXZlIiwicGlja0RhdGUiLCJkYXkiLCJkYXlJbmZvIiwidG9kYXkiLCJudW1iZXIiLCJyZW1haW5pbmdWb3RlcnMiLCJwbGF5ZXJTdGF0dXMiLCJBbmltYXRlSGVpZ2h0IiwiVG9hc3QiLCJTdWJtaXRUb2FzdCIsIkZvcm0iLCJzZXREYXkiLCJtb250aCIsInNldE1vbnRoIiwieWVhciIsInNldFllYXIiLCJ2b3RlU3RhdHVzIiwic2V0Vm90ZVN0YXR1cyIsImdldFZvdGVzIiwic3BsaXRlZERhdGUiLCJzcGxpdCIsInBhcnNlSW50IiwiY2hlY2tWb3RlU3RhdHVzIiwidGFyZ2V0IiwidmFsdWUiLCJkYXRhTXV0YXRpb24iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZGVsZXRlVm90ZU11dGF0aW9uIiwidm90ZUlkIiwiY29uZmlybSIsImhvdXJzIiwicmFuZ2UiLCJzdGFydCIsImZpbmlzaCIsInZvdGVzIiwidm90ZVR5cGUiLCJpc1N1Y2Nlc3MiLCJUb2FzdENvbnRhaW5lciIsIkNvbCIsIlJvdyIsIm1lc3NhZ2UiLCJzaG93QSIsInNldFNob3dBIiwidG9nZ2xlU2hvd0EiLCJXZWVrIiwid2Vla0RhdGEiLCJ3ZWVrIiwic2V0V2VlayIsImRhdGFMb2FkZWQiLCJzZXREYXRhTG9hZGVkIiwibW9udGhOdW1iZXIiLCJ0b1N0cmluZyIsInVzZVF1ZXJpZXMiLCJ1c2VOYXZpZ2F0ZSIsIm5hdmlnYXRlIiwiY3JlYXRlR2FtZU11dGF0aW9uIiwiYm94MSIsImJveDIiLCJib3gzIiwiYm94Q29udGVudCIsImJveCIsImdldEdhbWVEYXRhIiwiZ2FtZSIsImdhbWVTdGF0dXMiLCJnYW1lUm91dGUiLCJwYXJ0eUluZm8iLCJhY3RpdmVNZW1iZXJzIiwicGxheWVyIiwidXNlTG9hZCIsInVzZUxvYWRTdGF0ZSIsIkxvYWRpbmciLCJOYXZCYXIiLCJ1c2VySWQiLCJzZXRVc2VySWQiLCJsb2dpbk11dGF0aW9uIiwidXNlT3V0bGV0Q29udGV4dCIsInNldFVzZXIiLCJnZXRDYWxlbmRhckRhdGEiLCJjYWxlbmRhclJvdXRlIiwiY2FsZW5kYXIiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=