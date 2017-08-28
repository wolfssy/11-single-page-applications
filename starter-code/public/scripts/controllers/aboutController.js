'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // TODO:(done) Define a function that hides all main section elements, and then reveals just the #about section:
  // articleView.handleMainNav = function() {
  //     $('.main-nav').on('click', '.tab', function() {
  //       $('.tab-content').hide();
  //       $(`#${$(this).data('content')}`).fadeIn();
  //     });
  //
  //    $('.main-nav .tab:first').click();
  //   };
  aboutController.init = function() {
    $('.tab-content').hide();
    $('#about').fadeIn();
  }


  module.aboutController = aboutController;
})(app);
