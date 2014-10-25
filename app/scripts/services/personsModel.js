'use strict';

/**
 * @ngdoc service
 * @name angularAndClassesApp.persons
 * @description
 * # persons
 * Service in the angularAndClassesApp.
 */
angular.module('angularAndClassesApp')
  .service('personsModel', function persons(Person) {
    return {
    	getAll: function () {
    		var persons = [],
    		p1 = Person.build({
    			name: 'Charlie', 
    			lastname: 'Hunter', 
    			birthdate: '10-05-2001'
    		}),
    		p2 = Person.build({
    			name: 'Scott',
    			lastname: 'Amendola',
    			birthdate: '11-22-1981'
    		}),
    		p3 = Person.build({
    			name: 'Phillip',
    			lastname: 'Hoffman',
    			birthdate: '02-12-1978'
    		});

			persons.push(p1);
    		persons.push(p2);
    		persons.push(p3);

    		return persons;
    	}
    };
  });
