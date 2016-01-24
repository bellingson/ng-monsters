;(function() {
	'use strict';

angular.module('monsterApp').directive('cartButton',['cartService', CartButton]);

CartButton.$inject = [ 'cartService' ];

function CartButton(cartService) {

	return {
		required: 'E',
		link: function(scope, element, attrs) {

			function updateCount() {
				scope.cartCount = cartService.itemCount();	
			}

			cartService.subscribe(updateCount);
			updateCount();
			

		}, 
		template: '<a ng-href="/#/cart" class="btn btn-warning">Checkout ({{cartCount}})</a>'
	};

}


})();