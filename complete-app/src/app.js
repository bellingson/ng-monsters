'use strict';


angular.module('monsterApp',['ngRoute','restangular'])
	.config(function($routeProvider) {


		$routeProvider.when('/',{
			templateUrl: 'monster/monsters.html',
			controller: 'MonsterListCtrl'
		})
		.when('/monster/:id', {
			templateUrl: 'monster/monster-detail.html',
			controller: 'MonsterDetailCtrl'
		})
		.when('/sell',{
			templateUrl: 'monster/monster-sell.html',
			controller: 'MonsterSellCtrl'
		})
		.when('/sell/:id', {
			templateUrl: 'monster/monster-sell.html',
			controller: 'MonsterSellCtrl'
		})
		.when('/cart', {
			templateUrl: 'cart/cart.html',
			controller: 'CartViewCtrl'
		});;


	});


angular.module('monsterApp').config(function(RestangularProvider) {
	RestangularProvider.setBaseUrl('/api');		
});


angular.module('monsterApp').filter('monsterSummary', function() {

	return function(detail) {

		if(!detail) { 
			return ''; 
		}

		if(detail.length <= 150) {
			return detail;
		}

		return detail.substring(0,150);
	}

});