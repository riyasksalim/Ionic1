
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

   

        .state('lists', {
            url: "/lists/:status/:param2",
            templateUrl: "templates/POILIST.html",
            controller: "PoiListController"
        })

        .state('ink', {
            url: "/ink",
            templateUrl: "templates/ink.html",
            controller: "InkCtrl"
        })
        .state('SelectLocation', {
            url: "/SelectLocation/:status/:param2",
            templateUrl: "templates/SelectLocation.html",
            controller: "SelectLocationController"
        })
   .state('sitesView', {
        url: "/sitesView",
        templateUrl: "templates/Introduction-page.html",
        controller: "IntroductionController"
        })
        .state('motion', {
            url: '/motion',
            templateUrl: "templates/LocationChoose.html",
            controller: "ChoosingLocationController"
        })
        .state('extensions', {
            url: '/extensions',
            templateUrl: "templates/extensions.html",
            controller: "ExtensionsCtrl"
        });
  
    $urlRouterProvider.otherwise("/sitesView");
});
