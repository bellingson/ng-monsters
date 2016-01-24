;(function() {
	'use strict';

angular.module('monsterApp').factory('cartService', CartService );

CartService.$inject = [ 'userService', '$q' ];

function CartService(userService, $q) {
	
	var cart = [ ];

	var subscribers = [];

	function add(monster) {

		function _add(monster) {
			
			var currentUser = userService.currentUser();
			if(monster.sellerId == currentUser.id) {
				throw { message: "You can not buy your own monster" };
			}			

			var f = _.filter(cart, function(m) { return m.id == monster.id; } );	
			if(f.length > 0) {
				throw { message: monster.name + " is already in your cart." };
			}	

			cart.push(monster);	

			subscribers.forEach(function(s) { s(); });
		}

		return $q(function(resolve, reject) {

			try {
				_add(monster);
				resolve();
			} catch(e) {
				reject(e);
			}

		});

		
	}

	function remove(monster) {

		_.remove(cart,function(m) { return m.id == monster.id; });
		subscribers.forEach(function(s) { s(); });

	}

	function items() {
		return cart;
	}

	function itemCount() {
		return cart.length;
	}

	function totalPrice() {
		return _.sum(_.map(cart,function(m) { return m.price; }));		
	}

	function subscribe(fn) {
		subscribers = [ fn ];
	}

	return {

		add: add,
		remove: remove,
		itemCount: itemCount,
		items: items, 
		totalPrice: totalPrice, 
		subscribe: subscribe
	};

}



})();


