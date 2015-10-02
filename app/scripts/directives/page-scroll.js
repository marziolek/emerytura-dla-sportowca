'use strict';

/**
 * @ngdoc directive
 * @name emeryturaDlaSportowcaApp.directive:pageScroll
 * @description
 * # parallaxScroll
 */
angular.module('emeryturaDlaSportowcaApp')
  .directive('pageScroll', function ($rootScope, $location, $anchorScroll, $routeParams) {
  return {
    restrict: 'A',
    link: function postLink(scope, element, attrs) {
      var windowHeight = $(window).height();

      $rootScope.$on('$routeChangeStart', function(newRoute, oldRoute) {
      console.log($location.url())
        console.log(newRoute);
        $location.hash($routeParams.scrollTo);
        $anchorScroll();  
      });
    }
  };
});
