define(['durandal/app', 'knockout','jquery','models/inputvalidator'], function (app, ko, $, InputValidator) {

  function Test() {

    var self = this;

    self.numInput = ko.observable();

    var inputValidator = new InputValidator();

    self.outputClass = ko.observable();

    self.isValidInput = function() {

      var isValid = false;

      var output = inputValidator.inputCheck(self.numInput());

      if(output != "Not Valid Data") {

          isValid = true;

      }

      return isValid;

    };

    self.numOutput = ko.computed(function() {

        self.outputClass = false;

        var finalOutput = inputValidator.inputCheck(self.numInput());

        return finalOutput;

	}, this);

  }

  return new Test();
});

