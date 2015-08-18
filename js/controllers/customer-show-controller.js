angular.module('CustomerApp')
.controller('CustomersShowCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
  $http.get('users.json').success(function(data){
    for (var i = data.length - 1; i >= 0; i--) {
      if (data[i].id === $routeParams.id) {
        $scope.customer = data[i]
        break;
      };
    };
  });
}]);