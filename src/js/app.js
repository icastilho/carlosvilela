var carlosvilelaApp = angular.module('carlosvilela', [
    'ngRoute',
    'carlosvilela.controller'
]);

carlosvilelaApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/portifolio', {
                templateUrl: 'views/portifolio.html',
                controller: 'PortifolioCtrl'
            }).
            when('/detail', {
                templateUrl: 'views/detail.html',
                controller: 'DetailCtrl'
            }).
            otherwise({
                redirectTo: '/portifolio'
            });
    }]);
