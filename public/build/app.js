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
    var link = 'http://harmon.sasartele.pl/game/invite/' + slug;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFDQWhELEtBQUssQ0FBQyxhQUFELENBQUw7VUFDRCxDQVZJO1VBV0xGLEtBQUssRUFBRyxlQUFTbUQsR0FBVCxFQUFjQyxVQUFkLEVBQTBCQyxXQUExQixFQUF1QztZQUM1Q25ELEtBQUssQ0FBQyxzQkFBRCxDQUFMO1VBQ0Y7UUFiSSxDQUFQO01BZUQsQ0FuQkQ7SUFxQkQsQ0F6Q0k7SUEyQ0xGLEtBQUssRUFBRyxlQUFTbUQsR0FBVCxFQUFjQyxVQUFkLEVBQTBCQyxXQUExQixFQUF1QztNQUM1Q25ELEtBQUssQ0FBQyxzQkFBRCxDQUFMO0lBQ0Y7RUE3Q0ksQ0FBUDtBQStDRDs7Ozs7Ozs7Ozs7Ozs7OztDQzNPRDs7QUFDTyxJQUFNcUQsR0FBRyxHQUFHRCwwRUFBZ0IsQ0FBQ0UseUlBQUQsQ0FBNUIsRUFNUDtBQUNBOzs7Ozs7Ozs7Ozs7QUNWQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzNmYmEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9jYWxlbmRhci5jc3M/NjAzNSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2dhbWUuY3NzP2MyYTUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMvY2FsZW5kYXIuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlcy9nYW1lLmNzcyc7XHJcblxyXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XHJcblxyXG4vL2xvYWRpbmdcclxuJCggZnVuY3Rpb24oKSB7XHJcbiAgXHJcbiAgdmFyIHRvb2x0aXBUcmlnZ2VyTGlzdCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYnMtdG9nZ2xlPVwidG9vbHRpcFwiXScpKVxyXG4gIHZhciB0b29sdGlwTGlzdCA9IHRvb2x0aXBUcmlnZ2VyTGlzdC5tYXAoZnVuY3Rpb24gKHRvb2x0aXBUcmlnZ2VyRWwpIHtcclxuICAgIHJldHVybiBuZXcgYm9vdHN0cmFwLlRvb2x0aXAodG9vbHRpcFRyaWdnZXJFbClcclxuICB9KVxyXG4gICAgICAvLyBIVFRQU1xyXG4gIC8vICQoJy5mYS1saW5rJykuY2xpY2soIGZ1bmN0aW9uKCl7XHJcbiAgLy8gICB2YXIgc2x1ZyA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAvLyAgIHZhciBsaW5rID0gJ3Rlc3Rvd2Uuc2FzYXJ0ZWxlLnAvZ2FtZS9pbnZpdGUnKyBzbHVnO1xyXG5cclxuICAvLyAgIC8vIGxpbmsuc2VsZWN0KCk7XHJcbiAgLy8gICAvLyBsaW5rLnNldFNlbGVjdGlvblJhbmdlKDAsIDk5OTk5KTtcclxuICAvLyAgIGFsZXJ0KGxpbmspO1xyXG4gIC8vICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQobGluayk7XHJcblxyXG4gICAgXHJcbiAgLy8gfSlcclxuXHJcbiAgLy8gSFRUUFxyXG4gICQoJy5mYS1saW5rJykuY2xpY2soIGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgc2x1ZyA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgIHZhciBsaW5rID0gJ2h0dHA6Ly9oYXJtb24uc2FzYXJ0ZWxlLnBsL2dhbWUvaW52aXRlLycrIHNsdWc7XHJcblxyXG4gICAgdmFyIGxpbmtQYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpOyBcclxuICAgIFxyXG4gICAgJCgndGV4dGFyZWEnKS5hZGRDbGFzcygnaW52aXNpYmxlJyk7XHJcbiAgICBsaW5rUGFyLmlubmVySFRNTCA9IGxpbms7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rUGFyKTtcclxuICAgIGxpbmtQYXIuZm9jdXMoKTtcclxuICAgIGxpbmtQYXIuc2VsZWN0KCk7XHJcbiAgICAvLyBsaW5rUGFyLmFkZENsYXNzKCdpbnZpc2libGUnKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGNvcHkgdG8gY2xpcGJvYXJkJywgZXJyKTtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGlua1Bhcik7XHJcbiAgICAvLyBsaW5rLnNlbGVjdCgpO1xyXG4gICAgLy8gbGluay5zZXRTZWxlY3Rpb25SYW5nZSgwLCA5OTk5OSk7XHJcbiAgICBhbGVydChsaW5rKTtcclxuICAgIC8vIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGxpbmspO1xyXG5cclxuICAgIFxyXG4gIH0pXHJcblxyXG4gIC8vIGZ1bmN0aW9uIGNvcHlJbnZpTGluayhsaW5rKSB7XHJcbiAgLy8gICBhbGVydChsaW5rKTtcclxuICAvLyB9XHJcblxyXG4gICAgJCggXCIjc2xpZGVyLXJhbmdlXCIgKS5zbGlkZXIoe1xyXG4gICAgICByYW5nZTogdHJ1ZSxcclxuICAgICAgbWluOiAwLFxyXG4gICAgICBtYXg6IDE0NDAsXHJcbiAgICAgIHZhbHVlczogWyAxMDUwLCAxMjAwXSxcclxuICAgICAgc3RlcDogMTUsXHJcbiAgICAgIHNsaWRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xyXG5cclxuICAgICAgICB2YXIgc3RhcnRIb3VyID0gbWludXRlc0ludG9Ib3VyKHVpLnZhbHVlc1sgMCBdKTtcclxuICAgICAgICB2YXIgZmluaXNoSG91ciA9IG1pbnV0ZXNJbnRvSG91cih1aS52YWx1ZXNbIDEgXSk7XHJcbiAgICAgICAgJCggXCIjZXZlbnRfc3RhcnRcIiApLnZhbCh1aS52YWx1ZXNbIDAgXSk7XHJcbiAgICAgICAgJCggXCIjZXZlbnRfZmluaXNoXCIgKS52YWwodWkudmFsdWVzWyAxIF0pO1xyXG4gICAgICAgICQoIFwiI2Ftb3VudFwiICkudmFsKCAgc3RhcnRIb3VyICsgXCIgLSBcIiArICBmaW5pc2hIb3VyICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgYmVnaW5pbmdIb3VyID0gbWludXRlc0ludG9Ib3VyKCQoIFwiI3NsaWRlci1yYW5nZVwiICkuc2xpZGVyKCBcInZhbHVlc1wiLCAwICkpO1xyXG4gICAgdmFyIGVuZGluZ0hvdXIgPSBtaW51dGVzSW50b0hvdXIoJCggXCIjc2xpZGVyLXJhbmdlXCIgKS5zbGlkZXIoIFwidmFsdWVzXCIsIDEgKSk7XHJcblxyXG4gICAgJCggXCIjZXZlbnRfc3RhcnRcIiApLnZhbCgkKCBcIiNzbGlkZXItcmFuZ2VcIiApLnNsaWRlciggXCJ2YWx1ZXNcIiwgMCApKTtcclxuICAgICQoIFwiI2V2ZW50X2ZpbmlzaFwiICkudmFsKCQoIFwiI3NsaWRlci1yYW5nZVwiICkuc2xpZGVyKCBcInZhbHVlc1wiLCAxICkpO1xyXG4gICAgJCggXCIjYW1vdW50XCIgKS52YWwoICBiZWdpbmluZ0hvdXIgKyBcIiAtIFwiICsgIGVuZGluZ0hvdXIgICk7XHJcbiAgICB2YXIgZGF0ZSA9ICQoJy5mb3JtLWRhdGUnKS5odG1sKCk7XHJcbiAgICAvLyBhbGVydChkYXRlKTtcclxuICAgIHZhciBzcGxpdCA9IGRhdGUuc3BsaXQoJy0nKVxyXG4gICAgICAkKCBcIiNldmVudF9kYXRlX21vbnRoXCIgKS52YWwocGFyc2VJbnQoc3BsaXRbMV0pKTtcclxuICAgICAgJCggXCIjZXZlbnRfZGF0ZV95ZWFyXCIgKS52YWwocGFyc2VJbnQoc3BsaXRbMF0pKTtcclxuICAgICAgJCggXCIjZXZlbnRfZGF0ZV9kYXlcIiApLnZhbChwYXJzZUludChzcGxpdFsyXSkpO1xyXG4gICAgLy8gJChcIiNldmVudF9zdGFydFwiKS5oaWRlKCk7XHJcbiAgICAvLyAkKCBcIiNldmVudF9zdGFydFwiICkuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICQoIHRoaXMgKS5oaWRlKCBcInNsb3dcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgYWxlcnQoIFwiQW5pbWF0aW9uIGNvbXBsZXRlLlwiICk7XHJcbiAgICAvLyAgIH0pO1xyXG4gICAgLy8gfSk7XHJcbiAgfSApO1xyXG5cclxuICAkKCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICB2YXIgbG9hZERhdGUgPSAkKCcjbG9hZC1kYXRlJykuaHRtbCgpO1xyXG5cclxuICAgIHZhciBnYW1lSWQgPSAkKCcucGFydHktbmFtZScpLmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgJCgnIycrbG9hZERhdGUpLmFkZENsYXNzKCdwaWNrZWQtZGF0ZScpO1xyXG4gICAgaWYgKHR5cGVvZiBnYW1lSWQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGRpc3BsYXlQbGF5ZXJzVm90ZXMoZ2FtZUlkLCBsb2FkRGF0ZSk7XHJcbiAgICB9XHJcbiBcclxuXHJcbiAgICAkKCd0ZC5jYWxlbmRhci1kYXknKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgIC8vIGdldCBkYXRhXHJcbiAgICAgIHZhciBkYXRlID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICB2YXIgc3BsaXQgPSBkYXRlLnNwbGl0KCctJylcclxuXHJcbiAgICAgIC8vc3R5bGVzXHJcbiAgICAgIC8vICQoJy5ib3JkZXItMicpLnJlbW92ZUNsYXNzKCdib3JkZXIgYm9yZGVyLXN1Y2Nlc3MgYm9yZGVyLTInKTtcclxuICAgICAgLy8gJCh0aGlzKS5hZGRDbGFzcygnYm9yZGVyIGJvcmRlci1zdWNjZXNzIGJvcmRlci0yJyk7XHJcbiAgICAgICQoJy5waWNrZWQtZGF0ZScpLnJlbW92ZUNsYXNzKCdwaWNrZWQtZGF0ZScpO1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdwaWNrZWQtZGF0ZScpXHJcbiAgICAgICQoJy5mb3JtLWRhdGUnKS5jc3MoJ29wYWNpdHknLCAnMC4yNScpO1xyXG4gICAgICAkKCcuZm9ybS1kYXRlJykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJyNmZmIzMDAnKTtcclxuICAgICAgJCgnLmZvcm0tZGF0ZScpLmh0bWwoZGF0ZSkuYW5pbWF0ZSh7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6J3JnYmEoMTI4LCAxMjgsIDEyOCwgMCknLFxyXG4gICAgICB9LCA1MDAsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIEFuaW1hdGlvbiBjb21wbGV0ZS5cclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgLy8gZm9ybSB1cGRhdGVcclxuICAgICAgJCggXCIjZXZlbnRfZGF0ZV9tb250aFwiICkudmFsKHBhcnNlSW50KHNwbGl0WzFdKSk7XHJcbiAgICAgICQoIFwiI2V2ZW50X2RhdGVfeWVhclwiICkudmFsKHBhcnNlSW50KHNwbGl0WzBdKSk7XHJcbiAgICAgICQoIFwiI2V2ZW50X2RhdGVfZGF5XCIgKS52YWwocGFyc2VJbnQoc3BsaXRbMl0pKTtcclxuXHJcbiAgICAgIC8vIG15IHZvdGVzXHJcbiAgICAgIGRpc3BsYXlQbGF5ZXJzVm90ZXMoZ2FtZUlkLCBkYXRlKTtcclxuICAgIH0pXHJcbiAgfSk7XHJcblxyXG4gICQoIGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnI2V2ZW50X3ZvdGUnKS5hZGRDbGFzcygnYmctZ3JlZW4nKTtcclxuICAgICQoJyNldmVudF92b3RlJykuY2hhbmdlKGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PT0gJzEnKSB7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYmctZ3JlZW4nKTtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdiZy1yZWQnKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PT0gJzAnKSB7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYmctcmVkJyk7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYmctZ3JlZW4nKTtcclxuICAgICAgfSAgICAgIFxyXG4gICAgfSlcclxuICB9KTtcclxuXHJcbiAgJCggZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcudWktc2xpZGVyLWhhbmRsZScpLm1vdXNlZG93bihmdW5jdGlvbigpIHtcclxuICAgICAgLy8gJCgnLnVpLXNsaWRlci1oYW5kbGUnKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnI2Y2OTMxZicpO1xyXG4gICAgICAkKHRoaXMpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICcjZjY5MzFmJyk7XHJcbiAgICB9KVxyXG4gICAgJCgnLnVpLXNsaWRlci1oYW5kbGUnKS5tb3VzZXVwKGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyAkKCcudWktc2xpZGVyLWhhbmRsZScpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICcjZjY5MzFmJyk7XHJcbiAgICAgICQodGhpcykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJyNmOWY2ZjYnKTtcclxuICAgIH0pXHJcbiAgfSk7XHJcblxyXG4gIFxyXG4gICAgXHJcbiAgXHJcblxyXG5cclxuZnVuY3Rpb24gbWludXRlc0ludG9Ib3VyKG1pbnV0ZXMpIHtcclxuXHJcbiAgdmFyIGhvdXIgPSBNYXRoLmZsb29yKG1pbnV0ZXMgLyA2MCk7XHJcbiAgdmFyIG1pbiA9IG1pbnV0ZXMgLSAoaG91ciAqIDYwKTtcclxuXHJcbiAgaWYgKG1pbiA9PSAwKSB7XHJcbiAgICBtaW4gPSAnMDAnO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGhvdXIgKyBcIjpcIiArICBtaW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJzVm90ZXMoZ2FtZSwgZGF0ZSkge1xyXG4gIC8vIGZldGNoaW5nIHZvdGVzXHJcbiAgJC5hamF4KHsgIFxyXG4gICAgdXJsOiAgICAgICAgJy9nZXQtdXNlci12b3Rlcy8nKyBnYW1lICsgJy8nICsgZGF0ZSwgIFxyXG4gICAgdHlwZTogICAgICAgJ1BPU1QnLCAgIFxyXG4gICAgZGF0YVR5cGU6ICAgJ2pzb24nLCAgXHJcbiAgICBhc3luYzogICAgICB0cnVlLCAgXHJcbiAgICBcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEsIHN0YXR1cykgeyAgXHJcblxyXG4gICAgICB2YXIgZGF0YVN0cmluZyA9IFwiPGI+TXkgVm90ZXM6PC9iPiBcIjtcclxuXHJcbiAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHZhciBuZXh0RGF0ZSA9IFwiPGRpdiBjbGFzcz0ndm90ZS1kaXNwbGF5JyBpZD0nXCIrIGl0ZW1bJ2lkJ10gK1wiJz5cIisgaXRlbVsncmFuZ2UnXSArXCIgPGkgaWQ9J1wiKyBpdGVtWydpZCddICtcIicgY2xhc3M9J2ZhLXNvbGlkIGZhLXRyYXNoIGZhLXhzIGRlbGV0ZS12b3RlJz48L2k+PC9kaXY+XCI7XHJcbiAgICAgICAgLy8gJG5leHREYXRlID0gXCI8ZGl2IGNsYXNzPSd2b3RlLWJveCc+IDwvZGl2PlwiO1xyXG4gICAgICAgIC8vICRuZXh0RGF0ZSA9IFwiYXNkXCI7XHJcbiAgICAgICAgZGF0YVN0cmluZyA9IGRhdGFTdHJpbmcgKyBuZXh0RGF0ZTtcclxuICAgICAgfSlcclxuICAgICAgXHJcbiAgICAgICQoJyNteS12b3RlcycpLmh0bWwoZGF0YVN0cmluZyk7XHJcblxyXG4gICAgICAvLyBERUxFVEUgVk9URVNcclxuICAgICAgJCgnLmRlbGV0ZS12b3RlJykubW91c2Vkb3duKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIGFsZXJ0KCQodGhpcykuYXR0cignaWQnKSk7ICBcclxuICAgICAgICBhbGVydCgnRG8geW91IHJlYWx5IGRlbGV0ZSB0aGlzIGV2ZW50PycpO1xyXG5cclxuICAgICAgICAkLmFqYXgoeyAgXHJcbiAgICAgICAgICB1cmw6ICAgICAgICAnL2V2ZW50L2RlbGV0ZS8nICsgJCh0aGlzKS5hdHRyKCdpZCcpLCAgXHJcbiAgICAgICAgICB0eXBlOiAgICAgICAnUE9TVCcsICAgXHJcbiAgICAgICAgICBkYXRhVHlwZTogICAnanNvbicsICBcclxuICAgICAgICAgIC8vIGFzeW5jOiAgICAgIHRydWUsICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSwgc3RhdHVzKSB7ICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICQoJy52b3RlLWRpc3BsYXkjJyArIGRhdGFbJ2lkJ10pLmhpZGUoKTtcclxuICAgICAgICAgICAgYWxlcnQoJ1ZvdGUgZGVsdGVkJyk7XHJcbiAgICAgICAgICB9LCAgXHJcbiAgICAgICAgICBlcnJvciA6IGZ1bmN0aW9uKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHsgIFxyXG4gICAgICAgICAgICAgYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nJyk7ICBcclxuICAgICAgICAgIH0gIFxyXG4gICAgICAgfSk7IFxyXG4gICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICAsICBcclxuICAgIGVycm9yIDogZnVuY3Rpb24oeGhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgeyAgXHJcbiAgICAgICBhbGVydCgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTsgIFxyXG4gICAgfSAgXHJcbiB9KTsgXHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiJCIsInRvb2x0aXBUcmlnZ2VyTGlzdCIsInNsaWNlIiwiY2FsbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInRvb2x0aXBMaXN0IiwibWFwIiwidG9vbHRpcFRyaWdnZXJFbCIsImJvb3RzdHJhcCIsIlRvb2x0aXAiLCJjbGljayIsInNsdWciLCJhdHRyIiwibGluayIsImxpbmtQYXIiLCJjcmVhdGVFbGVtZW50IiwiYWRkQ2xhc3MiLCJpbm5lckhUTUwiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJmb2N1cyIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwicmVtb3ZlQ2hpbGQiLCJhbGVydCIsInNsaWRlciIsInJhbmdlIiwibWluIiwibWF4IiwidmFsdWVzIiwic3RlcCIsInNsaWRlIiwiZXZlbnQiLCJ1aSIsInN0YXJ0SG91ciIsIm1pbnV0ZXNJbnRvSG91ciIsImZpbmlzaEhvdXIiLCJ2YWwiLCJiZWdpbmluZ0hvdXIiLCJlbmRpbmdIb3VyIiwiZGF0ZSIsImh0bWwiLCJzcGxpdCIsInBhcnNlSW50IiwibG9hZERhdGUiLCJnYW1lSWQiLCJkaXNwbGF5UGxheWVyc1ZvdGVzIiwicmVtb3ZlQ2xhc3MiLCJjc3MiLCJhbmltYXRlIiwib3BhY2l0eSIsImJhY2tncm91bmRDb2xvciIsImNoYW5nZSIsIm1vdXNlZG93biIsIm1vdXNldXAiLCJtaW51dGVzIiwiaG91ciIsIk1hdGgiLCJmbG9vciIsImdhbWUiLCJhamF4IiwidXJsIiwidHlwZSIsImRhdGFUeXBlIiwiYXN5bmMiLCJzdWNjZXNzIiwiZGF0YSIsInN0YXR1cyIsImRhdGFTdHJpbmciLCJmb3JFYWNoIiwiaXRlbSIsIm5leHREYXRlIiwiaGlkZSIsInhociIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=