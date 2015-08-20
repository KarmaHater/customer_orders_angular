angular.module('CustomerApp')
.controller('CustomersShowCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
  $http.get('users.json').success(function(data){
    _.filter(data, function(cust){
      if (cust.id === $routeParams.id) $scope.customer = cust
    });
  });
}]);
