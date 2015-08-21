angular.module('CustomerApp')
.controller('CustomersShowCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
  $http.get('users.json').success(function(data){
    $scope.customer = data[$routeParams.id]
  });
}]);
