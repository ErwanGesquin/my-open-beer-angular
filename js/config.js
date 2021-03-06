module.exports=function($routeProvider,$locationProvider,$httpProvider) {
	//$httpProvider.defaults.useXDomain = true;
	//$httpProvider.defaults.withCredentials = true;
	delete $httpProvider.defaults.headers.common["X-Requested-With"];
	$routeProvider.
	when('/', {
		templateUrl: 'templates/main.html',
		controller: 'MainController'
	}).when('/breweries', {
		templateUrl: 'templates/breweries/main.html',
		controller: 'BreweriesController'
	}).when('/breweries/refresh', {
		templateUrl: 'templates/breweries/main.html',
		controller: 'BreweriesController'
	}).when('/breweries/new', {
		templateUrl: 'templates/breweries/breweryForm.html',
		controller: 'BreweryAddController'
	}).when('/breweries/update', {
		templateUrl: 'templates/breweries/breweryForm.html',
		controller: 'BreweryUpdateController'
	}).when('/breweries/affichage', {
		templateUrl: 'templates/breweries/breweryAffichage.html',
		controller: 'BreweryAffichageController'
	}).when('/saves', {
		templateUrl: 'templates/saveMain.html',
		controller: 'SaveController'
	}).when('/config', {
		templateUrl: 'templates/config.html',
		controller: 'ConfigController'
	}).when('/beers', {
			templateUrl: 'templates/beers/main.html',
			controller: 'beersController'
	}).when('/beers/new', {
			templateUrl: 'templates/beers/beerForm.html',
			controller: 'beerAddController'
	}).when('/beers/affichage', {
		templateUrl: 'templates/beers/beerAffichage.html',
		controller: 'beerAffichageController'
	}).when('/login', {
			templateUrl: 'templates/login/main.html',
			controller: 'mainController'
	}).otherwise({
		redirectTo: '/'
	});
	if(window.history && window.history.pushState){
		$locationProvider.html5Mode(true);
	}
};