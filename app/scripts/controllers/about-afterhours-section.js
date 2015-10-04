'use strict';

/**
 * @ngdoc function
 * @name emeryturaDlaSportowcaApp.controller:AboutAfterhoursSectionCtrl
 * @description
 * # AboutAfterhoursSectionCtrl
 * Controller of the emeryturaDlaSportowcaApp
 */
angular.module('emeryturaDlaSportowcaApp')
  .controller('AboutAfterhoursSectionCtrl', function ($scope) {
    $scope.partners = [
      'google', 'foursquare', 'samsung', 'pinterest', 'flickr'
    ];
  });
