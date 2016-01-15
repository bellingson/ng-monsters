;(function() {
	
angular.module('monsterApp').directive('moMessages', Messages);

function Messages(messageService) {

	return {
		restrict: 'E',
		link: function(scope, element, attrs) {

			messageService.subscribe(function() {
				scope.message = messageService.message();
				scope.errorMessage = messageService.errorMessage();
			});


		},
		templateUrl: 'message/messages.html'

	};
}


})();