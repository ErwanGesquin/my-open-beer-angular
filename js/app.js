angular.module("mainApp",["ngRoute","ngResource","ngAnimate",require("./breweries/breweriesModule"),require("./config/configModule"), require("./beers/beersModule")]).
controller("MainController", ["$scope","$location","save","$window", "login",require("./mainController")]).
controller("SaveController", ["$scope","$location","save",require("./save/saveController")]).
service("rest", ["$http","$resource","$location","config","$sce",require("./services/rest")]).
service("save", ["rest","config","$route",require("./services/save")]).
service("login", ["$http","$resource","$location","rest",require("./services/login")]).
config(["$routeProvider","$locationProvider","$httpProvider",require("./config")]).
filter("NotDeletedFilter",require("./addons/notDeletedFilter")).
directive("sortBy", [require("./addons/sortBy")]).
directive("Drag",require("./addons/drag")).
directive("bsModal",["$q",require("./addons/modal")]).
service("modalService",["$q","$compile","$rootScope","$sce",require("./addons/modalService")]).
run(['$rootScope','$location', '$routeParams', function($rootScope, $location, $routeParams) {
	$rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
		var paths=$location.path().split("/");
		var result=new Array();
		var href="";
		for(var i in paths){
			var p={};
			if(paths[i]){
				p.caption=paths[i];
				if(i<paths.length-1){
					p.href=href+paths[i]+"/";
					href+=paths[i];
				}else{
					p.href="";
				}
				result.push(p);
			}
		}
		$rootScope.paths=result;
	});
}]
).factory("config", require("./config/configFactory"));
