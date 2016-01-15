'use strict';

angular.module('monsterApp').factory('userService',function() {
	
	var user = { id: 1, name: "Jimmy" };

	function currentUser() {
		return user;
	}

	return {
		currentUser: currentUser
	}

});