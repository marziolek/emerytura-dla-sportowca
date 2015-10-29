'use strict';

/**
 * @ngdoc function
 * @name emeryturaDlaSportowcaApp.controller:AboutSectionCtrl
 * @description
 * # AboutSectionCtrl
 * Controller of the emeryturaDlaSportowcaApp
 */
angular.module('emeryturaDlaSportowcaApp')
  .controller('AboutSectionCtrl', function ($scope, $timeout) {
  $scope.slides = [
    {
      'id': 0,
      'name': 'O firmie',
      'subname': 'Od samego początku istnienia naszą nadrzędną wartością jest wysoka jakość obsługi.',
      'content': 'Oferując usługi doradztwa finansowego na najwyższym poziomie istniejemy na rynku blisko 5 lat. Nasza skuteczność,charyzma i bardzo indywidualne podejście do Klientów spowodowało nawiązanie współpracy ze szczególną grupą Klientów jaką są sportowcy. Zrozumienie naszych Klientów i dostosowanie rozwiązań finansowych do ich specyficznego trybu pracy zaowocowało powstanie unikatowego programu Emerytura Dla Sportowca.pl.',
      'img': 'jkacprzak'
    }/*,
    {
      'id': 1,
      'name': 'O firmie',
      'subname': 'Od samego początku istnienia naszą nadrzędną wartością jest wysoka jakość obsługi.',
      'content': 'Oferując usługi doradztwa finansowego na najwyższym poziomie istniejemy na rynku blisko 5 lat. Nasza skuteczność,charyzma i bardzo indywidualne podejście do Klientów spowodowało nawiązanie współpracy ze szczególną grupą Klientów jaką są sportowcy.',
      'img': 'jkacprzak'
    },
    {
      'id': 2,
      'name': 'O firmie',
      'subname': 'Od samego początku istnienia naszą nadrzędną wartością jest wysoka jakość obsługi.',
      'content': 'Oferując usługi doradztwa finansowego na najwyższym poziomie istniejemy na rynku blisko 5 lat. Nasza skuteczność,charyzma i bardzo indywidualne podejście do Klientów spowodowało nawiązanie współpracy ze szczególną grupą Klientów jaką są sportowcy. Zrozumienie naszych Klientów i dostosowanie rozwiązań finansowych do ich specyficznego trybu pracy zaowocowało powstanie unikatowego programu Emerytura Dla Sportowca.pl. Zrozumienie naszych Klientów i dostosowanie rozwiązań finansowych do ich specyficznego trybu pracy zaowocowało powstanie unikatowego programu Emerytura Dla Sportowca.pl. Zrozumienie naszych Klientów i dostosowanie rozwiązań finansowych do ich specyficznego trybu pracy zaowocowało powstanie unikatowego programu Emerytura Dla Sportowca.pl.',
      'img': 'jkacprzak'
    }*/
  ];

  $scope.maxH = 0;
  var tmpH = 0;

  $timeout( function() {
    $(document).ready( function() {
      var aboutWrappers = document.getElementsByClassName('about-wrapper');
      angular.forEach(aboutWrappers, function(elem, key) {
        tmpH = $(elem).outerHeight();
        if (tmpH > $scope.maxH) {
          $scope.maxH = tmpH;
        };
      });  
    });
  }, 1000);

});
