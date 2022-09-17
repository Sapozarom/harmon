/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
import './styles/calendar.css';

// start the Stimulus application
import './bootstrap';


$( function() {
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
    // $("#event_start").hide();

    // $( "#event_start" ).click(function() {
    //   $( this ).hide( "slow", function() {
    //     alert( "Animation complete." );
    //   });
    // });
  } );


function minutesIntoHour(minutes) {

  var hour = Math.floor(minutes / 60);
  var min = minutes - (hour * 60);

  if (min == 0) {
    min = '00';
  }

  return hour + ":" +  min;
}

