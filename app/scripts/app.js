'use strict';

/**
 * @ngdoc overview
 * @name emeryturaDlaSportowcaApp
 * @description
 * # emeryturaDlaSportowcaApp
 *
 * Main module of the application.
 */
angular
  .module('emeryturaDlaSportowcaApp', [
  'ngAnimate',
  'ngResource',
  'ui.router',
  'ngSanitize',
  'ngTouch',
  'zumba.angular-waypoints',
  'duScroll',
  'angular-carousel',
  'angular-preload-image'
])
  .config(function ($locationProvider) {

  $locationProvider.html5Mode(true);

});
