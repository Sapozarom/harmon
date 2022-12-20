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
  }); // const removeMember = () => {
  //     if (confirm('This member will be remove permanently. Do you want ot proceed?')) {
  //         return removeMemberMutation.mutate;
  //     }
  // }

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
      promoToHostMutation.status = 'idle'; // console.log(response);

      return response;
    },
    onSuccess: function onSuccess() {
      // console.log(data);
      queryClient.invalidateQueries(['gameData']);
    }
  });
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
    onClick: removeMemberMutation.mutate
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
    onClick: deleteMutation.mutate
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
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useMutation.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/lib/useQuery.mjs");
/* harmony import */ var _SubmitToast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SubmitToast */ "./assets/js/components/party/SubmitToast.js");
/* harmony import */ var _getData_getData__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../getData/getData */ "./assets/js/getData/getData.js");


















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Form = function Form(_ref) {
  var activeDay = _ref.activeDay;
  var queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_20__.useQueryClient)();

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_21__.useParams)(),
      id = _useParams.id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      day = _useState2[0],
      setDay = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      month = _useState4[0],
      setMonth = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      year = _useState6[0],
      setYear = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(1),
      _useState8 = _slicedToArray(_useState7, 2),
      voteStatus = _useState8[0],
      setVoteStatus = _useState8[1];

  var voteRoute = "/get-votes/".concat(id, "/").concat(year, "-").concat(month, "-").concat(day);
  var voteKey = "".concat(id, "-").concat(year, "-").concat(month, "-").concat(day, "-votes"); // const { data, status } = useQuery({
  //     queryKey: [voteKey], 
  //     queryFn: () => getData(voteRoute),
  //     refetchOnWindowFocus: false,
  // });

  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_22__.useQuery)({
    queryKey: [voteKey],
    queryFn: function queryFn() {
      return (0,_getData_getData__WEBPACK_IMPORTED_MODULE_19__["default"])(voteRoute);
    },
    refetchOnWindowFocus: false
  }),
      data = _useQuery.data,
      status = _useQuery.status; // console.log(status);


  (0,react__WEBPACK_IMPORTED_MODULE_17__.useEffect)(function () {
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

  var dataMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_23__.useMutation)({
    mutationFn: function mutationFn(event) {
      event.preventDefault(); // console.log(id);

      var formData = new FormData(event.target);
      var response = fetch("/api/send-vote/".concat(id), {
        method: 'POST',
        body: formData
      });
      return response;
    },
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries(["".concat(id, "-") + activeDay.date.substring(0, 10)]);
      queryClient.invalidateQueries([voteKey]);
    }
  });
  var deleteVoteMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_23__.useMutation)({
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
      queryClient.invalidateQueries([voteKey]);
      queryClient.invalidateQueries([id + '-' + activeDay.date.substring(0, 10)]);
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement((react__WEBPACK_IMPORTED_MODULE_17___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "row g-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "col-xl-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "border bg-light form-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "d-flex flex-row justify-content-center party-header bg-dark bg-gradient mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: ""
  }, "PLACE YOUR VOTE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("form", {
    name: "vote",
    method: "post",
    onSubmit: dataMutation.mutate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "row custom-form-row pt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "col-3 custom-form-label "
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("select", {
    className: voteStatus == 0 ? "form-select-lg bg-red " : "form-select-lg bg-green",
    onChange: checkVoteStatus,
    id: "vote_vote",
    name: "vote[vote]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    className: "bg-green",
    value: "1"
  }, "I'm in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    className: "bg-red",
    value: "0"
  }, "I'm out"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "row hidden-date"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "col-3 custom-form-label"
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("select", {
    className: "form-select",
    id: "vote_date_month",
    name: "vote[date][month]",
    readOnly: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    selected: true,
    value: month
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("select", {
    className: "form-select",
    id: "vote_date_day",
    name: "vote[date][day]",
    readOnly: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    selected: true,
    value: day
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("select", {
    className: "form-select",
    id: "vote_date_year",
    name: "vote[date][year]",
    readOnly: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    selected: true,
    value: year
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "row mt-3 custom-form-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "col-3 custom-form-label "
  }, "Start"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "form-time-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("select", {
    className: "form-select-lg  time-select",
    id: "vote_startTime_hour",
    name: "vote[startTime][hour]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "0"
  }, "00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "1"
  }, "01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "2"
  }, "02"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "3"
  }, "03"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "4"
  }, "04"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "5"
  }, "05"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "6"
  }, "06"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "7"
  }, "07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "8"
  }, "08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "9"
  }, "09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "11"
  }, "11"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "12"
  }, "12"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "13"
  }, "13"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "14"
  }, "14"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "15"
  }, "15"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "16"
  }, "16"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "17"
  }, "17"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "18"
  }, "18"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "19"
  }, "19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "20"
  }, "20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "21"
  }, "21"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "22"
  }, "22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "23"
  }, "23"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "form-time-separator"
  }, ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "form-time-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("select", {
    className: "form-select-lg time-select",
    id: "vote_startTime_minute",
    name: "vote[startTime][minute]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "0"
  }, "00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "1"
  }, "01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "2"
  }, "02"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "3"
  }, "03"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "4"
  }, "04"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "5"
  }, "05"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "6"
  }, "06"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "7"
  }, "07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "8"
  }, "08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "9"
  }, "09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "11"
  }, "11"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "12"
  }, "12"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "13"
  }, "13"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "14"
  }, "14"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "15"
  }, "15"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "16"
  }, "16"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "17"
  }, "17"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "18"
  }, "18"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "19"
  }, "19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "20"
  }, "20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "21"
  }, "21"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "22"
  }, "22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "23"
  }, "23"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "24"
  }, "24"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "25"
  }, "25"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "26"
  }, "26"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "27"
  }, "27"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "28"
  }, "28"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "29"
  }, "29"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "30"
  }, "30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "31"
  }, "31"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "32"
  }, "32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "33"
  }, "33"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "34"
  }, "34"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "35"
  }, "35"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "36"
  }, "36"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "37"
  }, "37"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "38"
  }, "38"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "39"
  }, "39"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "40"
  }, "40"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "41"
  }, "41"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "42"
  }, "42"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "43"
  }, "43"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "44"
  }, "44"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "45"
  }, "45"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "46"
  }, "46"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "47"
  }, "47"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "48"
  }, "48"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "49"
  }, "49"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "50"
  }, "50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "51"
  }, "51"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "52"
  }, "52"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "53"
  }, "53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "54"
  }, "54"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "55"
  }, "55"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "56"
  }, "56"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "57"
  }, "57"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "58"
  }, "58"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "59"
  }, "59"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "row mt-3 custom-form-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "col-3 custom-form-label"
  }, "Finish"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "form-time-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("select", {
    className: "form-select-lg time-select",
    id: "vote_finishTime_hour",
    name: "vote[finishTime][hour]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "0"
  }, "00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "1"
  }, "01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "2"
  }, "02"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "3"
  }, "03"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "4"
  }, "04"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "5"
  }, "05"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "6"
  }, "06"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "7"
  }, "07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "8"
  }, "08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "9"
  }, "09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "11"
  }, "11"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "12"
  }, "12"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "13"
  }, "13"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "14"
  }, "14"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "15"
  }, "15"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "16"
  }, "16"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "17"
  }, "17"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "18"
  }, "18"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "19"
  }, "19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "20"
  }, "20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "21"
  }, "21"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "22"
  }, "22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "23"
  }, "23"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "form-time-separator"
  }, ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "form-time-input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("select", {
    className: "form-select-lg time-select",
    id: "vote_finishTime_minute",
    name: "vote[finishTime][minute]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "0"
  }, "00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "1"
  }, "01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "2"
  }, "02"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "3"
  }, "03"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "4"
  }, "04"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "5"
  }, "05"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "6"
  }, "06"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "7"
  }, "07"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "8"
  }, "08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "9"
  }, "09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "11"
  }, "11"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "12"
  }, "12"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "13"
  }, "13"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "14"
  }, "14"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "15"
  }, "15"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "16"
  }, "16"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "17"
  }, "17"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "18"
  }, "18"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "19"
  }, "19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "20"
  }, "20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "21"
  }, "21"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "22"
  }, "22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "23"
  }, "23"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "24"
  }, "24"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "25"
  }, "25"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "26"
  }, "26"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "27"
  }, "27"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "28"
  }, "28"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "29"
  }, "29"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "30"
  }, "30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "31"
  }, "31"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "32"
  }, "32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "33"
  }, "33"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "34"
  }, "34"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "35"
  }, "35"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "36"
  }, "36"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "37"
  }, "37"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "38"
  }, "38"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "39"
  }, "39"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "40"
  }, "40"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "41"
  }, "41"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "42"
  }, "42"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "43"
  }, "43"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "44"
  }, "44"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "45"
  }, "45"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "46"
  }, "46"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "47"
  }, "47"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "48"
  }, "48"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "49"
  }, "49"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "50"
  }, "50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "51"
  }, "51"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "52"
  }, "52"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "53"
  }, "53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "54"
  }, "54"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "55"
  }, "55"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "56"
  }, "56"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "57"
  }, "57"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "58"
  }, "58"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("option", {
    value: "59"
  }, "59"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "row mt-3 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("button", {
    type: "submit",
    className: "btn btn-lg btn-dark"
  }, "Save")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "col-xl-6 animation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "border bg-light form-panel animation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "d-flex flex-row justify-content-center party-header bg-dark bg-gradient animation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "p-0"
  }, "DATE INFO")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("p", {
    className: "date-display border-bottom  pb-3 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("b", null, day, "-", month, "-", year))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("p", {
    className: "info-display border-bottom pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("span", {
    className: "info-label bg-white"
  }, "VOTING STATUS")), typeof activeDay !== 'undefined' && activeDay.status == 'CANCELED' ? 'Some members are unavailable' : '', typeof activeDay !== 'undefined' && activeDay.status == 'MISSED' ? 'Schedules missed' : '', typeof activeDay !== 'undefined' && activeDay.status == 'VOTED' ? 'Voting in progress' : '', typeof activeDay !== 'undefined' && activeDay.status == 'EMPTY' ? 'Noone voted yet' : '', typeof activeDay !== 'undefined' && activeDay.status == 'GAMEDAY' ? 'Schedules matched!' : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("p", {
    className: "info-display border-bottom pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("span", {
    className: "info-label bg-white"
  }, "YOUR STATUS")), typeof activeDay !== 'undefined' && activeDay.playerStatus ? 'Voted' : "You didn't vote")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("p", {
    className: "info-display border-bottom pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("span", {
    className: "info-label bg-white"
  }, "WAITING FOR")), typeof activeDay !== 'undefined' && activeDay.remainingVoters !== 'undefined' ? activeDay.remainingVoters + ' member(s)' : "")), typeof activeDay !== 'undefined' && activeDay.status == 'GAMEDAY' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "info-display border-bottom pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("span", {
    className: "info-label bg-white"
  }, "HOURS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("ul", null, typeof activeDay !== 'undefined' && activeDay.hours !== 'undefined' ? activeDay.hours.map(function (range) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("li", null, range.start.substring(11, 16) + ' <-> ' + range.finish.substring(11, 16));
  }) : ""))) : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "col-12 table-cell"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "border bg-light form-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "d-flex flex-row justify-content-center party-header bg-dark bg-gradient"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "p-0"
  }, "YOUR VOTES")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "row"
  }, status == 'success' ? data.votes.map(function (event) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
      className: "custom-vote-display "
    }, !event.voteType ? "I'm out" : event.start + ' - ' + event.finish, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("span", {
      className: "vote-trash"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("i", {
      id: event.id,
      className: "fa-solid fa-trash-can",
      onClick: deleteVoteMutation.mutate
    })));
  }) : 'Loading...')))), dataMutation.isSuccess ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_SubmitToast__WEBPACK_IMPORTED_MODULE_18__["default"], {
    type: "success",
    message: "Your vote has been sent"
  }) : null, deleteVoteMutation.isSuccess ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_SubmitToast__WEBPACK_IMPORTED_MODULE_18__["default"], {
    type: "success",
    message: "Your vote has been deleted"
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

var defaultRoute = 'http://127.0.0.1/api';

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-a7287a"], () => (__webpack_exec__("./assets/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLEVBQUM7RUFBVixTQU5KLGVBT0k7SUFBSSxLQUFLLEVBQUM7RUFBVixTQVBKLENBREosQ0FGSixlQWFJLDJFQUNLQSxNQUFNLElBQUksU0FBVixHQUNHRCxJQUFJLENBQUNpTyxRQUFMLENBQWMzSyxHQUFkLENBQWtCLFVBQUNrSixJQUFELEVBQU8wQixLQUFQO0lBQUEsb0JBQ2QsNERBQUMsK0RBQUQ7TUFDQSxHQUFHLEVBQUUvTCxFQUFFLEdBQUMsR0FBSCxHQUFPK0wsS0FEWjtNQUVBLFFBQVEsRUFBSTFCLElBRlo7TUFHQSxTQUFTLEVBQUVqRCxTQUhYO01BSUEsWUFBWSxFQUFFRDtJQUpkLEVBRGM7RUFBQSxDQUFsQixDQURILGdCQVNJLHFGQUFJLGtGQUFKLENBVlQsQ0FiSixDQURKLENBRkosZUErQkk7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDSSw0REFBQywrREFBRDtJQUFNLEdBQUcsRUFBR25ILEVBQVo7SUFBZ0IsU0FBUyxFQUFFb0g7RUFBM0IsRUFESixDQS9CSixDQURKLGVBcUNJLDREQUFDLG9FQUFELE9BckNKLENBREo7QUF5Q0gsQ0F0REQ7O0FBd0RBLGlFQUFlbEssS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7O0FBRUEsSUFBTUQsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtFQUNqQixvQkFDSSx1SUFDSTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNJO0lBQUksU0FBUyxFQUFDO0VBQWQsWUFESixDQURKLENBREo7QUFPSCxDQVJEOztBQVVBLGlFQUFlQSxNQUFmOzs7Ozs7Ozs7Ozs7QUNaQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvaG9tZXBhZ2UvQm94LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hvbWVwYWdlL0Rpc2NsYWltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvaG9zdE9wdGlvbnMvT3B0aW9uc1BhbmVsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL215QWN0aXZpdGllcy9NZW1iZXJPcHRpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL215QWN0aXZpdGllcy9QYXJ0eUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbXlBY3Rpdml0aWVzL1BhcnR5TGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9uYXYvTmF2QmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL25hdi9OYXZJdGVtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnR5L0RheS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0eS9Gb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnR5L1BhcnR5SW5mby5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0eS9TdWJtaXRUb2FzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0eS9XZWVrLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9nZXREYXRhL2dldERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL0NyZWF0ZVBhcnR5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9Ib21lcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvSG9zdE9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL0xvZ291dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvTXlBY3Rpdml0aWVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9QYXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvUmVhZG1lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zdHlsZXMvYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3R5bGVzL2NhbGVuZGFyLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3R5bGVzL2dhbWUuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvanMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9qcy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xyXG4vLyBpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGVzLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcclxuaW1wb3J0IExvZ291dCBmcm9tIFwiLi9wYWdlcy9Mb2dvdXRcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi9wYWdlcy9MYXlvdXRcIjtcclxuaW1wb3J0IEhvbWVwYWdlIGZyb20gXCIuL3BhZ2VzL0hvbWVwYWdlXCI7XHJcbmltcG9ydCBSZWFkbWUgZnJvbSBcIi4vcGFnZXMvUmVhZG1lXCI7XHJcbmltcG9ydCBQYXJ0eSBmcm9tIFwiLi9wYWdlcy9QYXJ0eVwiO1xyXG5pbXBvcnQgTXlBY3Rpdml0aWVzIGZyb20gXCIuL3BhZ2VzL015QWN0aXZpdGllc1wiO1xyXG5pbXBvcnQgSG9zdE9wdGlvbnMgZnJvbSBcIi4vcGFnZXMvSG9zdE9wdGlvbnNcIjtcclxuaW1wb3J0IGdldERhdGEgZnJvbSAnLi9nZXREYXRhL2dldERhdGEnO1xyXG5cclxuLy8gaW1wb3J0IHtTdHJpY3RNb2RlfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XHJcbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyLCB1c2VRdWVyeSB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XHJcbmltcG9ydCBMb2dpbiBmcm9tICcuL3BhZ2VzL0xvZ2luJztcclxuaW1wb3J0IENyZWF0ZVBhcnR5IGZyb20gJy4vcGFnZXMvQ3JlYXRlUGFydHknO1xyXG5cclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiB7XHJcblxyXG5cclxuXHJcbiAgICAvLyBjb25zdCBjaGVja0lmTG9nZ2VkSW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc3Qgcm91dGUgPSAnL2FwaS9ob21lcGFnZS9uYXYnO1xyXG4gICAgLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocm91dGUpO1xyXG4gICAgLy8gICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgY29uc3QgdXNlclJvdXRlID0gJy9ob21lcGFnZS9uYXYnO1xyXG4gICAgXHJcbiAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gdXNlUXVlcnkoWyd1c2VyJ10sICgpID0+IGdldERhdGEodXNlclJvdXRlKSk7XHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIC8vIFRPRE86IFVTVcWDXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLCBzdGF0dXMpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7c3RhdHVzID09IFwic3VjY2Vzc1wiID8gKFxyXG4gICAgICAgICAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgICAgICAgey8qIHVzZXIgOiB7ZGF0YS51c2VyfSAqL31cclxuICAgICAgICAgICAgICAgIDxSb3V0ZXM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PExheW91dCB1c2VyPXtkYXRhLnVzZXJ9Lz59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGluZGV4IGVsZW1lbnQ9ezxIb21lcGFnZSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwicmVhZG1lXCIgZWxlbWVudD17PFJlYWRtZSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwibXktYWN0aXZpdGllc1wiIGVsZW1lbnQ9ezxNeUFjdGl2aXRpZXMgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cInBhcnR5L3Nob3cvOmlkXCIgZWxlbWVudD17PFBhcnR5IC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJwYXJ0eS9vcHRpb25zLzppZFwiIGVsZW1lbnQ9ezxIb3N0T3B0aW9ucyAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwicGFydHkvY3JlYXRlXCIgZWxlbWVudD17PENyZWF0ZVBhcnR5IC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJsb2dvdXRcIiBlbGVtZW50PXs8TG9nb3V0IC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJsb2dpblwiIGVsZW1lbnQ9ezxMb2dpbiAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgICAgICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAnbG9hZGluZydcclxuICAgICAgICApIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgTWFpblBhZ2UgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KCk7XHJcblxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XHJcbiAgICAgICAgICAgICAgICA8TWFpbiAvPlxyXG4gICAgICAgICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XHJcbiAgICAgICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpblBhZ2U7XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xyXG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xyXG5yb290LnJlbmRlcihcclxuICAgIDxNYWluUGFnZSAgLz5cclxuKTtcclxuXHJcblxyXG5cclxuXHJcbiIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuIFxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMvY2FsZW5kYXIuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlcy9nYW1lLmNzcyc7XHJcblxyXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XHJcbiBcclxucmVxdWlyZSgnLi9NYWluJyk7XHJcblxyXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNvbnN0IEJveCA9ICh7Y29udGVudH0pID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBwYXJ0eS1oZWFkZXIgcHQtMSBwYi0xIGJnLWdyYWRpZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb250ZW50LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYmctbGlnaHQgYmctZ3JhZGllbnQgcHQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2NvbnRlbnQuaWNvbn0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYmctbGlnaHQgcC0yIGJvcmRlciBmdy1saWdodCB0ZXh0LWNlbnRlciB0ZXh0LW1kIGJnLWdyYWRpZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb250ZW50LnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJveCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBEaXNjbGFpbWVyID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtYXV0byBwLTAnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJsZWFkIG1iLTFcIj5EaXNjbGFpbWVyISEhPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPlRvIGplc3QgTVZQIC0gbWluaW11bSB2aWFibGUgcHJvZHVjdDwvYj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcGthIHBvd2lubmEgZHppYcWCYcSHIGkgbW/FvGVteSBqZWogdcW8ecSHIGRvIG9yZ2FuaXphY2ppIG5hc3p5Y2ggZ2llci5cclxuICAgICAgICAgICAgICAgICAgICAgICAgWmFwZXduZSBpc3RuaWVqxIUgaW5uZSBpIGxlcHN6ZSBuYXJ6xJlkemlhIGRvIGN6ZWdvxZsgdGFraWVnbywgYWxlIGRsYSBtbmllIGplc3QgdG8gemFnYWRuaWVuaWUgbmEga3TDs3J5bSBzacSZIHVjesSZLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdzenlzdGtvIGplc3QgdyBqxJl6eWt1IGFuZ2llbHNraW0sIGJvIHJvYmnEmSB0byBzb2JpZSB3IHJhbWFjaCBwcm9qZWt0dSBkbyBwb3J0Zm9saW8uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQsSZZMSZIGdvIHJvemJ1ZG93YXl3YcWCIHogY3phc2VtLCBuYSByYXppZSBtYSBwb2RzdGF3b3dlIGZ1bmtjamUgaSBieWxlIGpha2kgZnJvbnRlbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlzY2xhaW1lciIsImltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0ZSwgdXNlTmF2aWdhdGUsIHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgZ2V0RGF0YSBmcm9tICcuLi8uLi9nZXREYXRhL2dldERhdGEnO1xyXG5pbXBvcnQgT3ZlcmxheVRyaWdnZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL092ZXJsYXlUcmlnZ2VyJztcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Rvb2x0aXAnO1xyXG5pbXBvcnQgU3VibWl0VG9hc3QgZnJvbSAnLi4vcGFydHkvU3VibWl0VG9hc3QnO1xyXG5cclxuY29uc3QgT3B0aW9uUGFuZWwgPSAoKSA9PiB7IFxyXG5cclxuICAgIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcclxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRQbGF5ZXIsIHNldEN1cnJlbnRQbGF5ZXJdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtuZXdIb3N0SWQsIHNldE5ld0hvc3RJZF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW2FjdGl2ZVBsYXllcnMsIHNldEFjdGl2ZVBsYXllcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2luYWN0aXZlUGxheWVycywgc2V0SW5hY3RpdmVQbGF5ZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtwbGF5ZXJTdGF0dXMsIHNldFBsYXllclN0YXR1c10gPSB1c2VTdGF0ZSgnSW5hY3RpdmUnKTtcclxuICAgIFxyXG4gICAgY29uc3QgZ2FtZURhdGFSb3V0ZSA9IGAvZ2FtZS1kYXRhLyR7aWR9YDtcclxuICAgIGNvbnN0IHsgZGF0YTogZ2FtZSwgc3RhdHVzOiBnYW1lU3RhdHVzIH0gPSB1c2VRdWVyeSh7XHJcbiAgICAgICAgcXVlcnlLZXk6IFsnZ2FtZURhdGEnXSwgXHJcbiAgICAgICAgcXVlcnlGbjogKCkgPT4gZ2V0RGF0YShnYW1lRGF0YVJvdXRlKSxcclxuICAgICAgICBvblN1Y2Nlc3M6IChkYXRhKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRQbGF5ZXIgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQbGF5ZXIoZGF0YS5wYXJ0eUluZm8uaG9zdCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBhY3RpdmUgPSBbXTtcclxuICAgICAgICAgICAgZGF0YS5wYXJ0eUluZm8uYWN0aXZlTWVtYmVycy5tYXAoKHBsYXllcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlLnB1c2gocGxheWVyLmlkKVxyXG4gICAgICAgICAgICApKVxyXG5cclxuICAgICAgICAgICAgbGV0IGluYWN0aXZlID0gW107XHJcbiAgICAgICAgICAgIGRhdGEucGFydHlJbmZvLmluYWN0aXZlTWVtYmVycy5tYXAoKHBsYXllcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgaW5hY3RpdmUucHVzaChwbGF5ZXIuaWQpXHJcbiAgICAgICAgICAgICkpXHJcblxyXG4gICAgICAgICAgICBpZiAoYWN0aXZlLmZpbmQodmFsdWUgPT4gdmFsdWUgPT0gY3VycmVudFBsYXllcikpIHtcclxuICAgICAgICAgICAgICAgIHNldFBsYXllclN0YXR1cygnSW5hY3RpdmUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFBsYXllclN0YXR1cygnQWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0QWN0aXZlUGxheWVycyhhY3RpdmUpO1xyXG4gICAgICAgICAgICBzZXRJbmFjdGl2ZVBsYXllcnMoaW5hY3RpdmUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc3RhdHVzTXV0YXRpb24gPSB1c2VNdXRhdGlvbih7XHJcbiAgICAgICAgbXV0YXRpb25GbjogKCkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSAgZmV0Y2goYC9hcGkvZ2FtZS9jaGFuZ2UtdXNlci1zdGF0dXMvJHtpZH0vJHtjdXJyZW50UGxheWVyfWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoWydnYW1lRGF0YSddKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgLy8gY29uc3QgcmVtb3ZlTWVtYmVyID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIGlmIChjb25maXJtKCdUaGlzIG1lbWJlciB3aWxsIGJlIHJlbW92ZSBwZXJtYW5lbnRseS4gRG8geW91IHdhbnQgb3QgcHJvY2VlZD8nKSkge1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gcmVtb3ZlTWVtYmVyTXV0YXRpb24ubXV0YXRlO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVNZW1iZXJNdXRhdGlvbiA9IHVzZU11dGF0aW9uKHtcclxuICAgICAgICBtdXRhdGlvbkZuOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9ICBmZXRjaChgL2FwaS9nYW1lL3JlbW92ZS1tZW1iZXIvJHtpZH0vJHtjdXJyZW50UGxheWVyfWAsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbJ2dhbWVEYXRhJ10pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgY29uc3QgcHJvbW9Ub0hvc3RNdXRhdGlvbiA9IHVzZU11dGF0aW9uKHtcclxuICAgICAgICBtdXRhdGlvbkZuOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gIGZldGNoKGAvYXBpL2dhbWUvcHJvbW90ZS10by1ob3N0LyR7aWR9LyR7bmV3SG9zdElkfWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBwcm9tb1RvSG9zdE11dGF0aW9uLnN0YXR1cyA9ICdpZGxlJztcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFsnZ2FtZURhdGEnXSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGxvY2tNdXRhdGlvbiA9IHVzZU11dGF0aW9uKHtcclxuICAgICAgICBtdXRhdGlvbkZuOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gIGZldGNoKGAvYXBpL2dhbWUvY2hhbmdlLWxvY2stc3RhdHVzLyR7aWR9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbJ2dhbWVEYXRhJ10pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBkZWxldGVNdXRhdGlvbiA9IHVzZU11dGF0aW9uKHtcclxuICAgICAgICBtdXRhdGlvbkZuOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gIGZldGNoKGAvYXBpL2dhbWUvZGVsZXRlLXBhcnR5LyR7aWR9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiB7ICAgICAgICBcclxuICAgICAgICAgICAgLy8gcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoWydwYXJ0eS1saXN0J10pO1xyXG4gICAgICAgICAgICBuYXZpZ2F0ZSgnL215LWFjdGl2aXRpZXMnKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBjb25zdCBnZXRQbGF5ZXJTdGF0dXMgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBsYXllcklkID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0Q3VycmVudFBsYXllcihwbGF5ZXJJZCk7XHJcbiAgICAgICAgY29uc3QgaXNBY3RpdmUgID0gYWN0aXZlUGxheWVycy5maW5kKHZhbHVlID0+IHZhbHVlID09IHBsYXllcklkKTtcclxuICAgICAgICBjb25zdCBpc0luYWN0aXZlID0gaW5hY3RpdmVQbGF5ZXJzLmZpbmQodmFsdWUgPT4gdmFsdWUgPT0gcGxheWVySWQpO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXJJZCAsaXNBY3RpdmUsIGlzSW5hY3RpdmUpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgaXNBY3RpdmUgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgc2V0UGxheWVyU3RhdHVzKCdJbmFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBpc0luYWN0aXZlICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHNldFBsYXllclN0YXR1cygnQWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRldGVybWluZU5ld0hvc3QgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBsYXllcklkID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgc2V0TmV3SG9zdElkKHBsYXllcklkKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKCduZXcgaG9zdCAnICsgbmV3SG9zdElkKVxyXG4gICAgLy8gY29uc29sZS5sb2coJ2hvc3QgbXV0YXRpb24gc3RhdHVzdCAnICsgcHJvbW9Ub0hvc3RNdXRhdGlvbi5zdGF0dXMpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIHtnYW1lU3RhdHVzID09ICdzdWNjZXNzJyA/IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJnLWxpZ2h0IGZvcm0tcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBwYXJ0eS1oZWFkZXIgYmctZGFyayBiZy1ncmFkaWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPUFRJT05TXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogTUFOQUdFIE1FTUJFUlMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTEgYm9yZGVyLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvLTYgcC0wIGxlYWQgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hbmFnZSBtZW1iZXJzIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17eyBzaG93OiAyNTAsIGhpZGU6IDQwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGlkPVwib3B0aW9ucy10b29sdGlwXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmFjdGl2ZSBwbGF5ZXJzIGRvZXNuJ3QgdGFrZSBwYXJ0IGluIHZvdGluZyBwcm9jZXNzLCBidXQgdGhleSBjYW4gc3RpbGwgb3BlbiBwYXJ0eSBwYW5lbC4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlbW92ZWQgcGxheWVycyBjYW4ndCByZWpvaW4gbG9ja2VkIHBhcnRpZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1yZWd1bGFyIGZhLWNpcmNsZS1xdWVzdGlvbiBvcHRpb24taW5mb1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTYgcC0wICc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGxheWVycy1saXN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwbGF5ZXJTdGF0dXMgPT0gJ0FjdGl2ZScgPyBcIiBmb3JtLXNlbGVjdCBpbmFjdGl2ZS1tZW1iZXItb3B0aW9uXCIgOiBcImZvcm0tc2VsZWN0IGFjdGl2ZS1tZW1iZXItb3B0aW9uXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjdXJyZW50UGxheWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Z2V0UGxheWVyU3RhdHVzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnYW1lLnBhcnR5SW5mby5hY3RpdmVNZW1iZXJzLm1hcCgocGxheWVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3BsYXllci5pZH0gY2xhc3NOYW1lPVwiYWN0aXZlLW1lbWJlci1vcHRpb25cIiB2YWx1ZT17cGxheWVyLmlkfT4ge3BsYXllci5uYW1lfSA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2FtZS5wYXJ0eUluZm8uaW5hY3RpdmVNZW1iZXJzLm1hcCgocGxheWVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3BsYXllci5pZH0gY2xhc3NOYW1lPVwiaW5hY3RpdmUtbWVtYmVyLW9wdGlvblwiIHZhbHVlPXtwbGF5ZXIuaWR9PntwbGF5ZXIubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tZGFyayBmdWxsLXdpZHRoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzdGF0dXNNdXRhdGlvbi5tdXRhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFrZSB7cGxheWVyU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYW5nZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlbW92ZU1lbWJlck11dGF0aW9uLm11dGF0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZW1vdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zIGJvcmRlci1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGxlYWQgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnYW1lLnBhcnR5SW5mby5zdGF0dXMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnVW5sb2NrIHBhcnR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0xvY2sgcGFydHknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXt7IHNob3c6IDI1MCwgaGlkZTogNDAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBpZD1cIm9wdGlvbnMtdG9vbHRpcFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvIGludml0ZSBuZXcgbWVtYmVycyBwYXJ0eSBoYXMgdG8gYmUgdW5sb2NrZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtcmVndWxhciBmYS1jaXJjbGUtcXVlc3Rpb24gb3B0aW9uLWluZm9cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dhbWUucGFydHlJbmZvLnN0YXR1cyA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYXJrIGZ1bGwtd2lkdGgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtsb2NrTXV0YXRpb24ubXV0YXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVbmxvY2sgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtbG9jay1vcGVuIGxvY2staWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tZGFyayBmdWxsLXdpZHRoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bG9ja011dGF0aW9uLm11dGF0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9jayA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1sb2NrIGxvY2staWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMyBib3JkZXItYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgbGVhZCBwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlIHBhcnR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17eyBzaG93OiAyNTAsIGhpZGU6IDQwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9eyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgaWQ9XCJvcHRpb25zLXRvb2x0aXBcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5UaGlzIGlzIGlycmV2ZXJzaWJsZSE8L2I+IEFmdGVyIGRlbGV0aW5nIHBhcnR5IGFsbCBkYXRhIHdpbGwgYmUgbG9zdCFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtcmVndWxhciBmYS1jaXJjbGUtcXVlc3Rpb24gb3B0aW9uLWluZm9cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWRhbmdlciBmdWxsLXdpZHRoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtkZWxldGVNdXRhdGlvbi5tdXRhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcC0wIGxlYWQgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb21vdGUgdG8gaG9zdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17eyBzaG93OiAyNTAsIGhpZGU6IDQwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGlkPVwib3B0aW9ucy10b29sdGlwXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZnRlciBwcm9tb3Rpbmcgb3RoZXIgbWVtYmVyIHlvdSB3aWxsIGJlY29tZSBub3JtYWwgbWVtYmVyIG9mIHRoZSBncm91cCBhbmQgbG9zZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzIHRvIG9wdGlvbiBwYW5lbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1yZWd1bGFyIGZhLWNpcmNsZS1xdWVzdGlvbiBvcHRpb24taW5mb1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNiBwLTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCIgaWQ9XCJwbGF5ZXJzLWxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZGV0ZXJtaW5lTmV3SG9zdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dhbWUucGFydHlJbmZvLmFjdGl2ZU1lbWJlcnMubWFwKChwbGF5ZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17cGxheWVyLmlkfSBjbGFzc05hbWU9XCJhY3RpdmUtbWVtYmVyLW9wdGlvblwiIHZhbHVlPXtwbGF5ZXIuaWR9ID57cGxheWVyLm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnYW1lLnBhcnR5SW5mby5pbmFjdGl2ZU1lbWJlcnMubWFwKChwbGF5ZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17cGxheWVyLmlkfSBjbGFzc05hbWU9XCJpbmFjdGl2ZS1tZW1iZXItb3B0aW9uXCIgdmFsdWU9e3BsYXllci5pZH0gPntwbGF5ZXIubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYXJrIGZ1bGwtd2lkdGgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb21vVG9Ib3N0TXV0YXRpb24ubXV0YXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb21vdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDogJyd9XHJcblxyXG4gICAgICAgICAgICB7c3RhdHVzTXV0YXRpb24uaXNTdWNjZXNzID8gXHJcbiAgICAgICAgICAgICggIFxyXG4gICAgICAgICAgICAgICAgPFN1Ym1pdFRvYXN0IHR5cGU9J3N1Y2Nlc3MnIG1lc3NhZ2U9J01lbWJlcnMgc3RhdHVzIGhhcyBiZWVuIGNoYW5nZWQnLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAge2xvY2tNdXRhdGlvbi5pc1N1Y2Nlc3MgPyBcclxuICAgICAgICAgICAgKCAgXHJcbiAgICAgICAgICAgICAgICA8U3VibWl0VG9hc3QgdHlwZT0nc3VjY2VzcycgbWVzc2FnZT0nUGFydHkgc3RhdHVzIGhhcyBiZWVuIGNoYW5nZWQnLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAge3Byb21vVG9Ib3N0TXV0YXRpb24uaXNTdWNjZXNzICA/IFxyXG4gICAgICAgICAgICAgICAgPFN1Ym1pdFRvYXN0IHR5cGU9J3N1Y2Nlc3MnIG1lc3NhZ2U9J0hvc3QgaGFzIGJlbiBjaGFuZ2VkJy8+XHJcbiAgICAgICAgICAgIDogICBcclxuICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAge3JlbW92ZU1lbWJlck11dGF0aW9uLmlzU3VjY2VzcyA/IFxyXG4gICAgICAgICAgICAgICAgPFN1Ym1pdFRvYXN0IHR5cGU9J3N1Y2Nlc3MnIG1lc3NhZ2U9J01lbWJlciBoYXMgYmVlbiByZW1vdmVkJy8+XHJcbiAgICAgICAgICAgIDogICBcclxuICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcHRpb25QYW5lbDsiLCJpbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xyXG5cclxuZnVuY3Rpb24gTWVtYmVyT3B0aW9ucyh7c2hvd01lbWJlck9wdGlvbnMsIGhhbmRsZUNsb3NlTWVtYmVyT3B0LCBwYXJ0eUlkLCBhY3RpdmVNZW1iZXJ9KSB7XHJcblxyXG4gIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcclxuXHJcbiAgY29uc3QgaW5hY3RpdmVNdXRhdGlvbiA9IHVzZU11dGF0aW9uKHtcclxuICAgIG11dGF0aW9uRm46IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSAgZmV0Y2goJy9hcGkvZ2FtZS9tYWtlLW1lLWluYWN0aXZlLycrIHBhcnR5SWQsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IHRydWUsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9LFxyXG4gICAgb25TdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoWydwYXJ0eS1saXN0J10pO1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGxlYXZlUGFydHllTXV0YXRpb24gPSB1c2VNdXRhdGlvbih7XHJcbiAgICBtdXRhdGlvbkZuOiAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gIGZldGNoKCcvYXBpL2dhbWUvbGVhdmUvJysgcGFydHlJZCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogdHJ1ZSxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9LFxyXG4gICAgb25TdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoWydwYXJ0eS1saXN0J10pO1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1vZGFsIHNob3c9e3Nob3dNZW1iZXJPcHRpb25zfSBvbkhpZGU9e2hhbmRsZUNsb3NlTWVtYmVyT3B0fT5cclxuICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgPE1vZGFsLlRpdGxlPlBhcnR5IE9wdGlvbnMgZm9yIHtwYXJ0eUlkfTwvTW9kYWwuVGl0bGU+PHNtYWxsPiA8L3NtYWxsPlxyXG4gICAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICAgIDxNb2RhbC5Cb2R5PlxyXG4gICAgICAgICAge2FjdGl2ZU1lbWJlciA/IFxyXG4gICAgICAgICAgKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiIGhyZWY9XCIjbWFrZU1lSW5hY3RpdmVcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cIm1ha2VNZUluYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBNYWtlIG1lIGluYWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZVwiIGlkPVwibWFrZU1lSW5hY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEluYWN0aXZlIHVzZXJzIGNhbid0IHZvdGUgIDxiPiBPbmx5IGEgcGFydHkgY3JlYXRvciBjYW4gY2hhbmdlIHlvdXIgc3RhdHVzIHRvIGFjdGl2ZTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIG10LTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtpbmFjdGl2ZU11dGF0aW9uLm11dGF0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvY2VlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogJyd9XHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgZHJvcGRvd24tdG9nZ2xlIG10LTJcIiBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCIgaHJlZj1cIiNsZWF2ZUdhbWVcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cImxlYXZlR2FtZVwiPlxyXG4gICAgICAgICAgICAgICAgICBMZWF2ZSBwYXJ0eVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2VcIiBpZD1cImxlYXZlR2FtZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgQWZ0ZXIgeW91IGxlYXZlIHBhcnR5LCB5b3Ugd291bGQgbm90IGJlIGFibGUgdG8gb3BlbiBnYW1lIHBhbmVsLiA8Yj5Zb3UgY2FuJ3QgcmVqb2luIHBhcnR5IGlmIGl0J3MgbG9ja2VkPC9iPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBtdC0yXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17bGVhdmVQYXJ0eWVNdXRhdGlvbi5tdXRhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIFByb2NlZWRcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG5cclxuXHJcbiAgICAgICAgICB7LyogPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17aGFuZGxlQ2xvc2VNZW1iZXJPcHR9PlxyXG4gICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlQ2xvc2VNZW1iZXJPcHR9PlxyXG4gICAgICAgICAgICBTYXZlIFxyXG4gICAgICAgICAgPC9CdXR0b24+ICovfVxyXG4gICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVtYmVyT3B0aW9uczsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgYXN5bmMgfSBmcm9tICdyZWdlbmVyYXRvci1ydW50aW1lJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBPdmVybGF5VHJpZ2dlciBmcm9tICdyZWFjdC1ib290c3RyYXAvT3ZlcmxheVRyaWdnZXInO1xyXG5pbXBvcnQgVG9vbHRpcCBmcm9tICdyZWFjdC1ib290c3RyYXAvVG9vbHRpcCc7XHJcbmltcG9ydCBNZW1iZXJPcHRpb25zIGZyb20gJy4vTWVtYmVyT3B0aW9ucydcclxuXHJcblxyXG5jb25zdCBQYXJ0eUl0ZW0gPSAoe2FjdGl2aXR5LCB1c2VyRGF0YX0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbc2hvd01lbWJlck9wdGlvbnMsIHNldFNob3dNZW1iZXJPcHRpb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZU1lbWJlck9wdCA9ICgpID0+IHNldFNob3dNZW1iZXJPcHRpb25zKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZVNob3dNZW1iZXJPcHQgPSAoKSA9PiBzZXRTaG93TWVtYmVyT3B0aW9ucyh0cnVlKTtcclxuXHJcblxyXG4gICAgY29uc3QgaG9zdE9wdGlvbnNSb3V0ZSA9ICcvcGFydHkvb3B0aW9ucy8nICsgYWN0aXZpdHkuaWQ7XHJcbiAgICBjb25zdCBwYXJ0eVJvdXRlID0gJy9wYXJ0eS9zaG93LycgKyBhY3Rpdml0eS5pZDtcclxuICAgIGNvbnN0IGludml0YXRpb25hbExpbmsgPSAnL2dhbWUvaW52aXRlLycgKyBhY3Rpdml0eS5zbHVnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvcHlJbnZpTGluayA9ICgpID0+IHtcclxuICAgICAgICAgICAgLy8gSFRUUFxyXG4gICAgICAgICAgICBsZXQgdGV4dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxyXG4gICAgICAgICAgICB0ZXh0RmllbGQuaW5uZXJUZXh0ID0gaW52aXRhdGlvbmFsTGlua1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRGaWVsZClcclxuICAgICAgICAgICAgdGV4dEZpZWxkLnNlbGVjdCgpXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5JylcclxuICAgICAgICAgICAgdGV4dEZpZWxkLnJlbW92ZSgpXHJcbiAgICAgICAgICAgIGFsZXJ0KGludml0YXRpb25hbExpbmspO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8dHI+ICBcclxuICAgICAgICAgICAgICAgICAgICA8dGQgIGNsYXNzTmFtZT1cImdhbWUtdGFibGUgaG9zdCBiZy1saWdodCBwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2aXR5Lmhvc3RlZCA9PSB1c2VyRGF0YSA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXt7IHNob3c6IDI1MCwgaGlkZTogNDAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5PXsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgaWQ9XCJob3N0LXRvb2x0aXBcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBhcmUgaG9zdCBvZiB0aGlzIHBhcnR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2hvc3RPcHRpb25zUm91dGV9IGNsYXNzTmFtZT1cIm9wdGlvbnMtbGlua1wiID4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtdXNlci1nZWFyIGluZm8taWNvblwiPiA8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXt7IHNob3c6IDI1MCwgaGlkZTogNDAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5PXsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgaWQ9XCJvcHRpb25zLXRvb2x0aXBcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBpZD1cInt7Z2FtZS5pZH19XCIgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtZ2VhcnMgaW5mby1pY29uXCIgb25DbGljaz17aGFuZGxlU2hvd01lbWJlck9wdH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlIGJnLWxpZ2h0XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZpdHkubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlIGJnLWxpZ2h0IGhvc3QgcC0wXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXt7IHNob3c6IDI1MCwgaGlkZTogNDAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5PXsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgaWQ9XCJvcHRpb25zLXRvb2x0aXBcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpdml0eS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1jaXJjbGUtaW5mbyBpbmZvLWljb25cIiA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImdhbWUtdGFibGUgYmctbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2aXR5LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImdhbWUtdGFibGUgYmctbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YWN0aXZpdHkuYWN0aXZlTWVtYmVyc30ve2FjdGl2aXR5LnBsYXllcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZ2FtZS10YWJsZSBiZy1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogUEFSVFkgU1RBVFVTICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZpdHkubG9ja2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXlUcmlnZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17eyBzaG93OiAyNTAsIGhpZGU6IDQwMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGlkPVwib3B0aW9ucy10b29sdGlwXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIHBhcnR5IGlzIGxvY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtbG9jayBpbmZvLWljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9e3sgc2hvdzogMjUwLCBoaWRlOiA0MDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9eyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBpZD1cIm9wdGlvbnMtdG9vbHRpcFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29weSBpbnZpdGF0aW9uYWwgbGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtbGluayBpbmZvLWljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NvcHlJbnZpTGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpdml0eS5pc0FjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9e3sgc2hvdzogMjUwLCBoaWRlOiA0MDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9eyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBpZD1cIm9wdGlvbnMtdG9vbHRpcFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IGFyZSBBQ1RJVkUgbWVtYmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1wZXJzb24tcnVubmluZyBzdGF0dXMtc3BhY2VyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXt7IHNob3c6IDI1MCwgaGlkZTogNDAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5PXsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgaWQ9XCJvcHRpb25zLXRvb2x0aXBcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBhcmUgSU5BQ1RJVkUgbWVtYmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1iZWQgc3RhdHVzLXNwYWNlclwiID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZ2FtZS10YWJsZSBiZy1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21taW5nIHNvb24uLi5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlIGJnLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtwYXJ0eVJvdXRlfSBjbGFzc05hbWU9XCJ0ZXh0LWRhcmsgdGV4dC1ib2xkXCIgPiBzaG93IDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxhIGNsYXNzTmFtZT1cInRleHQtZGFyayB0ZXh0LWJvbGRcIiBocmVmPXtwYXJ0eVJvdXRlfT5TaG93PC9hPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuXHJcbiAgICAgICAgICAgICAgICA8TWVtYmVyT3B0aW9ucyBcclxuICAgICAgICAgICAgICAgIHNob3dNZW1iZXJPcHRpb25zID0ge3Nob3dNZW1iZXJPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2VNZW1iZXJPcHQgPSB7aGFuZGxlQ2xvc2VNZW1iZXJPcHR9XHJcbiAgICAgICAgICAgICAgICBwYXJ0eUlkID0ge2FjdGl2aXR5LmlkfSBcclxuICAgICAgICAgICAgICAgIGFjdGl2ZU1lbWJlciA9IHthY3Rpdml0eS5pc0FjdGl2ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKSAgICAgICAgICBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcnR5SXRlbSIsImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE92ZXJsYXlUcmlnZ2VyLCBUb29sdGlwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IFBhcnR5SXRlbSBmcm9tICcuL1BhcnR5SXRlbSc7XHJcblxyXG5jb25zdCBQYXJ0eUxpc3QgPSAoe3VzZXJEYXRhfSkgPT4ge1xyXG5cclxuICAgIC8vIGNvbnN0IFthY3Rpdml0eUxpc3QsIHNldEFjdGl2aXR5TGlzdF0gPSB1c2VRdWVyeShbJ3BhcnR5LWxpc3QnXSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHsgZGF0YTogYWN0aXZpdHlMaXN0LCBzdGF0dXM6IGFjdGl2aXR5TGlzdFN0YXR1cyB9ID0gdXNlUXVlcnkoe1xyXG4gICAgICAgIHF1ZXJ5S2V5OiBbJ3BhcnR5LWxpc3QnXSwgXHJcbiAgICAgICAgcXVlcnlGbjogKCkgPT4gZ2V0QWN0aXZpdHlMaXN0KCksXHJcbiAgICAgICAgcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLFxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vIGNvbnN0IFthY3Rpdml0eUxpc3QsIHNldEFjdGl2aXR5TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgZ2V0QWN0aXZpdHlMaXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvdXRlID0gJy9hcGkvbXktYWN0aXZpdGllcyc7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtyb3V0ZX1gKTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfVxyXG5cclxuICAgICAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHBhcnR5LWxpc3QgYmctZGFyayBiZy1ncmFkaWVudFwiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImdhbWUtdGFibGUtaGVhZGVyIGhvc3QgYmctZGFyayBiZy1ncmFkaWVudFwiIHNjb3BlPVwiY29sXCI+PC90aD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlLWhlYWRlciBiZy1kYXJrIGJnLWdyYWRpZW50XCIgc2NvcGU9XCJjb2xcIj5QYXJ0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlLWhlYWRlciBob3N0IGJnLWRhcmsgYmctZ3JhZGllbnRcIiBzY29wZT1cImNvbFwiPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlLWhlYWRlciBiZy1kYXJrIGJnLWdyYWRpZW50XCIgc2NvcGU9XCJjb2xcIj5BY3Rpdml0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlLWhlYWRlciBiZy1kYXJrIGJnLWdyYWRpZW50XCIgc2NvcGU9XCJjb2xcIj5BY3RpdmUvQWxsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3ZlcmxheVRyaWdnZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXt7IHNob3c6IDI1MCwgaGlkZTogNDAwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5PXsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgaWQ9XCJvcHRpb25zLXRvb2x0aXBcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjdGl2ZSBtZW1iZXJzIGhhdmUgcmlnaHQgdG8gdm90ZS4gQWxsIG1lbWJlcnMgY2FuIHNlZSBwYXJ0eSBwYW5lbC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXJlZ3VsYXIgZmEtY2lyY2xlLXF1ZXN0aW9uIG9wdGlvbi1pbmZvXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImdhbWUtdGFibGUtaGVhZGVyIGJnLWRhcmsgYmctZ3JhZGllbnRcIiBzY29wZT1cImNvbFwiPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJnYW1lLXRhYmxlLWhlYWRlciBiZy1kYXJrIGJnLWdyYWRpZW50XCIgc2NvcGU9XCJjb2xcIj5OZXh0IHNlc3Npb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZ2FtZS10YWJsZS1oZWFkZXIgYmctZGFyayBiZy1ncmFkaWVudFwiIHNjb3BlPVwiY29sXCI+TGluazwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge2FjdGl2aXR5TGlzdFN0YXR1cyA9PSBcInN1Y2Nlc3NcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZpdHlMaXN0LmFjdGl2aXR5VGFibGUubWFwKChhY3Rpdml0eSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcnR5SXRlbSBrZXk9e2FjdGl2aXR5LmlkfSBhY3Rpdml0eT17YWN0aXZpdHl9IHVzZXJEYXRhPXt1c2VyRGF0YX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgICkgICAgICAgICAgXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXJ0eUxpc3QiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdkl0ZW0gZnJvbSAnLi9OYXZJdGVtJztcclxuXHJcblxyXG5jb25zdCBOYXZiYXIgPSAoe3VzZXJEYXRhfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IG5hdkl0ZW0xID0ge1xyXG4gICAgICAgICduYW1lJzogJ0hvbWUnLFxyXG4gICAgICAgICdyb3V0ZSc6ICcvJyxcclxuICAgICAgICAndHlwZSc6ICdvcGVuJyxcclxuICAgICAgICAnYWN0aXZlJzogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbmF2SXRlbTIgPSB7XHJcbiAgICAgICAgJ25hbWUnOiAnTXkgQWN0aXZpdGllcycsXHJcbiAgICAgICAgJ3JvdXRlJzogJy9teS1hY3Rpdml0aWVzJyxcclxuICAgICAgICAndHlwZSc6ICdsb2dnZWRJbicsXHJcbiAgICAgICAgJ2FjdGl2ZSc6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG5hdkl0ZW0zID0ge1xyXG4gICAgICAgICduYW1lJzogJ1JlYWRNZScsXHJcbiAgICAgICAgJ3JvdXRlJzogJy9yZWFkbWUnLFxyXG4gICAgICAgICd0eXBlJzogJ29wZW4nLFxyXG4gICAgICAgICdhY3RpdmUnOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBuYXZJdGVtNCA9IHtcclxuICAgICAgICAnbmFtZSc6ICcrJyxcclxuICAgICAgICAncm91dGUnOiAnL3BhcnR5L2NyZWF0ZScsXHJcbiAgICAgICAgJ3R5cGUnOiAnc3BlY2lhbCcsXHJcbiAgICAgICAgJ2FjdGl2ZSc6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG5hdkl0ZW01ID0ge1xyXG4gICAgICAgICduYW1lJzogJ0xvZ291dCcsXHJcbiAgICAgICAgJ3JvdXRlJzogJy9sb2dvdXQnLFxyXG4gICAgICAgICd0eXBlJzogJ2xvZ2dlZEluJyxcclxuICAgICAgICAnYWN0aXZlJzogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbmF2SXRlbTYgPSB7XHJcbiAgICAgICAgJ25hbWUnOiAnTG9naW4nLFxyXG4gICAgICAgICdyb3V0ZSc6ICcvbG9naW4nLFxyXG4gICAgICAgICd0eXBlJzogJ2xvZ2dlZE91dCcsXHJcbiAgICAgICAgJ2FjdGl2ZSc6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG5hdkl0ZW03ID0ge1xyXG4gICAgICAgICduYW1lJzogJ1JlZ2lzdGVyJyxcclxuICAgICAgICAncm91dGUnOiAnL3JlZ2lzdGVyJyxcclxuICAgICAgICAndHlwZSc6ICdsb2dnZWRPdXQnLFxyXG4gICAgICAgICdhY3RpdmUnOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhbGxOYXZiYXJJdGVtcyA9IFtuYXZJdGVtMSwgbmF2SXRlbTIsIG5hdkl0ZW0zLCBuYXZJdGVtNCwgXHJcbiAgICAgICAgLy8gbmF2SXRlbTUsIFxyXG4gICAgICAgIG5hdkl0ZW02LCBuYXZJdGVtN107XHJcblxyXG4gICAgLy8gY29uc3QgW3VzZXIsc2V0VXNlcl0gPSB1c2VTdGF0ZSh1c2VyRGF0YSk7XHJcbiAgICBjb25zdCBbbmF2YmFyLHNldE5hdmJhcl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIm5hdiB1c2VyOiBcIix1c2VyRGF0YSk7XHJcbiAgICBjb25zdCBjcmVhdGVOYXZiYXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmF2YmFyQ29udGVudCA9IFtdO1xyXG4gICAgICAgIGFsbE5hdmJhckl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyRGF0YSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS50eXBlID09ICdsb2dnZWRPdXQnIHx8IGl0ZW0udHlwZSA9PSAnb3BlbicgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2YmFyQ29udGVudC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBpdGVtLnR5cGUgPT0gJ2xvZ2dlZEluJyB8fCBpdGVtLnR5cGUgPT0gJ3NwZWNpYWwnIHx8IGl0ZW0udHlwZSA9PSAnb3BlbicgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2YmFyQ29udGVudC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0TmF2YmFyKG5hdmJhckNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY3JlYXRlTmF2YmFyKCk7XHJcbiAgICB9LFt1c2VyRGF0YV0pO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgey8qIG5hdmJhciB1c2VyID0ge3VzZXJEYXRhfTsgKi99XHJcbiAgICAgICAgICAgIHsvKiBQQUdFIFRJVExFICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyB0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZGlzcGxheS0xIHVuaXZlcnNhbC1zaGFkb3ctdGV4dCc+SEFSTU9OPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm91bmRlZC13cmFwcGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZGFyayBiZy1kYXJrIGJnLWdyYWRpZW50IG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogQ09MQVBTRSBCVVRUT04gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS1icy10YXJnZXQ9XCIjbmF2YmFyTmF2XCIgYXJpYS1jb250cm9scz1cIm5hdmJhck5hdlwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBOQVYgSVRFTVMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2UganVzdGlmeS1jb250ZW50LWNlbnRlclwiIGlkPVwibmF2YmFyTmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG0tMCBhbGlnbi1taWRkbGVcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmF2YmFyLm1hcCgobmF2SXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIGtleT17bmF2SXRlbS5uYW1lfSBpdGVtPXtuYXZJdGVtfSB1c2VyPXt1c2VyRGF0YX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdXNlckRhdGEgIT09IG51bGwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvbG9nb3V0XCJjbGFzc05hbWU9XCJuYXYtbGluayBmcy00IG5hdi1tZW51LWl0ZW1cIj4gTG9nb3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogJyd9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25hdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE91dGxldCwgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jb25zdCBOYXZJdGVtID0gKHtpdGVtLCB1c2VyfSkgPT4ge1xyXG5cclxuICAgIC8vIGNvbnN0IGNsYXNzTmFtZXMgPSBcIm5hdi1saW5rIGZzLTQgbmF2LW1lbnUtaXRlbVwiO1xyXG5cclxuICAgIGlmIChpdGVtLnR5cGUgPT0gJ3NwZWNpYWwnKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtpdGVtLnJvdXRlfSBjbGFzc05hbWU9XCJuYXYtbGluayBmcy00IG5hdi1tZW51LWl0ZW0gXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWUgPSBcImJvcmRlciBib3JkZXItMiByb3VuZGVkIHNxdWFyZS1idXR0b25cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1wbHVzIFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgICAgICAgICAgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2l0ZW0ucm91dGV9IGNsYXNzTmFtZT1cIm5hdi1saW5rIGZzLTQgbmF2LW1lbnUtaXRlbSBcIiA+IHtpdGVtLm5hbWV9IDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZJdGVtIiwiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBnZXREYXRhIGZyb20gJy4uLy4uL2dldERhdGEvZ2V0RGF0YSc7XHJcblxyXG5jb25zdCBEYXkgPSAoe2RheURhdGEsIHNldEFjdGl2ZURheSwgYWN0aXZlRGF5fSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gICAgY29uc3QgZGF0ZVN0cmluZyA9IGRheURhdGEuZGF0ZS5zdWJzdHJpbmcoMCwxMCk7XHJcbiAgICBjb25zdCBxdWVyeUtleSA9IGAke2lkfS0ke2RhdGVTdHJpbmd9YDtcclxuICAgIGNvbnN0IGRheVJvdXRlID0gYC9kYXkvJHtpZH0vJHtkYXRlU3RyaW5nfWA7XHJcbiAgICBcclxuICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSB1c2VRdWVyeSh7XHJcbiAgICAgICAgcXVlcnlLZXk6IFtxdWVyeUtleV0sIFxyXG4gICAgICAgIHF1ZXJ5Rm46ICgpID0+IGdldERhdGEoZGF5Um91dGUpLFxyXG4gICAgICAgIHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgLy8gY29uc3QgZ2V0RGF5RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhkYXRlU3RyaW5nKTtcclxuICAgIC8vICAgICBjb25zdCByb3V0ZSA9ICdodHRwOi8vMTI3LjAuMC4xL2FwaS9kYXkvJysgaWQgKycvJysgZGF0ZVN0cmluZyA7XHJcbiAgICAvLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyb3V0ZSk7XHJcbiAgICAvLyAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBjb25zdCBwaWNrRGF0ZSA9IChkYXkpID0+IHtcclxuICAgICAgICBzZXRBY3RpdmVEYXkoZGF5KTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT0gJ3N1Y2Nlc3MnICYmIHR5cGVvZiBhY3RpdmVEYXkgIT09ICd1bmRlZmluZWQnICAmJiBpc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLmRheUluZm8pO1xyXG4gICAgICAgICAgICBwaWNrRGF0ZShkYXRhLmRheUluZm8pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxbZGF0YV0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhY3RpdmVEYXkgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBhY3RpdmVEYXkuZGF0ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgYWN0aXZlRGF5LmRhdGUgPT0gZGF5RGF0YS5kYXRlKSB7XHJcbiAgICAgICAgICAgIHNldElzQWN0aXZlKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldElzQWN0aXZlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFthY3RpdmVEYXldKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYWN0aXZlRGF5ID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZGF0YSAhPT0gJ3VuZGVmaW5lZCcgJiYgZGF5RGF0YS50b2RheSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncGljaycpO1xyXG4gICAgICAgICAgICBzZXRBY3RpdmVEYXkoZGF0YS5kYXlJbmZvKTtcclxuICAgICAgICB9XHJcbiAgICB9LFtzdGF0dXNdKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIHtzdGF0dXMgPT0nc3VjY2VzcycgPyAoXHJcbiAgICAgICAgICAvL3N1Y2Nlc3MgXHJcbiAgICAgICAgICA8dGQgXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2lzQWN0aXZlID8gZGF0YS5kYXlJbmZvLnN0YXR1cyArIFwiIHAtMCAgcGlja2VkLWRhdGVcIiA6ICBkYXRhLmRheUluZm8uc3RhdHVzICsgXCIgcC0wXCIgfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcGlja0RhdGUoZGF0YS5kYXlJbmZvKX0+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXItZGF5XCIgPiAgICAgXHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhLmRheUluZm8ubnVtYmVyfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICB7LyogQUREIFRPT0xUSVAhISEhISEhISEgKi99XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAge2RhdGEuZGF5SW5mby5zdGF0dXMgPT0gXCJDQU5DRUxFRFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXJzLWxlZnQtdG8tdm90ZVwiID48aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS14bWFya1wiPjwvaT48L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICB7LyogQUREIFRPT0xUSVAhISEhISEhISEgKi99XHJcbiAgICAgICAgICAgICAge2RhdGEuZGF5SW5mby5zdGF0dXMgPT0gXCJWT1RFRFwiID8gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllcnMtbGVmdC10by12b3RlXCI+PGkgY2xhc3NOYW1lPVwiZmEtc2hhcnAgZmEtc29saWQgZmEtYXJyb3dzLXJvdGF0ZVwiPntkYXRhLmRheUluZm8ucmVtYWluaW5nVm90ZXJzfTwvaT48L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgeyFkYXRhLmRheUluZm8ucGxheWVyU3RhdHVzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllcnMtdm90ZS1zdGF0dXNcIj48aSBjbGFzc05hbWU9XCJmYS1zaGFycCBmYS1zb2xpZCBmYS1leGNsYW1hdGlvblwiPjwvaT48L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgKSA6ICcnfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICB7ZGF0YS5kYXlJbmZvLnN0YXR1cyA9PSBcIk1JU1NFRFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAvLyA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWJhblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllcnMtbGVmdC10by12b3RlXCI+PGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtYmFuXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICB7ZGF0YS5kYXlJbmZvLnN0YXR1cyA9PSBcIkdBTUVEQVlcIiA/IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXJzLWxlZnQtdG8tdm90ZVwiPjxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWNoZWNrXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8dGQ+ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXItZGF5XCIgPiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge2RheURhdGEubnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgKX1cclxuICAgICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXlcclxuXHJcblxyXG4iLCJpbXBvcnQgeyBRdWVyeUNsaWVudCwgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcclxuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xyXG5pbXBvcnQgU3VibWl0VG9hc3QgZnJvbSAnLi9TdWJtaXRUb2FzdCc7XHJcbmltcG9ydCBnZXREYXRhIGZyb20gJy4uLy4uL2dldERhdGEvZ2V0RGF0YSc7XHJcblxyXG5jb25zdCBGb3JtID0gKHthY3RpdmVEYXl9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gICAgY29uc3QgW2RheSxzZXREYXldID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFttb250aCxzZXRNb250aF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3llYXIsIHNldFllYXJdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICBjb25zdCBbdm90ZVN0YXR1cywgc2V0Vm90ZVN0YXR1c10gPSB1c2VTdGF0ZSgxKTtcclxuXHJcblxyXG4gICAgY29uc3Qgdm90ZVJvdXRlID0gYC9nZXQtdm90ZXMvJHtpZH0vJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xyXG4gICAgY29uc3Qgdm90ZUtleSA9IGAke2lkfS0ke3llYXJ9LSR7bW9udGh9LSR7ZGF5fS12b3Rlc2A7XHJcblxyXG4gICAgXHJcbiAgICAvLyBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gdXNlUXVlcnkoe1xyXG4gICAgLy8gICAgIHF1ZXJ5S2V5OiBbdm90ZUtleV0sIFxyXG4gICAgLy8gICAgIHF1ZXJ5Rm46ICgpID0+IGdldERhdGEodm90ZVJvdXRlKSxcclxuICAgIC8vICAgICByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXHJcbiAgICAvLyB9KTtcclxuXHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHVzZVF1ZXJ5KHtcclxuICAgICAgICBxdWVyeUtleTogW3ZvdGVLZXldLCBcclxuICAgICAgICBxdWVyeUZuOiAoKSA9PiBnZXREYXRhKHZvdGVSb3V0ZSksXHJcbiAgICAgICAgcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzdGF0dXMpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhY3RpdmVEYXkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0ZWREYXRlID0gYWN0aXZlRGF5LmRhdGUuc3Vic3RyaW5nKDAsMTApLnNwbGl0KCctJyk7XHJcbiAgICAgICAgICAgIHNldERheShwYXJzZUludChzcGxpdGVkRGF0ZVsyXSkpO1xyXG4gICAgICAgICAgICBzZXRNb250aChwYXJzZUludChzcGxpdGVkRGF0ZVsxXSkpO1xyXG4gICAgICAgICAgICBzZXRZZWFyKHNwbGl0ZWREYXRlWzBdKTtcclxuICAgICAgICB9XHJcbiAgICB9LFthY3RpdmVEYXldKTtcclxuICAgXHJcbiAgICBjb25zdCBjaGVja1ZvdGVTdGF0dXMgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRWb3RlU3RhdHVzKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YU11dGF0aW9uID0gdXNlTXV0YXRpb24oe1xyXG4gICAgICAgIG11dGF0aW9uRm46IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldClcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSAgZmV0Y2goYC9hcGkvc2VuZC12b3RlLyR7aWR9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtgJHtpZH0tYCthY3RpdmVEYXkuZGF0ZS5zdWJzdHJpbmcoMCwxMCldKTtcclxuICAgICAgICAgICAgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW3ZvdGVLZXldKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgZGVsZXRlVm90ZU11dGF0aW9uID0gdXNlTXV0YXRpb24oe1xyXG4gICAgICAgIG11dGF0aW9uRm46IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpZCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldClcclxuICAgICAgICAgICAgY29uc3Qgdm90ZUlkID0gZXZlbnQudGFyZ2V0LmlkO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbmZpcm0oJ1RoaXMgdm90ZSB3aWxsIGJlIGRlbGV0ZWQgcGVybWFuZW50bHkhIERheSBzdGF0dXMgbWF5IGJlIGNoYW5nZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSAgZmV0Y2goJy9hcGkvdm90ZS9kZWxldGUvJysgdm90ZUlkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gIGZhbHNlO1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIFRPRE86IFxyXG4gICAgICAgIG9uU3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbdm90ZUtleV0pXHJcbiAgICAgICAgICAgIHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtpZCsnLScrYWN0aXZlRGF5LmRhdGUuc3Vic3RyaW5nKDAsMTApXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGctM1wiPlxyXG4gICAgICAgICAgICAgICAgey8qIEZPUk0gKi99XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBiZy1saWdodCBmb3JtLXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgcGFydHktaGVhZGVyIGJnLWRhcmsgYmctZ3JhZGllbnQgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBMQUNFIFlPVVIgVk9URVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG5hbWU9XCJ2b3RlXCIgbWV0aG9kPVwicG9zdFwiIG9uU3VibWl0PXtkYXRhTXV0YXRpb24ubXV0YXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGN1c3RvbS1mb3JtLXJvdyBwdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMyBjdXN0b20tZm9ybS1sYWJlbCBcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT1cIlwiPjwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXR1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9e3ZvdGVTdGF0dXMgPT0gMCA/IFwiZm9ybS1zZWxlY3QtbGcgYmctcmVkIFwiIDogXCJmb3JtLXNlbGVjdC1sZyBiZy1ncmVlblwiIH0gb25DaGFuZ2U9e2NoZWNrVm90ZVN0YXR1c30gaWQ9XCJ2b3RlX3ZvdGVcIiBuYW1lPVwidm90ZVt2b3RlXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gY2xhc3NOYW1lPVwiYmctZ3JlZW5cIiB2YWx1ZT1cIjFcIiA+SSdtIGluPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBjbGFzc05hbWU9XCJiZy1yZWRcIiB2YWx1ZT1cIjBcIiA+SSdtIG91dDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGhpZGRlbi1kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMyBjdXN0b20tZm9ybS1sYWJlbFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdFwiIGlkPVwidm90ZV9kYXRlX21vbnRoXCIgbmFtZT1cInZvdGVbZGF0ZV1bbW9udGhdXCIgcmVhZE9ubHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZCB2YWx1ZT17bW9udGh9Pjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCIgaWQ9XCJ2b3RlX2RhdGVfZGF5XCIgbmFtZT1cInZvdGVbZGF0ZV1bZGF5XVwiIHJlYWRPbmx5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9e2RheX0+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIiBpZD1cInZvdGVfZGF0ZV95ZWFyXCIgbmFtZT1cInZvdGVbZGF0ZV1beWVhcl1cIiByZWFkT25seT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPXt5ZWFyfT48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTMgY3VzdG9tLWZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMyBjdXN0b20tZm9ybS1sYWJlbCBcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS10aW1lLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3QtbGcgIHRpbWUtc2VsZWN0XCIgaWQ9XCJ2b3RlX3N0YXJ0VGltZV9ob3VyXCIgbmFtZT1cInZvdGVbc3RhcnRUaW1lXVtob3VyXVwiPjxvcHRpb24gdmFsdWU9XCIwXCI+MDA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMVwiPjAxPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjJcIj4wMjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzXCI+MDM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNFwiPjA0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjVcIj4wNTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI2XCI+MDY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiN1wiPjA3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjhcIj4wODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI5XCI+MDk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTBcIj4xMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxMVwiPjExPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjEyXCI+MTI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTNcIj4xMzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxNFwiPjE0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE1XCI+MTU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTZcIj4xNjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxN1wiPjE3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE4XCI+MTg8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTlcIj4xOTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyMFwiPjIwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIxXCI+MjE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjJcIj4yMjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyM1wiPjIzPC9vcHRpb24+PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tdGltZS1zZXBhcmF0b3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXRpbWUtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdC1sZyB0aW1lLXNlbGVjdFwiIGlkPVwidm90ZV9zdGFydFRpbWVfbWludXRlXCIgbmFtZT1cInZvdGVbc3RhcnRUaW1lXVttaW51dGVdXCI+PG9wdGlvbiB2YWx1ZT1cIjBcIj4wMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxXCI+MDE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMlwiPjAyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjNcIj4wMzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0XCI+MDQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNVwiPjA1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjZcIj4wNjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI3XCI+MDc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiOFwiPjA4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjlcIj4wOTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxMFwiPjEwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjExXCI+MTE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTJcIj4xMjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxM1wiPjEzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE0XCI+MTQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTVcIj4xNTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxNlwiPjE2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE3XCI+MTc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMThcIj4xODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxOVwiPjE5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIwXCI+MjA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjFcIj4yMTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyMlwiPjIyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIzXCI+MjM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjRcIj4yNDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyNVwiPjI1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI2XCI+MjY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjdcIj4yNzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyOFwiPjI4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI5XCI+Mjk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzBcIj4zMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzMVwiPjMxPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjMyXCI+MzI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzNcIj4zMzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzNFwiPjM0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM1XCI+MzU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzZcIj4zNjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzN1wiPjM3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM4XCI+Mzg8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzlcIj4zOTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0MFwiPjQwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQxXCI+NDE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDJcIj40Mjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0M1wiPjQzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQ0XCI+NDQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDVcIj40NTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0NlwiPjQ2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQ3XCI+NDc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDhcIj40ODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0OVwiPjQ5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjUwXCI+NTA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTFcIj41MTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1MlwiPjUyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjUzXCI+NTM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTRcIj41NDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1NVwiPjU1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU2XCI+NTY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTdcIj41Nzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1OFwiPjU4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU5XCI+NTk8L29wdGlvbj48L3NlbGVjdD4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMyBjdXN0b20tZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zIGN1c3RvbS1mb3JtLWxhYmVsXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaW5pc2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXRpbWUtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3QtbGcgdGltZS1zZWxlY3RcIiBpZD1cInZvdGVfZmluaXNoVGltZV9ob3VyXCIgbmFtZT1cInZvdGVbZmluaXNoVGltZV1baG91cl1cIj48b3B0aW9uIHZhbHVlPVwiMFwiPjAwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjFcIj4wMTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyXCI+MDI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiM1wiPjAzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjRcIj4wNDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1XCI+MDU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNlwiPjA2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjdcIj4wNzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI4XCI+MDg8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiOVwiPjA5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjEwXCI+MTA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTFcIj4xMTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxMlwiPjEyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjEzXCI+MTM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTRcIj4xNDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxNVwiPjE1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE2XCI+MTY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTdcIj4xNzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxOFwiPjE4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE5XCI+MTk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjBcIj4yMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyMVwiPjIxPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIyXCI+MjI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjNcIj4yMzwvb3B0aW9uPjwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXRpbWUtc2VwYXJhdG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tdGltZS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdC1sZyB0aW1lLXNlbGVjdFwiIGlkPVwidm90ZV9maW5pc2hUaW1lX21pbnV0ZVwiIG5hbWU9XCJ2b3RlW2ZpbmlzaFRpbWVdW21pbnV0ZV1cIj48b3B0aW9uIHZhbHVlPVwiMFwiPjAwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjFcIj4wMTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyXCI+MDI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiM1wiPjAzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjRcIj4wNDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1XCI+MDU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNlwiPjA2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjdcIj4wNzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI4XCI+MDg8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiOVwiPjA5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjEwXCI+MTA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTFcIj4xMTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxMlwiPjEyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjEzXCI+MTM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTRcIj4xNDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxNVwiPjE1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE2XCI+MTY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMTdcIj4xNzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIxOFwiPjE4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjE5XCI+MTk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjBcIj4yMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyMVwiPjIxPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjIyXCI+MjI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjNcIj4yMzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyNFwiPjI0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI1XCI+MjU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjZcIj4yNjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyN1wiPjI3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjI4XCI+Mjg8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMjlcIj4yOTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzMFwiPjMwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjMxXCI+MzE8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzJcIj4zMjwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzM1wiPjMzPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM0XCI+MzQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzVcIj4zNTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzNlwiPjM2PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjM3XCI+Mzc8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiMzhcIj4zODwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIzOVwiPjM5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQwXCI+NDA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDFcIj40MTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0MlwiPjQyPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQzXCI+NDM8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDRcIj40NDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0NVwiPjQ1PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQ2XCI+NDY8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNDdcIj40Nzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI0OFwiPjQ4PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjQ5XCI+NDk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTBcIj41MDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1MVwiPjUxPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjUyXCI+NTI8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTNcIj41Mzwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1NFwiPjU0PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU1XCI+NTU8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTZcIj41Njwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCI1N1wiPjU3PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIjU4XCI+NTg8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiNTlcIj41OTwvb3B0aW9uPjwvc2VsZWN0PiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1kYXJrXCI+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtNiBhbmltYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIHsvKiBJTkZPUk1BVElPTiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBiZy1saWdodCBmb3JtLXBhbmVsIGFuaW1hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHBhcnR5LWhlYWRlciBiZy1kYXJrIGJnLWdyYWRpZW50IGFuaW1hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERBVEUgSU5GT1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRhdGUtZGlzcGxheSBib3JkZXItYm90dG9tICBwYi0zIFwiPjxiPntkYXl9LXttb250aH0te3llYXJ9PC9iPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmZvLWRpc3BsYXkgYm9yZGVyLWJvdHRvbSBwYi0zXCI+PGI+PHNwYW4gY2xhc3NOYW1lPVwiaW5mby1sYWJlbCBiZy13aGl0ZVwiPlZPVElORyBTVEFUVVM8L3NwYW4+PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlb2YgYWN0aXZlRGF5ICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIGFjdGl2ZURheS5zdGF0dXMgPT0gJ0NBTkNFTEVEJyA/ICgnU29tZSBtZW1iZXJzIGFyZSB1bmF2YWlsYWJsZScpIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGVvZiBhY3RpdmVEYXkgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgYWN0aXZlRGF5LnN0YXR1cyA9PSAnTUlTU0VEJyA/ICgnU2NoZWR1bGVzIG1pc3NlZCcpIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGVvZiBhY3RpdmVEYXkgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgYWN0aXZlRGF5LnN0YXR1cyA9PSAnVk9URUQnID8gKCdWb3RpbmcgaW4gcHJvZ3Jlc3MnKSA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlb2YgYWN0aXZlRGF5ICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIGFjdGl2ZURheS5zdGF0dXMgPT0gJ0VNUFRZJyA/ICgnTm9vbmUgdm90ZWQgeWV0JykgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZW9mIGFjdGl2ZURheSAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBhY3RpdmVEYXkuc3RhdHVzID09ICdHQU1FREFZJyA/ICgnU2NoZWR1bGVzIG1hdGNoZWQhJykgOiAnJ30gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluZm8tZGlzcGxheSBib3JkZXItYm90dG9tIHBiLTNcIj48Yj48c3BhbiBjbGFzc05hbWU9XCJpbmZvLWxhYmVsIGJnLXdoaXRlXCI+WU9VUiBTVEFUVVM8L3NwYW4+PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlb2YgYWN0aXZlRGF5ICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIGFjdGl2ZURheS5wbGF5ZXJTdGF0dXMgPyAnVm90ZWQnIDogXCJZb3UgZGlkbid0IHZvdGVcIn0gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluZm8tZGlzcGxheSBib3JkZXItYm90dG9tIHBiLTNcIj48Yj48c3BhbiBjbGFzc05hbWU9XCJpbmZvLWxhYmVsIGJnLXdoaXRlXCI+V0FJVElORyBGT1I8L3NwYW4+PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlb2YgYWN0aXZlRGF5ICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmICBhY3RpdmVEYXkucmVtYWluaW5nVm90ZXJzICE9PSAndW5kZWZpbmVkJyAgPyBhY3RpdmVEYXkucmVtYWluaW5nVm90ZXJzICsgJyBtZW1iZXIocyknIDogXCJcIn0gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGVvZiBhY3RpdmVEYXkgIT09ICd1bmRlZmluZWQnICYmIGFjdGl2ZURheS5zdGF0dXMgPT0gJ0dBTUVEQVknID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1kaXNwbGF5IGJvcmRlci1ib3R0b20gcGItM1wiPjxiPjxzcGFuIGNsYXNzTmFtZT1cImluZm8tbGFiZWwgYmctd2hpdGVcIj5IT1VSUzwvc3Bhbj48L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlb2YgYWN0aXZlRGF5ICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmICBhY3RpdmVEYXkuaG91cnMgIT09ICd1bmRlZmluZWQnICA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZURheS5ob3Vycy5tYXAoKHJhbmdlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3JhbmdlLnN0YXJ0LnN1YnN0cmluZygxMSwxNikrJyA8LT4gJyArcmFuZ2UuZmluaXNoLnN1YnN0cmluZygxMSwxNil9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogXCJcIn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAnJ31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIFZPVEVTICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGFibGUtY2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJnLWxpZ2h0IGZvcm0tcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBwYXJ0eS1oZWFkZXIgYmctZGFyayBiZy1ncmFkaWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlPVVIgVk9URVMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdHVzID09ICdzdWNjZXNzJyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudm90ZXMubWFwKChldmVudCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjdXN0b20tdm90ZS1kaXNwbGF5ICc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshZXZlbnQudm90ZVR5cGUgPyBcIkknbSBvdXRcIiA6IGV2ZW50LnN0YXJ0KyAnIC0gJyArIGV2ZW50LmZpbmlzaH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICBjbGFzc05hbWU9XCJ2b3RlLXRyYXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBpZD17ZXZlbnQuaWR9IGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLXRyYXNoLWNhblwiIG9uQ2xpY2s9e2RlbGV0ZVZvdGVNdXRhdGlvbi5tdXRhdGV9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICdMb2FkaW5nLi4uJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IHRhYmxlLWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBiZy1saWdodCBmb3JtLXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHBhcnR5LWhlYWRlciBiZy1kYXJrIGJnLWdyYWRpZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQUkVTRVRTXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbWluZyBzb29uLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICB7ZGF0YU11dGF0aW9uLmlzU3VjY2VzcyA/IFxyXG4gICAgICAgICAgICAoICBcclxuICAgICAgICAgICAgICAgIDxTdWJtaXRUb2FzdCB0eXBlPSdzdWNjZXNzJyBtZXNzYWdlPSdZb3VyIHZvdGUgaGFzIGJlZW4gc2VudCcvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICB7ZGVsZXRlVm90ZU11dGF0aW9uLmlzU3VjY2VzcyA/IFxyXG4gICAgICAgICAgICAoICBcclxuICAgICAgICAgICAgICAgIDxTdWJtaXRUb2FzdCB0eXBlPSdzdWNjZXNzJyBtZXNzYWdlPSdZb3VyIHZvdGUgaGFzIGJlZW4gZGVsZXRlZCcvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtOyIsIlxyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgZ2V0RGF0YSBmcm9tICcuLi8uLi9nZXREYXRhL2dldERhdGEnO1xyXG5cclxuY29uc3QgUGFydHlJbmZvID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gICAgXHJcbiAgICBjb25zdCBnYW1lRGF0YVJvdXRlID0gYC9nYW1lLWRhdGEvJHtpZH1gXHJcbiAgICBjb25zdCB7IGRhdGE6IGdhbWUsIHN0YXR1czogZ2FtZVN0YXR1cyB9ID0gdXNlUXVlcnkoe1xyXG4gICAgICAgIHF1ZXJ5S2V5OiBbJ2dhbWVEYXRhJ10sIFxyXG4gICAgICAgIHF1ZXJ5Rm46ICgpID0+IGdldERhdGEoZ2FtZURhdGFSb3V0ZSksXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHtnYW1lU3RhdHVzID09ICdzdWNjZXNzJyA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBiZy1saWdodCBmb3JtLXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBwYXJ0eS1oZWFkZXIgYmctZGFyayBiZy1ncmFkaWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUEFSVFkgSU5GT1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhcnR5LW5hbWUgYm9yZGVyLWJvdHRvbSBwdC0yIHBiLTNcIj48Yj48c3BhbiBjbGFzc05hbWU9XCJpbmZvLWxhYmVsIGJnLXdoaXRlXCI+UEFSVFkgTkFNRTwvc3Bhbj48L2I+IHtnYW1lLnBhcnR5SW5mby5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhcnR5LW5hbWUgIGJvcmRlci1ib3R0b20gcHQtMiBwYi0zXCI+PGI+PHNwYW4gY2xhc3NOYW1lPVwiaW5mby1sYWJlbCBiZy13aGl0ZVwiPkFDVElWSVRZPC9zcGFuPjwvYj4ge2dhbWUucGFydHlJbmZvLmFjdGl2aXR5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5mby1kaXNwbGF5IGJvcmRlci1ib3R0b20gIGxlYWQgcGItM1wiPjxiPjxzcGFuIGNsYXNzTmFtZT1cImluZm8tbGFiZWwgYmctd2hpdGVcIj5ERVNDUklQVElPTjwvc3Bhbj48L2I+IHtnYW1lLnBhcnR5SW5mby5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5mby1kaXNwbGF5IGJvcmRlci1ib3R0b20gcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+PHNwYW4gY2xhc3NOYW1lPVwiaW5mby1sYWJlbCBiZy13aGl0ZVwiPk1FTUJFUlM8L3NwYW4+PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dhbWUucGFydHlJbmZvLmFjdGl2ZU1lbWJlcnMubWFwKChwbGF5ZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e3BsYXllci5pZH0gY2xhc3NOYW1lPVwicGxheWVyLW5hbWVcIj48Yj57cGxheWVyLm5hbWV9PC9iPiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnYW1lLnBhcnR5SW5mby5pbmFjdGl2ZU1lbWJlcnMubWFwKChwbGF5ZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e3BsYXllci5pZH0gY2xhc3NOYW1lPVwicGxheWVyLW5hbWVcIj4ge3BsYXllci5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDogJyd9XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXJ0eUluZm87IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XHJcbmltcG9ydCBUb2FzdCBmcm9tICdyZWFjdC1ib290c3RyYXAvVG9hc3QnO1xyXG5cclxuXHJcbmNvbnN0IFN1Ym1pdFRvYXN0ID0gKHt0eXBlLCBtZXNzYWdlfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzaG93QSwgc2V0U2hvd0FdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlU2hvd0EgPSAoKSA9PiBzZXRTaG93QSghc2hvd0EpO1xyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXIgY2xhc3NOYW1lPSd0b2FzdGVkJyBjb250YWluZXJQb3NpdGlvbj0nYWJzb2x1dGUnIHBvc2l0aW9uPSdtaWRkbGUtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIDxUb2FzdCBiZz17dHlwZX0gc2hvdz17c2hvd0F9IG9uQ2xvc2U9e3RvZ2dsZVNob3dBfSBkZWxheT17MjAwMH0gYXV0b2hpZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvYXN0LkhlYWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwibWUtYXV0b1wiPnttZXNzYWdlfTwvc3Ryb25nPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L1RvYXN0LkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDwvVG9hc3Q+XHJcbiAgICAgICAgICAgIDwvVG9hc3RDb250YWluZXI+XHJcbiAgICBcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1Ym1pdFRvYXN0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBEYXkgZnJvbSAnLi9EYXknO1xyXG5jb25zdCBXZWVrID0gKHt3ZWVrRGF0YSwgYWN0aXZlRGF5LCBzZXRBY3RpdmVEYXl9KSA9PiB7XHJcblxyXG5cclxuICAgIGNvbnN0IFt3ZWVrLCBzZXRXZWVrXSA9ICB1c2VTdGF0ZSh3ZWVrRGF0YSk7XHJcbiAgICBjb25zdCBbZGF0YUxvYWRlZCwgc2V0RGF0YUxvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBcclxuICAgIGxldCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB3ZWVrRGF0YSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgc2V0RGF0YUxvYWRlZCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFt3ZWVrXSk7XHJcbiAgICBcclxuICAgIC8vIGNvbnNvbGUubG9nKGFjdGl2ZURheS5kYXRlKTtcclxuICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIHtkYXRhTG9hZGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIHdlZWsubWFwKChkYXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkKyctJytkYXkubW9udGhOdW1iZXIudG9TdHJpbmcoKSArXCItXCIrIGRheS5udW1iZXIudG9TdHJpbmcoKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlEYXRhID0ge2RheX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVEYXk9e2FjdGl2ZURheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZURheT17c2V0QWN0aXZlRGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgKX0gICBcclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2VlayIsIlxyXG5jb25zdCBkZWZhdWx0Um91dGUgPSAnaHR0cDovLzEyNy4wLjAuMS9hcGknO1xyXG5cclxuY29uc3QgZ2V0RGF0YSA9IGFzeW5jIChyb3V0ZSkgPT4ge1xyXG4gICAgY29uc3QgZGF0YVJvdXRlID0gZGVmYXVsdFJvdXRlICsgcm91dGU7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFSb3V0ZSk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXREYXRhOyIsImltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyaWVzLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5cclxuY29uc3QgQ3JlYXRlUGFydHkgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xyXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gICAgY29uc3QgY3JlYXRlR2FtZU11dGF0aW9uID0gdXNlTXV0YXRpb24oe1xyXG4gICAgICAgIG11dGF0aW9uRm46IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gIGZldGNoKCcvYXBpL2dhbWUvY3JlYXRlJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFsncGFydHktbGlzdCddKTtcclxuICAgICAgICAgICAgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoWydwYXJ0eS1saXN0J10pO1xyXG4gICAgICAgICAgICBuYXZpZ2F0ZSgnL215LWFjdGl2aXRpZXMnKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1BhcnR5IHdhcyBjcmVhdGVkIScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+ICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC05IGNvbC1hdXRvIGJnLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS02IHRleHQtY2VudGVyXCI+Q3JlYXRlIFBhcnR5PC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG5hbWU9XCJnYW1lXCIgbWV0aG9kPVwicG9zdFwiIG9uU3VibWl0PXtjcmVhdGVHYW1lTXV0YXRpb24ubXV0YXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJnYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ2FtZV9uYW1lXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlBhcnR5IG5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJnYW1lX25hbWVcIiBuYW1lPVwiZ2FtZVtuYW1lXVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJnYW1lX3RpdGxlXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkFjdGl2aXR5IG5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJnYW1lX3RpdGxlXCIgbmFtZT1cImdhbWVbdGl0bGVdXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdhbWVfZGVzY3JpcHRpb25cIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+RGVzY3JpcHJpb246PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiZ2FtZV9kZXNjcmlwdGlvblwiIG5hbWU9XCJnYW1lW2Rlc2NyaXB0aW9uXVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdhbWVfbWluU2Vzc2lvbkxlbmd0aFwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5NaW5pbWFsIHNlc3Npb24gbGVuZ3RoIChtaW51dGVzKTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImdhbWVfbWluU2Vzc2lvbkxlbmd0aFwiIG5hbWU9XCJnYW1lW21pblNlc3Npb25MZW5ndGhdXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaWQ9XCJnYW1lX1NhdmVcIiBuYW1lPVwiZ2FtZVtTYXZlXVwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBidG4tbGcgYnRuXCI+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW5wdXQgdHlwZT1cImhpZGRlblwiIGlkPVwiZ2FtZV9fdG9rZW5cIiBuYW1lPVwiZ2FtZVtfdG9rZW5dXCIgdmFsdWU9XCI1OGJkOC54TWFXN0ZybTdSdXkyRWljckxfVmFLTWdERXUwbWlRUk12UFFnNG1wT2pVLmhhblZxeC1ObmxtRTRBN0RtbzJoTXBOblpSam1xaGRjZTdLazZySGtiblNqOXFlZ0ZLS3NkdUdOQlFcIj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVBhcnR5OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQm94IGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZXBhZ2UvQm94JztcclxuaW1wb3J0IERpc2NsYWltZXIgZnJvbSAnLi4vY29tcG9uZW50cy9ob21lcGFnZS9EaXNjbGFpbWVyJztcclxuXHJcbmNvbnN0IEhvbWVwYWdlID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGJveDEgPSB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0NyZWF0ZSBwYXJ0eScsXHJcbiAgICAgICAgJ2ljb24nOiAnZmEtcmVndWxhciBmYS11c2Vycy1iZXR3ZWVuLWxpbmVzIGZhLTh4IG0tMyBtYi01JyxcclxuICAgICAgICAndGV4dCc6ICdNYWtlIGEgbmV3IHJlY291cmluZyBhY3Rpdml0eSB0byBtYW5hZ2UnXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJveDIgPSB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0FkZCBNZW1iZXJzJyxcclxuICAgICAgICAnaWNvbic6ICdmYS1yZWd1bGFyIGZhLXBlb3BsZS1wdWxsaW5nIGZhLTh4IG0tMyBtYi01JyxcclxuICAgICAgICAndGV4dCc6IFwiSW52aXRlIHlvdXIgZnJpZW5kc1wiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJveDMgPSB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0ZpbmQgZGF0ZScsXHJcbiAgICAgICAgJ2ljb24nOiAnZmEtcmVndWxhciBmYS1jYWxlbmRhci1jaGVjayBmYS04eCBtLTMgbWItNScsXHJcbiAgICAgICAgJ3RleHQnOiAnIFBsYWNlIHlvdXIgdm90ZXMgYW5kIGFwcCB3aWxsIGRvIHRoZSByZXN0J1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBib3hDb250ZW50ID0gW2JveDEsIGJveDIsIGJveDNdO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhsLTknPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXNjbGFpbWVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2Rpc3BsYXktNiB0ZXh0LWNlbnRlciB1bml2ZXJzYWwtc2hhZG93LXRleHQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXZWxjb21lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteGwtOSc+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdsZWFkJz5cclxuICAgICAgICAgICAgICAgICAgICBIQVJNT04gaXMgYW4gYXBwIHRoYXQgaGVscHMgdG8gZmluZCBtYXRjaGluZyBzY2hlZHVsZXMgaW4gcGFydHkgb2YgZmV3IHBlb3BlIGFycmFuZ2VkIGZvciByZWNjdXJpbmdcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpdml0aWVzIGxpa2Ugc3BvcnRzLCBib2FyZCBnYW1lcywgZGlnaXRhbCBnYW1lcyBvciBwb2tlci4gVGhlIG1ldGhvZG9sb2d5IGlzIHdycGFlZCBpbiAzIHNpcG1wbGUgcGludHMgYmVsb3dcclxuICAgICAgICAgICAgICAgICAgICBidXQgeW91IHdpbGwgZmluZCAgbW9yZSBpbiBkZXB0aCBpbnN0cnVjdHJpb25zIHVuZGVyIDxiPnRoaXMgbGluazwvYj4uIFlvdSBjYW4gYWxzbyBnZXQgZnVsbCBkb2N1bWVudGF0aW9uIG9uIG15IDxiPmdpdGh1YjwvYj5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhsLTkgJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgZy00Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JveENvbnRlbnQubWFwKChib3gpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3gga2V5PXtib3gudGl0bGV9IGNvbnRlbnQ9e2JveH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZTsiLCJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgT3B0aW9uUGFuZWwgZnJvbSAnLi4vY29tcG9uZW50cy9ob3N0T3B0aW9ucy9PcHRpb25zUGFuZWwnO1xyXG5pbXBvcnQgUGFydHlJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvcGFydHkvUGFydHlJbmZvJztcclxuXHJcbmNvbnN0IEhvc3RPcHRpb25zID0gKCkgPT4ge1xyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTQnPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZGlzcGxheS02IHRleHQtY2VudGVyIHVuaXZlcnNhbC1zaGFkb3ctdGV4dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgUGFydHkgaG9zdCBwYW5lbFxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteGwtNic+XHJcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvblBhbmVsIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14bC02Jz5cclxuICAgICAgICAgICAgICAgICAgICA8UGFydHlJbmZvIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb3N0T3B0aW9uczsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBPdXRsZXQsIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlTG9hZCBmcm9tICdyZWFjdC11c2UtbG9hZCc7XHJcbmltcG9ydCB7IHVzZUxvYWRTdGF0ZSwgTG9hZGluZyB9IGZyb20gJ3JlYWN0LXVzZS1sb2FkJztcclxuLy8gaW1wb3J0IHVzZUxvYWQgZnJvbSAncmVhY3QtdXNlLWxvYWQnO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2L05hdkJhcidcclxuXHJcbmNvbnN0IExheW91dCA9ICh7dXNlcn0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbdXNlcklkLHNldFVzZXJJZF0gPSB1c2VTdGF0ZSh1c2VyKTtcclxuICAgIFxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsvKiA8RGF0YUNvbXBvbmVudCAvPiAqL31cclxuICAgICAgICAgICAgey8qIFVzZXIgPSB7dXNlcn0gKi99XHJcbiAgICAgICAgICAgIDxOYXZCYXIgdXNlckRhdGE9e3VzZXJ9Lz5cclxuICAgICAgICAgICAgPE91dGxldCBjb250ZXh0PXtbdXNlcklkLHNldFVzZXJJZF19IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJpZXMsIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGxvZ2luTXV0YXRpb24gPSB1c2VNdXRhdGlvbih7XHJcbiAgICAgICAgbXV0YXRpb25GbjogKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGlkKTtcclxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KVxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9ICBmZXRjaCgnL2FwaS9sb2dpbicsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbJ3VzZXInXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdZQVkhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD4gIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC01XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNSBiZy1saWdodCBwYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTUgbWItNFwiPkxvZ2luPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvblN1Ym1pdD17bG9naW5NdXRhdGlvbi5tdXRhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q9XCJwb3N0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbCBtdC0zXCI+RW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIGlkPVwidXNlcm5hbWVcIiBuYW1lPVwiX3VzZXJuYW1lXCIgZGVmYXVsdFZhbHVlPVwiXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbCBtdC0zXCIgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgbmFtZT1cIl9wYXNzd29yZFwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgbXQtM1wiIHR5cGU9XCJzdWJtaXRcIj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZGlzcGxheS01Jz5Mb2dvdXQ8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nb3V0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUGFydHlMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbXlBY3Rpdml0aWVzL1BhcnR5TGlzdCc7XHJcbmltcG9ydCBCb3ggZnJvbSAnLi4vY29tcG9uZW50cy9ob21lcGFnZS9Cb3gnO1xyXG5pbXBvcnQgRGlzY2xhaW1lciBmcm9tICcuLi9jb21wb25lbnRzL2hvbWVwYWdlL0Rpc2NsYWltZXInO1xyXG5pbXBvcnQgeyB1c2VPdXRsZXRDb250ZXh0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IE15QWN0aXZpdGllcyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSAgdXNlT3V0bGV0Q29udGV4dCgpO1xyXG5cclxuICAgIGNvbnN0IGJveDEgPSB7XHJcbiAgICAgICAgJ3RpdGxlJzogJ0NyZWF0ZSBwYXJ0eScsXHJcbiAgICAgICAgJ2ljb24nOiAnZmEtcmVndWxhciBmYS11c2Vycy1iZXR3ZWVuLWxpbmVzIGZhLTh4IG0tMyBtYi01JyxcclxuICAgICAgICAndGV4dCc6ICdNYWtlIGEgbmV3IHJlY291cmluZyBhY3Rpdml0eSB0byBtYW5hZ2UnXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvLyBjb25zdCBib3hDb250ZW50ID0gW2JveDEsIGJveDIsIGJveDNdO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIHsvKiBhY3RpIDoge3VzZXJ9ICovfVxyXG4gICAgICAgICAgICB7LyogdGl0bGUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC00Jz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2Rpc3BsYXktNiB0ZXh0LWNlbnRlciB1bml2ZXJzYWwtc2hhZG93LXRleHQnPlxyXG4gICAgICAgICAgICAgICAgICAgIExpc3Qgb2YgcGFydGllc1xyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogdGFibGUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC00Jz5cclxuICAgICAgICAgICAgICAgIDxQYXJ0eUxpc3QgdXNlckRhdGE9e3VzZXJ9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBY3Rpdml0aWVzOyIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBXZWVrIGZyb20gJy4uL2NvbXBvbmVudHMvcGFydHkvV2Vlayc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvcGFydHkvRm9ybSc7XHJcbmltcG9ydCBQYXJ0eUluZm8gZnJvbSAnLi4vY29tcG9uZW50cy9wYXJ0eS9QYXJ0eUluZm8nO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XHJcbmltcG9ydCBnZXREYXRhIGZyb20gJy4uL2dldERhdGEvZ2V0RGF0YSc7XHJcblxyXG5jb25zdCBQYXJ0eSA9ICgpID0+IHtcclxuXHJcbiAgICBsZXQgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZURheSwgc2V0QWN0aXZlRGF5XSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gICAgY29uc3QgY2FsZW5kYXJSb3V0ZSA9IGAvY2FsZW5kYXIvJHtpZH1gO1xyXG4gICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHVzZVF1ZXJ5KHtcclxuICAgICAgICBxdWVyeUtleTogWydjYWxlbmRhciddLCBcclxuICAgICAgICBxdWVyeUZuOiAoKSA9PiBnZXREYXRhKGNhbGVuZGFyUm91dGUpLFxyXG4gICAgICAgIHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogdGFibGUgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIGNhbGVuZGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjYXB0aW9uIGNsYXNzTmFtZT1cImJnLWRhcmsgYmctZ3JhZGllbnRcIiA+TU9OVEggRElTUExBWTwvY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPk1vbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+VHVlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5XZWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlRodTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+RnJpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5TYXQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlN1bjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdHVzID09ICdzdWNjZXNzJyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmNhbGVuZGFyLm1hcCgod2VlaywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdlZWsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWQrJy0nK2luZGV4fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Vla0RhdGEgPSB7d2Vla30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZURheT17YWN0aXZlRGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVEYXk9e3NldEFjdGl2ZURheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICg8dHI+PHRkPmxvYWRpbmc8L3RkPjwvdHI+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPiAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogRk9STSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBrZXkgPXtpZH0gYWN0aXZlRGF5PXthY3RpdmVEYXl9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxQYXJ0eUluZm8gLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFydHk7IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFJlYWRtZSA9ICgpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2Rpc3BsYXktNSc+UmVhZG1lPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWRtZTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIlJlYWN0IiwiY3JlYXRlUm9vdCIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIkxvZ291dCIsIkxheW91dCIsIkhvbWVwYWdlIiwiUmVhZG1lIiwiUGFydHkiLCJNeUFjdGl2aXRpZXMiLCJIb3N0T3B0aW9ucyIsImdldERhdGEiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJ1c2VRdWVyeSIsIkxvZ2luIiwiQ3JlYXRlUGFydHkiLCJNYWluIiwidXNlclJvdXRlIiwiZGF0YSIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiTWFpblBhZ2UiLCJxdWVyeUNsaWVudCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwicmVxdWlyZSIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJjb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJCb3giLCJjb250ZW50IiwidGl0bGUiLCJpY29uIiwidGV4dCIsIkRpc2NsYWltZXIiLCJ1c2VNdXRhdGlvbiIsInVzZVF1ZXJ5Q2xpZW50IiwiTmF2aWdhdGUiLCJ1c2VOYXZpZ2F0ZSIsInVzZVBhcmFtcyIsIk92ZXJsYXlUcmlnZ2VyIiwiVG9vbHRpcCIsIlN1Ym1pdFRvYXN0IiwiT3B0aW9uUGFuZWwiLCJuYXZpZ2F0ZSIsImlkIiwiY3VycmVudFBsYXllciIsInNldEN1cnJlbnRQbGF5ZXIiLCJuZXdIb3N0SWQiLCJzZXROZXdIb3N0SWQiLCJhY3RpdmVQbGF5ZXJzIiwic2V0QWN0aXZlUGxheWVycyIsImluYWN0aXZlUGxheWVycyIsInNldEluYWN0aXZlUGxheWVycyIsInBsYXllclN0YXR1cyIsInNldFBsYXllclN0YXR1cyIsImdhbWVEYXRhUm91dGUiLCJxdWVyeUtleSIsInF1ZXJ5Rm4iLCJvblN1Y2Nlc3MiLCJwYXJ0eUluZm8iLCJob3N0IiwiYWN0aXZlIiwiYWN0aXZlTWVtYmVycyIsIm1hcCIsInBsYXllciIsInB1c2giLCJpbmFjdGl2ZSIsImluYWN0aXZlTWVtYmVycyIsImZpbmQiLCJ2YWx1ZSIsImdhbWUiLCJnYW1lU3RhdHVzIiwic3RhdHVzTXV0YXRpb24iLCJtdXRhdGlvbkZuIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImludmFsaWRhdGVRdWVyaWVzIiwicmVtb3ZlTWVtYmVyTXV0YXRpb24iLCJwcm9tb1RvSG9zdE11dGF0aW9uIiwibG9ja011dGF0aW9uIiwiZGVsZXRlTXV0YXRpb24iLCJnZXRQbGF5ZXJTdGF0dXMiLCJlIiwicGxheWVySWQiLCJ0YXJnZXQiLCJpc0FjdGl2ZSIsImlzSW5hY3RpdmUiLCJkZXRlcm1pbmVOZXdIb3N0Iiwic2hvdyIsImhpZGUiLCJuYW1lIiwibXV0YXRlIiwiaXNTdWNjZXNzIiwiQnV0dG9uIiwiTW9kYWwiLCJNZW1iZXJPcHRpb25zIiwic2hvd01lbWJlck9wdGlvbnMiLCJoYW5kbGVDbG9zZU1lbWJlck9wdCIsInBhcnR5SWQiLCJhY3RpdmVNZW1iZXIiLCJpbmFjdGl2ZU11dGF0aW9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImJvZHkiLCJsZWF2ZVBhcnR5ZU11dGF0aW9uIiwiYXN5bmMiLCJMaW5rIiwiUGFydHlJdGVtIiwiYWN0aXZpdHkiLCJ1c2VyRGF0YSIsInNldFNob3dNZW1iZXJPcHRpb25zIiwiaGFuZGxlU2hvd01lbWJlck9wdCIsImhvc3RPcHRpb25zUm91dGUiLCJwYXJ0eVJvdXRlIiwiaW52aXRhdGlvbmFsTGluayIsInNsdWciLCJjb3B5SW52aUxpbmsiLCJ0ZXh0RmllbGQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsInJlbW92ZSIsImFsZXJ0IiwiaG9zdGVkIiwiZGVzY3JpcHRpb24iLCJwbGF5ZXJzIiwibG9ja2VkIiwiUGFydHlMaXN0IiwiZ2V0QWN0aXZpdHlMaXN0IiwicmVmZXRjaE9uV2luZG93Rm9jdXMiLCJhY3Rpdml0eUxpc3QiLCJhY3Rpdml0eUxpc3RTdGF0dXMiLCJyb3V0ZSIsImpzb24iLCJhY3Rpdml0eVRhYmxlIiwiTmF2SXRlbSIsIk5hdmJhciIsIm5hdkl0ZW0xIiwibmF2SXRlbTIiLCJuYXZJdGVtMyIsIm5hdkl0ZW00IiwibmF2SXRlbTUiLCJuYXZJdGVtNiIsIm5hdkl0ZW03IiwiYWxsTmF2YmFySXRlbXMiLCJuYXZiYXIiLCJzZXROYXZiYXIiLCJjcmVhdGVOYXZiYXIiLCJuYXZiYXJDb250ZW50IiwiZm9yRWFjaCIsIml0ZW0iLCJ0eXBlIiwibmF2SXRlbSIsIk91dGxldCIsIkRheSIsImRheURhdGEiLCJzZXRBY3RpdmVEYXkiLCJhY3RpdmVEYXkiLCJkYXRlU3RyaW5nIiwiZGF0ZSIsInN1YnN0cmluZyIsImRheVJvdXRlIiwic2V0SXNBY3RpdmUiLCJwaWNrRGF0ZSIsImRheSIsImRheUluZm8iLCJ0b2RheSIsIm51bWJlciIsInJlbWFpbmluZ1ZvdGVycyIsIkZvcm0iLCJzZXREYXkiLCJtb250aCIsInNldE1vbnRoIiwieWVhciIsInNldFllYXIiLCJ2b3RlU3RhdHVzIiwic2V0Vm90ZVN0YXR1cyIsInZvdGVSb3V0ZSIsInZvdGVLZXkiLCJzcGxpdGVkRGF0ZSIsInNwbGl0IiwicGFyc2VJbnQiLCJjaGVja1ZvdGVTdGF0dXMiLCJkYXRhTXV0YXRpb24iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZGVsZXRlVm90ZU11dGF0aW9uIiwidm90ZUlkIiwiY29uZmlybSIsImhvdXJzIiwicmFuZ2UiLCJzdGFydCIsImZpbmlzaCIsInZvdGVzIiwidm90ZVR5cGUiLCJQYXJ0eUluZm8iLCJUb2FzdENvbnRhaW5lciIsIkNvbCIsIlJvdyIsIlRvYXN0IiwibWVzc2FnZSIsInNob3dBIiwic2V0U2hvd0EiLCJ0b2dnbGVTaG93QSIsIldlZWsiLCJ3ZWVrRGF0YSIsIndlZWsiLCJzZXRXZWVrIiwiZGF0YUxvYWRlZCIsInNldERhdGFMb2FkZWQiLCJtb250aE51bWJlciIsInRvU3RyaW5nIiwiZGVmYXVsdFJvdXRlIiwiZGF0YVJvdXRlIiwidXNlUXVlcmllcyIsImNyZWF0ZUdhbWVNdXRhdGlvbiIsImJveDEiLCJib3gyIiwiYm94MyIsImJveENvbnRlbnQiLCJib3giLCJ1c2VMb2FkIiwidXNlTG9hZFN0YXRlIiwiTG9hZGluZyIsIk5hdkJhciIsInVzZXJJZCIsInNldFVzZXJJZCIsImxvZ2luTXV0YXRpb24iLCJ1c2VPdXRsZXRDb250ZXh0Iiwic2V0VXNlciIsImNhbGVuZGFyUm91dGUiLCJjYWxlbmRhciIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==