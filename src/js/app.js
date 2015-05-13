var carlosvilelaApp = angular.module('carlosvilela', [
    'ngRoute',
    'ui.router',
    'ngAnimate',
    'carlosvilela.controller'
]);

    carlosvilelaApp.config(['$stateProvider', '$urlRouterProvider', '$provide',
    function($stateProvider, $urlRouterProvider, $provide) {
            $urlRouterProvider.otherwise('/portfolio');

            $stateProvider
/*            .state('carlosvilela', {
                url: "/carlosvilela",
                abstract: true,
                templateUrl: "index.html"
            })*/
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .state('portfolio', {
                url: '/portfolio',
                templateUrl: 'views/portfolio.html',
                controller: 'PortfolioCtrl'
            })
            .state('detail', {
                url: '/portfolio/detail/:id',
                templateUrl: 'views/detail.html',
                controller: 'DetailCtrl'
            });
    }]);



