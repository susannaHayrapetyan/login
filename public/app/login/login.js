'use strict';

angular.module('loginApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', function($scope, $location, usersSrv, socketSrv) {
	$scope.username = {
		hasError: false,
		value: ""
	}

	$scope.password = {
		hasError: false,
		value: ""
	}

	if(usersSrv.isLoggedIn())
		goToHome();

	socketSrv.on('login-success', function (user) {
		usersSrv.login(user);

	    goToHome();
	});

	socketSrv.on('login-username-error', function () {

		$scope.username.hasError = true;
		$scope.username.errorMessage = "Username is not correct.";
	});

	socketSrv.on('login-password-error', function (user) {

		$scope.password.hasError = true;
		$scope.password.errorMessage = "Password is not correct.";
	});

	$scope.login = function(){
		var user = {
			username: $scope.username.value,
			password: $scope.password.value
		}

		if(!$scope.username.value){
			
			$scope.username.hasError = true;
			$scope.username.errorMessage = "Username is required.";
			return;
		}

		if(!$scope.password.value){
			
			$scope.password.hasError = true;
			$scope.password.errorMessage = "Password is required.";
			return;
		}

		$scope.username.hasError = false;
		$scope.password.hasError = false;

		socketSrv.emit('login', user);

	}

	function goToHome(){
		$location.path('/home')
	}
});