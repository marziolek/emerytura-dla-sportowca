'use strict';

/**
 * @ngdoc function
 * @name emeryturaDlaSportowcaApp.controller:WhatSectionCtrl
 * @description
 * # WhatSectionCtrl
 * Controller of the emeryturaDlaSportowcaApp
 */
angular.module('emeryturaDlaSportowcaApp')
  .controller('WhatSectionCtrl', function ($scope) {
  $scope.$parent.myScrollOptions = {
    snap: false,
    scrollbars: true,
    mouseWheel: false,
    interactiveScrollbars: true
  };
  
  $scope.personWrapperHeight = $(window).height() + 'px';
});
