//import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import './main.html';

import angular from 'angular';
import angularMeteor from 'angular-meteor';
 import uiRouter from 'angular-ui-router';
angular.module('socially', [
  angularMeteor,'ui.router'
])
.controller('PartiesListCtrl', function($scope, $reactive) {
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



/*
upc1=Number(upc)
      upc=upc.trim()
      //I need to return the partnumber
      
        if (Orders.find({ordernumber:upc1}).count()>=1)
      {
        
        if (typeof Orders.find({ordernumber:upc1}).fetch().pop().partnumber ==="string")
        {
        return Orders.find({ordernumber:upc1}).fetch().pop().partnumber
      }
      else if (typeof Orders.findOne({ordernumber:upc1}).partnumber ==="string")
      {

        return Orders.findOne({ordernumber:upc1}).partnumber
      }
        
      }
    else if (Orders.find({ordernumber:upc}).count()>=1)
    { 
            
 if (typeof Orders.find({ordernumber:upc}).fetch().pop().partnumber ==="string")
        {
        return Orders.find({ordernumber:upc}).fetch().pop().partnumber
      }
      else if (typeof Orders.findOne({ordernumber:upc}).partnumber ==="string")
      {

        return Orders.findOne({ordernumber:upc}).partnumber
      }
      }  
      else
      {
        return false
      }
      */



angular.module("socially").config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "client/home.html"
            })
            .state('state1', {
                url: "/state1",
               	templateUrl: "client/partials/state1.html"
            })
            .state('state2', {
                url: "/state2",
                templateUrl: "client/partials/state2.html",
                controller: "PartiesListCtrl"

            })
            .state('state3', {
                url: "/state3",
                templateUrl: "client/partials/state3.html",
                controller: "PartiesListCtrl"
                

            })
    }
]);