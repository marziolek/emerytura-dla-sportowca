'use strict';

/**
 * @ngdoc function
 * @name emeryturaDlaSportowcaApp.controller:ContactSectionCtrl
 * @description
 * # ContactSectionCtrl
 * Controller of the emeryturaDlaSportowcaApp
 */
angular.module('emeryturaDlaSportowcaApp')
  .controller('ContactSectionCtrl', function ($scope, $http) {

  $scope.animateLabel = function(e) {
    var parent = e.currentTarget.parentElement;
    $(parent).addClass('active');
  };

  $scope.unAnimateLabel = function(e) {
    var parent = e.currentTarget.parentElement;
    $(parent).removeClass('active');
  };

  $scope.formSubmit = function(form) {
    console.log(form);

    $http({
      method: 'POST',
      url: '/phpMailing/sendmail.php',
      data: $.param({ 
        phone: form.phone,
        fullname: form.fullname,
        hour: form.hour
      }),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(function successCallback(response) {
      console.log(response);
      console.log(1);
    }, function errorCallback(response) {
      console.log(response);
      console.log(0);
    });
  };
});
