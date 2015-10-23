'use strict';

angular.module('loginApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', function($scope, $location, usersSrv) {

	if(!usersSrv.isLoggedIn())
		goToLogin()

	$scope.logout = function(){
		usersSrv.logout();
		goToLogin();
	}

    function goToLogin(){
		$location.path('/login');
	}
});