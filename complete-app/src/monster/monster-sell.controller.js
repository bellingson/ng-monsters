'use strict';

angular.module('monsterApp').controller('MonsterSellCtrl',function($scope, $routeParams, $location, monsterService) {


	$scope.sellMonster = sellMonster;
	$scope.cancelClicked = cancelClicked;
	$scope.cancelSale = cancelSale;

	var activate = function() {
		
		if($routeParams.id) {

			fetchMonster();

		} else {  // create new monster
			// test data
			$scope.monster = { name: "Jaws", type: "Fish", birthday: "1975/07/21", price: 6000000, img: "https://upload.wikimedia.org/wikipedia/en/e/eb/JAWS_Movie_poster.jpg", description: "Jaws is a 1975 American film directed by Steven Spielberg and based on Peter Benchley's 1974 novel of the same name. The prototypical summer blockbuster, its release is regarded as a watershed moment in motion picture history. In the story, a giant man-eating great white shark attacks beachgoers on Amity Island, a fictional New England summer resort town, prompting the local police chief to hunt it with the help of a marine biologist and a professional shark hunter." };
			// $scope.monster = { };
		}
	}

	function fetchMonster() {

		monsterService.get($routeParams.id).then(function(monster) {
			$scope.monster = monster;
		},function(e) {
			$scope.errorMessage = "Failed to fetch monster";	
		});

	}


	function sellMonster() {

		monsterService.save($scope.monster).then(function() {
			$location.path('/');	
		},function(e) {
			console.log(e);
			$scope.errorMessage = "Update failed";
		});

	}

	function cancelClicked() {

		$location.path('/');

	}

	function cancelSale() {

		if(!confirm("Are you sure you want to cancel this sale?"))
			return;

		monsterService.deleteMonster($scope.monster).then(function(r) {
			$location.path('/');
		}, function(e) {
			console.log(e);
			$scope.errorMessage = "Update failed";
		});


	}

	activate();

});