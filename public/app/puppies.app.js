(function () {
  "use strict";

  var app = angular.module('puppiesApp', ['ngRoute', 'ui.bootstrap', 'puppiesCtrls']);
  app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/puppies', {
          templateUrl: '/app/views/puppy-list.html',
          controller: 'PuppyListCtrl'
        }).
        when('/puppies/:puppyId', {
          templateUrl: '/app/views/puppy-detail.html',
          controller: 'PuppyDetailCtrl'
        }).
        otherwise({
          redirectTo: '/puppies'
        });
    }]);

}) ();
