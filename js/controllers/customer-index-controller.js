angular.module('CustomerApp')
.controller('CustomersIndexCtrl', ['$scope', '$http', '$log', 'customersFactory', function ($scope, $http, $log, customersFactory) {
  $scope.sortBy = 'name';
  $scope.reverse = false;
  function init() {
    customersFactory.getCustomers()
    .success(function(data){
      $scope.customers = data
    })
    .error(function(data, status, headers, config) {
      $log.log("data: " + data)
      $log.log("status: " + status)
      $log.log("config: " + config)
    });
  };
  init();
  $scope.doSort = function(propName) {
    $scope.sortBy = propName;
    $scope.reverse = !$scope.reverse
  };
  $scope.deleteUser = function(id) {
    $scope.customers = _.filter($scope.customers, function(cust){ return cust.id != id; });
  }
}])