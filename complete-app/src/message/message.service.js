;(function() {
	'use strict';

angular.module('monsterApp').factory('messageService', MessageService);

function MessageService() {

	var _message;
	var _errorMessage;

	var subscribers = [];

	function subscribe(fn) {
		subscribers.push(fn);
	}

	function message(msg) {
		if (msg) {
			_errorMessage = null;
			_message = msg;
			subscribers.forEach(function(s) { s(); } );
			return;
		}

		return _message;
	}

	function errorMessage(msg) {
		if (msg) {
			_errorMessage = msg;
			_message = null;
			subscribers.forEach(function(s) { s(); } );
			return;
		}
		return _errorMessage;
	}


	return {
		message: message,
		errorMessage: errorMessage,
		subscribe: subscribe
	};
}



})();

