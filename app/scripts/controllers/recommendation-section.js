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
  $scope.carouselIndexRecomendation = 0;
  $scope.slides = [
    {
      'id': 1,
      'name': 'Mateusz Klich',
      'club': 'FC Twente',
      'profession': 'Piłkarz, ',
      'img': 'mklich',
      'name2': 'Marcin Budziński',
      'profession2': 'Piłkarz, ',
      'club2': 'Cracovia Kraków',
      'img2': 'mbudzinski'
    },
    {
      'id': 2,
      'name': 'Krzysztof Pilarz',
      'club': 'Cracovia Kraków',
      'profession': 'Bramkarz, ',
      'img': 'krzysztof',
      'name2': 'Dawid Nowak',
      'profession2': 'Piłkarz, ',
      'club2': 'Bruk Bet Nieciecza',
      'img2': 'dawid-nowak'
    },
    {
      'id': 3,
      'name': 'Ryszard Wieczorek',
      'profession': 'Wieloletni ekstraklasowy trener',
      'img': 'rwieczorek',
      'name2': 'Alan Uryga',
      'profession2': 'Piłkarz, ',
      'club2': 'Wisła Kraków',
      'img2': 'alan-uryga'
    },
    {
      'id': 4,
      'name': 'Damian Dąbrowski',
      'profession': 'Piłkarz, ',
      'club': 'Cracovia Kraków',
      'img': 'damian-dabrowski',
      'name2': 'Paweł Jaroszyński',
      'profession2': 'Piłkarz, ',
      'club2': 'Cracovia Kraków',
      'img2': 'pawel-jaroszynski'
    },
    {
      'id': 5,
      'name': 'Jacek Kiełb',
      'profession': 'Piłkarz, ',
      'club': 'Korona Kielce',
      'img': 'jacek-kielb',
      'name2': 'Sebastian Steblecki',
      'profession2': 'Piłkarz, ',
      'club2': 'Cracovia Kraków',
      'img2': 'sebastian-steblecki'
    },
    {
      'id': 6,
      'name': 'Łukasz "Saszka" Chlewicki',
      'profession': 'Zawodnik MMA, ',
      'club': 'KSW Team',
      'img': 'lukasz-Chlewicki'
    }
  ];
});
