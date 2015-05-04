var carlosvilelaApp = angular.module('carlosvilela', [
    'ngRoute',
    'ui.router',
    'carlosvilela.controller'
]);

    carlosvilelaApp.config(['$stateProvider', '$urlRouterProvider', '$provide',
    function($stateProvider, $urlRouterProvider, $provide) {
            $urlRouterProvider.otherwise('/portifolio');

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
            .state('portifolio', {
                url: '/portifolio',
                templateUrl: 'views/portifolio.html',
                controller: 'PortifolioCtrl'
            })
            .state('detail', {
                url: '/portifolio/detail/:id',
                templateUrl: 'views/detail.html',
                controller: 'DetailCtrl'
            });
    }]);
