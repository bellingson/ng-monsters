;(function() {
	'use strict';

angular.module('monsterApp').controller('MonsterListCtrl', MonsterListCtrl);

function MonsterListCtrl() {

	var vm = this;

	vm.monsters = [  	
		{ "id": 1, "name": "Godzilla", "sellerId": 1, "img": "/images/zilla.jpg", "price": 3000000, "type": "Lizard", "modified": "2015-01-11T18:25:43.511Z", "birthday": "1954/01/01", "description": "Godzilla (ゴジラ Gojira?) (/ɡɒdˈzɪlə/; [ɡoꜜdʑiɽa] ( listen)) is a giant monster originating from a series of tokusatsu films of the same name from Japan. It first appeared in Ishirō Honda's 1954 film Godzilla. Since then, Godzilla has gone on to become a worldwide pop culture icon, appearing in numerous media including video games, novels, comic books, television shows, 28 films produced by Toho and two Hollywood films. The character is commonly alluded to by the title King of the Monsters, a phrase first used in Godzilla, King of the Monsters!, the Americanized version of Honda's original 1954 film." },
		{ "id": 2, "name": "King Kong", "sellerId": 2, "img": "/images/kong.jpg",  "price": 2500000, "type": "Monkey", "modified": "2016-01-10T18:25:43.511Z", "birthday": "1933/02/28", "description": "King Kong is a giant movie monster, resembling a colossal gorilla, that has appeared in various media since 1933. The character first appeared in the 1933 film King Kong, which received universal acclaim upon its initial release and re-releases. The film was remade in 1976 and once again in 2005. The character has become one of the world's most famous movie icons, having inspired countless sequels, remakes, spin-offs, imitators, parodies, cartoons, books, comics, video games, theme park rides, and even a stage play.[1] His role in the different narratives varies, ranging from a rampaging monster to a tragic antihero."  },
		{ "id": 3, "name": "Mummy", "sellerId": 3, "img": "/images/mummy.jpg", "price": 1000000, "type": "Un-Dead", "modified": "2016-01-09T18:25:43.511Z", "birthday": "0001/01/01", "description": "A mummy is a deceased human or an animal whose skin and organs have been preserved by either intentional or accidental exposure to chemicals, extreme cold, very low humidity, or lack of air, so that the recovered body does not decay further if kept in cool and dry conditions. Some authorities restrict the use of the term to bodies deliberately embalmed with chemicals, but the use of the word to cover accidentally desiccated bodies goes back to at least 1615 AD"  },
		{ "id": 4, "name": "Frankenstein", "sellerId": 4, "img": "/images/frankenstein.jpg", "price": 5000000, "type": "Man", "modified": "2016-01-08T18:25:43.511Z", "birthday": "1818/09/31", "description": "Frankenstein is a novel written by the English author Mary Wollstonecraft Shelley that tells the story of a young science student Victor Frankenstein, who creates a grotesque but sentient creature in an unorthodox scientific experiment. Shelley started writing the story when she was 18, and the first edition of the novel was published anonymously in London in 1818, when she was 20. Shelley's name first appeared on the second edition, published in France in 1823." }
	];






}


})();