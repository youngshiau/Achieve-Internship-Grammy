/*
  Basic logic:
 
 
  document.onload = function() {
    var month = $('#calendar-month');
    month.click(function() {
      month.toggleDisplay;
    });
    
    var year = $('#calendar-year');
    year.click(function() {
      year.toggleDisplay;
    });   
     
    var upcoming = $('#calendar-upcoming');
    upcoming.click(function() {
      upcoming.toggleDisplay;
    });
  }
  function toggleDisplay() {
    var prevSelected = $('#mycalendartabs > .selected');
    var newSelected = $(this); // check syntax and stuffs on this
    prevSelected.removeClass('selected');
    prevSelected.hide();
    newSelected.addClass('selected');
    newSelected.show();
  } 
 */
 
(function ($) {
  Drupal.behaviors.exampleModule = {
    attach: function(context, settings) {
      var month = $('#mycalendartabs-month');
      var year = $('#mycalendartabs-year');
      var upcoming = $('#mycalendartabs-upcoming');
      
      // attach a click handler to the Month button 
      month.click(function() {
        toggleDisplay('month');
      });
      
      // attach a click handler to the Year button
      year.click(function() {
        toggleDisplay('year');
      });
      
      // attach a click handler to the Upcoming button
      upcoming.click(function() {
        toggleDisplay('upcoming');
      });
      
      function toggleDisplay(button) {
        var prevSelected = $('#mycalendartabs-tabs > .selected');
        var newSelected = $('#mycalendartabs-' + button);
        prevSelected.removeClass('selected');
        newSelected.addClass('selected');
        
        switch(button) {
          case 'month':
            $('#calendar-month').show();
            $('#calendar-year').hide();
            $('#calendar-upcoming').hide();
            break;
          case 'year':
            $('#calendar-year').show();
            $('#calendar-month').hide();
            $('#calendar-upcoming').hide();
            break;
          case 'upcoming':
            $('#calendar-upcoming').show();
            $('#calendar-month').hide();
            $('#calendar-year').hide();
            break;
        }
      }
    }
  };
})(jQuery);