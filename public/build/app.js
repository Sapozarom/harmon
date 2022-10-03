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
    var link = 'http://testowe.sasartele.pl/game/invite' + slug;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFDQWhELEtBQUssQ0FBQyxhQUFELENBQUw7VUFDRCxDQVZJO1VBV0xGLEtBQUssRUFBRyxlQUFTbUQsR0FBVCxFQUFjQyxVQUFkLEVBQTBCQyxXQUExQixFQUF1QztZQUM1Q25ELEtBQUssQ0FBQyxzQkFBRCxDQUFMO1VBQ0Y7UUFiSSxDQUFQO01BZUQsQ0FuQkQ7SUFxQkQsQ0F6Q0k7SUEyQ0xGLEtBQUssRUFBRyxlQUFTbUQsR0FBVCxFQUFjQyxVQUFkLEVBQTBCQyxXQUExQixFQUF1QztNQUM1Q25ELEtBQUssQ0FBQyxzQkFBRCxDQUFMO0lBQ0Y7RUE3Q0ksQ0FBUDtBQStDRDs7Ozs7Ozs7Ozs7Ozs7OztDQzNPRDs7QUFDTyxJQUFNcUQsR0FBRyxHQUFHRCwwRUFBZ0IsQ0FBQ0UseUlBQUQsQ0FBNUIsRUFNUDtBQUNBOzs7Ozs7Ozs7Ozs7QUNWQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvY2FsZW5kYXIuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvZ2FtZS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvY2FsZW5kYXIuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvZ2FtZS5jc3MnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuXG4vL2xvYWRpbmdcbiQoIGZ1bmN0aW9uKCkge1xuICBcbiAgdmFyIHRvb2x0aXBUcmlnZ2VyTGlzdCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYnMtdG9nZ2xlPVwidG9vbHRpcFwiXScpKVxuICB2YXIgdG9vbHRpcExpc3QgPSB0b29sdGlwVHJpZ2dlckxpc3QubWFwKGZ1bmN0aW9uICh0b29sdGlwVHJpZ2dlckVsKSB7XG4gICAgcmV0dXJuIG5ldyBib290c3RyYXAuVG9vbHRpcCh0b29sdGlwVHJpZ2dlckVsKVxuICB9KVxuICAgICAgLy8gSFRUUFNcbiAgLy8gJCgnLmZhLWxpbmsnKS5jbGljayggZnVuY3Rpb24oKXtcbiAgLy8gICB2YXIgc2x1ZyA9ICQodGhpcykuYXR0cignaWQnKTtcbiAgLy8gICB2YXIgbGluayA9ICd0ZXN0b3dlLnNhc2FydGVsZS5wL2dhbWUvaW52aXRlJysgc2x1ZztcblxuICAvLyAgIC8vIGxpbmsuc2VsZWN0KCk7XG4gIC8vICAgLy8gbGluay5zZXRTZWxlY3Rpb25SYW5nZSgwLCA5OTk5OSk7XG4gIC8vICAgYWxlcnQobGluayk7XG4gIC8vICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQobGluayk7XG5cbiAgICBcbiAgLy8gfSlcblxuICAvLyBIVFRQXG4gICQoJy5mYS1saW5rJykuY2xpY2soIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHNsdWcgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XG4gICAgdmFyIGxpbmsgPSAnaHR0cDovL3Rlc3Rvd2Uuc2FzYXJ0ZWxlLnBsL2dhbWUvaW52aXRlJysgc2x1ZztcblxuICAgIHZhciBsaW5rUGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTsgXG4gICAgXG4gICAgJCgndGV4dGFyZWEnKS5hZGRDbGFzcygnaW52aXNpYmxlJyk7XG4gICAgbGlua1Bhci5pbm5lckhUTUwgPSBsaW5rO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rUGFyKTtcbiAgICBsaW5rUGFyLmZvY3VzKCk7XG4gICAgbGlua1Bhci5zZWxlY3QoKTtcbiAgICAvLyBsaW5rUGFyLmFkZENsYXNzKCdpbnZpc2libGUnKTtcbiAgICB0cnkge1xuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBjb3B5IHRvIGNsaXBib2FyZCcsIGVycik7XG4gICAgfVxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGlua1Bhcik7XG4gICAgLy8gbGluay5zZWxlY3QoKTtcbiAgICAvLyBsaW5rLnNldFNlbGVjdGlvblJhbmdlKDAsIDk5OTk5KTtcbiAgICBhbGVydChsaW5rKTtcbiAgICAvLyBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChsaW5rKTtcblxuICAgIFxuICB9KVxuXG4gIC8vIGZ1bmN0aW9uIGNvcHlJbnZpTGluayhsaW5rKSB7XG4gIC8vICAgYWxlcnQobGluayk7XG4gIC8vIH1cblxuICAgICQoIFwiI3NsaWRlci1yYW5nZVwiICkuc2xpZGVyKHtcbiAgICAgIHJhbmdlOiB0cnVlLFxuICAgICAgbWluOiAwLFxuICAgICAgbWF4OiAxNDQwLFxuICAgICAgdmFsdWVzOiBbIDEwNTAsIDEyMDBdLFxuICAgICAgc3RlcDogMTUsXG4gICAgICBzbGlkZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcblxuICAgICAgICB2YXIgc3RhcnRIb3VyID0gbWludXRlc0ludG9Ib3VyKHVpLnZhbHVlc1sgMCBdKTtcbiAgICAgICAgdmFyIGZpbmlzaEhvdXIgPSBtaW51dGVzSW50b0hvdXIodWkudmFsdWVzWyAxIF0pO1xuICAgICAgICAkKCBcIiNldmVudF9zdGFydFwiICkudmFsKHVpLnZhbHVlc1sgMCBdKTtcbiAgICAgICAgJCggXCIjZXZlbnRfZmluaXNoXCIgKS52YWwodWkudmFsdWVzWyAxIF0pO1xuICAgICAgICAkKCBcIiNhbW91bnRcIiApLnZhbCggIHN0YXJ0SG91ciArIFwiIC0gXCIgKyAgZmluaXNoSG91ciAgKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBiZWdpbmluZ0hvdXIgPSBtaW51dGVzSW50b0hvdXIoJCggXCIjc2xpZGVyLXJhbmdlXCIgKS5zbGlkZXIoIFwidmFsdWVzXCIsIDAgKSk7XG4gICAgdmFyIGVuZGluZ0hvdXIgPSBtaW51dGVzSW50b0hvdXIoJCggXCIjc2xpZGVyLXJhbmdlXCIgKS5zbGlkZXIoIFwidmFsdWVzXCIsIDEgKSk7XG5cbiAgICAkKCBcIiNldmVudF9zdGFydFwiICkudmFsKCQoIFwiI3NsaWRlci1yYW5nZVwiICkuc2xpZGVyKCBcInZhbHVlc1wiLCAwICkpO1xuICAgICQoIFwiI2V2ZW50X2ZpbmlzaFwiICkudmFsKCQoIFwiI3NsaWRlci1yYW5nZVwiICkuc2xpZGVyKCBcInZhbHVlc1wiLCAxICkpO1xuICAgICQoIFwiI2Ftb3VudFwiICkudmFsKCAgYmVnaW5pbmdIb3VyICsgXCIgLSBcIiArICBlbmRpbmdIb3VyICApO1xuICAgIHZhciBkYXRlID0gJCgnLmZvcm0tZGF0ZScpLmh0bWwoKTtcbiAgICAvLyBhbGVydChkYXRlKTtcbiAgICB2YXIgc3BsaXQgPSBkYXRlLnNwbGl0KCctJylcbiAgICAgICQoIFwiI2V2ZW50X2RhdGVfbW9udGhcIiApLnZhbChwYXJzZUludChzcGxpdFsxXSkpO1xuICAgICAgJCggXCIjZXZlbnRfZGF0ZV95ZWFyXCIgKS52YWwocGFyc2VJbnQoc3BsaXRbMF0pKTtcbiAgICAgICQoIFwiI2V2ZW50X2RhdGVfZGF5XCIgKS52YWwocGFyc2VJbnQoc3BsaXRbMl0pKTtcbiAgICAvLyAkKFwiI2V2ZW50X3N0YXJ0XCIpLmhpZGUoKTtcbiAgICAvLyAkKCBcIiNldmVudF9zdGFydFwiICkuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgLy8gICAkKCB0aGlzICkuaGlkZSggXCJzbG93XCIsIGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICBhbGVydCggXCJBbmltYXRpb24gY29tcGxldGUuXCIgKTtcbiAgICAvLyAgIH0pO1xuICAgIC8vIH0pO1xuICB9ICk7XG5cbiAgJCggZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgbG9hZERhdGUgPSAkKCcjbG9hZC1kYXRlJykuaHRtbCgpO1xuXG4gICAgdmFyIGdhbWVJZCA9ICQoJy5wYXJ0eS1uYW1lJykuYXR0cignaWQnKTtcblxuICAgICQoJyMnK2xvYWREYXRlKS5hZGRDbGFzcygncGlja2VkLWRhdGUnKTtcbiAgICBpZiAodHlwZW9mIGdhbWVJZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGRpc3BsYXlQbGF5ZXJzVm90ZXMoZ2FtZUlkLCBsb2FkRGF0ZSk7XG4gICAgfVxuIFxuXG4gICAgJCgndGQuY2FsZW5kYXItZGF5JykuY2xpY2soZnVuY3Rpb24oKSB7XG5cbiAgICAgIC8vIGdldCBkYXRhXG4gICAgICB2YXIgZGF0ZSA9ICQodGhpcykuYXR0cignaWQnKTtcbiAgICAgIHZhciBzcGxpdCA9IGRhdGUuc3BsaXQoJy0nKVxuXG4gICAgICAvL3N0eWxlc1xuICAgICAgLy8gJCgnLmJvcmRlci0yJykucmVtb3ZlQ2xhc3MoJ2JvcmRlciBib3JkZXItc3VjY2VzcyBib3JkZXItMicpO1xuICAgICAgLy8gJCh0aGlzKS5hZGRDbGFzcygnYm9yZGVyIGJvcmRlci1zdWNjZXNzIGJvcmRlci0yJyk7XG4gICAgICAkKCcucGlja2VkLWRhdGUnKS5yZW1vdmVDbGFzcygncGlja2VkLWRhdGUnKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3BpY2tlZC1kYXRlJylcbiAgICAgICQoJy5mb3JtLWRhdGUnKS5jc3MoJ29wYWNpdHknLCAnMC4yNScpO1xuICAgICAgJCgnLmZvcm0tZGF0ZScpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICcjZmZiMzAwJyk7XG4gICAgICAkKCcuZm9ybS1kYXRlJykuaHRtbChkYXRlKS5hbmltYXRlKHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOidyZ2JhKDEyOCwgMTI4LCAxMjgsIDApJyxcbiAgICAgIH0sIDUwMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIEFuaW1hdGlvbiBjb21wbGV0ZS5cbiAgICAgIH0pO1xuXG5cbiAgICAgIC8vIGZvcm0gdXBkYXRlXG4gICAgICAkKCBcIiNldmVudF9kYXRlX21vbnRoXCIgKS52YWwocGFyc2VJbnQoc3BsaXRbMV0pKTtcbiAgICAgICQoIFwiI2V2ZW50X2RhdGVfeWVhclwiICkudmFsKHBhcnNlSW50KHNwbGl0WzBdKSk7XG4gICAgICAkKCBcIiNldmVudF9kYXRlX2RheVwiICkudmFsKHBhcnNlSW50KHNwbGl0WzJdKSk7XG5cbiAgICAgIC8vIG15IHZvdGVzXG4gICAgICBkaXNwbGF5UGxheWVyc1ZvdGVzKGdhbWVJZCwgZGF0ZSk7XG4gICAgfSlcbiAgfSk7XG5cbiAgJCggZnVuY3Rpb24oKSB7XG4gICAgJCgnI2V2ZW50X3ZvdGUnKS5hZGRDbGFzcygnYmctZ3JlZW4nKTtcbiAgICAkKCcjZXZlbnRfdm90ZScpLmNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIGlmICgkKHRoaXMpLnZhbCgpID09PSAnMScpIHtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYmctZ3JlZW4nKTtcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYmctcmVkJyk7XG4gICAgICB9XG4gICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PT0gJzAnKSB7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2JnLXJlZCcpO1xuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdiZy1ncmVlbicpO1xuICAgICAgfSAgICAgIFxuICAgIH0pXG4gIH0pO1xuXG4gICQoIGZ1bmN0aW9uKCkge1xuICAgICQoJy51aS1zbGlkZXItaGFuZGxlJykubW91c2Vkb3duKGZ1bmN0aW9uKCkge1xuICAgICAgLy8gJCgnLnVpLXNsaWRlci1oYW5kbGUnKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnI2Y2OTMxZicpO1xuICAgICAgJCh0aGlzKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnI2Y2OTMxZicpO1xuICAgIH0pXG4gICAgJCgnLnVpLXNsaWRlci1oYW5kbGUnKS5tb3VzZXVwKGZ1bmN0aW9uKCkge1xuICAgICAgLy8gJCgnLnVpLXNsaWRlci1oYW5kbGUnKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnI2Y2OTMxZicpO1xuICAgICAgJCh0aGlzKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnI2Y5ZjZmNicpO1xuICAgIH0pXG4gIH0pO1xuXG4gIFxuICAgIFxuICBcblxuXG5mdW5jdGlvbiBtaW51dGVzSW50b0hvdXIobWludXRlcykge1xuXG4gIHZhciBob3VyID0gTWF0aC5mbG9vcihtaW51dGVzIC8gNjApO1xuICB2YXIgbWluID0gbWludXRlcyAtIChob3VyICogNjApO1xuXG4gIGlmIChtaW4gPT0gMCkge1xuICAgIG1pbiA9ICcwMCc7XG4gIH1cblxuICByZXR1cm4gaG91ciArIFwiOlwiICsgIG1pbjtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVBsYXllcnNWb3RlcyhnYW1lLCBkYXRlKSB7XG4gIC8vIGZldGNoaW5nIHZvdGVzXG4gICQuYWpheCh7ICBcbiAgICB1cmw6ICAgICAgICAnL2dldC11c2VyLXZvdGVzLycrIGdhbWUgKyAnLycgKyBkYXRlLCAgXG4gICAgdHlwZTogICAgICAgJ1BPU1QnLCAgIFxuICAgIGRhdGFUeXBlOiAgICdqc29uJywgIFxuICAgIGFzeW5jOiAgICAgIHRydWUsICBcbiAgICBcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhLCBzdGF0dXMpIHsgIFxuXG4gICAgICB2YXIgZGF0YVN0cmluZyA9IFwiPGI+TXkgVm90ZXM6PC9iPiBcIjtcblxuICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHZhciBuZXh0RGF0ZSA9IFwiPGRpdiBjbGFzcz0ndm90ZS1kaXNwbGF5JyBpZD0nXCIrIGl0ZW1bJ2lkJ10gK1wiJz5cIisgaXRlbVsncmFuZ2UnXSArXCIgPGkgaWQ9J1wiKyBpdGVtWydpZCddICtcIicgY2xhc3M9J2ZhLXNvbGlkIGZhLXRyYXNoIGZhLXhzIGRlbGV0ZS12b3RlJz48L2k+PC9kaXY+XCI7XG4gICAgICAgIC8vICRuZXh0RGF0ZSA9IFwiPGRpdiBjbGFzcz0ndm90ZS1ib3gnPiA8L2Rpdj5cIjtcbiAgICAgICAgLy8gJG5leHREYXRlID0gXCJhc2RcIjtcbiAgICAgICAgZGF0YVN0cmluZyA9IGRhdGFTdHJpbmcgKyBuZXh0RGF0ZTtcbiAgICAgIH0pXG4gICAgICBcbiAgICAgICQoJyNteS12b3RlcycpLmh0bWwoZGF0YVN0cmluZyk7XG5cbiAgICAgIC8vIERFTEVURSBWT1RFU1xuICAgICAgJCgnLmRlbGV0ZS12b3RlJykubW91c2Vkb3duKGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBhbGVydCgkKHRoaXMpLmF0dHIoJ2lkJykpOyAgXG4gICAgICAgIGFsZXJ0KCdEbyB5b3UgcmVhbHkgZGVsZXRlIHRoaXMgZXZlbnQ/Jyk7XG5cbiAgICAgICAgJC5hamF4KHsgIFxuICAgICAgICAgIHVybDogICAgICAgICcvZXZlbnQvZGVsZXRlLycgKyAkKHRoaXMpLmF0dHIoJ2lkJyksICBcbiAgICAgICAgICB0eXBlOiAgICAgICAnUE9TVCcsICAgXG4gICAgICAgICAgZGF0YVR5cGU6ICAgJ2pzb24nLCAgXG4gICAgICAgICAgLy8gYXN5bmM6ICAgICAgdHJ1ZSwgIFxuICAgICAgICAgIFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEsIHN0YXR1cykgeyAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICQoJy52b3RlLWRpc3BsYXkjJyArIGRhdGFbJ2lkJ10pLmhpZGUoKTtcbiAgICAgICAgICAgIGFsZXJ0KCdWb3RlIGRlbHRlZCcpO1xuICAgICAgICAgIH0sICBcbiAgICAgICAgICBlcnJvciA6IGZ1bmN0aW9uKHhociwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHsgIFxuICAgICAgICAgICAgIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZycpOyAgXG4gICAgICAgICAgfSAgXG4gICAgICAgfSk7IFxuICAgICAgfSk7XG5cbiAgICB9XG4gICAgLCAgXG4gICAgZXJyb3IgOiBmdW5jdGlvbih4aHIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7ICBcbiAgICAgICBhbGVydCgnQWpheCByZXF1ZXN0IGZhaWxlZC4nKTsgIFxuICAgIH0gIFxuIH0pOyBcbn1cblxuXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiJCIsInRvb2x0aXBUcmlnZ2VyTGlzdCIsInNsaWNlIiwiY2FsbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInRvb2x0aXBMaXN0IiwibWFwIiwidG9vbHRpcFRyaWdnZXJFbCIsImJvb3RzdHJhcCIsIlRvb2x0aXAiLCJjbGljayIsInNsdWciLCJhdHRyIiwibGluayIsImxpbmtQYXIiLCJjcmVhdGVFbGVtZW50IiwiYWRkQ2xhc3MiLCJpbm5lckhUTUwiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJmb2N1cyIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwicmVtb3ZlQ2hpbGQiLCJhbGVydCIsInNsaWRlciIsInJhbmdlIiwibWluIiwibWF4IiwidmFsdWVzIiwic3RlcCIsInNsaWRlIiwiZXZlbnQiLCJ1aSIsInN0YXJ0SG91ciIsIm1pbnV0ZXNJbnRvSG91ciIsImZpbmlzaEhvdXIiLCJ2YWwiLCJiZWdpbmluZ0hvdXIiLCJlbmRpbmdIb3VyIiwiZGF0ZSIsImh0bWwiLCJzcGxpdCIsInBhcnNlSW50IiwibG9hZERhdGUiLCJnYW1lSWQiLCJkaXNwbGF5UGxheWVyc1ZvdGVzIiwicmVtb3ZlQ2xhc3MiLCJjc3MiLCJhbmltYXRlIiwib3BhY2l0eSIsImJhY2tncm91bmRDb2xvciIsImNoYW5nZSIsIm1vdXNlZG93biIsIm1vdXNldXAiLCJtaW51dGVzIiwiaG91ciIsIk1hdGgiLCJmbG9vciIsImdhbWUiLCJhamF4IiwidXJsIiwidHlwZSIsImRhdGFUeXBlIiwiYXN5bmMiLCJzdWNjZXNzIiwiZGF0YSIsInN0YXR1cyIsImRhdGFTdHJpbmciLCJmb3JFYWNoIiwiaXRlbSIsIm5leHREYXRlIiwiaGlkZSIsInhociIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=