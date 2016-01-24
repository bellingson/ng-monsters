;(function() {
	
angular.module('monsterApp').directive('moMessages', Messages);

Messages.$inject = [ 'messageService', '$location' ];

function Messages(messageService, $location) {

	return {
		restrict: 'E',
		link: function(scope, element, attrs) {

			messageService.unsubscribe();

			function updateMessages() {
				scope.message = messageService.message();				
				scope.errorMessage = messageService.errorMessage();				

			}

			messageService.subscribe(updateMessages);
			updateMessages();

		},
		templateUrl: 'message/messages.html'

	};
}


})();