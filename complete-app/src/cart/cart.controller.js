'use strict';

angular.module('monsterApp').controller('CartViewCtrl',['$scope','cartService', function($scope, cartService) {

	
	$scope.checkOutClicked = checkOutClicked;
	$scope.removeMonster = removeMonster;

	var activate = function() {
		fetchMonstersInCart();
	};

	function fetchMonstersInCart() {
		$scope.monsters = cartService.items();
		$scope.totalPrice = cartService.totalPrice();		
	}

	function validate() {

		if($scope.monsters.length == 0) {
			$scope.errorMessage = "Your cart is empty";
			return false;
		}

		return true;
	}

	function checkOutClicked() {
		
		if(!validate())
			return;

		$scope.message = "Congratulations on your purchase";
	}

	function removeMonster(monster) {
		cartService.remove(monster);
		fetchMonstersInCart();
	}

	activate();
}]);