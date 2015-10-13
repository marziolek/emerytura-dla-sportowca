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

  $scope.form = {
    fullname : '',
    phone : '',
    hour : ''
  };

  $scope.animateLabel = function(e) {
    var parent = e.currentTarget.parentElement;
    $(parent).addClass('active');
  };

  $scope.unAnimateLabel = function(e) {
    if (e.currentTarget.value === '') {
      var parent = e.currentTarget.parentElement;
      $(parent).removeClass('active');
    }
  };

  $scope.messageSent = false;
  $scope.messageError = false;
  
  $scope.formSubmit = function(contactForm) {
    $http({
      method: 'POST',
      url: '/phpMailing/sendmail.php',
      data: $.param({ 
        phone: $scope.form.phone,
        fullname: $scope.form.fullname,
        hour: $scope.form.hour
      }),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(function successCallback(response) {
      if (response) {
        $scope.messageSent = true;
        contactForm.$setPristine();
        contactForm.$setUntouched();
        $scope.form = {};
      }
    }, function errorCallback(error) {
      if (error) {
        $scope.messageError = true;
      }
    });
  };
});