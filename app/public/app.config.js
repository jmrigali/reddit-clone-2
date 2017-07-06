(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    // this line is optional
    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'app',
        abstract: true,
        component: 'app'
      })
      .state({
        name: 'something',
        url: '/',
        component: 'something',
      })
      .state({
        name: 'edit',
        url: '/:id',
        component: 'edit',
      })

  }

}());
