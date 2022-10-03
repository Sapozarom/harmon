(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
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
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

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

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
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

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _styles_calendar_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/calendar.css */ "./assets/styles/calendar.css");
/* harmony import */ var _styles_game_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles/game.css */ "./assets/styles/game.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");











/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)


 // start the Stimulus application

 //loading

$(function () {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  }); // HTTPS
  // $('.fa-link').click( function(){
  //   var slug = $(this).attr('id');
  //   var link = 'testowe.sasartele.p/game/invite'+ slug;
  //   // link.select();
  //   // link.setSelectionRange(0, 99999);
  //   alert(link);
  //   navigator.clipboard.writeText(link);
  // })
  // HTTP

  $('.fa-link').click(function () {
    var slug = $(this).attr('id');
    var link = 'http://testowe.sasartele.pl/game/invite/' + slug;
    var linkPar = document.createElement('textarea');
    $('textarea').addClass('invisible');
    linkPar.innerHTML = link;
    document.body.appendChild(linkPar);
    linkPar.focus();
    linkPar.select(); // linkPar.addClass('invisible');

    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
    }

    document.body.removeChild(linkPar); // link.select();
    // link.setSelectionRange(0, 99999);

    alert(link); // navigator.clipboard.writeText(link);
  }); // function copyInviLink(link) {
  //   alert(link);
  // }

  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 1440,
    values: [1050, 1200],
    step: 15,
    slide: function slide(event, ui) {
      var startHour = minutesIntoHour(ui.values[0]);
      var finishHour = minutesIntoHour(ui.values[1]);
      $("#event_start").val(ui.values[0]);
      $("#event_finish").val(ui.values[1]);
      $("#amount").val(startHour + " - " + finishHour);
    }
  });
  var beginingHour = minutesIntoHour($("#slider-range").slider("values", 0));
  var endingHour = minutesIntoHour($("#slider-range").slider("values", 1));
  $("#event_start").val($("#slider-range").slider("values", 0));
  $("#event_finish").val($("#slider-range").slider("values", 1));
  $("#amount").val(beginingHour + " - " + endingHour);
  var date = $('.form-date').html(); // alert(date);

  var split = date.split('-');
  $("#event_date_month").val(parseInt(split[1]));
  $("#event_date_year").val(parseInt(split[0]));
  $("#event_date_day").val(parseInt(split[2])); // $("#event_start").hide();
  // $( "#event_start" ).click(function() {
  //   $( this ).hide( "slow", function() {
  //     alert( "Animation complete." );
  //   });
  // });
});
$(function () {
  var loadDate = $('#load-date').html();
  var gameId = $('.party-name').attr('id');
  $('#' + loadDate).addClass('picked-date');

  if (typeof gameId !== 'undefined') {
    displayPlayersVotes(gameId, loadDate);
  }

  $('td.calendar-day').click(function () {
    // get data
    var date = $(this).attr('id');
    var split = date.split('-'); //styles
    // $('.border-2').removeClass('border border-success border-2');
    // $(this).addClass('border border-success border-2');

    $('.picked-date').removeClass('picked-date');
    $(this).addClass('picked-date');
    $('.form-date').css('opacity', '0.25');
    $('.form-date').css('background-color', '#ffb300');
    $('.form-date').html(date).animate({
      opacity: 1,
      backgroundColor: 'rgba(128, 128, 128, 0)'
    }, 500, function () {// Animation complete.
    }); // form update

    $("#event_date_month").val(parseInt(split[1]));
    $("#event_date_year").val(parseInt(split[0]));
    $("#event_date_day").val(parseInt(split[2])); // my votes

    displayPlayersVotes(gameId, date);
  });
});
$(function () {
  $('#event_vote').addClass('bg-green');
  $('#event_vote').change(function () {
    if ($(this).val() === '1') {
      $(this).addClass('bg-green');
      $(this).removeClass('bg-red');
    }

    if ($(this).val() === '0') {
      $(this).addClass('bg-red');
      $(this).removeClass('bg-green');
    }
  });
});
$(function () {
  $('.ui-slider-handle').mousedown(function () {
    // $('.ui-slider-handle').css('background-color', '#f6931f');
    $(this).css('background-color', '#f6931f');
  });
  $('.ui-slider-handle').mouseup(function () {
    // $('.ui-slider-handle').css('background-color', '#f6931f');
    $(this).css('background-color', '#f9f6f6');
  });
});

function minutesIntoHour(minutes) {
  var hour = Math.floor(minutes / 60);
  var min = minutes - hour * 60;

  if (min == 0) {
    min = '00';
  }

  return hour + ":" + min;
}

function displayPlayersVotes(game, date) {
  // fetching votes
  $.ajax({
    url: '/get-user-votes/' + game + '/' + date,
    type: 'POST',
    dataType: 'json',
    async: true,
    success: function success(data, status) {
      var dataString = "<b>My Votes:</b> ";
      data.forEach(function (item) {
        var nextDate = "<div class='vote-display' id='" + item['id'] + "'>" + item['range'] + " <i id='" + item['id'] + "' class='fa-solid fa-trash fa-xs delete-vote'></i></div>"; // $nextDate = "<div class='vote-box'> </div>";
        // $nextDate = "asd";

        dataString = dataString + nextDate;
      });
      $('#my-votes').html(dataString); // DELETE VOTES

      $('.delete-vote').mousedown(function () {
        // alert($(this).attr('id'));  
        alert('Do you realy delete this event?');
        $.ajax({
          url: '/event/delete/' + $(this).attr('id'),
          type: 'POST',
          dataType: 'json',
          // async:      true,  
          success: function success(data, status) {
            $('.vote-display#' + data['id']).hide();
            alert('Vote delted');
          },
          error: function error(xhr, textStatus, errorThrown) {
            alert('Something went wrong');
          }
        });
      });
    },
    error: function error(xhr, textStatus, errorThrown) {
      alert('Ajax request failed.');
    }
  });
}

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/calendar.css":
/*!************************************!*\
  !*** ./assets/styles/calendar.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/game.css":
/*!********************************!*\
  !*** ./assets/styles/game.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-62a824"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFDQWhELEtBQUssQ0FBQyxhQUFELENBQUw7VUFDRCxDQVZJO1VBV0xGLEtBQUssRUFBRyxlQUFTbUQsR0FBVCxFQUFjQyxVQUFkLEVBQTBCQyxXQUExQixFQUF1QztZQUM1Q25ELEtBQUssQ0FBQyxzQkFBRCxDQUFMO1VBQ0Y7UUFiSSxDQUFQO01BZUQsQ0FuQkQ7SUFxQkQsQ0F6Q0k7SUEyQ0xGLEtBQUssRUFBRyxlQUFTbUQsR0FBVCxFQUFjQyxVQUFkLEVBQTBCQyxXQUExQixFQUF1QztNQUM1Q25ELEtBQUssQ0FBQyxzQkFBRCxDQUFMO0lBQ0Y7RUE3Q0ksQ0FBUDtBQStDRDs7Ozs7Ozs7Ozs7Ozs7OztDQzNPRDs7QUFDTyxJQUFNcUQsR0FBRyxHQUFHRCwwRUFBZ0IsQ0FBQ0UseUlBQUQsQ0FBNUIsRUFNUDtBQUNBOzs7Ozs7Ozs7Ozs7QUNWQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvY2FsZW5kYXIuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvZ2FtZS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvY2FsZW5kYXIuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvZ2FtZS5jc3MnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuXG4vL2xvYWRpbmdcbiQoIGZ1bmN0aW9uKCkge1xuICBcbiAgdmFyIHRvb2x0aXBUcmlnZ2VyTGlzdCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYnMtdG9nZ2xlPVwidG9vbHRpcFwiXScpKVxuICB2YXIgdG9vbHRpcExpc3QgPSB0b29sdGlwVHJpZ2dlckxpc3QubWFwKGZ1bmN0aW9uICh0b29sdGlwVHJpZ2dlckVsKSB7XG4gICAgcmV0dXJuIG5ldyBib290c3RyYXAuVG9vbHRpcCh0b29sdGlwVHJpZ2dlckVsKVxuICB9KVxuICAgICAgLy8gSFRUUFNcbiAgLy8gJCgnLmZhLWxpbmsnKS5jbGljayggZnVuY3Rpb24oKXtcbiAgLy8gICB2YXIgc2x1ZyA9ICQodGhpcykuYXR0cignaWQnKTtcbiAgLy8gICB2YXIgbGluayA9ICd0ZXN0b3dlLnNhc2FydGVsZS5wL2dhbWUvaW52aXRlJysgc2x1ZztcblxuICAvLyAgIC8vIGxpbmsuc2VsZWN0KCk7XG4gIC8vICAgLy8gbGluay5zZXRTZWxlY3Rpb25SYW5nZSgwLCA5OTk5OSk7XG4gIC8vICAgYWxlcnQobGluayk7XG4gIC8vICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQobGluayk7XG5cbiAgICBcbiAgLy8gfSlcblxuICAvLyBIVFRQXG4gICQoJy5mYS1saW5rJykuY2xpY2soIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHNsdWcgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XG4gICAgdmFyIGxpbmsgPSAnaHR0cDovL3Rlc3Rvd2Uuc2FzYXJ0ZWxlLnBsL2dhbWUvaW52aXRlLycrIHNsdWc7XG5cbiAgICB2YXIgbGlua1BhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7IFxuICAgIFxuICAgICQoJ3RleHRhcmVhJykuYWRkQ2xhc3MoJ2ludmlzaWJsZScpO1xuICAgIGxpbmtQYXIuaW5uZXJIVE1MID0gbGluaztcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGlua1Bhcik7XG4gICAgbGlua1Bhci5mb2N1cygpO1xuICAgIGxpbmtQYXIuc2VsZWN0KCk7XG4gICAgLy8gbGlua1Bhci5hZGRDbGFzcygnaW52aXNpYmxlJyk7XG4gICAgdHJ5IHtcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gY29weSB0byBjbGlwYm9hcmQnLCBlcnIpO1xuICAgIH1cbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmtQYXIpO1xuICAgIC8vIGxpbmsuc2VsZWN0KCk7XG4gICAgLy8gbGluay5zZXRTZWxlY3Rpb25SYW5nZSgwLCA5OTk5OSk7XG4gICAgYWxlcnQobGluayk7XG4gICAgLy8gbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQobGluayk7XG5cbiAgICBcbiAgfSlcblxuICAvLyBmdW5jdGlvbiBjb3B5SW52aUxpbmsobGluaykge1xuICAvLyAgIGFsZXJ0KGxpbmspO1xuICAvLyB9XG5cbiAgICAkKCBcIiNzbGlkZXItcmFuZ2VcIiApLnNsaWRlcih7XG4gICAgICByYW5nZTogdHJ1ZSxcbiAgICAgIG1pbjogMCxcbiAgICAgIG1heDogMTQ0MCxcbiAgICAgIHZhbHVlczogWyAxMDUwLCAxMjAwXSxcbiAgICAgIHN0ZXA6IDE1LFxuICAgICAgc2xpZGU6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG5cbiAgICAgICAgdmFyIHN0YXJ0SG91ciA9IG1pbnV0ZXNJbnRvSG91cih1aS52YWx1ZXNbIDAgXSk7XG4gICAgICAgIHZhciBmaW5pc2hIb3VyID0gbWludXRlc0ludG9Ib3VyKHVpLnZhbHVlc1sgMSBdKTtcbiAgICAgICAgJCggXCIjZXZlbnRfc3RhcnRcIiApLnZhbCh1aS52YWx1ZXNbIDAgXSk7XG4gICAgICAgICQoIFwiI2V2ZW50X2ZpbmlzaFwiICkudmFsKHVpLnZhbHVlc1sgMSBdKTtcbiAgICAgICAgJCggXCIjYW1vdW50XCIgKS52YWwoICBzdGFydEhvdXIgKyBcIiAtIFwiICsgIGZpbmlzaEhvdXIgICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgYmVnaW5pbmdIb3VyID0gbWludXRlc0ludG9Ib3VyKCQoIFwiI3NsaWRlci1yYW5nZVwiICkuc2xpZGVyKCBcInZhbHVlc1wiLCAwICkpO1xuICAgIHZhciBlbmRpbmdIb3VyID0gbWludXRlc0ludG9Ib3VyKCQoIFwiI3NsaWRlci1yYW5nZVwiICkuc2xpZGVyKCBcInZhbHVlc1wiLCAxICkpO1xuXG4gICAgJCggXCIjZXZlbnRfc3RhcnRcIiApLnZhbCgkKCBcIiNzbGlkZXItcmFuZ2VcIiApLnNsaWRlciggXCJ2YWx1ZXNcIiwgMCApKTtcbiAgICAkKCBcIiNldmVudF9maW5pc2hcIiApLnZhbCgkKCBcIiNzbGlkZXItcmFuZ2VcIiApLnNsaWRlciggXCJ2YWx1ZXNcIiwgMSApKTtcbiAgICAkKCBcIiNhbW91bnRcIiApLnZhbCggIGJlZ2luaW5nSG91ciArIFwiIC0gXCIgKyAgZW5kaW5nSG91ciAgKTtcbiAgICB2YXIgZGF0ZSA9ICQoJy5mb3JtLWRhdGUnKS5odG1sKCk7XG4gICAgLy8gYWxlcnQoZGF0ZSk7XG4gICAgdmFyIHNwbGl0ID0gZGF0ZS5zcGxpdCgnLScpXG4gICAgICAkKCBcIiNldmVudF9kYXRlX21vbnRoXCIgKS52YWwocGFyc2VJbnQoc3BsaXRbMV0pKTtcbiAgICAgICQoIFwiI2V2ZW50X2RhdGVfeWVhclwiICkudmFsKHBhcnNlSW50KHNwbGl0WzBdKSk7XG4gICAgICAkKCBcIiNldmVudF9kYXRlX2RheVwiICkudmFsKHBhcnNlSW50KHNwbGl0WzJdKSk7XG4gICAgLy8gJChcIiNldmVudF9zdGFydFwiKS5oaWRlKCk7XG4gICAgLy8gJCggXCIjZXZlbnRfc3RhcnRcIiApLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIC8vICAgJCggdGhpcyApLmhpZGUoIFwic2xvd1wiLCBmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgYWxlcnQoIFwiQW5pbWF0aW9uIGNvbXBsZXRlLlwiICk7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9KTtcbiAgfSApO1xuXG4gICQoIGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIGxvYWREYXRlID0gJCgnI2xvYWQtZGF0ZScpLmh0bWwoKTtcblxuICAgIHZhciBnYW1lSWQgPSAkKCcucGFydHktbmFtZScpLmF0dHIoJ2lkJyk7XG5cbiAgICAkKCcjJytsb2FkRGF0ZSkuYWRkQ2xhc3MoJ3BpY2tlZC1kYXRlJyk7XG4gICAgaWYgKHR5cGVvZiBnYW1lSWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBkaXNwbGF5UGxheWVyc1ZvdGVzKGdhbWVJZCwgbG9hZERhdGUpO1xuICAgIH1cbiBcblxuICAgICQoJ3RkLmNhbGVuZGFyLWRheScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXG4gICAgICAvLyBnZXQgZGF0YVxuICAgICAgdmFyIGRhdGUgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XG4gICAgICB2YXIgc3BsaXQgPSBkYXRlLnNwbGl0KCctJylcblxuICAgICAgLy9zdHlsZXNcbiAgICAgIC8vICQoJy5ib3JkZXItMicpLnJlbW92ZUNsYXNzKCdib3JkZXIgYm9yZGVyLXN1Y2Nlc3MgYm9yZGVyLTInKTtcbiAgICAgIC8vICQodGhpcykuYWRkQ2xhc3MoJ2JvcmRlciBib3JkZXItc3VjY2VzcyBib3JkZXItMicpO1xuICAgICAgJCgnLnBpY2tlZC1kYXRlJykucmVtb3ZlQ2xhc3MoJ3BpY2tlZC1kYXRlJyk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdwaWNrZWQtZGF0ZScpXG4gICAgICAkKCcuZm9ybS1kYXRlJykuY3NzKCdvcGFjaXR5JywgJzAuMjUnKTtcbiAgICAgICQoJy5mb3JtLWRhdGUnKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnI2ZmYjMwMCcpO1xuICAgICAgJCgnLmZvcm0tZGF0ZScpLmh0bWwoZGF0ZSkuYW5pbWF0ZSh7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjoncmdiYSgxMjgsIDEyOCwgMTI4LCAwKScsXG4gICAgICB9LCA1MDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBBbmltYXRpb24gY29tcGxldGUuXG4gICAgICB9KTtcblxuXG4gICAgICAvLyBmb3JtIHVwZGF0ZVxuICAgICAgJCggXCIjZXZlbnRfZGF0ZV9tb250aFwiICkudmFsKHBhcnNlSW50KHNwbGl0WzFdKSk7XG4gICAgICAkKCBcIiNldmVudF9kYXRlX3llYXJcIiApLnZhbChwYXJzZUludChzcGxpdFswXSkpO1xuICAgICAgJCggXCIjZXZlbnRfZGF0ZV9kYXlcIiApLnZhbChwYXJzZUludChzcGxpdFsyXSkpO1xuXG4gICAgICAvLyBteSB2b3Rlc1xuICAgICAgZGlzcGxheVBsYXllcnNWb3RlcyhnYW1lSWQsIGRhdGUpO1xuICAgIH0pXG4gIH0pO1xuXG4gICQoIGZ1bmN0aW9uKCkge1xuICAgICQoJyNldmVudF92b3RlJykuYWRkQ2xhc3MoJ2JnLWdyZWVuJyk7XG4gICAgJCgnI2V2ZW50X3ZvdGUnKS5jaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PT0gJzEnKSB7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2JnLWdyZWVuJyk7XG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2JnLXJlZCcpO1xuICAgICAgfVxuICAgICAgaWYgKCQodGhpcykudmFsKCkgPT09ICcwJykge1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdiZy1yZWQnKTtcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYmctZ3JlZW4nKTtcbiAgICAgIH0gICAgICBcbiAgICB9KVxuICB9KTtcblxuICAkKCBmdW5jdGlvbigpIHtcbiAgICAkKCcudWktc2xpZGVyLWhhbmRsZScpLm1vdXNlZG93bihmdW5jdGlvbigpIHtcbiAgICAgIC8vICQoJy51aS1zbGlkZXItaGFuZGxlJykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJyNmNjkzMWYnKTtcbiAgICAgICQodGhpcykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJyNmNjkzMWYnKTtcbiAgICB9KVxuICAgICQoJy51aS1zbGlkZXItaGFuZGxlJykubW91c2V1cChmdW5jdGlvbigpIHtcbiAgICAgIC8vICQoJy51aS1zbGlkZXItaGFuZGxlJykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJyNmNjkzMWYnKTtcbiAgICAgICQodGhpcykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJyNmOWY2ZjYnKTtcbiAgICB9KVxuICB9KTtcblxuICBcbiAgICBcbiAgXG5cblxuZnVuY3Rpb24gbWludXRlc0ludG9Ib3VyKG1pbnV0ZXMpIHtcblxuICB2YXIgaG91ciA9IE1hdGguZmxvb3IobWludXRlcyAvIDYwKTtcbiAgdmFyIG1pbiA9IG1pbnV0ZXMgLSAoaG91ciAqIDYwKTtcblxuICBpZiAobWluID09IDApIHtcbiAgICBtaW4gPSAnMDAnO1xuICB9XG5cbiAgcmV0dXJuIGhvdXIgKyBcIjpcIiArICBtaW47XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJzVm90ZXMoZ2FtZSwgZGF0ZSkge1xuICAvLyBmZXRjaGluZyB2b3Rlc1xuICAkLmFqYXgoeyAgXG4gICAgdXJsOiAgICAgICAgJy9nZXQtdXNlci12b3Rlcy8nKyBnYW1lICsgJy8nICsgZGF0ZSwgIFxuICAgIHR5cGU6ICAgICAgICdQT1NUJywgICBcbiAgICBkYXRhVHlwZTogICAnanNvbicsICBcbiAgICBhc3luYzogICAgICB0cnVlLCAgXG4gICAgXG4gICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSwgc3RhdHVzKSB7ICBcblxuICAgICAgdmFyIGRhdGFTdHJpbmcgPSBcIjxiPk15IFZvdGVzOjwvYj4gXCI7XG5cbiAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICB2YXIgbmV4dERhdGUgPSBcIjxkaXYgY2xhc3M9J3ZvdGUtZGlzcGxheScgaWQ9J1wiKyBpdGVtWydpZCddICtcIic+XCIrIGl0ZW1bJ3JhbmdlJ10gK1wiIDxpIGlkPSdcIisgaXRlbVsnaWQnXSArXCInIGNsYXNzPSdmYS1zb2xpZCBmYS10cmFzaCBmYS14cyBkZWxldGUtdm90ZSc+PC9pPjwvZGl2PlwiO1xuICAgICAgICAvLyAkbmV4dERhdGUgPSBcIjxkaXYgY2xhc3M9J3ZvdGUtYm94Jz4gPC9kaXY+XCI7XG4gICAgICAgIC8vICRuZXh0RGF0ZSA9IFwiYXNkXCI7XG4gICAgICAgIGRhdGFTdHJpbmcgPSBkYXRhU3RyaW5nICsgbmV4dERhdGU7XG4gICAgICB9KVxuICAgICAgXG4gICAgICAkKCcjbXktdm90ZXMnKS5odG1sKGRhdGFTdHJpbmcpO1xuXG4gICAgICAvLyBERUxFVEUgVk9URVNcbiAgICAgICQoJy5kZWxldGUtdm90ZScpLm1vdXNlZG93bihmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gYWxlcnQoJCh0aGlzKS5hdHRyKCdpZCcpKTsgIFxuICAgICAgICBhbGVydCgnRG8geW91IHJlYWx5IGRlbGV0ZSB0aGlzIGV2ZW50PycpO1xuXG4gICAgICAgICQuYWpheCh7ICBcbiAgICAgICAgICB1cmw6ICAgICAgICAnL2V2ZW50L2RlbGV0ZS8nICsgJCh0aGlzKS5hdHRyKCdpZCcpLCAgXG4gICAgICAgICAgdHlwZTogICAgICAgJ1BPU1QnLCAgIFxuICAgICAgICAgIGRhdGFUeXBlOiAgICdqc29uJywgIFxuICAgICAgICAgIC8vIGFzeW5jOiAgICAgIHRydWUsICBcbiAgICAgICAgICBcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhLCBzdGF0dXMpIHsgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAkKCcudm90ZS1kaXNwbGF5IycgKyBkYXRhWydpZCddKS5oaWRlKCk7XG4gICAgICAgICAgICBhbGVydCgnVm90ZSBkZWx0ZWQnKTtcbiAgICAgICAgICB9LCAgXG4gICAgICAgICAgZXJyb3IgOiBmdW5jdGlvbih4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7ICBcbiAgICAgICAgICAgICBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcnKTsgIFxuICAgICAgICAgIH0gIFxuICAgICAgIH0pOyBcbiAgICAgIH0pO1xuXG4gICAgfVxuICAgICwgIFxuICAgIGVycm9yIDogZnVuY3Rpb24oeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgeyAgXG4gICAgICAgYWxlcnQoJ0FqYXggcmVxdWVzdCBmYWlsZWQuJyk7ICBcbiAgICB9ICBcbiB9KTsgXG59XG5cblxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIiQiLCJ0b29sdGlwVHJpZ2dlckxpc3QiLCJzbGljZSIsImNhbGwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0b29sdGlwTGlzdCIsIm1hcCIsInRvb2x0aXBUcmlnZ2VyRWwiLCJib290c3RyYXAiLCJUb29sdGlwIiwiY2xpY2siLCJzbHVnIiwiYXR0ciIsImxpbmsiLCJsaW5rUGFyIiwiY3JlYXRlRWxlbWVudCIsImFkZENsYXNzIiwiaW5uZXJIVE1MIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZm9jdXMiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInJlbW92ZUNoaWxkIiwiYWxlcnQiLCJzbGlkZXIiLCJyYW5nZSIsIm1pbiIsIm1heCIsInZhbHVlcyIsInN0ZXAiLCJzbGlkZSIsImV2ZW50IiwidWkiLCJzdGFydEhvdXIiLCJtaW51dGVzSW50b0hvdXIiLCJmaW5pc2hIb3VyIiwidmFsIiwiYmVnaW5pbmdIb3VyIiwiZW5kaW5nSG91ciIsImRhdGUiLCJodG1sIiwic3BsaXQiLCJwYXJzZUludCIsImxvYWREYXRlIiwiZ2FtZUlkIiwiZGlzcGxheVBsYXllcnNWb3RlcyIsInJlbW92ZUNsYXNzIiwiY3NzIiwiYW5pbWF0ZSIsIm9wYWNpdHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjaGFuZ2UiLCJtb3VzZWRvd24iLCJtb3VzZXVwIiwibWludXRlcyIsImhvdXIiLCJNYXRoIiwiZmxvb3IiLCJnYW1lIiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhVHlwZSIsImFzeW5jIiwic3VjY2VzcyIsImRhdGEiLCJzdGF0dXMiLCJkYXRhU3RyaW5nIiwiZm9yRWFjaCIsIml0ZW0iLCJuZXh0RGF0ZSIsImhpZGUiLCJ4aHIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9