'use strict';

/**
 * @ngdoc function
 * @name emeryturaDlaSportowcaApp.controller:HomeSectionCtrl
 * @description
 * # HomeSectionCtrl
 * Controller of the emeryturaDlaSportowcaApp
 */
angular.module('emeryturaDlaSportowcaApp')
  .controller('HomeSectionCtrl', function ($scope, $document, $location) {
  $scope.name = 'asd';

  $scope.scrollToSection = function(anchor) {
    var elementToShow = angular.element(document.getElementById(anchor));
    $document.scrollToElement(elementToShow, 0, 1000).then( function() {
      $location.hash(anchor);
    });
  };
});
