
;(function() {
'use strict';

angular.module('monsterApp').controller('MonsterListCtrl', MonsterListCtrl);


function MonsterListCtrl($scope, $location, monsterService, cartService, userService) {

	$scope.addToCart = addToCart;
	$scope.canEdit = canEdit;

	function activate() {
		fetchMonsters();
		updateCartCount();
	};	

	function updateCartCount() {
		$scope.cartCount = cartService.itemCount();
	}

	function fetchMonsters() {
		 monsterService.monsters().then(function(r) {
				$scope.monsters	= r;
				// console.debug('fetched monsters');
			});
	}

	function canEdit(monster) {

		var currentUser = userService.currentUser();
		if(monster.sellerId == currentUser.id)
			return true;

		return false;
	}

	function addToCart(monster) {

		cartService.add(monster).then(function() {
			displayMessage(monster.name + " was added to your cart");
			updateCartCount();
		}, function(e) {
			displayErrorMessage(e.message);		
		});		
	}

	function displayErrorMessage(msg) {
		$scope.errorMessage = msg;
		$scope.message = null;
	}

	function displayMessage(msg) {
		$scope.errorMessage = null;
		$scope.message = msg;
	}
	
	activate();

}

})();


