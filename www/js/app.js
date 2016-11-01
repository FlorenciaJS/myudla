var app = angular.module('MyUDLA', ['ionic','ngChairaOauth'])

  .run(function ($ionicPlatform, $window) {
    $ionicPlatform.ready(function () {
      if ($window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {

   $stateProvider
     .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    $urlRouterProvider.otherwise('/home');

  })