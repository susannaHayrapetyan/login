'use strict';

// Declare app level module which depends on views, and components
angular.module('loginApp', [
  'ngRoute',
  'ngCookies',
  'ngResource',
  'btford.socket-io',
  'loginApp.login',
  'loginApp.home',
  'loginApp.services'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/login'});
}]);
