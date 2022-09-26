/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
import './styles/calendar.css';
import './styles/game.css';

// start the Stimulus application
import './bootstrap';


$( function() {
  
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 1440,
      values: [ 1050, 1200],
      step: 15,
      slide: function( event, ui ) {

        var startHour = minutesIntoHour(ui.values[ 0 ]);
        var finishHour = minutesIntoHour(ui.values[ 1 ]);
        $( "#event_start" ).val(ui.values[ 0 ]);
        $( "#event_finish" ).val(ui.values[ 1 ]);
        $( "#amount" ).val(  startHour + " - " +  finishHour  );
      }
    });

    var beginingHour = minutesIntoHour($( "#slider-range" ).slider( "values", 0 ));
    var endingHour = minutesIntoHour($( "#slider-range" ).slider( "values", 1 ));

    $( "#event_start" ).val($( "#slider-range" ).slider( "values", 0 ));
    $( "#event_finish" ).val($( "#slider-range" ).slider( "values", 1 ));
    $( "#amount" ).val(  beginingHour + " - " +  endingHour  );
    var date = $('.form-date').html();
    // alert(date);
    var split = date.split('-')
      $( "#event_date_month" ).val(parseInt(split[1]));
      $( "#event_date_year" ).val(parseInt(split[0]));
      $( "#event_date_day" ).val(parseInt(split[2]));
    // $("#event_start").hide();
    // $( "#event_start" ).click(function() {
    //   $( this ).hide( "slow", function() {
    //     alert( "Animation complete." );
    //   });
    // });
  } );

  $( function() {
    $('td').click(function() {

      // get data
      var date = $(this).attr('id');
      var split = date.split('-')

      //styles
      // $('.border-2').removeClass('border border-success border-2');
      // $(this).addClass('border border-success border-2');
      $('.picked-date').removeClass('picked-date');
      $(this).addClass('picked-date')
      $('.form-date').css('opacity', '0.25');
      $('.form-date').css('background-color', '#ffb300');
      $('.form-date').html(date).animate({
        opacity: 1,
        backgroundColor:'rgba(128, 128, 128, 0)',
      }, 500, function() {
        // Animation complete.
      });


      // form update
      $( "#event_date_month" ).val(parseInt(split[1]));
      $( "#event_date_year" ).val(parseInt(split[0]));
      $( "#event_date_day" ).val(parseInt(split[2]));
    })
  });

  $( function() {
    $('#event_vote').addClass('bg-green');
    $('#event_vote').change(function() {
      if ($(this).val() === '1') {
        $(this).addClass('bg-green');
        $(this).removeClass('bg-red');
      }
      if ($(this).val() === '0') {
        $(this).addClass('bg-red');
        $(this).removeClass('bg-green');
      }      
    })
  });

  $( function() {
    $('.ui-slider-handle').mousedown(function() {
      // $('.ui-slider-handle').css('background-color', '#f6931f');
      $(this).css('background-color', '#f6931f');
    })
    $('.ui-slider-handle').mouseup(function() {
      // $('.ui-slider-handle').css('background-color', '#f6931f');
      $(this).css('background-color', '#f9f6f6');
    })
  });
function minutesIntoHour(minutes) {

  var hour = Math.floor(minutes / 60);
  var min = minutes - (hour * 60);

  if (min == 0) {
    min = '00';
  }

  return hour + ":" +  min;
}


