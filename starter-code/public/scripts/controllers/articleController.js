'use strict';
var app = app || {};

(function(module) {
  const articleController = {};
  // TODO:(?) Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:


    articleView.handleMainNav = function() {
        $('.main-nav').on('click', '.tab', function() {
          $('.tab-content').hide();
          $(`#${$(this).data('content')}`).fadeIn();
        });

       $('.main-nav .tab:first').click();
      };
  module.articleController = articleController;
})(app);
