/**
 * Created by icastilho on 30/03/15.
 */
var controller = angular.module('carlosvilela.controller', []);

controller
    .controller('CarlosvilelaCtrl', function () {

    })
    .controller('MenuCtrl', function ($scope) {

        $scope.togglemenu = function(){
            $('html').toggleClass('menu-active');
        };

        $('.toggle-nav').on('click touchstart', function(e){
            $('html').toggleClass('menu-active');
            e.preventDefault();
        });
    })
    .controller('PortfolioCtrl', function ($scope, $window) {
            console.log('PortfolioCtrl');
            $(".diamondswrap").diamonds({
                size: 440,
                gap: 1,
                hideIncompleteRow: false,
                autoRedraw: true,
                itemSelector: ".item"
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
        about: 'Promotional campaign to distribute small animals in EVA, attached to yogurt cartons as gifts. Colorful and fun, the theme was "Farm Life".',
        agency: 'AGEVOLE',
        client: 'BATAVO',
        role: 'ART DIRECTION',
        farmEva: 'MINGONE / LG MARKETING'
    },


    riunite: {
        name: 'RIUNITE',
        type: 'ADVERTISING',
        title: 'BEST WAY',
        about: 'An Advertment focused on introducing a new idea to the consumer, it suggested drinking lambrusco with ice. At this time Riunite had just arrived into the Brazilian market.',
        agency: 'AGEVOLE',
        client: 'SANTAR',
        role: 'ART DIRECTION'


    },


    twistedlove: {
        name: 'BIO RITMO',
        type: 'CAMPAING',
        title: 'TWISTED LOVE',
        about: 'Promotional campaign focused on Valentine`s Day. Gym members could take their partners to work out at their gym for one month at a discounted price.',
        agency: 'GRANZA',
        client: 'BIO RITMO',
        role: 'ART DIRECTION'
    },


    bonsonhos: {
        name: 'ELEGÊ',
        type: 'CAMPAING',
        title: 'SWEET DREAMS',
        about: 'Promotional campaign using a "fairy tales" concept, it proposed giving customers beautiful themed pillows as gifts.',
        agency: 'AGEVOLE',
        client: 'ELEGÊ',
        role: 'ART DIRECTION'
    },


    sthelena: {
        name: 'ST. HELENA',
        type: 'PDV',
        title: 'LOUNGE',
        about: 'A relaxed and cozy space for wine enthusiasts, making it possible to try a wide variety of flavors and recommendations. This work won an award in the Brazilian Festival of Promotion, Trade Marketing, Events and Design in the “drinks" category (gold).',
        agency: 'AGEVOLE',
        client: 'INTERFOOD',
        role: 'ART DIRECTION, 3D DESIGN'
    },


    jacks: {
        name: 'JACK`S',
        type: 'DISPLAY',
        title: 'ISLAND',
        about: 'This display consisted of 4 parts that may be displayed seperately or assembled into one exhibit. The functionality of this display was awarded in the Brazilian Festival of Promotion , Trade Marketing, Events and Design in the “Display” category (gold).',
        agency: 'AGEVOLE',
        client: 'JACK DANIEL’S',
        role: 'ART DIRECTION, 3D DESIGN'
    },


    frido: {
        name: 'FRIDO',
        type: 'BRANDING',
        title: 'WEAR',
        about: 'Mens clothing brand with strong references to "Frida Kahalo”. Their logo is Frida’s most stiking feature (eyebrows) meshed with a man`s mustache, representing the feminine side of masculinity.',
        agency: 'CARLOS VILELA',
        client: 'FRIDO',
        role: 'ART DIRECTION'
    },


    up: {
        name: 'UP',
        type: 'BRANDING',
        title: 'PRODUÇÕES',
        about: 'By having manual techniques and detailists both in origami as well as film projects, use these directions in their resolutions. With this merger, the brand was developed.',
        agency: 'CARLOS VILELA',
        client: 'UP PRODUÇÕES',
        role: 'ART DIRECTION'
    },


    biokids: {
        name: 'BIO KIDS',
        type: 'CAMPAING',
        title: 'POOL',
        about: 'A Campaign to encourage children to swim properly, with creatures from the seabed. Based in stages, children win medals by completing the goals proposed by instruction cards.',
        agency: 'GRANZA',
        client: 'BIO RITMO',
        role: 'ART DIRECTION'
    },


    aba: {
        name: 'ABA',
        type: 'CAMPAING',
        title: '2014',
        about: 'Every year, the ABA promotes events related to the world of communication. Its visual identity was based on the statement "Turn your questions into statements”.',
        agency: 'GRANZA',
        client: 'ABA',
        role: 'ART DIRECTION'
    },


    carballo: {
        name: 'CARBALLO',
        type: 'STAND',
        title: 'SUPER BAHIA',
        about: '110m² of space was developed for the event "Super Bahia" 2012, containing a meeting room, kitchen, bar and a lounge for tasting.',
        agency: 'AGEVOLE',
        client: 'CARBALLO FARO',
        role: 'ART DIRECTION, 3D DESIGN'
    },


    lounge_jack: {
        name: 'JACK’S',
        type: 'TAYLOR MADE',
        title: 'LOUNGE',
        about: 'Surroundings for the nightclub "Boox", promoting a Jack Daniel’s.',
        agency: 'AGEVOLE',
        client: 'JACK DANIEL’S',
        role: 'ART DIRECTION, 3D DESIGN'
    }

};
