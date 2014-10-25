'use strict';

/**
 * @ngdoc function
 * @name angularAndClassesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAndClassesApp
 */
angular.module('angularAndClassesApp')
  .controller('MainCtrl', function ($scope, personsModel) {
    $scope.persons = personsModel.getAll();
  });
