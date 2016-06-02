//import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

import angular from 'angular';
import angularMeteor from 'angular-meteor';
 import uiRouter from 'angular-ui-router';
angular.module('socially', [
  angularMeteor,'ui.router'
])
.controller('PartiesListCtrl', function($scope) {
    'ngInject';

 $scope.title = "Home";

    $scope.helpers({
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