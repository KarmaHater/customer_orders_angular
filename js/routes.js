angular.module('CustomerApp')
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'CustomersIndexCtrl',
    templateUrl: '/templates/pages/users/index.html'
  })
  .when('/users/:id/orders', {
    controller: 'CustomerOrdersCtrl',
    templateUrl: '/templates/pages/orders/customer_orders.html'
  })
  .when('/users', {
    controller: 'CustomersIndexCtrl',
    templateUrl: '/templates/pages/users/index.html'
  })
  .when('/users/:id', {
    controller: 'CustomersShowCtrl',
    templateUrl: '/templates/pages/users/show.html'
  })
  .otherwise({ redirectTo: '/' })
}]);
