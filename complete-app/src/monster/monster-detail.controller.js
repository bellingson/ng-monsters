;(function() {
	'use strict';

angular.module('monsterApp').controller('MonsterDetailCtrl', MonsterDetailCtrl);

function MonsterDetailCtrl($routeParams, $location, monsterService, cartService, messageService) {

	var vm = this;

	vm.addToCart = addToCart;	

	function activate() {
		fetchMonster();
		updateCartCount();
	};

	function fetchMonster() {

		var id = $routeParams.id;
		monsterService.get(id).then(function(r) {			
			vm.monster = r;
		});

	}

	function addToCart(monster) {

		cartService.add(monster).then(function() {
			messageService.message('Added ' + monster.name + ' to your cart.','/');
			$location.path('/');
		},function(e) {
			messageService.errorMessage(e.message);
		});
	}

	function cancelClicked() {

		$location.path('/');
	}

	function updateCartCount() {
		vm.cartCount = cartService.itemCount();
	}

	activate();
}	


})();


