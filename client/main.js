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
 $scope.$watch('inputVal', function(val) {
        if (val) {
            console.log(val);
            Session.set("test",val)
            console.log("this is the session var "+ Session.get("test"))
        }
    });
    $reactive(this).attach($scope);
 
    this.helpers({
      parties() {
        return Parties.find({});
      }
    });
  });





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
    }
]);