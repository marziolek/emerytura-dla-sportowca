'use strict';

/**
 * @ngdoc function
 * @name emeryturaDlaSportowcaApp.controller:ContactSectionCtrl
 * @description
 * # ContactSectionCtrl
 * Controller of the emeryturaDlaSportowcaApp
 */
angular.module('emeryturaDlaSportowcaApp')
  .controller('ContactSectionCtrl', function ($scope) {

  $scope.animateLabel = function(e) {
    var parent = e.currentTarget.parentElement;
    $(parent).addClass('active');
  };
  
  $scope.unAnimateLabel = function(e) {
    var parent = e.currentTarget.parentElement;
    $(parent).removeClass('active');
  };
});
