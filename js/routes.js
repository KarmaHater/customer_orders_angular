angular.module('CustomerApp')
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'CustomersIndexCtrl',
    templateUrl: '/templates/pages/customers/index.html'
  })
  .when('/customers/:id/orders', {
    controller: 'CustomerOrdersCtrl',
    templateUrl: '/templates/pages/orders/customer_orders.html'
  })
  .when('/customers', {
    controller: 'CustomersIndexCtrl',
    templateUrl: '/templates/pages/customers/index.html'
  })
  .when('/orders', {
    controller: 'OrdersIndexCtrl',
    templateUrl: '/templates/pages/orders/index.html'
  })
  .when('/customers/:id', {
    controller: 'CustomersShowCtrl',
    templateUrl: '/templates/pages/customers/show.html'
  })
  .otherwise({ redirectTo: '/' })
}]);
