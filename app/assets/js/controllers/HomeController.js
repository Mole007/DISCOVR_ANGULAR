var discovrApp = angular.module('DiscovrMain', ['ngCookies','ngRoute','pascalprecht.translate'])
    .config(function($translateProvider,$routeProvider) {
        // Configuración de los idiomas
        $translateProvider.useStaticFilesLoader({
            prefix: '../../../assets/js/languages/',
            suffix: '.json'
        });
        $translateProvider.useLocalStorage();
        $translateProvider.preferredLanguage('es/es');
        // here the html tag works
        $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
        // Configuración de las rutas
        $routeProvider
             .when('/', {
                templateUrl : '../../../assets/templates/pages/Main/Main.html',
             })   
             .otherwise({
                redirectTo: '/'
             });
     })
     .controller('MainController', function($scope, $translate){
       $scope.changeLang = function changeLangFn(langKey) {
            $translate.use(langKey);
       };
    });