angular.module('CustomerApp')
.controller('OrdersIndexCtrl', ['$scope', '$log', 'ordersFactory', function ($scope, $log, ordersFactory) {
  $scope.orders = [];
  function init(){
    ordersFactory.getOrders()
    .success(function(data){
      _.each(data, function(o) {
        $scope.orders.push(o.orders)
      });
      $scope.orders = _.flatten($scope.orders);
    })
    .error(function(data, status, headers, config) {
      $log.log("data: " + data)
      $log.log("status: " + status)
      $log.log("config: " + config)
    });
  }
  init();
}])