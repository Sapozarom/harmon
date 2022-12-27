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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _pages_Logout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Logout */ "./assets/js/pages/Logout.js");
/* harmony import */ var _pages_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Layout */ "./assets/js/pages/Layout.js");
/* harmony import */ var _pages_Homepage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Homepage */ "./assets/js/pages/Homepage.js");
/* harmony import */ var _pages_Readme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Readme */ "./assets/js/pages/Readme.js");
/* harmony import */ var _pages_Party__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Party */ "./assets/js/pages/Party.js");
/* harmony import */ var _pages_MyActivities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/MyActivities */ "./assets/js/pages/MyActivities.js");
/* harmony import */ var _pages_HostOptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/HostOptions */ "./assets/js/pages/HostOptions.js");
/* harmony import */ var _getData_getData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getData/getData */ "./assets/js/getData/getData.js");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useQuery.mjs");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/query-core/build/lib/queryClient.mjs");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs");
/* harmony import */ var _pages_Login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/Login */ "./assets/js/pages/Login.js");
/* harmony import */ var _pages_CreateParty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/CreateParty */ "./assets/js/pages/CreateParty.js");

 // import { Routes } from 'react-router-dom';









 // import {StrictMode} from 'react';
// import {createRoot} from 'react-dom/client';





var Main = function Main() {
  // const checkIfLoggedIn = async () => {
  //     const route = '/api/homepage/nav';
  //     const response = await fetch(route);
  //     return response.json();
  // }
  var userRoute = '/homepage/nav';

  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_12__.useQuery)(['user'], function () {
    return (0,_getData_getData__WEBPACK_IMPORTED_MODULE_9__["default"])(userRoute);
  }),
      data = _useQuery.data,
      status = _useQuery.status; // TODO: USUŃ


  console.log(data, status);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, status == "success" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      user: data.user
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    index: true,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Homepage__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "readme",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Readme__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "my-activities",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_MyActivities__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "party/show/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Party__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "party/options/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_HostOptions__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "party/create",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_CreateParty__WEBPACK_IMPORTED_MODULE_11__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "logout",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Logout__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Login__WEBPACK_IMPORTED_MODULE_10__["default"], null)
  })))) : 'loading');
};

var MainPage = function MainPage() {
  var queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_15__.QueryClient();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_16__.QueryClientProvider, {
    client: queryClient
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Main, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);
var container = document.getElementById('root');
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MainPage, null));

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

/***/ "./assets/js/components/hostOptions/OptionsPanel.js":
/*!**********************************************************!*\
  !*** ./assets/js/components/hostOptions/OptionsPanel.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
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
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useQuery.mjs");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useMutation.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _getData_getData__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../getData/getData */ "./assets/js/getData/getData.js");
/* harmony import */ var react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-bootstrap/OverlayTrigger */ "./node_modules/react-bootstrap/esm/OverlayTrigger.js");
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-bootstrap/Tooltip */ "./node_modules/react-bootstrap/esm/Tooltip.js");
/* harmony import */ var _party_SubmitToast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../party/SubmitToast */ "./assets/js/components/party/SubmitToast.js");

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var OptionPanel = function OptionPanel() {
  var queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_19__.useQueryClient)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_20__.useNavigate)();

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_20__.useParams)(),
      id = _useParams.id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      currentPlayer = _useState2[0],
      setCurrentPlayer = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      newHostId = _useState4[0],
      setNewHostId = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      activePlayers = _useState6[0],
      setActivePlayers = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      inactivePlayers = _useState8[0],
      setInactivePlayers = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)('Inactive'),
      _useState10 = _slicedToArray(_useState9, 2),
      playerStatus = _useState10[0],
      setPlayerStatus = _useState10[1];

  var gameDataRoute = "/game-data/".concat(id);

  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_21__.useQuery)({
    queryKey: ['gameData'],
    queryFn: function queryFn() {
      return (0,_getData_getData__WEBPACK_IMPORTED_MODULE_17__["default"])(gameDataRoute);
    },
    onSuccess: function onSuccess(data) {
      if (typeof currentPlayer == 'undefined') {
        setCurrentPlayer(data.partyInfo.host);
      }

      var active = [];
      data.partyInfo.activeMembers.map(function (player) {
        return active.push(player.id);
      });
      var inactive = [];
      data.partyInfo.inactiveMembers.map(function (player) {
        return inactive.push(player.id);
      });

      if (active.find(function (value) {
        return value == currentPlayer;
      })) {
        setPlayerStatus('Inactive');
      } else {
        setPlayerStatus('Active');
      }

      setActivePlayers(active);
      setInactivePlayers(inactive);
    }
  }),
      game = _useQuery.data,
      gameStatus = _useQuery.status;

  var statusMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_22__.useMutation)({
    mutationFn: function mutationFn() {
      var response = fetch("/api/game/change-user-status/".concat(id, "/").concat(currentPlayer), {
        method: 'POST'
      }); // console.log(response);

      return response;
    },
    onSuccess: function onSuccess() {
      // console.log(data);
      queryClient.invalidateQueries(['gameData']);
    }
  });

  var removeMember = function removeMember() {
    if (confirm('This member will be remove permanently. Do you want ot proceed?')) {
      removeMemberMutation.mutate();
    }
  };

  var removeMemberMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_22__.useMutation)({
    mutationFn: function mutationFn() {
      var response = fetch("/api/game/remove-member/".concat(id, "/").concat(currentPlayer), {
        method: 'POST'
      });
      return response;
    },
    onSuccess: function onSuccess() {
      // console.log(data);
      queryClient.invalidateQueries(['gameData']);
    }
  });
  var promoToHostMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_22__.useMutation)({
    mutationFn: function mutationFn() {
      var response = fetch("/api/game/promote-to-host/".concat(id, "/").concat(newHostId), {
        method: 'POST'
      });
      promoToHostMutation.status = 'idle';
      return response;
    },
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries(['gameData']);
    }
  }); // const lockParty = (e) => {
  //     lockMutation.mutate();
  // } 

  var lockMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_22__.useMutation)({
    mutationFn: function mutationFn() {
      var response = fetch("/api/game/change-lock-status/".concat(id), {
        method: 'POST'
      }); // console.log(response);

      return response;
    },
    onSuccess: function onSuccess() {
      // console.log(data);
      queryClient.invalidateQueries(['gameData']);
    }
  });

  var deleteParty = function deleteParty() {
    if (confirm("This party will be deleted with all it's data. Do you want to continue?")) {
      deleteMutation.mutate();
    }
  };

  var deleteMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_22__.useMutation)({
    mutationFn: function mutationFn() {
      var response = fetch("/api/game/delete-party/".concat(id), {
        method: 'DELETE'
      });
      return response;
    },
    onSuccess: function onSuccess() {
      // queryClient.invalidateQueries(['party-list']);
      navigate('/my-activities');
    }
  });

  var getPlayerStatus = function getPlayerStatus(e) {
    var playerId = e.target.value;
    setCurrentPlayer(playerId);
    var isActive = activePlayers.find(function (value) {
      return value == playerId;
    });
    var isInactive = inactivePlayers.find(function (value) {
      return value == playerId;
    }); // console.log(playerId ,isActive, isInactive);

    if (typeof isActive != 'undefined') {
      setPlayerStatus('Inactive');
    }

    if (typeof isInactive != 'undefined') {
      setPlayerStatus('Active');
    }
  };

  var determineNewHost = function determineNewHost(e) {
    var playerId = e.target.value;
    setNewHostId(playerId);
  };

  console.log('new host ' + newHostId); // console.log('host mutation statust ' + promoToHostMutation.status);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, gameStatus == 'success' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "row mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "col-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "border bg-light form-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "d-flex flex-row justify-content-center party-header bg-dark bg-gradient"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "p-0"
  }, "OPTIONS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "row mt-1 border-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "co-6 p-0 lead mb-2"
  }, "Manage members", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_23__["default"], {
    delay: {
      show: 250,
      hide: 400
    },
    overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_24__["default"], {
      id: "options-tooltip"
    }, "Inactive players doesn't take part in voting process, but they can still open party panel. Removed players can't rejoin locked parties.")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("i", {
    className: "fa-regular fa-circle-question option-info"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "row mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "col-6 p-0 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("select", {
    id: "players-list",
    className: playerStatus == 'Active' ? " form-select inactive-member-option" : "form-select active-member-option",
    value: currentPlayer,
    onChange: getPlayerStatus
  }, game.partyInfo.activeMembers.map(function (player) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("option", {
      key: player.id,
      className: "active-member-option",
      value: player.id
    }, " ", player.name, " ");
  }), game.partyInfo.inactiveMembers.map(function (player) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("option", {
      key: player.id,
      className: "inactive-member-option",
      value: player.id
    }, player.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", {
    className: "btn btn-dark full-width",
    onClick: statusMutation.mutate
  }, "Make ", playerStatus)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "col-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", {
    className: "btn btn-danger",
    onClick: removeMember
  }, "Remove")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "row mt-3 border-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "row mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "col-6 lead p-0"
  }, game.partyInfo.status ? 'Unlock party' : 'Lock party', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_23__["default"], {
    delay: {
      show: 250,
      hide: 400
    },
    overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_24__["default"], {
      id: "options-tooltip"
    }, "To invite new members party has to be unlocked")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("i", {
    className: "fa-regular fa-circle-question option-info"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "col-4"
  }, game.partyInfo.status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", {
    className: "btn btn-dark full-width",
    onClick: lockMutation.mutate
  }, "Unlock ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("i", {
    className: "fa-solid fa-lock-open lock-icon"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", {
    className: "btn btn-dark full-width",
    onClick: lockMutation.mutate
  }, "Lock ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("i", {
    className: "fa-solid fa-lock lock-icon"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "row mt-3 border-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "row mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "col-6 lead p-0"
  }, "Delete party", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_23__["default"], {
    delay: {
      show: 250,
      hide: 400
    },
    overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_24__["default"], {
      id: "options-tooltip"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("b", null, "This is irreversible!"), " After deleting party all data will be lost!")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("i", {
    className: "fa-regular fa-circle-question option-info"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", {
    className: "btn btn-danger full-width",
    onClick: deleteParty
  }, "Delete")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "row mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "col p-0 lead mb-2"
  }, "Promote to host", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_23__["default"], {
    delay: {
      show: 250,
      hide: 400
    },
    overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_24__["default"], {
      id: "options-tooltip"
    }, "After promoting other member you will become normal member of the group and lose access to option panel")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("i", {
    className: "fa-regular fa-circle-question option-info"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "row mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "col-6 p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("select", {
    className: "form-select",
    id: "players-list",
    onChange: determineNewHost
  }, game.partyInfo.activeMembers.map(function (player) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("option", {
      key: player.id,
      className: "active-member-option",
      value: player.id
    }, player.name);
  }), game.partyInfo.inactiveMembers.map(function (player) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("option", {
      key: player.id,
      className: "inactive-member-option",
      value: player.id
    }, player.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement("button", {
    className: "btn btn-dark full-width",
    onClick: promoToHostMutation.mutate
  }, "Promote"))))))) : '', statusMutation.isSuccess ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_party_SubmitToast__WEBPACK_IMPORTED_MODULE_18__["default"], {
    type: "success",
    message: "Members status has been changed"
  }) : null, lockMutation.isSuccess ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_party_SubmitToast__WEBPACK_IMPORTED_MODULE_18__["default"], {
    type: "success",
    message: "Party status has been changed"
  }) : null, promoToHostMutation.isSuccess ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_party_SubmitToast__WEBPACK_IMPORTED_MODULE_18__["default"], {
    type: "success",
    message: "Host has ben changed"
  }) : '', removeMemberMutation.isSuccess ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_party_SubmitToast__WEBPACK_IMPORTED_MODULE_18__["default"], {
    type: "success",
    message: "Member has been removed"
  }) : '');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OptionPanel);

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
  }, activity.activeMembers, "/", activity.players), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement("td", {
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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/OverlayTrigger.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Tooltip.js");
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
  }, "Active/All", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_25__["default"], {
    delay: {
      show: 250,
      hide: 400
    },
    overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_26__["default"], {
      id: "options-tooltip"
    }, "Active members have right to vote. All members can see party panel.")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("i", {
    className: "fa-regular fa-circle-question option-info"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("th", {
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
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
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
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useQuery.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _getData_getData__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../getData/getData */ "./assets/js/getData/getData.js");
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

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useParams)(),
      id = _useParams.id;

  var dateString = dayData.date.substring(0, 10);
  var queryKey = "".concat(id, "-").concat(dateString);
  var dayRoute = "/day/".concat(id, "/").concat(dateString);

  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_16__.useQuery)({
    queryKey: [queryKey],
    queryFn: function queryFn() {
      return (0,_getData_getData__WEBPACK_IMPORTED_MODULE_14__["default"])(dayRoute);
    },
    refetchOnWindowFocus: false
  }),
      data = _useQuery.data,
      status = _useQuery.status;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isActive = _useState2[0],
      setIsActive = _useState2[1]; // const getDayData = async () => {
  //     // console.log(dateString);
  //     const route = 'http://127.0.0.1/api/day/'+ id +'/'+ dateString ;
  //     const response = await fetch(route);
  //     return response.json();
  // }


  var pickDate = function pickDate(day) {
    setActiveDay(day);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(function () {
    if (status == 'success' && typeof activeDay !== 'undefined' && isActive) {
      // console.log(data.dayInfo);
      pickDate(data.dayInfo);
    } else {}
  }, [data]);
  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(function () {
    if (typeof activeDay !== 'undefined' && typeof activeDay.date !== 'undefined' && activeDay.date == dayData.date) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [activeDay]);
  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(function () {
    if (typeof activeDay === 'undefined' && typeof data !== 'undefined' && dayData.today) {
      // console.log('pick');
      setActiveDay(data.dayInfo);
    }
  }, [status]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement((react__WEBPACK_IMPORTED_MODULE_13___default().Fragment), null, status == 'success' ?
  /*#__PURE__*/
  //success 
  react__WEBPACK_IMPORTED_MODULE_13___default().createElement("td", {
    className: isActive ? data.dayInfo.status + " p-0  picked-date" : data.dayInfo.status + " p-0",
    onClick: function onClick() {
      return pickDate(data.dayInfo);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "calendar-day"
  }, data.dayInfo.number), data.dayInfo.status == "CANCELED" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "players-left-to-vote"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("i", {
    className: "fa-solid fa-xmark"
  })) : '', data.dayInfo.status == "VOTED" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement((react__WEBPACK_IMPORTED_MODULE_13___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "players-left-to-vote"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("i", {
    className: "fa-sharp fa-solid fa-arrows-rotate"
  }, data.dayInfo.remainingVoters)), !data.dayInfo.playerStatus ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "players-vote-status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("i", {
    className: "fa-sharp fa-solid fa-exclamation"
  })) : '') : '', data.dayInfo.status == "MISSED" ?
  /*#__PURE__*/
  // <i class="fa-solid fa-ban"></i>
  react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "players-left-to-vote"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("i", {
    className: "fa-solid fa-ban"
  })) : '', data.dayInfo.status == "GAMEDAY" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "players-left-to-vote"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("i", {
    className: "fa-solid fa-check"
  })) : '') : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
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
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useMutation.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useQuery.mjs");
/* harmony import */ var _SubmitToast__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./SubmitToast */ "./assets/js/components/party/SubmitToast.js");
/* harmony import */ var _getData_getData__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../getData/getData */ "./assets/js/getData/getData.js");
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
  var queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_32__.useQueryClient)();

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_33__.useParams)(),
      id = _useParams.id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      day = _useState2[0],
      setDay = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      month = _useState4[0],
      setMonth = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      year = _useState6[0],
      setYear = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      message = _useState8[0],
      setMessage = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(),
      _useState10 = _slicedToArray(_useState9, 2),
      messageStatus = _useState10[0],
      setMessageStatus = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(1),
      _useState12 = _slicedToArray(_useState11, 2),
      voteStatus = _useState12[0],
      setVoteStatus = _useState12[1];

  var voteRoute = "/get-votes/".concat(id, "/").concat(year, "-").concat(month, "-").concat(day);
  var voteKey = "".concat(id, "-").concat(year, "-").concat(month, "-").concat(day, "-votes");

  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_34__.useQuery)({
    queryKey: [voteKey],
    queryFn: function queryFn() {
      return (0,_getData_getData__WEBPACK_IMPORTED_MODULE_31__["default"])(voteRoute);
    },
    refetchOnWindowFocus: false
  }),
      data = _useQuery.data,
      status = _useQuery.status;

  (0,react__WEBPACK_IMPORTED_MODULE_29__.useEffect)(function () {
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

  var addVote = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
      var vote;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return dataMutation.mutateAsync(event);

            case 3:
              vote = _context.sent;

              if (vote.status == 403) {
                setMessageStatus('fail');
                setMessage('You are not an active member of this party');
              }

              if (vote.status == 200) {
                setMessageStatus('success');
                setMessage('Your vote has been sent');
              }

              console.log(vote);
              setTimeout(function () {
                setMessage();
              }, 3000);
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.log('error: ' + _context.t0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function addVote(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var dataMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_35__.useMutation)({
    mutationFn: function mutationFn(event) {
      event.preventDefault();
      var formData = new FormData(event.target);
      var response = fetch("/api/send-vote/".concat(id), {
        method: 'POST',
        body: formData
      });
      return response;
    },
    onError: function onError(error, variables, context) {
      console.log(error, variables, context);
    },
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries(["".concat(id, "-") + activeDay.date.substring(0, 10)]);
      queryClient.invalidateQueries([voteKey]);
    }
  });
  var deleteVoteMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_35__.useMutation)({
    mutationFn: function mutationFn(event) {
      event.preventDefault(); // console.log(id);
      // const formData = new FormData(event.target)

      var voteId = event.target.id;

      if (confirm('This vote will be deleted permanently! Day status may be changed')) {
        var response = fetch('/api/vote/delete/' + voteId, {
          method: 'POST'
        });
        return response;
      }

      return false;
    },
    // TODO: 
    onSuccess: function onSuccess() {
      setMessageStatus('success');
      setMessage('Your vote has been deleted');
      queryClient.invalidateQueries([voteKey]);
      queryClient.invalidateQueries([id + '-' + activeDay.date.substring(0, 10)]);
      setTimeout(function () {
        setMessage();
      }, 3000);
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement((react__WEBPACK_IMPORTED_MODULE_29___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "row g-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "col-xl-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "border bg-light form-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "d-flex flex-row justify-content-center party-header bg-dark bg-gradient mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: ""
  }, "PLACE YOUR VOTE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("form", {
    name: "vote",
    method: "post",
    onSubmit: addVote
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "row custom-form-row pt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "col-3 custom-form-label "
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("select", {
    className: voteStatus == 0 ? "form-select-lg bg-red " : "form-select-lg bg-green",
    onChange: checkVoteStatus,
    id: "vote_vote",
    name: "vote[vote]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    className: "bg-green",
    value: "1"
  }, "I'm in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    className: "bg-red",
    value: "0"
  }, "I'm out"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "row hidden-date"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "col-3 custom-form-label"
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("select", {
    className: "form-select",
    id: "vote_date_month",
    name: "vote[date][month]",
    readOnly: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    selected: true,
    value: month
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("select", {
    className: "form-select",
    id: "vote_date_day",
    name: "vote[date][day]",
    readOnly: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    selected: true,
    value: day
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("select", {
    className: "form-select",
    id: "vote_date_year",
    name: "vote[date][year]",
    readOnly: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    selected: true,
    value: year
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "row mt-3 custom-form-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "col-3 custom-form-label "
  }, "Start"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "form-time-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("select", {
    className: "form-select-lg  time-select",
    id: "vote_startTime_hour",
    name: "vote[startTime][hour]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "0"
  }, "00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "1"
  }, "01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "2"
  }, "02"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "3"
  }, "03"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "4"
  }, "04"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "5"
  }, "05"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "6"
  }, "06"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "7"
  }, "07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "8"
  }, "08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "9"
  }, "09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "11"
  }, "11"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "12"
  }, "12"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "13"
  }, "13"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "14"
  }, "14"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "15"
  }, "15"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "16"
  }, "16"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "17"
  }, "17"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "18"
  }, "18"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "19"
  }, "19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "20"
  }, "20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "21"
  }, "21"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "22"
  }, "22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "23"
  }, "23"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "form-time-separator"
  }, ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "form-time-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("select", {
    className: "form-select-lg time-select",
    id: "vote_startTime_minute",
    name: "vote[startTime][minute]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "0"
  }, "00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "1"
  }, "01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "2"
  }, "02"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "3"
  }, "03"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "4"
  }, "04"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "5"
  }, "05"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "6"
  }, "06"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "7"
  }, "07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "8"
  }, "08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "9"
  }, "09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "11"
  }, "11"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "12"
  }, "12"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "13"
  }, "13"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "14"
  }, "14"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "15"
  }, "15"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "16"
  }, "16"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "17"
  }, "17"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "18"
  }, "18"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "19"
  }, "19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "20"
  }, "20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "21"
  }, "21"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "22"
  }, "22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "23"
  }, "23"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "24"
  }, "24"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "25"
  }, "25"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "26"
  }, "26"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "27"
  }, "27"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "28"
  }, "28"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "29"
  }, "29"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "30"
  }, "30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "31"
  }, "31"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "32"
  }, "32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "33"
  }, "33"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "34"
  }, "34"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "35"
  }, "35"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "36"
  }, "36"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "37"
  }, "37"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "38"
  }, "38"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "39"
  }, "39"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "40"
  }, "40"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "41"
  }, "41"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "42"
  }, "42"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "43"
  }, "43"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "44"
  }, "44"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "45"
  }, "45"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "46"
  }, "46"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "47"
  }, "47"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "48"
  }, "48"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "49"
  }, "49"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "50"
  }, "50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "51"
  }, "51"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "52"
  }, "52"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "53"
  }, "53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "54"
  }, "54"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "55"
  }, "55"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "56"
  }, "56"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "57"
  }, "57"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "58"
  }, "58"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "59"
  }, "59"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "row mt-3 custom-form-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "col-3 custom-form-label"
  }, "Finish"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "form-time-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("select", {
    className: "form-select-lg time-select",
    id: "vote_finishTime_hour",
    name: "vote[finishTime][hour]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "0"
  }, "00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "1"
  }, "01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "2"
  }, "02"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "3"
  }, "03"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "4"
  }, "04"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "5"
  }, "05"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "6"
  }, "06"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "7"
  }, "07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "8"
  }, "08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "9"
  }, "09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "11"
  }, "11"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "12"
  }, "12"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "13"
  }, "13"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "14"
  }, "14"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "15"
  }, "15"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "16"
  }, "16"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "17"
  }, "17"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "18"
  }, "18"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "19"
  }, "19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "20"
  }, "20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "21"
  }, "21"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "22"
  }, "22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "23"
  }, "23"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "form-time-separator"
  }, ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "form-time-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("select", {
    className: "form-select-lg time-select",
    id: "vote_finishTime_minute",
    name: "vote[finishTime][minute]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "0"
  }, "00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "1"
  }, "01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "2"
  }, "02"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "3"
  }, "03"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "4"
  }, "04"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "5"
  }, "05"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "6"
  }, "06"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "7"
  }, "07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "8"
  }, "08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "9"
  }, "09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "11"
  }, "11"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "12"
  }, "12"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "13"
  }, "13"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "14"
  }, "14"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "15"
  }, "15"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "16"
  }, "16"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "17"
  }, "17"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "18"
  }, "18"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "19"
  }, "19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "20"
  }, "20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "21"
  }, "21"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "22"
  }, "22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "23"
  }, "23"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "24"
  }, "24"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "25"
  }, "25"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "26"
  }, "26"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "27"
  }, "27"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "28"
  }, "28"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "29"
  }, "29"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "30"
  }, "30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "31"
  }, "31"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "32"
  }, "32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "33"
  }, "33"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "34"
  }, "34"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "35"
  }, "35"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "36"
  }, "36"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "37"
  }, "37"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "38"
  }, "38"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "39"
  }, "39"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "40"
  }, "40"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "41"
  }, "41"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "42"
  }, "42"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "43"
  }, "43"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "44"
  }, "44"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "45"
  }, "45"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "46"
  }, "46"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "47"
  }, "47"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "48"
  }, "48"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "49"
  }, "49"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "50"
  }, "50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "51"
  }, "51"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "52"
  }, "52"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "53"
  }, "53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "54"
  }, "54"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "55"
  }, "55"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "56"
  }, "56"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "57"
  }, "57"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "58"
  }, "58"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("option", {
    value: "59"
  }, "59"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "row mt-3 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("button", {
    type: "submit",
    className: "btn btn-lg btn-dark"
  }, "Save")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "col-xl-6 animation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "border bg-light form-panel animation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "d-flex flex-row justify-content-center party-header bg-dark bg-gradient animation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "p-0"
  }, "DATE INFO")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("p", {
    className: "date-display border-bottom  pb-3 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("b", null, day, "-", month, "-", year))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("p", {
    className: "info-display border-bottom pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("span", {
    className: "info-label bg-white"
  }, "VOTING STATUS")), typeof activeDay !== 'undefined' && activeDay.status == 'CANCELED' ? 'Some members are unavailable' : '', typeof activeDay !== 'undefined' && activeDay.status == 'MISSED' ? 'Schedules missed' : '', typeof activeDay !== 'undefined' && activeDay.status == 'VOTED' ? 'Voting in progress' : '', typeof activeDay !== 'undefined' && activeDay.status == 'EMPTY' ? 'Noone voted yet' : '', typeof activeDay !== 'undefined' && activeDay.status == 'GAMEDAY' ? 'Schedules matched!' : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("p", {
    className: "info-display border-bottom pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("span", {
    className: "info-label bg-white"
  }, "YOUR STATUS")), typeof activeDay !== 'undefined' && activeDay.playerStatus ? 'Voted' : "You didn't vote")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("p", {
    className: "info-display border-bottom pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("span", {
    className: "info-label bg-white"
  }, "WAITING FOR")), typeof activeDay !== 'undefined' && activeDay.remainingVoters !== 'undefined' ? activeDay.remainingVoters + ' member(s)' : "")), typeof activeDay !== 'undefined' && activeDay.status == 'GAMEDAY' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "info-display border-bottom pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("span", {
    className: "info-label bg-white"
  }, "HOURS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("ul", null, typeof activeDay !== 'undefined' && activeDay.hours !== 'undefined' ? activeDay.hours.map(function (range) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("li", null, range.start.substring(11, 16) + ' <-> ' + range.finish.substring(11, 16));
  }) : ""))) : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "col-12 table-cell"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "border bg-light form-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "d-flex flex-row justify-content-center party-header bg-dark bg-gradient"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "p-0"
  }, "YOUR VOTES")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "row"
  }, status == 'success' ? data.votes.map(function (event) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
      className: "custom-vote-display "
    }, !event.voteType ? "I'm out" : event.start + ' - ' + event.finish, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("span", {
      className: "vote-trash"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("i", {
      id: event.id,
      className: "fa-solid fa-trash-can",
      onClick: deleteVoteMutation.mutate
    })));
  }) : 'Loading...')))), message && typeof message != 'undefined' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_SubmitToast__WEBPACK_IMPORTED_MODULE_30__["default"], {
    type: messageStatus,
    message: message
  }) : null);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ "./assets/js/components/party/PartyInfo.js":
/*!*************************************************!*\
  !*** ./assets/js/components/party/PartyInfo.js ***!
  \*************************************************/
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
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useQuery.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _getData_getData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../getData/getData */ "./assets/js/getData/getData.js");









var PartyInfo = function PartyInfo() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useParams)(),
      id = _useParams.id;

  var gameDataRoute = "/game-data/".concat(id);

  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery)({
    queryKey: ['gameData'],
    queryFn: function queryFn() {
      return (0,_getData_getData__WEBPACK_IMPORTED_MODULE_5__["default"])(gameDataRoute);
    }
  }),
      game = _useQuery.data,
      gameStatus = _useQuery.status;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, gameStatus == 'success' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "row mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "col-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "border bg-light form-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "d-flex flex-row justify-content-center party-header bg-dark bg-gradient"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "p-0"
  }, "PARTY INFO")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "col-6 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
    className: "party-name border-bottom pt-2 pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
    className: "info-label bg-white"
  }, "PARTY NAME")), " ", game.partyInfo.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
    className: "party-name  border-bottom pt-2 pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
    className: "info-label bg-white"
  }, "ACTIVITY")), " ", game.partyInfo.activity))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
    className: "info-display border-bottom  lead pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
    className: "info-label bg-white"
  }, "DESCRIPTION")), " ", game.partyInfo.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
    className: "info-display border-bottom pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
    className: "info-label bg-white"
  }, "MEMBERS")), game.partyInfo.activeMembers.map(function (player) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
      key: player.id,
      className: "player-name"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("b", null, player.name), " ");
  }), game.partyInfo.inactiveMembers.map(function (player) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
      key: player.id,
      className: "player-name"
    }, " ", player.name);
  })))))) : '');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PartyInfo);

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
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("td", null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Week);

/***/ }),

/***/ "./assets/js/getData/getData.js":
/*!**************************************!*\
  !*** ./assets/js/getData/getData.js ***!
  \**************************************/
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }























function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var defaultRoute = 'http://testowe.sasartele.pl/api';

var getData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(route) {
    var dataRoute, response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dataRoute = defaultRoute + route;
            _context.next = 3;
            return fetch(dataRoute);

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

  return function getData(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_hostOptions_OptionsPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/hostOptions/OptionsPanel */ "./assets/js/components/hostOptions/OptionsPanel.js");
/* harmony import */ var _components_party_PartyInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/party/PartyInfo */ "./assets/js/components/party/PartyInfo.js");






var HostOptions = function HostOptions() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row justify-content-center mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "display-6 text-center universal-shadow-text"
  }, "Party host panel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-xl-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_hostOptions_OptionsPanel__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-xl-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_party_PartyInfo__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
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
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
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
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_party_Week__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/party/Week */ "./assets/js/components/party/Week.js");
/* harmony import */ var _components_party_Form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/party/Form */ "./assets/js/components/party/Form.js");
/* harmony import */ var _components_party_PartyInfo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/party/PartyInfo */ "./assets/js/components/party/PartyInfo.js");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useQuery.mjs");
/* harmony import */ var _getData_getData__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../getData/getData */ "./assets/js/getData/getData.js");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var Party = function Party() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_18__.useParams)(),
      id = _useParams.id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      activeDay = _useState2[0],
      setActiveDay = _useState2[1];

  var calendarRoute = "/calendar/".concat(id);

  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_19__.useQuery)({
    queryKey: ['calendar'],
    queryFn: function queryFn() {
      return (0,_getData_getData__WEBPACK_IMPORTED_MODULE_17__["default"])(calendarRoute);
    },
    refetchOnWindowFocus: false
  }),
      data = _useQuery.data,
      status = _useQuery.status;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement((react__WEBPACK_IMPORTED_MODULE_13___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "row mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "col-xl-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("table", {
    className: "table calendar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("caption", {
    className: "bg-dark bg-gradient"
  }, "MONTH DISPLAY"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("th", {
    scope: "col"
  }, "Mon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("th", {
    scope: "col"
  }, "Tue"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("th", {
    scope: "col"
  }, "Wed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("th", {
    scope: "col"
  }, "Thu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("th", {
    scope: "col"
  }, "Fri"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("th", {
    scope: "col"
  }, "Sat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("th", {
    scope: "col"
  }, "Sun"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("tbody", null, status == 'success' ? data.calendar.map(function (week, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_components_party_Week__WEBPACK_IMPORTED_MODULE_14__["default"], {
      key: id + '-' + index,
      weekData: week,
      activeDay: activeDay,
      setActiveDay: setActiveDay
    });
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("td", null, "loading"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "col-xl-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_components_party_Form__WEBPACK_IMPORTED_MODULE_15__["default"], {
    key: id,
    activeDay: activeDay
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(_components_party_PartyInfo__WEBPACK_IMPORTED_MODULE_16__["default"], null));
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-8bfcdf"], () => (__webpack_exec__("./assets/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9NYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9ob21lcGFnZS9Cb3guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvaG9tZXBhZ2UvRGlzY2xhaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9ob3N0T3B0aW9ucy9PcHRpb25zUGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXlBY3Rpdml0aWVzL01lbWJlck9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXlBY3Rpdml0aWVzL1BhcnR5SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9teUFjdGl2aXRpZXMvUGFydHlMaXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL25hdi9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbmF2L05hdkl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydHkvRGF5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnR5L0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydHkvUGFydHlJbmZvLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnR5L1N1Ym1pdFRvYXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnR5L1dlZWsuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2dldERhdGEvZ2V0RGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvQ3JlYXRlUGFydHkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL0hvbWVwYWdlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9Ib3N0T3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvTG9nb3V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9NeUFjdGl2aXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL1BhcnR5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9SZWFkbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3N0eWxlcy9hcHAuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zdHlsZXMvY2FsZW5kYXIuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zdHlsZXMvZ2FtZS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9qcy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2pzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcclxuXHJcbi8qXHJcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxyXG4gKlxyXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxyXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcclxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcclxuICpcclxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgY29ubmVjdCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcclxuLy8gaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlcywgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXHJcbmltcG9ydCBMb2dvdXQgZnJvbSBcIi4vcGFnZXMvTG9nb3V0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vcGFnZXMvTGF5b3V0XCI7XHJcbmltcG9ydCBIb21lcGFnZSBmcm9tIFwiLi9wYWdlcy9Ib21lcGFnZVwiO1xyXG5pbXBvcnQgUmVhZG1lIGZyb20gXCIuL3BhZ2VzL1JlYWRtZVwiO1xyXG5pbXBvcnQgUGFydHkgZnJvbSBcIi4vcGFnZXMvUGFydHlcIjtcclxuaW1wb3J0IE15QWN0aXZpdGllcyBmcm9tIFwiLi9wYWdlcy9NeUFjdGl2aXRpZXNcIjtcclxuaW1wb3J0IEhvc3RPcHRpb25zIGZyb20gXCIuL3BhZ2VzL0hvc3RPcHRpb25zXCI7XHJcbmltcG9ydCBnZXREYXRhIGZyb20gJy4vZ2V0RGF0YS9nZXREYXRhJztcclxuXHJcbi8vIGltcG9ydCB7U3RyaWN0TW9kZX0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xyXG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciwgdXNlUXVlcnkgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi9wYWdlcy9Mb2dpbic7XHJcbmltcG9ydCBDcmVhdGVQYXJ0eSBmcm9tICcuL3BhZ2VzL0NyZWF0ZVBhcnR5JztcclxuXHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4ge1xyXG5cclxuXHJcblxyXG4gICAgLy8gY29uc3QgY2hlY2tJZkxvZ2dlZEluID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnN0IHJvdXRlID0gJy9hcGkvaG9tZXBhZ2UvbmF2JztcclxuICAgIC8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJvdXRlKTtcclxuICAgIC8vICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbnN0IHVzZXJSb3V0ZSA9ICcvaG9tZXBhZ2UvbmF2JztcclxuICAgIFxyXG4gICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHVzZVF1ZXJ5KFsndXNlciddLCAoKSA9PiBnZXREYXRhKHVzZXJSb3V0ZSkpO1xyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICAvLyBUT0RPOiBVU1XFg1xyXG4gICAgY29uc29sZS5sb2coZGF0YSwgc3RhdHVzKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAge3N0YXR1cyA9PSBcInN1Y2Nlc3NcIiA/IChcclxuICAgICAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICAgIHsvKiB1c2VyIDoge2RhdGEudXNlcn0gKi99XHJcbiAgICAgICAgICAgICAgICA8Um91dGVzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxMYXlvdXQgdXNlcj17ZGF0YS51c2VyfS8+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBpbmRleCBlbGVtZW50PXs8SG9tZXBhZ2UgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cInJlYWRtZVwiIGVsZW1lbnQ9ezxSZWFkbWUgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIm15LWFjdGl2aXRpZXNcIiBlbGVtZW50PXs8TXlBY3Rpdml0aWVzIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJwYXJ0eS9zaG93LzppZFwiIGVsZW1lbnQ9ezxQYXJ0eSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwicGFydHkvb3B0aW9ucy86aWRcIiBlbGVtZW50PXs8SG9zdE9wdGlvbnMgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cInBhcnR5L2NyZWF0ZVwiIGVsZW1lbnQ9ezxDcmVhdGVQYXJ0eSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwibG9nb3V0XCIgZWxlbWVudD17PExvZ291dCAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwibG9naW5cIiBlbGVtZW50PXs8TG9naW4gLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgIDwvUm91dGVzPlxyXG4gICAgICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgJ2xvYWRpbmcnXHJcbiAgICAgICAgKSB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IE1haW5QYWdlID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxyXG4gICAgICAgICAgICAgICAgPE1haW4gLz5cclxuICAgICAgICAgICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxyXG4gICAgICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlO1xyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcclxuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcclxucm9vdC5yZW5kZXIoXHJcbiAgICA8TWFpblBhZ2UgIC8+XHJcbik7XHJcblxyXG5cclxuXHJcblxyXG4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcbiBcclxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL2NhbGVuZGFyLmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMvZ2FtZS5jc3MnO1xyXG5cclxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCAnLi9ib290c3RyYXAnO1xyXG4gXHJcbnJlcXVpcmUoJy4vTWFpbicpO1xyXG5cclxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XHJcblxyXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxyXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXHJcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXHJcbiAgICB0cnVlLFxyXG4gICAgL1xcLltqdF1zeD8kL1xyXG4pKTtcclxuXHJcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXHJcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3QgQm94ID0gKHtjb250ZW50fSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHBhcnR5LWhlYWRlciBwdC0xIHBiLTEgYmctZ3JhZGllbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRlbnQudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBiZy1saWdodCBiZy1ncmFkaWVudCBwdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17Y29udGVudC5pY29ufT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBiZy1saWdodCBwLTIgYm9yZGVyIGZ3LWxpZ2h0IHRleHQtY2VudGVyIHRleHQtbWQgYmctZ3JhZGllbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRlbnQudGV4dH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm94IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IERpc2NsYWltZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1hdXRvIHAtMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxlYWQgbWItMVwiPkRpc2NsYWltZXIhISE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+VG8gamVzdCBNVlAgLSBtaW5pbXVtIHZpYWJsZSBwcm9kdWN0PC9iPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwa2EgcG93aW5uYSBkemlhxYJhxIcgaSBtb8W8ZW15IGplaiB1xbx5xIcgZG8gb3JnYW5pemFjamkgbmFzenljaCBnaWVyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBaYXBld25lIGlzdG5pZWrEhSBpbm5lIGkgbGVwc3plIG5hcnrEmWR6aWEgZG8gY3plZ2/FmyB0YWtpZWdvLCBhbGUgZGxhIG1uaWUgamVzdCB0byB6YWdhZG5pZW5pZSBuYSBrdMOzcnltIHNpxJkgdWN6xJkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV3N6eXN0a28gamVzdCB3IGrEmXp5a3UgYW5naWVsc2tpbSwgYm8gcm9iacSZIHRvIHNvYmllIHcgcmFtYWNoIHByb2pla3R1IGRvIHBvcnRmb2xpby5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCxJlkxJkgZ28gcm96YnVkb3dheXdhxYIgeiBjemFzZW0sIG5hIHJhemllIG1hIHBvZHN0YXdvd2UgZnVua2NqZSBpIGJ5bGUgamFraSBmcm9udGVuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaXNjbGFpbWVyIiwiaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5LCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdmlnYXRlLCB1c2VOYXZpZ2F0ZSwgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBnZXREYXRhIGZyb20gJy4uLy4uL2dldERhdGEvZ2V0RGF0YSc7XHJcbmltcG9ydCBPdmVybGF5VHJpZ2dlciBmcm9tICdyZWFjdC1ib290c3RyYXAvT3ZlcmxheVRyaWdnZXInO1xyXG5pbXBvcnQgVG9vbHRpcCBmcm9tICdyZWFjdC1ib290c3RyYXAvVG9vbHRpcCc7XHJcbmltcG9ydCBTdWJtaXRUb2FzdCBmcm9tICcuLi9wYXJ0eS9TdWJtaXRUb2FzdCc7XHJcblxyXG5jb25zdCBPcHRpb25QYW5lbCA9ICgpID0+IHsgXHJcblxyXG4gICAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xyXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgICBjb25zdCBbY3VycmVudFBsYXllciwgc2V0Q3VycmVudFBsYXllcl0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW25ld0hvc3RJZCwgc2V0TmV3SG9zdElkXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbYWN0aXZlUGxheWVycywgc2V0QWN0aXZlUGxheWVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbaW5hY3RpdmVQbGF5ZXJzLCBzZXRJbmFjdGl2ZVBsYXllcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3BsYXllclN0YXR1cywgc2V0UGxheWVyU3RhdHVzXSA9IHVzZVN0YXRlKCdJbmFjdGl2ZScpO1xyXG4gICAgXHJcbiAgICBjb25zdCBnYW1lRGF0YVJvdXRlID0gYC9nYW1lLWRhdGEvJHtpZH1gO1xyXG4gICAgY29uc3QgeyBkYXRhOiBnYW1lLCBzdGF0dXM6IGdhbWVTdGF0dXMgfSA9IHVzZVF1ZXJ5KHtcclxuICAgICAgICBxdWVyeUtleTogWydnYW1lRGF0YSddLCBcclxuICAgICAgICBxdWVyeUZuOiAoKSA9PiBnZXREYXRhKGdhbWVEYXRhUm91dGUpLFxyXG4gICAgICAgIG9uU3VjY2VzczogKGRhdGEpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudFBsYXllciA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFBsYXllcihkYXRhLnBhcnR5SW5mby5ob3N0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGFjdGl2ZSA9IFtdO1xyXG4gICAgICAgICAgICBkYXRhLnBhcnR5SW5mby5hY3RpdmVNZW1iZXJzLm1hcCgocGxheWVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICBhY3RpdmUucHVzaChwbGF5ZXIuaWQpXHJcbiAgICAgICAgICAgICkpXHJcblxyXG4gICAgICAgICAgICBsZXQgaW5hY3RpdmUgPSBbXTtcclxuICAgICAgICAgICAgZGF0YS5wYXJ0eUluZm8uaW5hY3RpdmVNZW1iZXJzLm1hcCgocGxheWVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICBpbmFjdGl2ZS5wdXNoKHBsYXllci5pZClcclxuICAgICAgICAgICAgKSlcclxuXHJcbiAgICAgICAgICAgIGlmIChhY3RpdmUuZmluZCh2YWx1ZSA9PiB2YWx1ZSA9PSBjdXJyZW50UGxheWVyKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0UGxheWVyU3RhdHVzKCdJbmFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0UGxheWVyU3RhdHVzKCdBY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRBY3RpdmVQbGF5ZXJzKGFjdGl2ZSk7XHJcbiAgICAgICAgICAgIHNldEluYWN0aXZlUGxheWVycyhpbmFjdGl2ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzdGF0dXNNdXRhdGlvbiA9IHVzZU11dGF0aW9uKHtcclxuICAgICAgICBtdXRhdGlvbkZuOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9ICBmZXRjaChgL2FwaS9nYW1lL2NoYW5nZS11c2VyLXN0YXR1cy8ke2lkfS8ke2N1cnJlbnRQbGF5ZXJ9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbJ2dhbWVEYXRhJ10pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCByZW1vdmVNZW1iZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbmZpcm0oJ1RoaXMgbWVtYmVyIHdpbGwgYmUgcmVtb3ZlIHBlcm1hbmVudGx5LiBEbyB5b3Ugd2FudCBvdCBwcm9jZWVkPycpKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZU1lbWJlck11dGF0aW9uLm11dGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVNZW1iZXJNdXRhdGlvbiA9IHVzZU11dGF0aW9uKHtcclxuICAgICAgICBtdXRhdGlvbkZuOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9ICBmZXRjaChgL2FwaS9nYW1lL3JlbW92ZS1tZW1iZXIvJHtpZH0vJHtjdXJyZW50UGxheWVyfWAsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbJ2dhbWVEYXRhJ10pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgY29uc3QgcHJvbW9Ub0hvc3RNdXRhdGlvbiA9IHVzZU11dGF0aW9uKHtcclxuICAgICAgICBtdXRhdGlvbkZuOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gIGZldGNoKGAvYXBpL2dhbWUvcHJvbW90ZS10by1ob3N0LyR7aWR9LyR7bmV3SG9zdElkfWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBwcm9tb1RvSG9zdE11dGF0aW9uLnN0YXR1cyA9ICdpZGxlJztcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFsnZ2FtZURhdGEnXSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIGNvbnN0IGxvY2tQYXJ0eSA9IChlKSA9PiB7XHJcbiAgICAvLyAgICAgbG9ja011dGF0aW9uLm11dGF0ZSgpO1xyXG4gICAgLy8gfSBcclxuXHJcbiAgICBjb25zdCBsb2NrTXV0YXRpb24gPSB1c2VNdXRhdGlvbih7XHJcbiAgICAgICAgbXV0YXRpb25GbjogKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9ICBmZXRjaChgL2FwaS9nYW1lL2NoYW5nZS1sb2NrLXN0YXR1cy8ke2lkfWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoWydnYW1lRGF0YSddKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBkZWxldGVQYXJ0eSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoY29uZmlybShcIlRoaXMgcGFydHkgd2lsbCBiZSBkZWxldGVkIHdpdGggYWxsIGl0J3MgZGF0YS4gRG8geW91IHdhbnQgdG8gY29udGludWU/XCIpKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZU11dGF0aW9uLm11dGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxldGVNdXRhdGlvbiA9IHVzZU11dGF0aW9uKHtcclxuICAgICAgICBtdXRhdGlvbkZuOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gIGZldGNoKGAvYXBpL2dhbWUvZGVsZXRlLXBhcnR5LyR7aWR9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiB7ICAgICAgICBcclxuICAgICAgICAgICAgLy8gcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoWydwYXJ0eS1saXN0J10pO1xyXG4gICAgICAgICAgICBuYXZpZ2F0ZSgnL215LWFjdGl2aXRpZXMnKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBjb25zdCBnZXRQbGF5ZXJTdGF0dXMgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBsYXllcklkID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0Q3VycmVudFBsYXllcihwbGF5ZXJJZCk7XHJcbiAgICAgICAgY29uc3QgaXNBY3RpdmUgID0gYWN0aXZlUGxheWVycy5maW5kKHZhbHVlID0+IHZhbHVlID09IHBsYXllcklkKTtcclxuICAgICAgICBjb25zdCBpc0luYWN0aXZlID0gaW5hY3RpdmVQbGF5ZXJzLmZpbmQodmFsdWUgPT4gdmFsdWUgPT0gcGxheWVySWQpO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXJJZCAsaXNBY3RpdmUsIGlzSW5hY3RpdmUpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgaXNBY3RpdmUgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgc2V0UGxheWVyU3RhdHVzKCdJbmFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBpc0luYWN0aXZlICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHNldFBsYXllclN0YXR1cygnQWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRldGVybWluZU5ld0hvc3QgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBsYXllcklkID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0TmV3SG9zdElkKHBsYXllcklkKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKCduZXcgaG9zdCAnICsgbmV3SG9zdElkKVxyXG4gICAgLy8gY29uc29sZS5sb2coJ2hvc3QgbXV0YXRpb24gc3RhdHVzdCAnICsgcHJvbW9Ub0hvc3RNdXRhdGlvbi5zdGF0dXMpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIHtnYW1lU3RhdHVzID09ICdzdWNjZXNzJyA/IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJnLWxpZ2h0IGZvcm0tcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBwYXJ0eS1oZWFkZXIgYmctZGFyayBiZy1ncmFkaWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPUFRJT05TXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogTUFOQUdFIE1FTUJFUlMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTEgYm9yZGVyLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvLTYgcC0wIGxlYWQgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hbmFnZSBtZW1iZXJzIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17eyBzaG93OiAyNTAsIGhpZGU6IDQwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGlkPVwib3B0aW9ucy10b29sdGlwXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmFjdGl2ZSBwbGF5ZXJzIGRvZXNuJ3QgdGFrZSBwYXJ0IGluIHZvdGluZyBwcm9jZXNzLCBidXQgdGhleSBjYW4gc3RpbGwgb3BlbiBwYXJ0eSBwYW5lbC4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlbW92ZWQgcGxheWVycyBjYW4ndCByZWpvaW4gbG9ja2VkIHBhcnRpZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1yZWd1bGFyIGZhLWNpcmNsZS1xdWVzdGlvbiBvcHRpb24taW5mb1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTYgcC0wICc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGxheWVycy1saXN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwbGF5ZXJTdGF0dXMgPT0gJ0FjdGl2ZScgPyBcIiBmb3JtLXNlbGVjdCBpbmFjdGl2ZS1tZW1iZXItb3B0aW9uXCIgOiBcImZvcm0tc2VsZWN0IGFjdGl2ZS1tZW1iZXItb3B0aW9uXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjdXJyZW50UGxheWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Z2V0UGxheWVyU3RhdHVzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnYW1lLnBhcnR5SW5mby5hY3RpdmVNZW1iZXJzLm1hcCgocGxheWVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3BsYXllci5pZH0gY2xhc3NOYW1lPVwiYWN0aXZlLW1lbWJlci1vcHRpb25cIiB2YWx1ZT17cGxheWVyLmlkfT4ge3BsYXllci5uYW1lfSA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2FtZS5wYXJ0eUluZm8uaW5hY3RpdmVNZW1iZXJzLm1hcCgocGxheWVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3BsYXllci5pZH0gY2xhc3NOYW1lPVwiaW5hY3RpdmUtbWVtYmVyLW9wdGlvblwiIHZhbHVlPXtwbGF5ZXIuaWR9PntwbGF5ZXIubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tZGFyayBmdWxsLXdpZHRoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzdGF0dXNNdXRhdGlvbi5tdXRhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFrZSB7cGxheWVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYW5nZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlbW92ZU1lbWJlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZW1vdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zIGJvcmRlci1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGxlYWQgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnYW1lLnBhcnR5SW5mby5zdGF0dXMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnVW5sb2NrIHBhcnR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0xvY2sgcGFydHknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXt7IHNob3c6IDI1MCwgaGlkZTogNDAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBpZD1cIm9wdGlvbnMtdG9vbHRpcFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvIGludml0ZSBuZXcgbWVtYmVycyBwYXJ0eSBoYXMgdG8gYmUgdW5sb2NrZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtcmVndWxhciBmYS1jaXJjbGUtcXVlc3Rpb24gb3B0aW9uLWluZm9cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dhbWUucGFydHlJbmZvLnN0YXR1cyA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYXJrIGZ1bGwtd2lkdGgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtsb2NrTXV0YXRpb24ubXV0YXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVbmxvY2sgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtbG9jay1vcGVuIGxvY2staWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tZGFyayBmdWxsLXdpZHRoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bG9ja011dGF0aW9uLm11dGF0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9jayA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1sb2NrIGxvY2staWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMyBib3JkZXItYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgbGVhZCBwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlIHBhcnR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17eyBzaG93OiAyNTAsIGhpZGU6IDQwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9eyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgaWQ9XCJvcHRpb25zLXRvb2x0aXBcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5UaGlzIGlzIGlycmV2ZXJzaWJsZSE8L2I+IEFmdGVyIGRlbGV0aW5nIHBhcnR5IGFsbCBkYXRhIHdpbGwgYmUgbG9zdCFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtcmVndWxhciBmYS1jaXJjbGUtcXVlc3Rpb24gb3B0aW9uLWluZm9cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWRhbmdlciBmdWxsLXdpZHRoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtkZWxldGVQYXJ0eX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwLTAgbGVhZCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvbW90ZSB0byBob3N0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXt7IHNob3c6IDI1MCwgaGlkZTogNDAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5PXsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgaWQ9XCJvcHRpb25zLXRvb2x0aXBcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFmdGVyIHByb21vdGluZyBvdGhlciBtZW1iZXIgeW91IHdpbGwgYmVjb21lIG5vcm1hbCBtZW1iZXIgb2YgdGhlIGdyb3VwIGFuZCBsb3NlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3MgdG8gb3B0aW9uIHBhbmVsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXJlZ3VsYXIgZmEtY2lyY2xlLXF1ZXN0aW9uIG9wdGlvbi1pbmZvXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC02IHAtMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIiBpZD1cInBsYXllcnMtbGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtkZXRlcm1pbmVOZXdIb3N0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2FtZS5wYXJ0eUluZm8uYWN0aXZlTWVtYmVycy5tYXAoKHBsYXllcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtwbGF5ZXIuaWR9IGNsYXNzTmFtZT1cImFjdGl2ZS1tZW1iZXItb3B0aW9uXCIgdmFsdWU9e3BsYXllci5pZH0gPntwbGF5ZXIubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dhbWUucGFydHlJbmZvLmluYWN0aXZlTWVtYmVycy5tYXAoKHBsYXllcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtwbGF5ZXIuaWR9IGNsYXNzTmFtZT1cImluYWN0aXZlLW1lbWJlci1vcHRpb25cIiB2YWx1ZT17cGxheWVyLmlkfSA+e3BsYXllci5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWRhcmsgZnVsbC13aWR0aCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cHJvbW9Ub0hvc3RNdXRhdGlvbi5tdXRhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvbW90ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgOiAnJ31cclxuXHJcbiAgICAgICAgICAgIHtzdGF0dXNNdXRhdGlvbi5pc1N1Y2Nlc3MgPyBcclxuICAgICAgICAgICAgKCAgXHJcbiAgICAgICAgICAgICAgICA8U3VibWl0VG9hc3QgdHlwZT0nc3VjY2VzcycgbWVzc2FnZT0nTWVtYmVycyBzdGF0dXMgaGFzIGJlZW4gY2hhbmdlZCcvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICB7bG9ja011dGF0aW9uLmlzU3VjY2VzcyA/IFxyXG4gICAgICAgICAgICAoICBcclxuICAgICAgICAgICAgICAgIDxTdWJtaXRUb2FzdCB0eXBlPSdzdWNjZXNzJyBtZXNzYWdlPSdQYXJ0eSBzdGF0dXMgaGFzIGJlZW4gY2hhbmdlZCcvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB7cHJvbW9Ub0hvc3RNdXRhdGlvbi5pc1N1Y2Nlc3MgID8gXHJcbiAgICAgICAgICAgICAgICA8U3VibWl0VG9hc3QgdHlwZT0nc3VjY2VzcycgbWVzc2FnZT0nSG9zdCBoYXMgYmVuIGNoYW5nZWQnLz5cclxuICAgICAgICAgICAgOiAgIFxyXG4gICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB7cmVtb3ZlTWVtYmVyTXV0YXRpb24uaXNTdWNjZXNzID8gXHJcbiAgICAgICAgICAgICAgICA8U3VibWl0VG9hc3QgdHlwZT0nc3VjY2VzcycgbWVzc2FnZT0nTWVtYmVyIGhhcyBiZWVuIHJlbW92ZWQnLz5cclxuICAgICAgICAgICAgOiAgIFxyXG4gICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wdGlvblBhbmVsOyIsImltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XHJcblxyXG5mdW5jdGlvbiBNZW1iZXJPcHRpb25zKHtzaG93TWVtYmVyT3B0aW9ucywgaGFuZGxlQ2xvc2VNZW1iZXJPcHQsIHBhcnR5SWQsIGFjdGl2ZU1lbWJlcn0pIHtcclxuXHJcbiAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xyXG5cclxuICBjb25zdCBpbmFjdGl2ZU11dGF0aW9uID0gdXNlTXV0YXRpb24oe1xyXG4gICAgbXV0YXRpb25GbjogKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9ICBmZXRjaCgnL2FwaS9nYW1lL21ha2UtbWUtaW5hY3RpdmUvJysgcGFydHlJZCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogdHJ1ZSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0sXHJcbiAgICBvblN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbJ3BhcnR5LWxpc3QnXSk7XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgbGVhdmVQYXJ0eWVNdXRhdGlvbiA9IHVzZU11dGF0aW9uKHtcclxuICAgIG11dGF0aW9uRm46IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSAgZmV0Y2goJy9hcGkvZ2FtZS9sZWF2ZS8nKyBwYXJ0eUlkLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OiB0cnVlLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0sXHJcbiAgICBvblN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbJ3BhcnR5LWxpc3QnXSk7XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TW9kYWwgc2hvdz17c2hvd01lbWJlck9wdGlvbnN9IG9uSGlkZT17aGFuZGxlQ2xvc2VNZW1iZXJPcHR9PlxyXG4gICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XHJcbiAgICAgICAgICA8TW9kYWwuVGl0bGU+UGFydHkgT3B0aW9ucyBmb3Ige3BhcnR5SWR9PC9Nb2RhbC5UaXRsZT48c21hbGw+IDwvc21hbGw+XHJcbiAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICB7YWN0aXZlTWVtYmVyID8gXHJcbiAgICAgICAgICAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBkcm9wZG93bi10b2dnbGVcIiBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCIgaHJlZj1cIiNtYWtlTWVJbmFjdGl2ZVwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwibWFrZU1lSW5hY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIE1ha2UgbWUgaW5hY3RpdmVcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlXCIgaWQ9XCJtYWtlTWVJbmFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgSW5hY3RpdmUgdXNlcnMgY2FuJ3Qgdm90ZSAgPGI+IE9ubHkgYSBwYXJ0eSBjcmVhdG9yIGNhbiBjaGFuZ2UgeW91ciBzdGF0dXMgdG8gYWN0aXZlPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgbXQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2luYWN0aXZlTXV0YXRpb24ubXV0YXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9jZWVkXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAnJ31cclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBkcm9wZG93bi10b2dnbGUgbXQtMlwiIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIiBocmVmPVwiI2xlYXZlR2FtZVwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwibGVhdmVHYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgIExlYXZlIHBhcnR5XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZVwiIGlkPVwibGVhdmVHYW1lXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICBBZnRlciB5b3UgbGVhdmUgcGFydHksIHlvdSB3b3VsZCBub3QgYmUgYWJsZSB0byBvcGVuIGdhbWUgcGFuZWwuIDxiPllvdSBjYW4ndCByZWpvaW4gcGFydHkgaWYgaXQncyBsb2NrZWQ8L2I+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIG10LTJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtsZWF2ZVBhcnR5ZU11dGF0aW9uLm11dGF0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJvY2VlZFxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcblxyXG5cclxuICAgICAgICAgIHsvKiA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZU1lbWJlck9wdH0+XHJcbiAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZU1lbWJlck9wdH0+XHJcbiAgICAgICAgICAgIFNhdmUgXHJcbiAgICAgICAgICA8L0J1dHRvbj4gKi99XHJcbiAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW1iZXJPcHRpb25zOyIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBhc3luYyB9IGZyb20gJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IE92ZXJsYXlUcmlnZ2VyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9PdmVybGF5VHJpZ2dlcic7XHJcbmltcG9ydCBUb29sdGlwIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Ub29sdGlwJztcclxuaW1wb3J0IE1lbWJlck9wdGlvbnMgZnJvbSAnLi9NZW1iZXJPcHRpb25zJ1xyXG5cclxuXHJcbmNvbnN0IFBhcnR5SXRlbSA9ICh7YWN0aXZpdHksIHVzZXJEYXRhfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzaG93TWVtYmVyT3B0aW9ucywgc2V0U2hvd01lbWJlck9wdGlvbnNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlTWVtYmVyT3B0ID0gKCkgPT4gc2V0U2hvd01lbWJlck9wdGlvbnMoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlU2hvd01lbWJlck9wdCA9ICgpID0+IHNldFNob3dNZW1iZXJPcHRpb25zKHRydWUpO1xyXG5cclxuXHJcbiAgICBjb25zdCBob3N0T3B0aW9uc1JvdXRlID0gJy9wYXJ0eS9vcHRpb25zLycgKyBhY3Rpdml0eS5pZDtcclxuICAgIGNvbnN0IHBhcnR5Um91dGUgPSAnL3BhcnR5L3Nob3cvJyArIGFjdGl2aXR5LmlkO1xyXG4gICAgY29uc3QgaW52aXRhdGlvbmFsTGluayA9ICcvZ2FtZS9pbnZpdGUvJyArIGFjdGl2aXR5LnNsdWc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29weUludmlMaW5rID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBIVFRQXHJcbiAgICAgICAgICAgIGxldCB0ZXh0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXHJcbiAgICAgICAgICAgIHRleHRGaWVsZC5pbm5lclRleHQgPSBpbnZpdGF0aW9uYWxMaW5rXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dEZpZWxkKVxyXG4gICAgICAgICAgICB0ZXh0RmllbGQuc2VsZWN0KClcclxuICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKVxyXG4gICAgICAgICAgICB0ZXh0RmllbGQucmVtb3ZlKClcclxuICAgICAgICAgICAgYWxlcnQoaW52aXRhdGlvbmFsTGluayk7XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDx0cj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCAgY2xhc3NOYW1lPVwiZ2FtZS10YWJsZSBob3N0IGJnLWxpZ2h0IHAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZpdHkuaG9zdGVkID09IHVzZXJEYXRhID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9e3sgc2hvdzogMjUwLCBoaWRlOiA0MDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9eyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBpZD1cImhvc3QtdG9vbHRpcFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IGFyZSBob3N0IG9mIHRoaXMgcGFydHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17aG9zdE9wdGlvbnNSb3V0ZX0gY2xhc3NOYW1lPVwib3B0aW9ucy1saW5rXCIgPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS11c2VyLWdlYXIgaW5mby1pY29uXCI+IDwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9e3sgc2hvdzogMjUwLCBoaWRlOiA0MDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9eyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBpZD1cIm9wdGlvbnMtdG9vbHRpcFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGlkPVwie3tnYW1lLmlkfX1cIiBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1nZWFycyBpbmZvLWljb25cIiBvbkNsaWNrPXtoYW5kbGVTaG93TWVtYmVyT3B0fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImdhbWUtdGFibGUgYmctbGlnaHRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpdml0eS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImdhbWUtdGFibGUgYmctbGlnaHQgaG9zdCBwLTBcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9e3sgc2hvdzogMjUwLCBoaWRlOiA0MDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9eyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBpZD1cIm9wdGlvbnMtdG9vbHRpcFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2aXR5LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWNpcmNsZS1pbmZvIGluZm8taWNvblwiID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZ2FtZS10YWJsZSBiZy1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZpdHkudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZ2FtZS10YWJsZSBiZy1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHthY3Rpdml0eS5hY3RpdmVNZW1iZXJzfS97YWN0aXZpdHkucGxheWVyc31cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlIGJnLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQQVJUWSBTVEFUVVMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpdml0eS5sb2NrZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXt7IHNob3c6IDI1MCwgaGlkZTogNDAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5PXsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgaWQ9XCJvcHRpb25zLXRvb2x0aXBcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgcGFydHkgaXMgbG9ja2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1sb2NrIGluZm8taWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17eyBzaG93OiAyNTAsIGhpZGU6IDQwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGlkPVwib3B0aW9ucy10b29sdGlwXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3B5IGludml0YXRpb25hbCBsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1saW5rIGluZm8taWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y29weUludmlMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2aXR5LmlzQWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17eyBzaG93OiAyNTAsIGhpZGU6IDQwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGlkPVwib3B0aW9ucy10b29sdGlwXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3UgYXJlIEFDVElWRSBtZW1iZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLXBlcnNvbi1ydW5uaW5nIHN0YXR1cy1zcGFjZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9e3sgc2hvdzogMjUwLCBoaWRlOiA0MDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9eyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBpZD1cIm9wdGlvbnMtdG9vbHRpcFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IGFyZSBJTkFDVElWRSBtZW1iZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWJlZCBzdGF0dXMtc3BhY2VyXCIgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlIGJnLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1pbmcgc29vbi4uLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImdhbWUtdGFibGUgYmctbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e3BhcnR5Um91dGV9IGNsYXNzTmFtZT1cInRleHQtZGFyayB0ZXh0LWJvbGRcIiA+IHNob3cgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGEgY2xhc3NOYW1lPVwidGV4dC1kYXJrIHRleHQtYm9sZFwiIGhyZWY9e3BhcnR5Um91dGV9PlNob3c8L2E+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxNZW1iZXJPcHRpb25zIFxyXG4gICAgICAgICAgICAgICAgc2hvd01lbWJlck9wdGlvbnMgPSB7c2hvd01lbWJlck9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVDbG9zZU1lbWJlck9wdCA9IHtoYW5kbGVDbG9zZU1lbWJlck9wdH1cclxuICAgICAgICAgICAgICAgIHBhcnR5SWQgPSB7YWN0aXZpdHkuaWR9IFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlTWVtYmVyID0ge2FjdGl2aXR5LmlzQWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgICApICAgICAgICAgIFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFydHlJdGVtIiwiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgT3ZlcmxheVRyaWdnZXIsIFRvb2x0aXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgUGFydHlJdGVtIGZyb20gJy4vUGFydHlJdGVtJztcclxuXHJcbmNvbnN0IFBhcnR5TGlzdCA9ICh7dXNlckRhdGF9KSA9PiB7XHJcblxyXG4gICAgLy8gY29uc3QgW2FjdGl2aXR5TGlzdCwgc2V0QWN0aXZpdHlMaXN0XSA9IHVzZVF1ZXJ5KFsncGFydHktbGlzdCddKTtcclxuICAgIFxyXG4gICAgY29uc3QgeyBkYXRhOiBhY3Rpdml0eUxpc3QsIHN0YXR1czogYWN0aXZpdHlMaXN0U3RhdHVzIH0gPSB1c2VRdWVyeSh7XHJcbiAgICAgICAgcXVlcnlLZXk6IFsncGFydHktbGlzdCddLCBcclxuICAgICAgICBxdWVyeUZuOiAoKSA9PiBnZXRBY3Rpdml0eUxpc3QoKSxcclxuICAgICAgICByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy8gY29uc3QgW2FjdGl2aXR5TGlzdCwgc2V0QWN0aXZpdHlMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBnZXRBY3Rpdml0eUxpc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgcm91dGUgPSAnL2FwaS9teS1hY3Rpdml0aWVzJztcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3JvdXRlfWApO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgcGFydHktbGlzdCBiZy1kYXJrIGJnLWdyYWRpZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZ2FtZS10YWJsZS1oZWFkZXIgaG9zdCBiZy1kYXJrIGJnLWdyYWRpZW50XCIgc2NvcGU9XCJjb2xcIj48L3RoPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImdhbWUtdGFibGUtaGVhZGVyIGJnLWRhcmsgYmctZ3JhZGllbnRcIiBzY29wZT1cImNvbFwiPlBhcnR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImdhbWUtdGFibGUtaGVhZGVyIGhvc3QgYmctZGFyayBiZy1ncmFkaWVudFwiIHNjb3BlPVwiY29sXCI+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImdhbWUtdGFibGUtaGVhZGVyIGJnLWRhcmsgYmctZ3JhZGllbnRcIiBzY29wZT1cImNvbFwiPkFjdGl2aXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImdhbWUtdGFibGUtaGVhZGVyIGJnLWRhcmsgYmctZ3JhZGllbnRcIiBzY29wZT1cImNvbFwiPkFjdGl2ZS9BbGwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9e3sgc2hvdzogMjUwLCBoaWRlOiA0MDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9eyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBpZD1cIm9wdGlvbnMtdG9vbHRpcFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWN0aXZlIG1lbWJlcnMgaGF2ZSByaWdodCB0byB2b3RlLiBBbGwgbWVtYmVycyBjYW4gc2VlIHBhcnR5IHBhbmVsLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtcmVndWxhciBmYS1jaXJjbGUtcXVlc3Rpb24gb3B0aW9uLWluZm9cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZ2FtZS10YWJsZS1oZWFkZXIgYmctZGFyayBiZy1ncmFkaWVudFwiIHNjb3BlPVwiY29sXCI+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImdhbWUtdGFibGUtaGVhZGVyIGJnLWRhcmsgYmctZ3JhZGllbnRcIiBzY29wZT1cImNvbFwiPk5leHQgc2Vzc2lvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlLWhlYWRlciBiZy1kYXJrIGJnLWdyYWRpZW50XCIgc2NvcGU9XCJjb2xcIj5MaW5rPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7YWN0aXZpdHlMaXN0U3RhdHVzID09IFwic3VjY2Vzc1wiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpdml0eUxpc3QuYWN0aXZpdHlUYWJsZS5tYXAoKGFjdGl2aXR5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFydHlJdGVtIGtleT17YWN0aXZpdHkuaWR9IGFjdGl2aXR5PXthY3Rpdml0eX0gdXNlckRhdGE9e3VzZXJEYXRhfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKSAgICAgICAgICBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcnR5TGlzdCIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmF2SXRlbSBmcm9tICcuL05hdkl0ZW0nO1xyXG5cclxuXHJcbmNvbnN0IE5hdmJhciA9ICh7dXNlckRhdGF9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgbmF2SXRlbTEgPSB7XHJcbiAgICAgICAgJ25hbWUnOiAnSG9tZScsXHJcbiAgICAgICAgJ3JvdXRlJzogJy8nLFxyXG4gICAgICAgICd0eXBlJzogJ29wZW4nLFxyXG4gICAgICAgICdhY3RpdmUnOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBuYXZJdGVtMiA9IHtcclxuICAgICAgICAnbmFtZSc6ICdNeSBBY3Rpdml0aWVzJyxcclxuICAgICAgICAncm91dGUnOiAnL215LWFjdGl2aXRpZXMnLFxyXG4gICAgICAgICd0eXBlJzogJ2xvZ2dlZEluJyxcclxuICAgICAgICAnYWN0aXZlJzogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbmF2SXRlbTMgPSB7XHJcbiAgICAgICAgJ25hbWUnOiAnUmVhZE1lJyxcclxuICAgICAgICAncm91dGUnOiAnL3JlYWRtZScsXHJcbiAgICAgICAgJ3R5cGUnOiAnb3BlbicsXHJcbiAgICAgICAgJ2FjdGl2ZSc6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG5hdkl0ZW00ID0ge1xyXG4gICAgICAgICduYW1lJzogJysnLFxyXG4gICAgICAgICdyb3V0ZSc6ICcvcGFydHkvY3JlYXRlJyxcclxuICAgICAgICAndHlwZSc6ICdzcGVjaWFsJyxcclxuICAgICAgICAnYWN0aXZlJzogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbmF2SXRlbTUgPSB7XHJcbiAgICAgICAgJ25hbWUnOiAnTG9nb3V0JyxcclxuICAgICAgICAncm91dGUnOiAnL2xvZ291dCcsXHJcbiAgICAgICAgJ3R5cGUnOiAnbG9nZ2VkSW4nLFxyXG4gICAgICAgICdhY3RpdmUnOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBuYXZJdGVtNiA9IHtcclxuICAgICAgICAnbmFtZSc6ICdMb2dpbicsXHJcbiAgICAgICAgJ3JvdXRlJzogJy9sb2dpbicsXHJcbiAgICAgICAgJ3R5cGUnOiAnbG9nZ2VkT3V0JyxcclxuICAgICAgICAnYWN0aXZlJzogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbmF2SXRlbTcgPSB7XHJcbiAgICAgICAgJ25hbWUnOiAnUmVnaXN0ZXInLFxyXG4gICAgICAgICdyb3V0ZSc6ICcvcmVnaXN0ZXInLFxyXG4gICAgICAgICd0eXBlJzogJ2xvZ2dlZE91dCcsXHJcbiAgICAgICAgJ2FjdGl2ZSc6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGFsbE5hdmJhckl0ZW1zID0gW25hdkl0ZW0xLCBuYXZJdGVtMiwgbmF2SXRlbTMsIG5hdkl0ZW00LCBcclxuICAgICAgICAvLyBuYXZJdGVtNSwgXHJcbiAgICAgICAgbmF2SXRlbTYsIG5hdkl0ZW03XTtcclxuXHJcbiAgICAvLyBjb25zdCBbdXNlcixzZXRVc2VyXSA9IHVzZVN0YXRlKHVzZXJEYXRhKTtcclxuICAgIGNvbnN0IFtuYXZiYXIsc2V0TmF2YmFyXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwibmF2IHVzZXI6IFwiLHVzZXJEYXRhKTtcclxuICAgIGNvbnN0IGNyZWF0ZU5hdmJhciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBuYXZiYXJDb250ZW50ID0gW107XHJcbiAgICAgICAgYWxsTmF2YmFySXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzZXJEYXRhID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT0gJ2xvZ2dlZE91dCcgfHwgaXRlbS50eXBlID09ICdvcGVuJyApIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXZiYXJDb250ZW50LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGl0ZW0udHlwZSA9PSAnbG9nZ2VkSW4nIHx8IGl0ZW0udHlwZSA9PSAnc3BlY2lhbCcgfHwgaXRlbS50eXBlID09ICdvcGVuJyApIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXZiYXJDb250ZW50LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXROYXZiYXIobmF2YmFyQ29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjcmVhdGVOYXZiYXIoKTtcclxuICAgIH0sW3VzZXJEYXRhXSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7LyogbmF2YmFyIHVzZXIgPSB7dXNlckRhdGF9OyAqL31cclxuICAgICAgICAgICAgey8qIFBBR0UgVElUTEUgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdkaXNwbGF5LTEgdW5pdmVyc2FsLXNoYWRvdy10ZXh0Jz5IQVJNT048L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3VuZGVkLXdyYXBwZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGJnLWRhcmsgYmctZ3JhZGllbnQgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBDT0xBUFNFIEJVVFRPTiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLWJzLXRhcmdldD1cIiNuYXZiYXJOYXZcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyTmF2XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE5BViBJVEVNUyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZSBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgaWQ9XCJuYXZiYXJOYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbS0wIGFsaWduLW1pZGRsZVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYXZiYXIubWFwKChuYXZJdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0ga2V5PXtuYXZJdGVtLm5hbWV9IGl0ZW09e25hdkl0ZW19IHVzZXI9e3VzZXJEYXRhfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB1c2VyRGF0YSAhPT0gbnVsbCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9sb2dvdXRcImNsYXNzTmFtZT1cIm5hdi1saW5rIGZzLTQgbmF2LW1lbnUtaXRlbVwiPiBMb2dvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAnJ31cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PiBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgT3V0bGV0LCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IE5hdkl0ZW0gPSAoe2l0ZW0sIHVzZXJ9KSA9PiB7XHJcblxyXG4gICAgLy8gY29uc3QgY2xhc3NOYW1lcyA9IFwibmF2LWxpbmsgZnMtNCBuYXYtbWVudS1pdGVtXCI7XHJcblxyXG4gICAgaWYgKGl0ZW0udHlwZSA9PSAnc3BlY2lhbCcpIHtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2l0ZW0ucm91dGV9IGNsYXNzTmFtZT1cIm5hdi1saW5rIGZzLTQgbmF2LW1lbnUtaXRlbSBcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZSA9IFwiYm9yZGVyIGJvcmRlci0yIHJvdW5kZWQgc3F1YXJlLWJ1dHRvblwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLXBsdXMgXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSAgICAgICAgICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17aXRlbS5yb3V0ZX0gY2xhc3NOYW1lPVwibmF2LWxpbmsgZnMtNCBuYXYtbWVudS1pdGVtIFwiID4ge2l0ZW0ubmFtZX0gPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkl0ZW0iLCJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IGdldERhdGEgZnJvbSAnLi4vLi4vZ2V0RGF0YS9nZXREYXRhJztcclxuXHJcbmNvbnN0IERheSA9ICh7ZGF5RGF0YSwgc2V0QWN0aXZlRGF5LCBhY3RpdmVEYXl9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgICBjb25zdCBkYXRlU3RyaW5nID0gZGF5RGF0YS5kYXRlLnN1YnN0cmluZygwLDEwKTtcclxuICAgIGNvbnN0IHF1ZXJ5S2V5ID0gYCR7aWR9LSR7ZGF0ZVN0cmluZ31gO1xyXG4gICAgY29uc3QgZGF5Um91dGUgPSBgL2RheS8ke2lkfS8ke2RhdGVTdHJpbmd9YDtcclxuICAgIFxyXG4gICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHVzZVF1ZXJ5KHtcclxuICAgICAgICBxdWVyeUtleTogW3F1ZXJ5S2V5XSwgXHJcbiAgICAgICAgcXVlcnlGbjogKCkgPT4gZ2V0RGF0YShkYXlSb3V0ZSksXHJcbiAgICAgICAgcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV09IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICAvLyBjb25zdCBnZXREYXlEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKGRhdGVTdHJpbmcpO1xyXG4gICAgLy8gICAgIGNvbnN0IHJvdXRlID0gJ2h0dHA6Ly8xMjcuMC4wLjEvYXBpL2RheS8nKyBpZCArJy8nKyBkYXRlU3RyaW5nIDtcclxuICAgIC8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJvdXRlKTtcclxuICAgIC8vICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbnN0IHBpY2tEYXRlID0gKGRheSkgPT4ge1xyXG4gICAgICAgIHNldEFjdGl2ZURheShkYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PSAnc3VjY2VzcycgJiYgdHlwZW9mIGFjdGl2ZURheSAhPT0gJ3VuZGVmaW5lZCcgICYmIGlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEuZGF5SW5mbyk7XHJcbiAgICAgICAgICAgIHBpY2tEYXRlKGRhdGEuZGF5SW5mbyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9LFtkYXRhXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIGFjdGl2ZURheSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGFjdGl2ZURheS5kYXRlICE9PSAndW5kZWZpbmVkJyAmJiBhY3RpdmVEYXkuZGF0ZSA9PSBkYXlEYXRhLmRhdGUpIHtcclxuICAgICAgICAgICAgc2V0SXNBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0sW2FjdGl2ZURheV0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhY3RpdmVEYXkgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkYXRhICE9PSAndW5kZWZpbmVkJyAmJiBkYXlEYXRhLnRvZGF5KSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdwaWNrJyk7XHJcbiAgICAgICAgICAgIHNldEFjdGl2ZURheShkYXRhLmRheUluZm8pO1xyXG4gICAgICAgIH1cclxuICAgIH0sW3N0YXR1c10pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAge3N0YXR1cyA9PSdzdWNjZXNzJyA/IChcclxuICAgICAgICAgIC8vc3VjY2VzcyBcclxuICAgICAgICAgIDx0ZCBcclxuICAgICAgICAgIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBkYXRhLmRheUluZm8uc3RhdHVzICsgXCIgcC0wICBwaWNrZWQtZGF0ZVwiIDogIGRhdGEuZGF5SW5mby5zdGF0dXMgKyBcIiBwLTBcIiB9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwaWNrRGF0ZShkYXRhLmRheUluZm8pfT5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxlbmRhci1kYXlcIiA+ICAgICBcclxuICAgICAgICAgICAgICAgICAge2RhdGEuZGF5SW5mby5udW1iZXJ9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIHsvKiBBREQgVE9PTFRJUCEhISEhISEhISAqL31cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB7ZGF0YS5kYXlJbmZvLnN0YXR1cyA9PSBcIkNBTkNFTEVEXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllcnMtbGVmdC10by12b3RlXCIgPjxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLXhtYXJrXCI+PC9pPjwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgIHsvKiBBREQgVE9PTFRJUCEhISEhISEhISAqL31cclxuICAgICAgICAgICAgICB7ZGF0YS5kYXlJbmZvLnN0YXR1cyA9PSBcIlZPVEVEXCIgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVycy1sZWZ0LXRvLXZvdGVcIj48aSBjbGFzc05hbWU9XCJmYS1zaGFycCBmYS1zb2xpZCBmYS1hcnJvd3Mtcm90YXRlXCI+e2RhdGEuZGF5SW5mby5yZW1haW5pbmdWb3RlcnN9PC9pPjwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7IWRhdGEuZGF5SW5mby5wbGF5ZXJTdGF0dXMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVycy12b3RlLXN0YXR1c1wiPjxpIGNsYXNzTmFtZT1cImZhLXNoYXJwIGZhLXNvbGlkIGZhLWV4Y2xhbWF0aW9uXCI+PC9pPjwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICApIDogJyd9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgIHtkYXRhLmRheUluZm8uc3RhdHVzID09IFwiTUlTU0VEXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgIC8vIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtYmFuXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVycy1sZWZ0LXRvLXZvdGVcIj48aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1iYW5cIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgIHtkYXRhLmRheUluZm8uc3RhdHVzID09IFwiR0FNRURBWVwiID8gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllcnMtbGVmdC10by12b3RlXCI+PGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtY2hlY2tcIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDx0ZD4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxlbmRhci1kYXlcIiA+ICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7ZGF5RGF0YS5udW1iZXJ9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICApfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERheVxyXG5cclxuXHJcbiIsImltcG9ydCB7IFF1ZXJ5Q2xpZW50LCB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XHJcbmltcG9ydCBTdWJtaXRUb2FzdCBmcm9tICcuL1N1Ym1pdFRvYXN0JztcclxuaW1wb3J0IGdldERhdGEgZnJvbSAnLi4vLi4vZ2V0RGF0YS9nZXREYXRhJztcclxuXHJcbmNvbnN0IEZvcm0gPSAoe2FjdGl2ZURheX0pID0+IHtcclxuXHJcbiAgICBjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgICBjb25zdCBbZGF5LHNldERheV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW21vbnRoLHNldE1vbnRoXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbeWVhciwgc2V0WWVhcl0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFttZXNzYWdlU3RhdHVzLCBzZXRNZXNzYWdlU3RhdHVzXSA9IHVzZVN0YXRlKCk7XHJcblxyXG5cclxuICAgIGNvbnN0IFt2b3RlU3RhdHVzLCBzZXRWb3RlU3RhdHVzXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuXHJcbiAgICBjb25zdCB2b3RlUm91dGUgPSBgL2dldC12b3Rlcy8ke2lkfS8ke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XHJcbiAgICBjb25zdCB2b3RlS2V5ID0gYCR7aWR9LSR7eWVhcn0tJHttb250aH0tJHtkYXl9LXZvdGVzYDtcclxuXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gdXNlUXVlcnkoe1xyXG4gICAgICAgIHF1ZXJ5S2V5OiBbdm90ZUtleV0sIFxyXG4gICAgICAgIHF1ZXJ5Rm46ICgpID0+IGdldERhdGEodm90ZVJvdXRlKSxcclxuICAgICAgICByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIGFjdGl2ZURheSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3BsaXRlZERhdGUgPSBhY3RpdmVEYXkuZGF0ZS5zdWJzdHJpbmcoMCwxMCkuc3BsaXQoJy0nKTtcclxuICAgICAgICAgICAgc2V0RGF5KHBhcnNlSW50KHNwbGl0ZWREYXRlWzJdKSk7XHJcbiAgICAgICAgICAgIHNldE1vbnRoKHBhcnNlSW50KHNwbGl0ZWREYXRlWzFdKSk7XHJcbiAgICAgICAgICAgIHNldFllYXIoc3BsaXRlZERhdGVbMF0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sW2FjdGl2ZURheV0pO1xyXG4gICBcclxuICAgIGNvbnN0IGNoZWNrVm90ZVN0YXR1cyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldFZvdGVTdGF0dXMoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRWb3RlID0gYXN5bmMoZXZlbnQpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB2b3RlID0gYXdhaXQgZGF0YU11dGF0aW9uLm11dGF0ZUFzeW5jKGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2b3RlLnN0YXR1cyA9PSA0MDMpIHtcclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2VTdGF0dXMoJ2ZhaWwnKTtcclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UoJ1lvdSBhcmUgbm90IGFuIGFjdGl2ZSBtZW1iZXIgb2YgdGhpcyBwYXJ0eScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh2b3RlLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2VTdGF0dXMoJ3N1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UoJ1lvdXIgdm90ZSBoYXMgYmVlbiBzZW50Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2codm90ZSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZSgpO1xyXG4gICAgICAgICAgICB9LDMwMDApO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjogJyArIGVycm9yKTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGFNdXRhdGlvbiA9IHVzZU11dGF0aW9uKHtcclxuICAgICAgICBtdXRhdGlvbkZuOiAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KVxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9ICBmZXRjaChgL2FwaS9zZW5kLXZvdGUvJHtpZH1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkVycm9yOiAoZXJyb3IsIHZhcmlhYmxlcyxjb250ZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCB2YXJpYWJsZXMsY29udGV4dCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAgICAgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW2Ake2lkfS1gK2FjdGl2ZURheS5kYXRlLnN1YnN0cmluZygwLDEwKV0pO1xyXG4gICAgICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbdm90ZUtleV0pXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZVZvdGVNdXRhdGlvbiA9IHVzZU11dGF0aW9uKHtcclxuICAgICAgICBtdXRhdGlvbkZuOiAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaWQpO1xyXG4gICAgICAgICAgICAvLyBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpXHJcbiAgICAgICAgICAgIGNvbnN0IHZvdGVJZCA9IGV2ZW50LnRhcmdldC5pZDtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25maXJtKCdUaGlzIHZvdGUgd2lsbCBiZSBkZWxldGVkIHBlcm1hbmVudGx5ISBEYXkgc3RhdHVzIG1heSBiZSBjaGFuZ2VkJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gIGZldGNoKCcvYXBpL3ZvdGUvZGVsZXRlLycrIHZvdGVJZCwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuICBmYWxzZTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBUT0RPOiBcclxuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAgICAgc2V0TWVzc2FnZVN0YXR1cygnc3VjY2VzcycpO1xyXG4gICAgICAgICAgICBzZXRNZXNzYWdlKCdZb3VyIHZvdGUgaGFzIGJlZW4gZGVsZXRlZCcpO1xyXG4gICAgICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbdm90ZUtleV0pXHJcbiAgICAgICAgICAgIHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtpZCsnLScrYWN0aXZlRGF5LmRhdGUuc3Vic3RyaW5nKDAsMTApXSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZSgpO1xyXG4gICAgICAgICAgICB9LDMwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBnLTNcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBGT1JNICovfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYmctbGlnaHQgZm9ybS1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHBhcnR5LWhlYWRlciBiZy1kYXJrIGJnLWdyYWRpZW50IG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQTEFDRSBZT1VSIFZPVEVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBuYW1lPVwidm90ZVwiIG1ldGhvZD1cInBvc3RcIiBvblN1Ym1pdD17YWRkVm90ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjdXN0b20tZm9ybS1yb3cgcHQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTMgY3VzdG9tLWZvcm0tbGFiZWwgXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJcIj48L3NwYW4+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGF0dXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPXt2b3RlU3RhdHVzID09IDAgPyBcImZvcm0tc2VsZWN0LWxnIGJnLXJlZCBcIiA6IFwiZm9ybS1zZWxlY3QtbGcgYmctZ3JlZW5cIiB9IG9uQ2hhbmdlPXtjaGVja1ZvdGVTdGF0dXN9IGlkPVwidm90ZV92b3RlXCIgbmFtZT1cInZvdGVbdm90ZV1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGNsYXNzTmFtZT1cImJnLWdyZWVuXCIgdmFsdWU9XCIxXCIgPkknbSBpbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gY2xhc3NOYW1lPVwiYmctcmVkXCIgdmFsdWU9XCIwXCIgPkknbSBvdXQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBoaWRkZW4tZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTMgY3VzdG9tLWZvcm0tbGFiZWxcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIiBpZD1cInZvdGVfZGF0ZV9tb250aFwiIG5hbWU9XCJ2b3RlW2RhdGVdW21vbnRoXVwiIHJlYWRPbmx5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9e21vbnRofT48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdFwiIGlkPVwidm90ZV9kYXRlX2RheVwiIG5hbWU9XCJ2b3RlW2RhdGVdW2RheV1cIiByZWFkT25seT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPXtkYXl9Pjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCIgaWQ9XCJ2b3RlX2RhdGVfeWVhclwiIG5hbWU9XCJ2b3RlW2RhdGVdW3llYXJdXCIgcmVhZE9ubHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZCB2YWx1ZT17eWVhcn0+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zIGN1c3RvbS1mb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTMgY3VzdG9tLWZvcm0tbGFiZWwgXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tdGltZS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0LWxnICB0aW1lLXNlbGVjdFwiIGlkPVwidm90ZV9zdGFydFRpbWVfaG91clwiIG5hbWU9XCJ2b3RlW3N0YXJ0VGltZV1baG91cl1cIj48b3B0aW9uIHZhbHVlPVwiMFwiPjAwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjFcIj4wMTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyXCI+MDI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiM1wiPjAzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjRcIj4wNDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1XCI+MDU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNlwiPjA2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjdcIj4wNzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI4XCI+MDg8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiOVwiPjA5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjEwXCI+MTA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTFcIj4xMTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxMlwiPjEyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjEzXCI+MTM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTRcIj4xNDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxNVwiPjE1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE2XCI+MTY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTdcIj4xNzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxOFwiPjE4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE5XCI+MTk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjBcIj4yMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyMVwiPjIxPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIyXCI+MjI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjNcIj4yMzwvb3B0aW9uPjwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXRpbWUtc2VwYXJhdG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS10aW1lLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3QtbGcgdGltZS1zZWxlY3RcIiBpZD1cInZvdGVfc3RhcnRUaW1lX21pbnV0ZVwiIG5hbWU9XCJ2b3RlW3N0YXJ0VGltZV1bbWludXRlXVwiPjxvcHRpb24gdmFsdWU9XCIwXCI+MDA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMVwiPjAxPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjJcIj4wMjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzXCI+MDM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNFwiPjA0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjVcIj4wNTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI2XCI+MDY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiN1wiPjA3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjhcIj4wODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI5XCI+MDk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTBcIj4xMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxMVwiPjExPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjEyXCI+MTI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTNcIj4xMzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxNFwiPjE0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE1XCI+MTU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTZcIj4xNjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxN1wiPjE3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE4XCI+MTg8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTlcIj4xOTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyMFwiPjIwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIxXCI+MjE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjJcIj4yMjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyM1wiPjIzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI0XCI+MjQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjVcIj4yNTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyNlwiPjI2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI3XCI+Mjc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjhcIj4yODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyOVwiPjI5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjMwXCI+MzA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzFcIj4zMTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzMlwiPjMyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjMzXCI+MzM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzRcIj4zNDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzNVwiPjM1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM2XCI+MzY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzdcIj4zNzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzOFwiPjM4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM5XCI+Mzk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDBcIj40MDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0MVwiPjQxPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQyXCI+NDI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDNcIj40Mzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0NFwiPjQ0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQ1XCI+NDU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDZcIj40Njwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0N1wiPjQ3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQ4XCI+NDg8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDlcIj40OTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1MFwiPjUwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjUxXCI+NTE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTJcIj41Mjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1M1wiPjUzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU0XCI+NTQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTVcIj41NTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1NlwiPjU2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU3XCI+NTc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNThcIj41ODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1OVwiPjU5PC9vcHRpb24+PC9zZWxlY3Q+ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTMgY3VzdG9tLWZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMyBjdXN0b20tZm9ybS1sYWJlbFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmluaXNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS10aW1lLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0LWxnIHRpbWUtc2VsZWN0XCIgaWQ9XCJ2b3RlX2ZpbmlzaFRpbWVfaG91clwiIG5hbWU9XCJ2b3RlW2ZpbmlzaFRpbWVdW2hvdXJdXCI+PG9wdGlvbiB2YWx1ZT1cIjBcIj4wMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxXCI+MDE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMlwiPjAyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjNcIj4wMzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0XCI+MDQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNVwiPjA1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjZcIj4wNjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI3XCI+MDc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiOFwiPjA4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjlcIj4wOTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxMFwiPjEwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjExXCI+MTE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTJcIj4xMjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxM1wiPjEzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE0XCI+MTQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTVcIj4xNTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxNlwiPjE2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE3XCI+MTc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMThcIj4xODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxOVwiPjE5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIwXCI+MjA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjFcIj4yMTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyMlwiPjIyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIzXCI+MjM8L29wdGlvbj48L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS10aW1lLXNlcGFyYXRvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXRpbWUtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3QtbGcgdGltZS1zZWxlY3RcIiBpZD1cInZvdGVfZmluaXNoVGltZV9taW51dGVcIiBuYW1lPVwidm90ZVtmaW5pc2hUaW1lXVttaW51dGVdXCI+PG9wdGlvbiB2YWx1ZT1cIjBcIj4wMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxXCI+MDE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMlwiPjAyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjNcIj4wMzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0XCI+MDQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNVwiPjA1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjZcIj4wNjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI3XCI+MDc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiOFwiPjA4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjlcIj4wOTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxMFwiPjEwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjExXCI+MTE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTJcIj4xMjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxM1wiPjEzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE0XCI+MTQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTVcIj4xNTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxNlwiPjE2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE3XCI+MTc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMThcIj4xODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxOVwiPjE5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIwXCI+MjA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjFcIj4yMTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyMlwiPjIyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIzXCI+MjM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjRcIj4yNDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyNVwiPjI1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI2XCI+MjY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjdcIj4yNzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyOFwiPjI4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI5XCI+Mjk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzBcIj4zMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzMVwiPjMxPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjMyXCI+MzI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzNcIj4zMzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzNFwiPjM0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM1XCI+MzU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzZcIj4zNjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzN1wiPjM3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM4XCI+Mzg8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzlcIj4zOTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0MFwiPjQwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQxXCI+NDE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDJcIj40Mjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0M1wiPjQzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQ0XCI+NDQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDVcIj40NTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0NlwiPjQ2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQ3XCI+NDc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDhcIj40ODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0OVwiPjQ5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjUwXCI+NTA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTFcIj41MTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1MlwiPjUyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjUzXCI+NTM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTRcIj41NDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1NVwiPjU1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU2XCI+NTY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTdcIj41Nzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1OFwiPjU4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU5XCI+NTk8L29wdGlvbj48L3NlbGVjdD4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1sZyBidG4tZGFya1wiPlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTYgYW5pbWF0aW9uXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIElORk9STUFUSU9OICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJnLWxpZ2h0IGZvcm0tcGFuZWwgYW5pbWF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgcGFydHktaGVhZGVyIGJnLWRhcmsgYmctZ3JhZGllbnQgYW5pbWF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgREFURSBJTkZPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGF0ZS1kaXNwbGF5IGJvcmRlci1ib3R0b20gIHBiLTMgXCI+PGI+e2RheX0te21vbnRofS17eWVhcn08L2I+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluZm8tZGlzcGxheSBib3JkZXItYm90dG9tIHBiLTNcIj48Yj48c3BhbiBjbGFzc05hbWU9XCJpbmZvLWxhYmVsIGJnLXdoaXRlXCI+Vk9USU5HIFNUQVRVUzwvc3Bhbj48L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGVvZiBhY3RpdmVEYXkgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgYWN0aXZlRGF5LnN0YXR1cyA9PSAnQ0FOQ0VMRUQnID8gKCdTb21lIG1lbWJlcnMgYXJlIHVuYXZhaWxhYmxlJykgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZW9mIGFjdGl2ZURheSAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBhY3RpdmVEYXkuc3RhdHVzID09ICdNSVNTRUQnID8gKCdTY2hlZHVsZXMgbWlzc2VkJykgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZW9mIGFjdGl2ZURheSAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBhY3RpdmVEYXkuc3RhdHVzID09ICdWT1RFRCcgPyAoJ1ZvdGluZyBpbiBwcm9ncmVzcycpIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGVvZiBhY3RpdmVEYXkgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgYWN0aXZlRGF5LnN0YXR1cyA9PSAnRU1QVFknID8gKCdOb29uZSB2b3RlZCB5ZXQnKSA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlb2YgYWN0aXZlRGF5ICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIGFjdGl2ZURheS5zdGF0dXMgPT0gJ0dBTUVEQVknID8gKCdTY2hlZHVsZXMgbWF0Y2hlZCEnKSA6ICcnfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5mby1kaXNwbGF5IGJvcmRlci1ib3R0b20gcGItM1wiPjxiPjxzcGFuIGNsYXNzTmFtZT1cImluZm8tbGFiZWwgYmctd2hpdGVcIj5ZT1VSIFNUQVRVUzwvc3Bhbj48L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGVvZiBhY3RpdmVEYXkgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgYWN0aXZlRGF5LnBsYXllclN0YXR1cyA/ICdWb3RlZCcgOiBcIllvdSBkaWRuJ3Qgdm90ZVwifSAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5mby1kaXNwbGF5IGJvcmRlci1ib3R0b20gcGItM1wiPjxiPjxzcGFuIGNsYXNzTmFtZT1cImluZm8tbGFiZWwgYmctd2hpdGVcIj5XQUlUSU5HIEZPUjwvc3Bhbj48L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGVvZiBhY3RpdmVEYXkgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgIGFjdGl2ZURheS5yZW1haW5pbmdWb3RlcnMgIT09ICd1bmRlZmluZWQnICA/IGFjdGl2ZURheS5yZW1haW5pbmdWb3RlcnMgKyAnIG1lbWJlcihzKScgOiBcIlwifSAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZW9mIGFjdGl2ZURheSAhPT0gJ3VuZGVmaW5lZCcgJiYgYWN0aXZlRGF5LnN0YXR1cyA9PSAnR0FNRURBWScgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWRpc3BsYXkgYm9yZGVyLWJvdHRvbSBwYi0zXCI+PGI+PHNwYW4gY2xhc3NOYW1lPVwiaW5mby1sYWJlbCBiZy13aGl0ZVwiPkhPVVJTPC9zcGFuPjwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGVvZiBhY3RpdmVEYXkgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgIGFjdGl2ZURheS5ob3VycyAhPT0gJ3VuZGVmaW5lZCcgID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlRGF5LmhvdXJzLm1hcCgocmFuZ2UpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57cmFuZ2Uuc3RhcnQuc3Vic3RyaW5nKDExLDE2KSsnIDwtPiAnICtyYW5nZS5maW5pc2guc3Vic3RyaW5nKDExLDE2KX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBcIlwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICcnfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogVk9URVMgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0YWJsZS1jZWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYmctbGlnaHQgZm9ybS1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHBhcnR5LWhlYWRlciBiZy1kYXJrIGJnLWdyYWRpZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWU9VUiBWT1RFUyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0dXMgPT0gJ3N1Y2Nlc3MnID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS52b3Rlcy5tYXAoKGV2ZW50KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2N1c3RvbS12b3RlLWRpc3BsYXkgJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFldmVudC52b3RlVHlwZSA/IFwiSSdtIG91dFwiIDogZXZlbnQuc3RhcnQrICcgLSAnICsgZXZlbnQuZmluaXNofVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gIGNsYXNzTmFtZT1cInZvdGUtdHJhc2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGlkPXtldmVudC5pZH0gY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtdHJhc2gtY2FuXCIgb25DbGljaz17ZGVsZXRlVm90ZU11dGF0aW9uLm11dGF0ZX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogJ0xvYWRpbmcuLi4nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgdGFibGUtY2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJnLWxpZ2h0IGZvcm0tcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgcGFydHktaGVhZGVyIGJnLWRhcmsgYmctZ3JhZGllbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBSRVNFVFNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29taW5nIHNvb24uLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG57LyogXHJcbiAgICAgICAgICAgIHtkZWxldGVWb3RlTXV0YXRpb24uaXNTdWNjZXNzID8gXHJcbiAgICAgICAgICAgICggIFxyXG4gICAgICAgICAgICAgICAgPFN1Ym1pdFRvYXN0IHR5cGU9J3N1Y2Nlc3MnIG1lc3NhZ2U9J1lvdXIgdm90ZSBoYXMgYmVlbiBkZWxldGVkJy8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDogbnVsbH0gKi99XHJcblxyXG4gICAgICAgICAgICB7bWVzc2FnZSAmJiB0eXBlb2YgbWVzc2FnZSAhPSAndW5kZWZpbmVkJyA/IChcclxuICAgICAgICAgICAgICAgIDxTdWJtaXRUb2FzdCB0eXBlPXttZXNzYWdlU3RhdHVzfSBtZXNzYWdlPXttZXNzYWdlfSAvPlxyXG4gICAgICAgICAgICApIFxyXG4gICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtOyIsIlxyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgZ2V0RGF0YSBmcm9tICcuLi8uLi9nZXREYXRhL2dldERhdGEnO1xyXG5cclxuY29uc3QgUGFydHlJbmZvID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gICAgXHJcbiAgICBjb25zdCBnYW1lRGF0YVJvdXRlID0gYC9nYW1lLWRhdGEvJHtpZH1gXHJcbiAgICBjb25zdCB7IGRhdGE6IGdhbWUsIHN0YXR1czogZ2FtZVN0YXR1cyB9ID0gdXNlUXVlcnkoe1xyXG4gICAgICAgIHF1ZXJ5S2V5OiBbJ2dhbWVEYXRhJ10sIFxyXG4gICAgICAgIHF1ZXJ5Rm46ICgpID0+IGdldERhdGEoZ2FtZURhdGFSb3V0ZSksXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHtnYW1lU3RhdHVzID09ICdzdWNjZXNzJyA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBiZy1saWdodCBmb3JtLXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBwYXJ0eS1oZWFkZXIgYmctZGFyayBiZy1ncmFkaWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUEFSVFkgSU5GT1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhcnR5LW5hbWUgYm9yZGVyLWJvdHRvbSBwdC0yIHBiLTNcIj48Yj48c3BhbiBjbGFzc05hbWU9XCJpbmZvLWxhYmVsIGJnLXdoaXRlXCI+UEFSVFkgTkFNRTwvc3Bhbj48L2I+IHtnYW1lLnBhcnR5SW5mby5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhcnR5LW5hbWUgIGJvcmRlci1ib3R0b20gcHQtMiBwYi0zXCI+PGI+PHNwYW4gY2xhc3NOYW1lPVwiaW5mby1sYWJlbCBiZy13aGl0ZVwiPkFDVElWSVRZPC9zcGFuPjwvYj4ge2dhbWUucGFydHlJbmZvLmFjdGl2aXR5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5mby1kaXNwbGF5IGJvcmRlci1ib3R0b20gIGxlYWQgcGItM1wiPjxiPjxzcGFuIGNsYXNzTmFtZT1cImluZm8tbGFiZWwgYmctd2hpdGVcIj5ERVNDUklQVElPTjwvc3Bhbj48L2I+IHtnYW1lLnBhcnR5SW5mby5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5mby1kaXNwbGF5IGJvcmRlci1ib3R0b20gcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+PHNwYW4gY2xhc3NOYW1lPVwiaW5mby1sYWJlbCBiZy13aGl0ZVwiPk1FTUJFUlM8L3NwYW4+PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dhbWUucGFydHlJbmZvLmFjdGl2ZU1lbWJlcnMubWFwKChwbGF5ZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e3BsYXllci5pZH0gY2xhc3NOYW1lPVwicGxheWVyLW5hbWVcIj48Yj57cGxheWVyLm5hbWV9PC9iPiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnYW1lLnBhcnR5SW5mby5pbmFjdGl2ZU1lbWJlcnMubWFwKChwbGF5ZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e3BsYXllci5pZH0gY2xhc3NOYW1lPVwicGxheWVyLW5hbWVcIj4ge3BsYXllci5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDogJyd9XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXJ0eUluZm87IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XHJcbmltcG9ydCBUb2FzdCBmcm9tICdyZWFjdC1ib290c3RyYXAvVG9hc3QnO1xyXG5cclxuXHJcbmNvbnN0IFN1Ym1pdFRvYXN0ID0gKHt0eXBlLCBtZXNzYWdlfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzaG93QSwgc2V0U2hvd0FdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlU2hvd0EgPSAoKSA9PiBzZXRTaG93QSghc2hvd0EpO1xyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXIgY2xhc3NOYW1lPSd0b2FzdGVkJyBjb250YWluZXJQb3NpdGlvbj0nYWJzb2x1dGUnIHBvc2l0aW9uPSdtaWRkbGUtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIDxUb2FzdCBiZz17dHlwZX0gc2hvdz17c2hvd0F9IG9uQ2xvc2U9e3RvZ2dsZVNob3dBfSBkZWxheT17MjAwMH0gYXV0b2hpZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvYXN0LkhlYWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwibWUtYXV0b1wiPnttZXNzYWdlfTwvc3Ryb25nPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L1RvYXN0LkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDwvVG9hc3Q+XHJcbiAgICAgICAgICAgIDwvVG9hc3RDb250YWluZXI+XHJcbiAgICBcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1Ym1pdFRvYXN0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBEYXkgZnJvbSAnLi9EYXknO1xyXG5jb25zdCBXZWVrID0gKHt3ZWVrRGF0YSwgYWN0aXZlRGF5LCBzZXRBY3RpdmVEYXl9KSA9PiB7XHJcblxyXG5cclxuICAgIGNvbnN0IFt3ZWVrLCBzZXRXZWVrXSA9ICB1c2VTdGF0ZSh3ZWVrRGF0YSk7XHJcbiAgICBjb25zdCBbZGF0YUxvYWRlZCwgc2V0RGF0YUxvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBcclxuICAgIGxldCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB3ZWVrRGF0YSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgc2V0RGF0YUxvYWRlZCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFt3ZWVrXSk7XHJcbiAgICBcclxuICAgIC8vIGNvbnNvbGUubG9nKGFjdGl2ZURheS5kYXRlKTtcclxuICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIHtkYXRhTG9hZGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIHdlZWsubWFwKChkYXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkKyctJytkYXkubW9udGhOdW1iZXIudG9TdHJpbmcoKSArXCItXCIrIGRheS5udW1iZXIudG9TdHJpbmcoKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlEYXRhID0ge2RheX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVEYXk9e2FjdGl2ZURheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZURheT17c2V0QWN0aXZlRGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgKX0gICBcclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2VlayIsIlxyXG5jb25zdCBkZWZhdWx0Um91dGUgPSAnaHR0cDovL3Rlc3Rvd2Uuc2FzYXJ0ZWxlLnBsL2FwaSc7XHJcblxyXG5jb25zdCBnZXREYXRhID0gYXN5bmMgKHJvdXRlKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhUm91dGUgPSBkZWZhdWx0Um91dGUgKyByb3V0ZTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVJvdXRlKTtcclxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldERhdGE7IiwiaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJpZXMsIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcblxyXG5jb25zdCBDcmVhdGVQYXJ0eSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgICBjb25zdCBjcmVhdGVHYW1lTXV0YXRpb24gPSB1c2VNdXRhdGlvbih7XHJcbiAgICAgICAgbXV0YXRpb25GbjogKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldClcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSAgZmV0Y2goJy9hcGkvZ2FtZS9jcmVhdGUnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAgICAgLy8gcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoWydwYXJ0eS1saXN0J10pO1xyXG4gICAgICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbJ3BhcnR5LWxpc3QnXSk7XHJcbiAgICAgICAgICAgIG5hdmlnYXRlKCcvbXktYWN0aXZpdGllcycpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnUGFydHkgd2FzIGNyZWF0ZWQhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD4gIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTkgY29sLWF1dG8gYmctbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTYgdGV4dC1jZW50ZXJcIj5DcmVhdGUgUGFydHk8L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gbmFtZT1cImdhbWVcIiBtZXRob2Q9XCJwb3N0XCIgb25TdWJtaXQ9e2NyZWF0ZUdhbWVNdXRhdGlvbi5tdXRhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImdhbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJnYW1lX25hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+UGFydHkgbmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImdhbWVfbmFtZVwiIG5hbWU9XCJnYW1lW25hbWVdXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdhbWVfdGl0bGVcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+QWN0aXZpdHkgbmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImdhbWVfdGl0bGVcIiBuYW1lPVwiZ2FtZVt0aXRsZV1cIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ2FtZV9kZXNjcmlwdGlvblwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5EZXNjcmlwcmlvbjo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJnYW1lX2Rlc2NyaXB0aW9uXCIgbmFtZT1cImdhbWVbZGVzY3JpcHRpb25dXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ2FtZV9taW5TZXNzaW9uTGVuZ3RoXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPk1pbmltYWwgc2Vzc2lvbiBsZW5ndGggKG1pbnV0ZXMpOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZ2FtZV9taW5TZXNzaW9uTGVuZ3RoXCIgbmFtZT1cImdhbWVbbWluU2Vzc2lvbkxlbmd0aF1cIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cImdhbWVfU2F2ZVwiIG5hbWU9XCJnYW1lW1NhdmVdXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1sZyBidG5cIj5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgaWQ9XCJnYW1lX190b2tlblwiIG5hbWU9XCJnYW1lW190b2tlbl1cIiB2YWx1ZT1cIjU4YmQ4LnhNYVc3RnJtN1J1eTJFaWNyTF9WYUtNZ0RFdTBtaVFSTXZQUWc0bXBPalUuaGFuVnF4LU5ubG1FNEE3RG1vMmhNcE5uWlJqbXFoZGNlN0trNnJIa2JuU2o5cWVnRktLc2R1R05CUVwiPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlUGFydHk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCb3ggZnJvbSAnLi4vY29tcG9uZW50cy9ob21lcGFnZS9Cb3gnO1xyXG5pbXBvcnQgRGlzY2xhaW1lciBmcm9tICcuLi9jb21wb25lbnRzL2hvbWVwYWdlL0Rpc2NsYWltZXInO1xyXG5cclxuY29uc3QgSG9tZXBhZ2UgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgYm94MSA9IHtcclxuICAgICAgICAndGl0bGUnOiAnQ3JlYXRlIHBhcnR5JyxcclxuICAgICAgICAnaWNvbic6ICdmYS1yZWd1bGFyIGZhLXVzZXJzLWJldHdlZW4tbGluZXMgZmEtOHggbS0zIG1iLTUnLFxyXG4gICAgICAgICd0ZXh0JzogJ01ha2UgYSBuZXcgcmVjb3VyaW5nIGFjdGl2aXR5IHRvIG1hbmFnZSdcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYm94MiA9IHtcclxuICAgICAgICAndGl0bGUnOiAnQWRkIE1lbWJlcnMnLFxyXG4gICAgICAgICdpY29uJzogJ2ZhLXJlZ3VsYXIgZmEtcGVvcGxlLXB1bGxpbmcgZmEtOHggbS0zIG1iLTUnLFxyXG4gICAgICAgICd0ZXh0JzogXCJJbnZpdGUgeW91ciBmcmllbmRzXCJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYm94MyA9IHtcclxuICAgICAgICAndGl0bGUnOiAnRmluZCBkYXRlJyxcclxuICAgICAgICAnaWNvbic6ICdmYS1yZWd1bGFyIGZhLWNhbGVuZGFyLWNoZWNrIGZhLTh4IG0tMyBtYi01JyxcclxuICAgICAgICAndGV4dCc6ICcgUGxhY2UgeW91ciB2b3RlcyBhbmQgYXBwIHdpbGwgZG8gdGhlIHJlc3QnXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJveENvbnRlbnQgPSBbYm94MSwgYm94MiwgYm94M107XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0zJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteGwtOSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpc2NsYWltZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZGlzcGxheS02IHRleHQtY2VudGVyIHVuaXZlcnNhbC1zaGFkb3ctdGV4dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdlbGNvbWVcclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14bC05Jz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2xlYWQnPlxyXG4gICAgICAgICAgICAgICAgICAgIEhBUk1PTiBpcyBhbiBhcHAgdGhhdCBoZWxwcyB0byBmaW5kIG1hdGNoaW5nIHNjaGVkdWxlcyBpbiBwYXJ0eSBvZiBmZXcgcGVvcGUgYXJyYW5nZWQgZm9yIHJlY2N1cmluZ1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2aXRpZXMgbGlrZSBzcG9ydHMsIGJvYXJkIGdhbWVzLCBkaWdpdGFsIGdhbWVzIG9yIHBva2VyLiBUaGUgbWV0aG9kb2xvZ3kgaXMgd3JwYWVkIGluIDMgc2lwbXBsZSBwaW50cyBiZWxvd1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dCB5b3Ugd2lsbCBmaW5kICBtb3JlIGluIGRlcHRoIGluc3RydWN0cmlvbnMgdW5kZXIgPGI+dGhpcyBsaW5rPC9iPi4gWW91IGNhbiBhbHNvIGdldCBmdWxsIGRvY3VtZW50YXRpb24gb24gbXkgPGI+Z2l0aHViPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0zJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteGwtOSAnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBnLTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Ym94Q29udGVudC5tYXAoKGJveCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBrZXk9e2JveC50aXRsZX0gY29udGVudD17Ym94fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlOyIsImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBPcHRpb25QYW5lbCBmcm9tICcuLi9jb21wb25lbnRzL2hvc3RPcHRpb25zL09wdGlvbnNQYW5lbCc7XHJcbmltcG9ydCBQYXJ0eUluZm8gZnJvbSAnLi4vY29tcG9uZW50cy9wYXJ0eS9QYXJ0eUluZm8nO1xyXG5cclxuY29uc3QgSG9zdE9wdGlvbnMgPSAoKSA9PiB7XHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtNCc+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdkaXNwbGF5LTYgdGV4dC1jZW50ZXIgdW5pdmVyc2FsLXNoYWRvdy10ZXh0Jz5cclxuICAgICAgICAgICAgICAgICAgICBQYXJ0eSBob3N0IHBhbmVsXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14bC02Jz5cclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uUGFuZWwgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhsLTYnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYXJ0eUluZm8gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvc3RPcHRpb25zOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE91dGxldCwgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VMb2FkIGZyb20gJ3JlYWN0LXVzZS1sb2FkJztcclxuaW1wb3J0IHsgdXNlTG9hZFN0YXRlLCBMb2FkaW5nIH0gZnJvbSAncmVhY3QtdXNlLWxvYWQnO1xyXG4vLyBpbXBvcnQgdXNlTG9hZCBmcm9tICdyZWFjdC11c2UtbG9hZCc7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXYvTmF2QmFyJ1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHt1c2VyfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt1c2VySWQsc2V0VXNlcklkXSA9IHVzZVN0YXRlKHVzZXIpO1xyXG4gICAgXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgey8qIDxEYXRhQ29tcG9uZW50IC8+ICovfVxyXG4gICAgICAgICAgICB7LyogVXNlciA9IHt1c2VyfSAqL31cclxuICAgICAgICAgICAgPE5hdkJhciB1c2VyRGF0YT17dXNlcn0vPlxyXG4gICAgICAgICAgICA8T3V0bGV0IGNvbnRleHQ9e1t1c2VySWQsc2V0VXNlcklkXX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcmllcywgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcclxuICAgIFxyXG4gICAgY29uc3QgbG9naW5NdXRhdGlvbiA9IHVzZU11dGF0aW9uKHtcclxuICAgICAgICBtdXRhdGlvbkZuOiAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaWQpO1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gIGZldGNoKCcvYXBpL2xvZ2luJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFsndXNlciddKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1lBWSEnKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PiAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC01IGJnLWxpZ2h0IHBiLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNSBtYi00XCI+TG9naW48L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uU3VibWl0PXtsb2dpbk11dGF0aW9uLm11dGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZD1cInBvc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIG10LTNcIj5FbWFpbDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VybmFtZVwiIG5hbWU9XCJfdXNlcm5hbWVcIiBkZWZhdWx0VmFsdWU9XCJcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIG10LTNcIiBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBuYW1lPVwiX3Bhc3N3b3JkXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBtdC0zXCIgdHlwZT1cInN1Ym1pdFwiPkxvZ2luPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdkaXNwbGF5LTUnPkxvZ291dDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvdXQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQYXJ0eUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9teUFjdGl2aXRpZXMvUGFydHlMaXN0JztcclxuaW1wb3J0IEJveCBmcm9tICcuLi9jb21wb25lbnRzL2hvbWVwYWdlL0JveCc7XHJcbmltcG9ydCBEaXNjbGFpbWVyIGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZXBhZ2UvRGlzY2xhaW1lcic7XHJcbmltcG9ydCB7IHVzZU91dGxldENvbnRleHQgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgTXlBY3Rpdml0aWVzID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9ICB1c2VPdXRsZXRDb250ZXh0KCk7XHJcblxyXG4gICAgY29uc3QgYm94MSA9IHtcclxuICAgICAgICAndGl0bGUnOiAnQ3JlYXRlIHBhcnR5JyxcclxuICAgICAgICAnaWNvbic6ICdmYS1yZWd1bGFyIGZhLXVzZXJzLWJldHdlZW4tbGluZXMgZmEtOHggbS0zIG1iLTUnLFxyXG4gICAgICAgICd0ZXh0JzogJ01ha2UgYSBuZXcgcmVjb3VyaW5nIGFjdGl2aXR5IHRvIG1hbmFnZSdcclxuICAgIH07XHJcblxyXG5cclxuICAgIC8vIGNvbnN0IGJveENvbnRlbnQgPSBbYm94MSwgYm94MiwgYm94M107XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgey8qIGFjdGkgOiB7dXNlcn0gKi99XHJcbiAgICAgICAgICAgIHsvKiB0aXRsZSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTQnPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZGlzcGxheS02IHRleHQtY2VudGVyIHVuaXZlcnNhbC1zaGFkb3ctdGV4dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgTGlzdCBvZiBwYXJ0aWVzXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiB0YWJsZSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTQnPlxyXG4gICAgICAgICAgICAgICAgPFBhcnR5TGlzdCB1c2VyRGF0YT17dXNlcn0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFjdGl2aXRpZXM7IiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IFdlZWsgZnJvbSAnLi4vY29tcG9uZW50cy9wYXJ0eS9XZWVrJztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9wYXJ0eS9Gb3JtJztcclxuaW1wb3J0IFBhcnR5SW5mbyBmcm9tICcuLi9jb21wb25lbnRzL3BhcnR5L1BhcnR5SW5mbyc7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcclxuaW1wb3J0IGdldERhdGEgZnJvbSAnLi4vZ2V0RGF0YS9nZXREYXRhJztcclxuXHJcbmNvbnN0IFBhcnR5ID0gKCkgPT4ge1xyXG5cclxuICAgIGxldCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuXHJcbiAgICBjb25zdCBbYWN0aXZlRGF5LCBzZXRBY3RpdmVEYXldID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICBjb25zdCBjYWxlbmRhclJvdXRlID0gYC9jYWxlbmRhci8ke2lkfWA7XHJcbiAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gdXNlUXVlcnkoe1xyXG4gICAgICAgIHF1ZXJ5S2V5OiBbJ2NhbGVuZGFyJ10sIFxyXG4gICAgICAgIHF1ZXJ5Rm46ICgpID0+IGdldERhdGEoY2FsZW5kYXJSb3V0ZSksXHJcbiAgICAgICAgcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTNcIj5cclxuICAgICAgICAgICAgICAgIHsvKiB0YWJsZSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgY2FsZW5kYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNhcHRpb24gY2xhc3NOYW1lPVwiYmctZGFyayBiZy1ncmFkaWVudFwiID5NT05USCBESVNQTEFZPC9jYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+TW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5UdWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPldlZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+VGh1PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Gcmk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlNhdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+U3VuPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0dXMgPT0gJ3N1Y2Nlc3MnID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuY2FsZW5kYXIubWFwKCh3ZWVrLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V2VlayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZCsnLScraW5kZXh9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWVrRGF0YSA9IHt3ZWVrfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlRGF5PXthY3RpdmVEYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZURheT17c2V0QWN0aXZlRGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKDx0cj48dGQ+bG9hZGluZzwvdGQ+PC90cj4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+ICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBGT1JNICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIGtleSA9e2lkfSBhY3RpdmVEYXk9e2FjdGl2ZURheX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPFBhcnR5SW5mbyAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXJ0eTsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgUmVhZG1lID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZGlzcGxheS01Jz5SZWFkbWU8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhZG1lOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiUmVhY3QiLCJjcmVhdGVSb290IiwiQnJvd3NlclJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwiTG9nb3V0IiwiTGF5b3V0IiwiSG9tZXBhZ2UiLCJSZWFkbWUiLCJQYXJ0eSIsIk15QWN0aXZpdGllcyIsIkhvc3RPcHRpb25zIiwiZ2V0RGF0YSIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsInVzZVF1ZXJ5IiwiTG9naW4iLCJDcmVhdGVQYXJ0eSIsIk1haW4iLCJ1c2VyUm91dGUiLCJkYXRhIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJNYWluUGFnZSIsInF1ZXJ5Q2xpZW50IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiLCJyZXF1aXJlIiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsImNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIkJveCIsImNvbnRlbnQiLCJ0aXRsZSIsImljb24iLCJ0ZXh0IiwiRGlzY2xhaW1lciIsInVzZU11dGF0aW9uIiwidXNlUXVlcnlDbGllbnQiLCJOYXZpZ2F0ZSIsInVzZU5hdmlnYXRlIiwidXNlUGFyYW1zIiwiT3ZlcmxheVRyaWdnZXIiLCJUb29sdGlwIiwiU3VibWl0VG9hc3QiLCJPcHRpb25QYW5lbCIsIm5hdmlnYXRlIiwiaWQiLCJjdXJyZW50UGxheWVyIiwic2V0Q3VycmVudFBsYXllciIsIm5ld0hvc3RJZCIsInNldE5ld0hvc3RJZCIsImFjdGl2ZVBsYXllcnMiLCJzZXRBY3RpdmVQbGF5ZXJzIiwiaW5hY3RpdmVQbGF5ZXJzIiwic2V0SW5hY3RpdmVQbGF5ZXJzIiwicGxheWVyU3RhdHVzIiwic2V0UGxheWVyU3RhdHVzIiwiZ2FtZURhdGFSb3V0ZSIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsIm9uU3VjY2VzcyIsInBhcnR5SW5mbyIsImhvc3QiLCJhY3RpdmUiLCJhY3RpdmVNZW1iZXJzIiwibWFwIiwicGxheWVyIiwicHVzaCIsImluYWN0aXZlIiwiaW5hY3RpdmVNZW1iZXJzIiwiZmluZCIsInZhbHVlIiwiZ2FtZSIsImdhbWVTdGF0dXMiLCJzdGF0dXNNdXRhdGlvbiIsIm11dGF0aW9uRm4iLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaW52YWxpZGF0ZVF1ZXJpZXMiLCJyZW1vdmVNZW1iZXIiLCJjb25maXJtIiwicmVtb3ZlTWVtYmVyTXV0YXRpb24iLCJtdXRhdGUiLCJwcm9tb1RvSG9zdE11dGF0aW9uIiwibG9ja011dGF0aW9uIiwiZGVsZXRlUGFydHkiLCJkZWxldGVNdXRhdGlvbiIsImdldFBsYXllclN0YXR1cyIsImUiLCJwbGF5ZXJJZCIsInRhcmdldCIsImlzQWN0aXZlIiwiaXNJbmFjdGl2ZSIsImRldGVybWluZU5ld0hvc3QiLCJzaG93IiwiaGlkZSIsIm5hbWUiLCJpc1N1Y2Nlc3MiLCJCdXR0b24iLCJNb2RhbCIsIk1lbWJlck9wdGlvbnMiLCJzaG93TWVtYmVyT3B0aW9ucyIsImhhbmRsZUNsb3NlTWVtYmVyT3B0IiwicGFydHlJZCIsImFjdGl2ZU1lbWJlciIsImluYWN0aXZlTXV0YXRpb24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYm9keSIsImxlYXZlUGFydHllTXV0YXRpb24iLCJhc3luYyIsIkxpbmsiLCJQYXJ0eUl0ZW0iLCJhY3Rpdml0eSIsInVzZXJEYXRhIiwic2V0U2hvd01lbWJlck9wdGlvbnMiLCJoYW5kbGVTaG93TWVtYmVyT3B0IiwiaG9zdE9wdGlvbnNSb3V0ZSIsInBhcnR5Um91dGUiLCJpbnZpdGF0aW9uYWxMaW5rIiwic2x1ZyIsImNvcHlJbnZpTGluayIsInRleHRGaWVsZCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJhcHBlbmRDaGlsZCIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwicmVtb3ZlIiwiYWxlcnQiLCJob3N0ZWQiLCJkZXNjcmlwdGlvbiIsInBsYXllcnMiLCJsb2NrZWQiLCJQYXJ0eUxpc3QiLCJnZXRBY3Rpdml0eUxpc3QiLCJyZWZldGNoT25XaW5kb3dGb2N1cyIsImFjdGl2aXR5TGlzdCIsImFjdGl2aXR5TGlzdFN0YXR1cyIsInJvdXRlIiwianNvbiIsImFjdGl2aXR5VGFibGUiLCJOYXZJdGVtIiwiTmF2YmFyIiwibmF2SXRlbTEiLCJuYXZJdGVtMiIsIm5hdkl0ZW0zIiwibmF2SXRlbTQiLCJuYXZJdGVtNSIsIm5hdkl0ZW02IiwibmF2SXRlbTciLCJhbGxOYXZiYXJJdGVtcyIsIm5hdmJhciIsInNldE5hdmJhciIsImNyZWF0ZU5hdmJhciIsIm5hdmJhckNvbnRlbnQiLCJmb3JFYWNoIiwiaXRlbSIsInR5cGUiLCJuYXZJdGVtIiwiT3V0bGV0IiwiRGF5IiwiZGF5RGF0YSIsInNldEFjdGl2ZURheSIsImFjdGl2ZURheSIsImRhdGVTdHJpbmciLCJkYXRlIiwic3Vic3RyaW5nIiwiZGF5Um91dGUiLCJzZXRJc0FjdGl2ZSIsInBpY2tEYXRlIiwiZGF5IiwiZGF5SW5mbyIsInRvZGF5IiwibnVtYmVyIiwicmVtYWluaW5nVm90ZXJzIiwiRm9ybSIsInNldERheSIsIm1vbnRoIiwic2V0TW9udGgiLCJ5ZWFyIiwic2V0WWVhciIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwibWVzc2FnZVN0YXR1cyIsInNldE1lc3NhZ2VTdGF0dXMiLCJ2b3RlU3RhdHVzIiwic2V0Vm90ZVN0YXR1cyIsInZvdGVSb3V0ZSIsInZvdGVLZXkiLCJzcGxpdGVkRGF0ZSIsInNwbGl0IiwicGFyc2VJbnQiLCJjaGVja1ZvdGVTdGF0dXMiLCJhZGRWb3RlIiwiZGF0YU11dGF0aW9uIiwibXV0YXRlQXN5bmMiLCJ2b3RlIiwic2V0VGltZW91dCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJvbkVycm9yIiwiZXJyb3IiLCJ2YXJpYWJsZXMiLCJkZWxldGVWb3RlTXV0YXRpb24iLCJ2b3RlSWQiLCJob3VycyIsInJhbmdlIiwic3RhcnQiLCJmaW5pc2giLCJ2b3RlcyIsInZvdGVUeXBlIiwiUGFydHlJbmZvIiwiVG9hc3RDb250YWluZXIiLCJDb2wiLCJSb3ciLCJUb2FzdCIsInNob3dBIiwic2V0U2hvd0EiLCJ0b2dnbGVTaG93QSIsIldlZWsiLCJ3ZWVrRGF0YSIsIndlZWsiLCJzZXRXZWVrIiwiZGF0YUxvYWRlZCIsInNldERhdGFMb2FkZWQiLCJtb250aE51bWJlciIsInRvU3RyaW5nIiwiZGVmYXVsdFJvdXRlIiwiZGF0YVJvdXRlIiwidXNlUXVlcmllcyIsImNyZWF0ZUdhbWVNdXRhdGlvbiIsImJveDEiLCJib3gyIiwiYm94MyIsImJveENvbnRlbnQiLCJib3giLCJ1c2VMb2FkIiwidXNlTG9hZFN0YXRlIiwiTG9hZGluZyIsIk5hdkJhciIsInVzZXJJZCIsInNldFVzZXJJZCIsImxvZ2luTXV0YXRpb24iLCJ1c2VPdXRsZXRDb250ZXh0Iiwic2V0VXNlciIsImNhbGVuZGFyUm91dGUiLCJjYWxlbmRhciIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==