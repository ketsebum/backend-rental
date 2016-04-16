var app = angular.module('customers', []);

app.controller("CustomerSearchController", ["$scope", CustomerSearchController]);

var CustomerSearchController = function($scope) {
  $scope.search = function(searchTerm) {
    $scope.searchedFor = searchTerm;
  };
};
