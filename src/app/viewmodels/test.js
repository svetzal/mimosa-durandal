define(['durandal/app', 'knockout','jquery','models/inputvalidator'], function (app, ko, $, InputValidator) {

  function Test() {

    var self = this;

	self.numInput = ko.observable();

	var inputValidator = new InputValidator();

	self.numOutput = ko.computed(function() {

		var finalOutput = inputValidator.inputCheck(self.numInput());

        if(finalOutput != "Not Valid Data"){
            $('.output').addClass('alert-success').removeClass('alert-danger');
        }
        else{
            $('.output').addClass('alert-danger').removeClass('alert-success');
        }
		return finalOutput;

	}, this);

  }

  return new Test();
});

