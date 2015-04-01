/**
 * Created by icastilho on 30/03/15.
 */
var controller = angular.module('carlosvilela.controller', []);


controller.controller('MenuCtrl', function ($scope) {

    $scope.slidemenu = function (){
        console.log(1);
        //e.preventDefault();
        var distance = $('article').css('left');
        if(distance == "auto" || distance == "0px") {
            openSidepage();
        }else{
            closeSidepage();
        }
    }

    function openSidepage() {
        $('article').animate({
                left: '300px'
            },
            450, 'easeOutBack').promise().done(function (){
                $('nav').css('z-index', '1');
            });
    }

    function closeSidepage(){
        $('nav').css('z-index', '0');
        $('article').animate({
            left: '0px'
        }, 500, 'easeOutQuint');
    }



})
.controller('PortifolioCtrl', function ($scope) {
    $scope.phones = "Home Carlos Vilela";
    $(".diamondswrap").diamonds({
        size : 450,
        gap : 1,
        hideIncompleteRow :false,
        autoRedraw :true,
        itemSelector : ".item"
    });


    $('.item').hover(
        function(){
            $(this).find('img').animate({
                opacity: 0.20
            }, 300).promise();

            $(this).parent().find('.itemhover').animate({
                opacity: 1
            }, 300);

        },
        function(){
            $(this).find('img').stop().css('opacity', 1);
            $(this).parent().find('.itemhover').stop().css('opacity', 0);
        });
})
.controller('DetailCtrl', function ($scope) {

    });
