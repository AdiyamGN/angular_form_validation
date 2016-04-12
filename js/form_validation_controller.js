(function () {

	'use strict';

	angular
	  .module('formvalidation')

		.controller('FormValidationController', FormValidationController);


		function FormValidationController() {
			var vm = this;
			vm.formModel = {};

			vm.onSubmit = function(valid) {
				if(valid) {
					console.log('Hey I am submitted!');
					console.log(vm.formModel);
				} else {
					console.log('The Form is invalid');
				}
				

			}
		}


})();