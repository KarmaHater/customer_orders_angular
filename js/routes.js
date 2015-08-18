angular.module('CustomerApp')
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'CustomersIndexCtrl',
    templateUrl: '/templates/pages/users/index.html'
  })
  .when('/orders', {
    controller: 'OrdersCtrl',
    templateUrl: '/templates/pages/orders/index.html'
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
