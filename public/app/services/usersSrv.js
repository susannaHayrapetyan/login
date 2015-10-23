angular
.module('loginApp.services', [])
.factory('usersSrv', ['$resource', '$cookies', function($resource, $cookies) {
	var path = '/api/';
	var usersSrv = $resource(path + 'users/:id', {}, 
		{
			loginUser: {method:'POST', url: path + 'users/login'},
			logoutUser: {method:'GET', url: path + 'users/logout'}
		});

	usersSrv.login = function(user) {
		
		$cookies.put('currUser', JSON.stringify(user));
	};

	usersSrv.logout = function() {
		
		$cookies.remove('currUser');
	};

	usersSrv.isLoggedIn = function(){
		var currUser = $cookies.get('currUser')
	
		if(currUser)
			return true;

		return false;
	}

	return usersSrv;
}])
