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

//loading
$( function() {
  
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
      // HTTPS
  // $('.fa-link').click( function(){
  //   var slug = $(this).attr('id');
  //   var link = 'testowe.sasartele.p/game/invite'+ slug;

  //   // link.select();
  //   // link.setSelectionRange(0, 99999);
  //   alert(link);
  //   navigator.clipboard.writeText(link);

    
  // })

  // HTTP
  $('.fa-link').click( function(){
    var slug = $(this).attr('id');
    var link = 'http://harmon.sasartele.pl/game/invite/'+ slug;

    var linkPar = document.createElement('textarea'); 
    
    $('textarea').addClass('invisible');
    linkPar.innerHTML = link;

    document.body.appendChild(linkPar);
    linkPar.focus();
    linkPar.select();
    // linkPar.addClass('invisible');
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
    }
    document.body.removeChild(linkPar);
    // link.select();
    // link.setSelectionRange(0, 99999);
    alert(link);
    // navigator.clipboard.writeText(link);

    
  })

  // function copyInviLink(link) {
  //   alert(link);
  // }

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

    var loadDate = $('#load-date').html();

    var gameId = $('.party-name').attr('id');

    $('#'+loadDate).addClass('picked-date');
    if (typeof gameId !== 'undefined') {
      displayPlayersVotes(gameId, loadDate);
    }
 

    $('td.calendar-day').click(function() {

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

      // my votes
      displayPlayersVotes(gameId, date);
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

function displayPlayersVotes(game, date) {
  // fetching votes
  $.ajax({  
    url:        '/get-user-votes/'+ game + '/' + date,  
    type:       'POST',   
    dataType:   'json',  
    async:      true,  
    
    success: function(data, status) {  

      var dataString = "<b>My Votes:</b> ";

      data.forEach(function (item) {
        var nextDate = "<div class='vote-display' id='"+ item['id'] +"'>"+ item['range'] +" <i id='"+ item['id'] +"' class='fa-solid fa-trash fa-xs delete-vote'></i></div>";
        // $nextDate = "<div class='vote-box'> </div>";
        // $nextDate = "asd";
        dataString = dataString + nextDate;
      })
      
      $('#my-votes').html(dataString);

      // DELETE VOTES
      $('.delete-vote').mousedown(function() {
        // alert($(this).attr('id'));  
        alert('Do you realy delete this event?');

        $.ajax({  
          url:        '/event/delete/' + $(this).attr('id'),  
          type:       'POST',   
          dataType:   'json',  
          // async:      true,  
          
          success: function(data, status) {  
            
            $('.vote-display#' + data['id']).hide();
            alert('Vote delted');
          },  
          error : function(xhr, textStatus, errorThrown) {  
             alert('Something went wrong');  
          }  
       }); 
      });

    }
    ,  
    error : function(xhr, textStatus, errorThrown) {  
       alert('Ajax request failed.');  
    }  
 }); 
}


