/*
angular.module("socially").controller('state2ctrl', ['$scope','$timeout', function($scope,$timeout) {
    $scope.title = "Home";

    $scope.items = ['home','about','contact'];
    $scope.display = function() {
  
        $scope.alertDisplayed = true;
      $timeout(function() {
        $scope.alertDisplayed = false;
      }, 5000)
    };
    
    $scope.alertDisplayed = false;

  
  }]);
  */