var app = angular.module('before', []);

app.controller('mainCtrl', [
  '$scope',
  function($scope){
    $scope.responses = [
      {content: 'Pilot and airplane', date: '1/1/2016'},
      {content: 'Live in Spain', date: '1/1/2016'},
      {content: 'See the Grand Canyon', date: '1/1/2016'}
    ];

    $scope.addResponse = function(){
      if(!$scope.contents || $scope.contents === '') { return; }
      $scope.responses.push({content: $scope.content, date: Date()});
      $scope.content = '';
    };
}]);