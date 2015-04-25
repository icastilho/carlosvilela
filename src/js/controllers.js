/**
 * Created by icastilho on 30/03/15.
 */
var controller = angular.module('carlosvilela.controller', []);


controller.controller('MenuCtrl', function ($scope) {

})
    .controller('PortifolioCtrl', function ($scope) {
        $scope.phones = "Home Carlos Vilela";

        $(".diamondswrap").diamonds({
            size : 440,
            gap : 1,
            hideIncompleteRow :false,
            autoRedraw :true,
            itemSelector : ".item"
        });


        $('.item').hover(
            function(){
                $(this).find('img').addClass('dimond-box-img-hover');

                $(this).parent().find('.itemhover').addClass('itemhoverdover');

            },
            function(){
                $(this).parent().find('.itemhover').removeClass('itemhoverdover');
                $(this).find('img').removeClass('dimond-box-img-hover');
            });
    })
    .controller('ContactCtrl', function ($scope) {
        $scope.$on('mapInitialized', function(event, map) {
            map.setCenter(41,-87);
        });
    });
