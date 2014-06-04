define(['durandal/app', 'knockout','jquery','models/inputvalidator'], function (app, ko, $, InputValidator) {

  function Test() {

  	var self = this;

	self.numInput = ko.observable();

	var inputValidator = new InputValidator();

	self.numOutput = ko.computed(function() {

		var finalOutput = inputValidator.inputCheck(self.numInput());

		return finalOutput;

	}, this);

  }

  return new Test();
});

