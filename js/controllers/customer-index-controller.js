angular.module('CustomerApp')
.controller('CustomersIndexCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('users.json').success(function(data){
    $scope.customers = data;
  });
  $scope.sortBy = 'name';
  $scope.reverse = false;
  $scope.doSort = function(propName) {
    $scope.sortBy = propName;
    $scope.reverse = !$scope.reverse
  };
  $scope.deleteUser = function(id) {
    $scope.customers = _.filter($scope.customers, function(cust){ return cust.id != id; });
  }
}])