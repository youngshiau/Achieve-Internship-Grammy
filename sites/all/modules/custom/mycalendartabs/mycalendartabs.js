 /**
  * @file Javascript for switching between views.
  */
(function ($) {
/**
 * Attaches a click handler to the Month, Year, and Upcoming buttons.
 *
 * @property {function} attach
 *   Attaches a click handler to the Month, Year, and Upcoming buttons to call
 *   toggleDisplay().
 */
Drupal.behaviors.myCalendarTabs = {
  attach: function(context, settings) {
    var month = $('#mycalendartabs-month');
    var year = $('#mycalendartabs-year');
    var upcoming = $('#mycalendartabs-upcoming');

    // Attach a click handler to the Month button.
    month.click(function() {
      toggleDisplay('month');
    });

    // Attach a click handler to the Year button.
    year.click(function() {
      toggleDisplay('year');
    });

    // Attach a click handler to the Upcoming button.
    upcoming.click(function() {
      toggleDisplay('upcoming');
    });
  }
};
/**
 * Toggles the Month, Year, and Upcoming views of the Calendar page based
 * on which button was clicked.
 *
 * @param {string} button
 *   The name of the button that was clicked.
 */
function toggleDisplay(button) {

  // Removes the 'selected' class from the previously clicked button and
  // adds it to the newly clicked button.
  var prevSelected = $('#mycalendartabs-tabs > .selected');
  var newSelected = $('#mycalendartabs-' + button);
  prevSelected.removeClass('selected');
  newSelected.addClass('selected');

  // Hides and displays different sections of the calendar page depending
  // on the 'button' parameter.
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

    default:
      break;
  }
}
}(jQuery));