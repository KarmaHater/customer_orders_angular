var customersFactory = function($http) {
  var customers = [];
  var factory = {};
  factory.getCustomers = function() {
    return $http.get('users.json')
  };
  factory.getCustomer = function(id) {
    // come back and finish this
    for (var i = customers.length - 1; i >= 0; i--) {
      if (customers[i].customer_id === $routeParams.id) {
        $scope.customerOrders = customers[i].orders
        break;
      };
    };
  }
  return factory;
}
angular.module('CustomerApp')
.factory('customersFactory', customersFactory)
customersFactory.$inject = ['$http']