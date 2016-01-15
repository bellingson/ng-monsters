;(function() {
	'use strict';

angular.module('monsterApp').controller('CartViewCtrl', CartViewCtrl);

function CartViewCtrl(cartService, messageService) {

	var vm = this;
	
	vm.checkOutClicked = checkOutClicked;
	vm.removeMonster = removeMonster;

	function activate() {
		fetchMonstersInCart();
	};

	function fetchMonstersInCart() {
		vm.monsters = cartService.items();
		vm.totalPrice = cartService.totalPrice();		
	}

	function validate() {

		if(vm.monsters.length == 0) {
			messageService.errorMessage("Your cart is empty");
			return false;
		}

		return true;
	}

	function checkOutClicked() {
		
		if(!validate())
			return;

		messageService.message("Congratulations on your purchase");
	}

	function removeMonster(monster) {
		cartService.remove(monster);
		fetchMonstersInCart();
	}

	activate();
}


})();



