'use strict';

/**
 * @ngdoc directive
 * @name emeryturaDlaSportowcaApp.directive:headerSection
 * @description
 * # headerSection
 */
angular.module('emeryturaDlaSportowcaApp')
  .directive('headerSection', function ($document, $location) {
  return {
    templateUrl: '/views/directives/header.html',
    restrict: 'E',
    link: function postLink(scope, element, attrs) {

      scope.menuElements = {
        'czym-jest-emerytura-sportowca': 'O firmie',
        'rozwiazania': 'Rozwiązania',
        'klienci-i-referencje': 'Klienci i referencje',
        'kontakt': 'Kontakt'
      };

      scope.scrollToSection = function(anchor) {
        var elementToShow = angular.element(document.getElementById(anchor));
        $document.scrollToElement(elementToShow, 0, 1000).then( function() {
          $location.hash(anchor);
        });
      };

    }
  };
});
