var carlosvilelaApp = angular.module('carlosvilela', [
    'ngRoute',
    'ui.router',
    'ngAnimate',
    'carlosvilela.controller'
]);

    carlosvilelaApp.config(['$stateProvider', '$urlRouterProvider', '$provide',
    function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/portfolio');

            $stateProvider
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


    }])
        .run(["$rootScope", "$anchorScroll" , function ($rootScope, $anchorScroll) {
            $rootScope.$on("$locationChangeSuccess", function() {
                $anchorScroll();
            });
        }]);



