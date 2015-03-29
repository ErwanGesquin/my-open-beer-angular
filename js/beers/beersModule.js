var appBeers=angular.module("BeersApp", []).
	controller("beersController", ["$scope","rest","$timeout","$location","config","$route","save",require("./beersController")]).
	controller("beerAffichageController", ["$scope","rest","$timeout","$location","config","$route","save",require("./beerAffichageController")]).
	controller("beerAddController",["$scope","config","$location","rest","save","$document","modalService",require("./beerAddController")]).
	controller("beerUpdateController",["$scope","config","$location","rest","save","$document","modalService","$controller",require("./beerUpdateController")]);
module.exports=angular.module("BeersApp").name;