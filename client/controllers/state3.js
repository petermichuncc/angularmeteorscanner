/*
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import '../main.html';

import angular from 'angular';
import angularMeteor from 'angular-meteor';
 import uiRouter from 'angular-ui-router';



angular.module('socially', [
  angularMeteor,'ui.router'
])
.controller('state3Ctrl', function($scope, $reactive) {
    'ngInject';
  $scope.submit = function() {
        if ($scope.text) {
          
          Session.set("test", this.text)
          console.log("this is the session" + Session.get("test"))
        }
      };
      $scope.$watch('inputVal', function(val) {
        if (val) {
            console.log(val);
        }
    });
    $reactive(this).attach($scope);
 
    this.helpers({
      parties() {
        return Parties.find({name:"name2"});
      },
      orders(){
        return Orders.find({})
      }
    });
  });
*/