;(function() {
	'use strict';


angular.module('monsterApp').factory('monsterService', MonsterService);

MonsterService.$inject = [ 'Restangular' ];


function MonsterService(Restangular) {

	var Monsters = Restangular.all('monster');

	function get(id) {	
		return Restangular.one('monster',id).get();
	}


	function save(monster) {

		if(monster.id) {
			var editMonster = Restangular.copy(monster);
			return editMonster.put();
		} else {
			return Monsters.post(monster);
		}		
	}

	function deleteMonster(monster) {
		return monster.remove();
	}

	function monsters() {
		return Monsters.getList();
	}

	return {		
		
		get: get,
		save: save,
		deleteMonster: deleteMonster,
		monsters: monsters
	}

}


})();


