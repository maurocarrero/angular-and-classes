'use strict';

/**
 * @ngdoc function
 * @name angularAndClassesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularAndClassesApp
 */
angular.module('angularAndClassesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
