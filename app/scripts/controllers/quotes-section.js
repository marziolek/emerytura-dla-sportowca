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
      'name': 'Jerzy Dudkiewicz',
      'quote': 'Emerytura dla Sportowca to świetne rozwiązanie!',
      'profession': 'Bramkarz Kadry Narodowej',
      'img': 'jdudkiewicz'
    },
    {
      'id': 1,
      'name': 'Jerzy Dudkiewicz',
      'quote': 'Emerytura dla Sportowca to świetne rozwiązanie!',
      'profession': 'Bramkarz Kadry Narodowej',
      'img': 'jdudkiewicz'
    },
    {
      'id': 2,
      'name': 'Jerzy Dudkiewicz',
      'quote': 'Emerytura dla Sportowca to świetne rozwiązanie!',
      'profession': 'Bramkarz Kadry Narodowej',
      'img': 'jdudkiewicz'
    },
    {
      'id': 3,
      'name': 'Jerzy Dudkiewicz',
      'quote': 'Emerytura dla Sportowca to świetne rozwiązanie!',
      'profession': 'Bramkarz Kadry Narodowej',
      'img': 'jdudkiewicz'
    }
  ];

  $scope.show = function() {
    console.log($scope.carouselIndex);
  };
});
