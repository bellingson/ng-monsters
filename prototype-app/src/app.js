'use strict';


angular.module('monsterApp',['ngRoute'])
	.config(function($routeProvider) {


		$routeProvider.when('/',{
			templateUrl: 'monster/monsters.html',
			controller: 'MonsterListCtrl'
		})
		.when('/view/:id', {
			templateUrl: 'monster/monster.html',
			controller: 'MonsterViewCtrl'
		})
		.when('/add',{
			templateUrl: 'monster/monster-add.html',
			controller: 'MonsterAddCtrl'
		})
		.when('/edit/:id', {
			templateUrl: 'monster/monster-edit.html',
			controller: 'MonsterEditCtrl'
		});


	});