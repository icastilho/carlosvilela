/**
 * Created by icastilho on 30/03/15.
 */
var controller = angular.module('carlosvilela.controller', []);

controller
    .controller('CarlosvilelaCtrl', function () {

    })
    .controller('MenuCtrl', function () {

        $('.toggle-nav').on('click touchstart', function(e){
            $('html').toggleClass('menu-active');
            e.preventDefault();
        });
    })
    .controller('PortfolioCtrl', function ($scope) {

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
    .controller('DetailCtrl', function ($scope, $stateParams) {

        $scope.item  = portifolios[$stateParams.id];
        $scope.id = $stateParams.id;
        var keys = Object.keys(portifolios);

        var key = keys.indexOf($stateParams.id);

        if(key === 0){
            $scope.prevkey = keys[keys.length-1];
            $scope.prev = portifolios[$scope.prevkey];
        }else{
            $scope.prevkey = keys[key -1];
            $scope.prev = portifolios[$scope.prevkey];
        }

        if(key == keys.length-1){
            $scope.nextkey = keys[0];
            $scope.next = portifolios[ $scope.nextkey];
        }else{
            $scope.nextkey = keys[key + 1];
            $scope.next = portifolios[$scope.nextkey];
        }


        $scope.packeryInit = function () {
            console.log('packeryInit');
            var $container = $('#container_mosaico').imagesLoaded( function(){

              $container.packery({
                itemSelector: '.item',
                gutter: '.gutter-sizer',
                columnWidth: '.grid-sizer',
                rowHeight: '.grid-sizerheight',
                percentPosition: true
              });
            });
        };

    });


var portifolios = {
    batavinho: {
        name: 'BATAVINHO',
        type: 'PDV',
        title: 'É O BICHO',
        about: 'Ruinite é um espumante que tinha recem-chegado ao brasil e tinha o desafio de demonstrar que a melhorforma de apreciar a bebida seria gelada. com isso criei a propaganda, trocando a.',
        agency: 'AGEVOLE',
        client: 'BATAVO',
        role: 'ART DIRECTION',
        farmEva: 'MINGONE / LG MARKETING',
        url: 'views/portifolio/batavinho.html'
    },


    riunite: {
        name: 'RIUNITE',
        type: 'ADVERTISING',
        title: 'BEST WAY',
        about: 'Ruinite é um espumante que tinha recem-chegado ao brasil e tinha o desafio de demonstrar que a melhorforma de apreciar a bebida seria gelada. com isso criei a propaganda, trocando a.',
        agency: 'AGEVOLE',
        client: 'SANTAR',
        role: 'ART DIRECTION'


    },


    twistedlove: {
        name: 'BIO RITMO',
        type: 'CAMPAING',
        title: 'TWISTED LOVE',
        about: 'Ruinite é um espumante que tinha recem-chegado ao brasil e tinha o desafio de demonstrar que a melhorforma de apreciar a bebida seria gelada. com isso criei a propaganda, trocando a.',
        agency: 'GRANZA',
        client: 'BIO RITMO',
        role: 'ART DIRECTION'
    },


    bonsonhos: {
        name: 'ELEGÊ',
        type: 'CAMPAING',
        title: 'SWEET DREAMS',
        about: 'Ruinite é um espumante que tinha recem-chegado ao brasil e tinha o desafio de demonstrar que a melhorforma de apreciar a bebida seria gelada. com isso criei a propaganda, trocando a.',
        agency: 'AGEVOLE',
        client: 'ELEGÊ',
        role: 'ART DIRECTION'
    },


    sthelena: {
        name: 'ST. HELENA',
        type: 'PDV',
        title: 'LOUNGE',
        about: 'Ruinite é um espumante que tinha recem-chegado ao brasil e tinha o desafio de demonstrar que a melhorforma de apreciar a bebida seria gelada. com isso criei a propaganda, trocando a.',
        agency: 'AGEVOLE',
        client: 'INTERFOOD',
        role: 'ART DIRECTION, 3D DESIGN'
    },


    jacks: {
        name: 'JACK`S',
        type: 'DISPLAY',
        title: 'ISLAND',
        about: 'Ruinite é um espumante que tinha recem-chegado ao brasil e tinha o desafio de demonstrar que a melhorforma de apreciar a bebida seria gelada. com isso criei a propaganda, trocando a.',
        agency: 'AGEVOLE',
        client: 'JACK DANIEL’S',
        role: 'ART DIRECTION, 3D DESIGN'
    },


    frido: {
        name: 'FRIDO',
        type: 'BRANDING',
        title: 'WEAR',
        about: 'Ruinite é um espumante que tinha recem-chegado ao brasil e tinha o desafio de demonstrar que a melhorforma de apreciar a bebida seria gelada. com isso criei a propaganda, trocando a.',
        agency: 'CARLOS VILELA',
        client: 'FRIDO',
        role: 'ART DIRECTION'
    },


    up: {
        name: 'UP',
        type: 'BRANDING',
        title: 'PRODUÇÕES',
        about: 'Ruinite é um espumante que tinha recem-chegado ao brasil e tinha o desafio de demonstrar que a melhorforma de apreciar a bebida seria gelada. com isso criei a propaganda, trocando a.',
        agency: 'CARLOS VILELA',
        client: 'UP PRODUÇÕES',
        role: 'ART DIRECTION'
    },


    biokids: {
        name: 'BIO KIDS',
        type: 'CAMPAING',
        title: 'POOL',
        about: 'Ruinite é um espumante que tinha recem-chegado ao brasil e tinha o desafio de demonstrar que a melhorforma de apreciar a bebida seria gelada. com isso criei a propaganda, trocando a.',
        agency: 'GRANZA',
        client: 'BIO RITMO',
        role: 'ART DIRECTION'
    },


    aba: {
        name: 'ABA',
        type: 'CAMPAING',
        title: '2014',
        about: 'Ruinite é um espumante que tinha recem-chegado ao brasil e tinha o desafio de demonstrar que a melhorforma de apreciar a bebida seria gelada. com isso criei a propaganda, trocando a.',
        agency: 'GRANZA',
        client: 'ABA',
        role: 'ART DIRECTION'
    },


    carballo: {
        name: 'CARBALLO',
        type: 'STAND',
        title: 'SUPER BAHIA',
        about: 'Ruinite é um espumante que tinha recem-chegado ao brasil e tinha o desafio de demonstrar que a melhorforma de apreciar a bebida seria gelada. com isso criei a propaganda, trocando a.',
        agency: 'AGEVOLE',
        client: 'CARBALLO FARO',
        role: 'ART DIRECTION, 3D DESIGN'
    },


    lounge_jack: {
        name: 'JACK’S',
        type: 'TAYLOR MADE',
        title: 'LOUNGE',
        about: 'Ruinite é um espumante que tinha recem-chegado ao brasil e tinha o desafio de demonstrar que a melhorforma de apreciar a bebida seria gelada. com isso criei a propaganda, trocando a.',
        agency: 'AGEVOLE',
        client: 'JACK DANIEL’S',
        role: 'ART DIRECTION, 3D DESIGN'
    }

};
