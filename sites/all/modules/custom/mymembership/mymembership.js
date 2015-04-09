 /**
  * @file Javascript for selecting a column of buttons.
  */
(function ($) {
/**
 * Attaches a click handler to the Accept All, Reject All, and Process All Later
 * buttons.
 *
 * @property {function} attach
 *   Attaches a click handler to the Accept All, Reject All, and Put All 
 *   Aside buttons to call selectAll().
 */
Drupal.behaviors.myMembership = {
  attach: function(context, settings) {
    var radios = document.getElementsByClassName('form-radio');
    var acceptAll = $('#mymembership-accept');
    var rejectAll = $('#mymembership-reject');
    var processLaterAll = $('#mymembership-put-aside');

    // Attach a click handler to the Accept All button.
    acceptAll.click(function() {
      selectAll(0, radios);
    });

    // Attach a click handler to the Reject All button.
    rejectAll.click(function() {
      selectAll(1, radios);
    });

    // Attach a click handler to the Process All Later button.
    processLaterAll.click(function() {
      selectAll(2, radios);
    });
  }
};
/**
 * Checks an entire column of radio buttons based on which button was clicked.
 *
 * @param {int} option
 *   The offset for the button that was clicked
 * @param {Object} radios
 *   An array of the radio elements
 */
function selectAll(option, radios) {
  for(var i = option; i < radios.length; i = i + 3) {
  	radios[i].checked = true;
  }
}

}(jQuery));