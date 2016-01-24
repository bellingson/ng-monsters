
;(function() {
	'use strict';

angular.module('monsterApp',['ngRoute','restangular']);

angular.module('monsterApp').config(['RestangularProvider', RestangularConfig ]);

RestangularConfig.$inject = [ 'RestangularProvider' ];

function RestangularConfig(RestangularProvider) {
	RestangularProvider.setBaseUrl('/api');		
}



angular.module('monsterApp').config(['$routeProvider', RouteConfig ]);
// angular.module('monsterApp').config(RouteConfig);

RouteConfig.$inject = [ '$routeProvider' ];

function RouteConfig($routeProvider) {

		$routeProvider.when('/',{
			templateUrl: 'monster/monsters.html',
			controller: 'MonsterListCtrl as list'
		})
		.when('/monster/:id', {
			templateUrl: 'monster/monster-detail.html',
			controller: 'MonsterDetailCtrl as detail'
		})
		.when('/sell',{
			templateUrl: 'monster/monster-sell.html',
			controller: 'MonsterSellCtrl as sell'
		})
		.when('/sell/:id', {
			templateUrl: 'monster/monster-sell.html',
			controller: 'MonsterSellCtrl as sell'
		})
		.when('/cart', {
			templateUrl: 'cart/cart.html',
			controller: 'CartViewCtrl as cart'
		}).otherwise('/');


}


})();

