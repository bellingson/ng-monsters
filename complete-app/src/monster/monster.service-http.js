'use strict';


angular.module('monsterApp').factory('monsterService', function($http, $q) {
	

	function get(monsterId) {

		return $q(function(resolve, reject) {
			$http.get('/api/monster/' + monsterId)
				.success(resolve)
				.error(reject);
		});

	}

	function add(monster) {
		return $q(function(resolve, reject) {
			$http.post('/api/monster', monster)		
				.success(resolve)
				.error(reject);

		});
	} 

	function update(monster) {
		return $q(function(resolve, reject) {
			$http.put('/api/monster/' + monster.id, monster)
				.success(resolve)
				.error(reject);
		});
	}

	function save(monster) {

		if(monster.id) {
			return update(monster);
		} else {
			return add(monster);
		}
	}

	function deleteMonster(monster) {

		return $q(function(resolve, reject) {
			$http.delete('/api/monster/' + monster.id)
				.success(resolve)
				.error(reject);
		});
 	}

 	function monsters() {
 		
		return $q(function(resolve, reject) {
			$http.get('/api/monster')
				.success(resolve)
				.error(reject);
		});

 	}



	return {		
		get: get,
		save: save,
		deleteMonster: deleteMonster,
		monsters: monsters
	}

});