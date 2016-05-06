var app = angular.module('never', []);

app.controller('mainCtrl', [
  '$scope',
  'responses',
  function($scope, responses){
    $scope.responses = responses.responses

    $scope.addResponse = function(){
      if(!$scope.content || $scope.content === '') { return; }
      $scope.responses.push({content: $scope.content, date: Date()});
      $scope.content = '';
    };
}]);

app.factory('responses', [function(){
  var object = {
    responses: [
      {content: 'Pilot and airplane', date: '1/1/2016'},
      {content: 'Live in Spain', date: '1/1/2016'},
      {content: 'See the Grand Canyon', date: '1/1/2016'}
    ]
  };
  return object;
}])