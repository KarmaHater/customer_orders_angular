var ordersFactory = function($http) {
  var orders = [];
  var factory = {};
  factory.getOrders = function() {
    return $http.get('orders.json')
  };
  return factory;
}
angular.module('CustomerApp')
.factory('ordersFactory', ordersFactory)
ordersFactory.$inject = ['$http']