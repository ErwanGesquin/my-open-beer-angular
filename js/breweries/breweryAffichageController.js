module.exports=function($scope,config,$location,modalService, $controller) {
    $controller('BreweryAddController', {$scope: $scope});

    if (angular.isUndefined(config.activeBrewery)) {
        $location.path("breweries/");
    }
    $scope.activeBrewery = config.activeBrewery;

    $scope._affichage = function (brewery) {
        $scope.data.posted = {
            "name": brewery.name,
            "url": brewery.url,
            "created_at": brewery.created_at,
            "updated_at": brewery.updated_at

        };
    }
}
