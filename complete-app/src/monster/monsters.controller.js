
;(function() {
'use strict';

angular.module('monsterApp').controller('MonsterListCtrl', MonsterListCtrl);

function MonsterListCtrl($location, monsterService, cartService, userService, messageService) {

	var vm = this;

	vm.addToCart = addToCart;
	vm.canEdit = canEdit;

	function activate() {
		fetchMonsters();
		updateCartCount();
	};	

	function updateCartCount() {
		vm.cartCount = cartService.itemCount();
	}

	function fetchMonsters() {
		 monsterService.monsters().then(function(r) {
				vm.monsters = r;
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
			messageService.message(monster.name + " was added to your cart");
			updateCartCount();
		}, function(e) {
			messageService.errorMessage(e.message);		
		});		
	}
	
	
	activate();

}

})();


