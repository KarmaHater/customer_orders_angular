angular.module('CustomerApp')
.controller('CustomerOrdersCtrl', ['$scope', '$http', '$routeParams', '$log', 'ordersFactory', 'customersFactory', function ($scope, $http, $routeParams, $log, ordersFactory, customersFactory) {
  function init() {
    customersFactory.getCustomers()
    .success(function(data){
      _.filter(data, function(cust){ 
        if (cust.id === $routeParams.id) {
          $scope.customer = cust
          $scope.getCutomerOrders(cust.id)
        };
      });
    })
    .error(function(data, status, headers, config) {
      $log.log("data: " + data)
      $log.log("status: " + status)
      $log.log("config: " + config)
    });
  };
  init();
  $scope.getCutomerOrders = function(id) {
    ordersFactory.getOrders()
    .success(function(data){
      _.filter(data, function(order){
        if (order.customer_id === $routeParams.id) $scope.customerOrders = order.orders
      });
    })
    .error(function(data, status, headers, config) {
      $log.log("data: " + data)
      $log.log("status: " + status)
      $log.log("config: " + config)
    });
  }
}]);