'use strict';

/**
 * @ngdoc service
 * @name angularAndClassesApp.Person
 * @description
 * # Person
 * Factory in the angularAndClassesApp.
 */
angular.module('angularAndClassesApp')
  .factory('Person', function () {

    function Person(name, lastname, pBirthdate) {

      // PRIVATE

      var birthdate = new Date(pBirthdate);

      function _calculateAge(birthdate) { // birthday is a date
        var ageDifMs = Date.now() - birthdate.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
      }

      // PUBLIC

      this.name = name;
      this.lastname = lastname;
      
      this.getAge = function () {
        return _calculateAge(birthdate);
      };
    }

    // BUILDER
    Person.build = function (data) {
      return new Person(
        data.name,
        data.lastname,
        data.birthdate
      );
    };

    return Person;

  });
