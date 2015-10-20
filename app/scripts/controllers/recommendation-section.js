'use strict';

/**
 * @ngdoc function
 * @name emeryturaDlaSportowcaApp.controller:RecommendationSectionCtrl
 * @description
 * # RecommendationSectionCtrl
 * Controller of the emeryturaDlaSportowcaApp
 */
angular.module('emeryturaDlaSportowcaApp')
  .controller('RecommendationSectionCtrl', function ($scope) {
  $scope.slides = [
    {
      'id': 0,
      'name': 'Mateusz Klich',
      'club': 'FC Kaiserslautern',
      'profession': 'Reprezentant Polski, piłkarz',
      'img': 'mklich',
      'name2': 'Marcin Budziński',
      'profession2': 'Piłkarz Cracovia Kraków',
      'img2': 'mbudzinski'
    },
    {
      'id': 1,
      'name': 'Krzysztof Pilarz',
      'club': 'Cracovia Kraków',
      'profession': 'Bramkarz, ',
      'img': 'krzysztof',
      'name2': 'Dawid Nowak',
      'profession2': 'Były reprezentant Polski',
      'img2': 'dnowak'
    }
  ];
});
