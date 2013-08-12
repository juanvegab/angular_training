'use strict';

angular.module('angularTestApp', [])
  .config(function ($routeProvider) {
    $routeProvider.
      when('/',           {templateUrl:'views/main.html',            controller: 'MainCtrl'}).
      when('/phones'     ,{templateUrl:'views/elementsList.html'    ,controller: 'ElementslistCtrl'}).
      otherwise({redirectTo: '/'});
  });