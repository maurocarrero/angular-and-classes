'use strict';

/**
 * @ngdoc function
 * @name angularAndClassesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAndClassesApp
 */
angular.module('angularAndClassesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
