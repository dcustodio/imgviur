'use strict';

/**
 * @ngdoc overview
 * @name imgviurApp
 * @description
 * # imgviurApp
 *
 * Main module of the application.
 */
var app = angular
  .module('imgviurApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.constant('mySettings', {
  apiUri: 'https://api.imgur.com/3'

});
