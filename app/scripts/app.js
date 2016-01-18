'use strict';

/**
 * @ngdoc overview
 * @name arkAutoBuildTestRepoApp
 * @description
 * # arkAutoBuildTestRepoApp
 *
 * Main module of the application.
 */
angular
  .module('arkAutoBuildTestRepoApp', [
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
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
