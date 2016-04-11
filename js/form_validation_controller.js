(function () {

	'use strict';

	angular
	  .module('formvalidation')

		.controller('FormValidationController', FormValidationController);


		function FormValidationController() {
			var vm = this;
			vm.formModel = {};
		}


})();