'use strict';

angular.module('monsterApp').controller('MonsterDetailCtrl',function($scope, $routeParams, $location, monsterService, cartService) {

	$scope.addToCart = addToCart;	

	var activate = function() {
		fetchMonster();
		updateCartCount();
	};

	function fetchMonster() {

		var id = $routeParams.id;
		monsterService.get(id).then(function(r) {			
			$scope.monster = r;
		});

	}

	function addToCart(monster) {

		cartService.add(monster).then(function() {
			$location.path('/');
		},function(e) {
			$scope.errorMessage = e.message;
		});
	}

	function cancelClicked() {

		$location.path('/');
	}

	function updateCartCount() {
		$scope.cartCount = cartService.itemCount();
	}

	activate();
});