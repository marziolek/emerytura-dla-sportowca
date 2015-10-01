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
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home-section', {
        templateUrl: 'views/home-section.html',
        controller: 'HomeSectionCtrl'
      })
      .when('/what-section', {
        templateUrl: 'views/what-section.html',
        controller: 'WhatSectionCtrl'
      })
      .when('/quotes-section', {
        templateUrl: 'views/quotes-section.html',
        controller: 'QuotesSectionCtrl'
      })
      .when('/offer-section', {
        templateUrl: 'views/offer-section.html',
        controller: 'OfferSectionCtrl'
      })
      .when('/recommendation-section', {
        templateUrl: 'views/recommendation-section.html',
        controller: 'RecommendationSectionCtrl'
      })
      .when('/about-section', {
        templateUrl: 'views/about-section.html',
        controller: 'AboutSectionCtrl'
      })
      .when('/contact-section', {
        templateUrl: 'views/contact-section.html',
        controller: 'ContactSectionCtrl'
      })
      .when('/office-section', {
        templateUrl: 'views/office-section.html',
        controller: 'OfficeSectionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
