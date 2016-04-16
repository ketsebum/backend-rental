var app = angular.module('customers', []);

var CustomerSearchController = function($scope) {
  $scope.search = function(searchTerm) {
    $scope.searchedFor = searchTerm;
  };
};

app.controller("CustomerSearchController", ["$scope", CustomerSearchController]);
