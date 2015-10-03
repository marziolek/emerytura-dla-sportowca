'use strict';

/**
 * @ngdoc directive
 * @name emeryturaDlaSportowcaApp.directive:personOpacityScroll
 * @description
 * # personOpacityScroll
 */
angular.module('emeryturaDlaSportowcaApp')
  .directive('personOpacityScroll', function ($window) {
  return {
    restrict: 'A',
    link: function postLink(scope, element) {
      angular.element($window).bind("scroll", function() {
        var opacityVal = $window.pageYOffset / $window.outerHeight;
        if (opacityVal < 1) {
          element.find('.onscroll-show').css('opacity', opacityVal);
        } else {
          element.find('.onscroll-show').css('opacity', 1);
        }
      });
    }
  };
});
