;(function() {
	'use strict';


angular.module('monsterApp').filter('monsterSummary', MonsterSummary);

function MonsterSummary() {

	return function(detail) {

		if(!detail) { 
			return ''; 
		}

		if(detail.length <= 150) {
			return detail;
		}

		return detail.substring(0,150);
	}

}

})();

