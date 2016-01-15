;(function() {
	'use strict';

angular.module('monsterApp').factory('messageService', MessageService);

function MessageService($location) {

	var msgStore = {};

	var subscribers = [];

	function subscribe(fn) {
		subscribers.push(fn);
	}

	function unsubscribe() {
		subscribers = [];
	}

	function message(msg, path) {
		return addOrGetMessage('message', msg, path);
	}

	function errorMessage(msg, path) {
		return addOrGetMessage('errorMessage', msg, path);
	}	

	function addOrGetMessage(key, msg, path) {


		if (msg) {   // set a message in the store
			msgStore = {};
			msgStore[key] = { text: msg, path: (path || $location.path()) }			
			subscribers.forEach(function(s) { s(); } );		
			return;
		}

		// retrieve a message and clear the store if the message path matches current path
		var msgForKey = msgStore[key];
		if(msgForKey) {             
			if($location.path() === msgForKey.path) {
				msgStore[key] = null;
			}
			return msgForKey.text;
		}

		return null;
	}

	return {
		message: message,
		errorMessage: errorMessage,
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



})();

