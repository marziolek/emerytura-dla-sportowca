'use strict';

/**
 * @ngdoc directive
 * @name emeryturaDlaSportowcaApp.directive:pageScroll
 * @description
 * # parallaxScroll
 */
angular.module('emeryturaDlaSportowcaApp')
  .directive('pageScroll', function ($window, $timeout) {
  return {
    restrict: 'A',
    link: function postLink(scope, element) {
      $window.onscroll = function() {
        if ($window.pageYOffset > 20) {
          element.addClass('scrolling');
        } else {
          element.removeClass('scrolling');
        }
      };
    }
  };
});
