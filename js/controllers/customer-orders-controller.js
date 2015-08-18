angular.module('CustomerApp')
.controller('CustomerOrdersCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
  $scope.customer = null;
  $http.get('users.json').success(function(data){
    for (var i = data.length - 1; i >= 0; i--) {
      if (data[i].id === $routeParams.id) {
        $scope.customer = data[i]
        $scope.getCutomerOrders(data[i].id)
        break;
      };
    };
  });
  $scope.getCutomerOrders = function(id) {
      $http.get('orders.json').success(function(data){
      for (var i = data.length - 1; i >= 0; i--) {
        if (data[i].customer_id === $routeParams.id) {
          $scope.customerOrders = data[i].orders
          break;
        };
      };
    });
  }
}]);