'use strict';

/**
 * @ngdoc directive
 * @name emeryturaDlaSportowcaApp.directive:footerSection
 * @description
 * # footerSection
 */
angular.module('emeryturaDlaSportowcaApp')
  .directive('footerSection', function () {
    return {
      templateUrl: '/views/directives/footer.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
