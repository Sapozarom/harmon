"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ "./assets/js/components/App.js");





var rootElement = document.getElementById('root');
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(rootElement);
root.render(
/*#__PURE__*/
// <StrictMode>
react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"], null) // </StrictMode>
);

/***/ }),

/***/ "./assets/js/components/App.js":
/*!*************************************!*\
  !*** ./assets/js/components/App.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
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
/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./TodoList */ "./assets/js/components/TodoList.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




 // import { set } from 'core-js/core/dict';

var LOCAL_STAORAGE_KEY = 'todoApp.todos';

function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      todos = _useState2[0],
      setTodos = _useState2[1];

  var todoNameRef = (0,react__WEBPACK_IMPORTED_MODULE_15__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(function () {
    var storedTodos = JSON.parse(localStorage.getItem(LOCAL_STAORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(function () {
    localStorage.setItem(LOCAL_STAORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    var newTodos = _toConsumableArray(todos);

    console.log(id);
    console.log(newTodos);
    var todo = newTodos.find(function (todo) {
      return todo.id === id;
    });
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  function handleAddToDo(e) {
    var name = todoNameRef.current.value;
    if (name === '') return;
    setTodos(function (prevTodos) {
      return [].concat(_toConsumableArray(prevTodos), [{
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_17__["default"])(),
        name: name,
        completed: false
      }]);
    });
  }

  function clearTodos() {
    var newTodos = todos.filter(function (todo) {
      return !todo.completed;
    });
    setTodos(newTodos);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement((react__WEBPACK_IMPORTED_MODULE_15___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement(_TodoList__WEBPACK_IMPORTED_MODULE_16__["default"], {
    todos: todos,
    toggleTodo: toggleTodo
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("input", {
    ref: todoNameRef,
    type: "text"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("button", {
    onClick: handleAddToDo
  }, "Add Todo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("button", {
    onClick: clearTodos
  }, "Clear list"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default().createElement("div", null, "0 left to do"));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./assets/js/components/Todo.js":
/*!**************************************!*\
  !*** ./assets/js/components/Todo.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Todo(_ref) {
  var todo = _ref.todo,
      toggleTodo = _ref.toggleTodo;

  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
    type: "checkbox",
    checked: todo.completed,
    onChange: handleTodoClick
  }), todo.name));
}

/***/ }),

/***/ "./assets/js/components/TodoList.js":
/*!******************************************!*\
  !*** ./assets/js/components/TodoList.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoList)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Todo */ "./assets/js/components/Todo.js");



function TodoList(_ref) {
  var todos = _ref.todos,
      toggleTodo = _ref.toggleTodo;
  return todos.map(function (todo) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Todo__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: todo.id,
      todo: todo,
      toggleTodo: toggleTodo
    });
  });
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-3ec5ad"], () => (__webpack_exec__("./assets/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBREE7QUFTSDs7QUFHTCxpRUFBZXhDLEdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFHZSxTQUFTMEMsSUFBVCxPQUFrQztFQUFBLElBQW5CWCxJQUFtQixRQUFuQkEsSUFBbUI7RUFBQSxJQUFiTCxVQUFhLFFBQWJBLFVBQWE7O0VBRTdDLFNBQVNpQixlQUFULEdBQTJCO0lBQ3ZCakIsVUFBVSxDQUFDSyxJQUFJLENBQUNKLEVBQU4sQ0FBVjtFQUNIOztFQUNILG9CQUNFLHFGQUNJLHVGQUNJO0lBQU8sSUFBSSxFQUFDLFVBQVo7SUFDQSxPQUFPLEVBQUVJLElBQUksQ0FBQ0UsU0FEZDtJQUVBLFFBQVEsRUFBRVU7RUFGVixFQURKLEVBS0laLElBQUksQ0FBQ0ssSUFMVCxDQURKLENBREY7QUFZRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkQ7QUFDQTtBQUdlLFNBQVN6QixRQUFULE9BQXlDO0VBQUEsSUFBckJLLEtBQXFCLFFBQXJCQSxLQUFxQjtFQUFBLElBQWRVLFVBQWMsUUFBZEEsVUFBYztFQUN0RCxPQUVNVixLQUFLLENBQUM0QixHQUFOLENBQVUsVUFBQWIsSUFBSSxFQUFJO0lBQ2Qsb0JBQU8sMkRBQUMsNkNBQUQ7TUFBTSxHQUFHLEVBQUVBLElBQUksQ0FBQ0osRUFBaEI7TUFBb0IsSUFBSSxFQUFJSSxJQUE1QjtNQUFrQyxVQUFVLEVBQUVMO0lBQTlDLEVBQVA7RUFDSCxDQUZELENBRk47QUFPRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RvZG8uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVG9kb0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xyXG5pbXBvcnQge1N0cmljdE1vZGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcclxuXHJcbmNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcclxuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3Qocm9vdEVsZW1lbnQpO1xyXG5cclxucm9vdC5yZW5kZXIoXHJcbiAgICAoXHJcbiAgICAgICAgLy8gPFN0cmljdE1vZGU+XHJcbiAgICAgICAgICAgIDxBcHAgLz5cclxuICAgICAgICAvLyA8L1N0cmljdE1vZGU+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbik7XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4vVG9kb0xpc3QnXHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgeyBmdW5jIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcbi8vIGltcG9ydCB7IHNldCB9IGZyb20gJ2NvcmUtanMvY29yZS9kaWN0JztcclxuXHJcbmNvbnN0IExPQ0FMX1NUQU9SQUdFX0tFWSA9ICd0b2RvQXBwLnRvZG9zJ1xyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9ICB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCB0b2RvTmFtZVJlZiA9IHVzZVJlZigpO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICAgICAgY29uc3Qgc3RvcmVkVG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUQU9SQUdFX0tFWSkpO1xyXG4gICAgICAgIGlmIChzdG9yZWRUb2Rvcykgc2V0VG9kb3Moc3RvcmVkVG9kb3MpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfU1RBT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpXHJcbiAgICB9LCBbdG9kb3NdKVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZVRvZG8oaWQpIHtcclxuICAgICAgICBjb25zdCBuZXdUb2RvcyA9Wy4uLnRvZG9zXVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1RvZG9zKVxyXG5cclxuICAgICAgICBjb25zdCB0b2RvID0gbmV3VG9kb3MuZmluZCh0b2RvID0+IHRvZG8uaWQgPT09IGlkKVxyXG4gICAgICAgIHRvZG8uY29tcGxldGVkID0gIXRvZG8uY29tcGxldGVkXHJcbiAgICAgICAgc2V0VG9kb3MobmV3VG9kb3MpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQWRkVG9EbyhlKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IHRvZG9OYW1lUmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICAgICAgaWYgKG5hbWUgPT09ICcnKSByZXR1cm5cclxuICAgICAgICBzZXRUb2RvcyhwcmV2VG9kb3MgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gWy4uLnByZXZUb2Rvcywge2lkOnV1aWR2NCgpLCBuYW1lOiBuYW1lLCBjb21wbGV0ZWQ6ZmFsc2V9XVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXJUb2RvcygpIHtcclxuICAgICAgICBjb25zdCBuZXdUb2RvcyA9IHRvZG9zLmZpbHRlcih0b2RvID0+ICF0b2RvLmNvbXBsZXRlZClcclxuICAgICAgICBzZXRUb2RvcyhuZXdUb2RvcylcclxuICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUb2RvTGlzdCB0b2Rvcz17dG9kb3N9IHRvZ2dsZVRvZG89e3RvZ2dsZVRvZG99IC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCByZWY9e3RvZG9OYW1lUmVmfSB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQWRkVG9Eb30+QWRkIFRvZG88L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjbGVhclRvZG9zfT5DbGVhciBsaXN0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXY+MCBsZWZ0IHRvIGRvPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvKHt0b2RvLCB0b2dnbGVUb2RvfSkge1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVRvZG9DbGljaygpIHtcclxuICAgICAgICB0b2dnbGVUb2RvKHRvZG8uaWQpICAgXHJcbiAgICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+ICAgXHJcbiAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgXHJcbiAgICAgICAgICAgIGNoZWNrZWQ9e3RvZG8uY29tcGxldGVkfSBcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRvZG9DbGlja31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICB7dG9kby5uYW1lfVxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICA8L2Rpdj5cclxuICAgXHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFRvZG8gZnJvbSAnLi9Ub2RvJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9MaXN0KHsgdG9kb3MsIHRvZ2dsZVRvZG8gfSkge1xyXG4gIHJldHVybiAoXHJcblxyXG4gICAgICAgIHRvZG9zLm1hcCh0b2RvID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxUb2RvIGtleT17dG9kby5pZH0gdG9kbyA9IHt0b2RvfSB0b2dnbGVUb2RvPXt0b2dnbGVUb2RvfS8+XHJcbiAgICAgICAgfSlcclxuICAgXHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiQXBwIiwiU3RyaWN0TW9kZSIsImNyZWF0ZVJvb3QiLCJyb290RWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJUb2RvTGlzdCIsInY0IiwidXVpZHY0IiwiZnVuYyIsIkxPQ0FMX1NUQU9SQUdFX0tFWSIsInRvZG9zIiwic2V0VG9kb3MiLCJ0b2RvTmFtZVJlZiIsInN0b3JlZFRvZG9zIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ0b2dnbGVUb2RvIiwiaWQiLCJuZXdUb2RvcyIsImNvbnNvbGUiLCJsb2ciLCJ0b2RvIiwiZmluZCIsImNvbXBsZXRlZCIsImhhbmRsZUFkZFRvRG8iLCJlIiwibmFtZSIsImN1cnJlbnQiLCJ2YWx1ZSIsInByZXZUb2RvcyIsImNsZWFyVG9kb3MiLCJmaWx0ZXIiLCJUb2RvIiwiaGFuZGxlVG9kb0NsaWNrIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==