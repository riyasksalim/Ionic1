
var app = angular.module('starter', ['ionic', 'ionic-material', 'starter.services', 'ngMap']);

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
    
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.lists', {
        url: '/lists/:status/:param2',
        views: {
            'menuContent': {
                templateUrl: 'templates/POILIST.html',
                controller: 'PoiListController'
            }
        }
    })

    .state('app.ink', {
        url: '/ink',
        views: {
            'menuContent': {
                templateUrl: 'templates/ink.html',
                controller: 'InkCtrl'
            }
        }
    })

    .state('app.motion', {
        url: '/motion',
        views: {
            'menuContent': {
                templateUrl: 'templates/LocationChoose.html',
                controller: 'ChoosingLocationController'
            }
        }
    })

    .state('app.components', {
        url: '/components',
        views: {
            'menuContent': {
                templateUrl: 'templates/Introduction-page.html',
                controller: 'IntroductionController'
            }
        }
        })
        .state('app.SelectLocation', {
            url: '/SelectLocation/:status/:param2',
            views: {
                'menuContent': {
                    templateUrl: 'templates/SelectLocation.html',
                    controller: 'SelectLocationController',
                   // params: { new_param: null }
                }
            }
        })

    .state('app.extensions', {
        url: '/extensions',
        views: {
            'menuContent': {
                templateUrl: 'templates/extensions.html',
                controller: 'ExtensionsCtrl'
            }
        }
    })
    ;
    
    $urlRouterProvider.otherwise('/app/components');
});
