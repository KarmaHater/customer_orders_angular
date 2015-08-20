angular.module('CustomerApp')
.controller('OrdersIndexCtrl', ['$scope', '$log', 'ordersFactory', function ($scope, $http, $log, ordersFactory) {
  function init(){
    debugger
    ordersFactory.getOrders()
    // .success(function(data){
    //   $scope.orders = data
    //   debugger
    // })
    // .error(function(data, status, headers, config) {
    //   $log.log("data: " + data)
    //   $log.log("status: " + status)
    //   $log.log("config: " + config)
    // });
  }
  init();
}])