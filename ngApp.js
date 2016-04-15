var app = angular.module('before', []);

app.controller('mainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
}]);