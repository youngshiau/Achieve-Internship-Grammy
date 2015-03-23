
(function ($) {
Drupal.behaviors.myEventAttendance = {
  attach: function(context, settings) {
    var willAttend = $('#myeventattendance-will');
    var willNotAttend = $('#myeventattendance-wont');
    var status = $('#myeventattendance-status');

    willAttend.click(function() {
      willAttend.addClass('selected');
      willNotAttend.removeClass('selected');
      status.html('You will attend.');
    });

    willNotAttend.click(function() {
      willNotAttend.addClass('selected');
      willAttend.removeClass('selected');
      status.html('You will not attend.');
    });
  }
};
}(jQuery));