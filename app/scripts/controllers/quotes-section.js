'use strict';

/**
 * @ngdoc function
 * @name emeryturaDlaSportowcaApp.controller:QuotesSectionCtrl
 * @description
 * # QuotesSectionCtrl
 * Controller of the emeryturaDlaSportowcaApp
 */
angular.module('emeryturaDlaSportowcaApp')
  .controller('QuotesSectionCtrl', function ($scope) {
  $scope.slides = [
    {
      'id': 0,
      'name': 'Dawid Nowak',
      'quote': 'Emerytura dla Sportowca to świetne rozwiązanie!',
      'profession': 'Były reprezentant Polski',
      'img': 'dnowak'
    }
  ];
});
