(function () {
  "use strict";

  var app = angular.module('puppiesCtrls', ['puppiesSvcs']);

  app.controller('PuppyListCtrl', ['$scope', '$http', '$location',
    function ($scope, $http, $location) {
      $scope.from = 0;
      $scope.puppies = [];

    $scope.refresh =function() { $http.get('/rest/puppy',  {params:{ 'from' :$scope.from }}).success(function(data) {
        $scope.puppies = data;
        if (data.length == 0) {
          $scope.from = 0;
        }
      });
    };


    $scope.select = function(puppy) {
      $location.path('/puppies/' + puppy['_id']);
    };

    $scope.previous = function() {
      $scope.from -= 5;
      if ($scope.from < 0) {
        $scope.from = 0;
      }
      $scope.refresh();
    };

    $scope.next = function() {
      $scope.from += 5;
      $scope.refresh();
    };

    $scope.refresh();

  }]);

app.controller('PuppyDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $scope.puppyId = $routeParams.puppyId;

    $http.get('/rest/puppy/' + $scope.puppyId).success(function(data) {
      $scope.puppy = data;
    });

  }]);

}) ();
