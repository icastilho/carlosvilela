var carlosvilelaApp = angular.module('carlosvilela', [
    'ngRoute',
    'ngMap',
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
                templateUrl: 'views/detail.html'
            }).
            when('/about', {
                templateUrl: 'views/about.html'
            }).
            when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl'
            }).
            otherwise({
                redirectTo: '/portifolio'
            });
    }]);
