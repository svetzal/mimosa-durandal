define(['durandal/app', 'knockout','models/inputvalidator'], function (app, ko, InputValidator) {

  function Batch() {

  	var self = this;

  	var inputValidator = new InputValidator();

  	self.finalOutput = ko.observableArray();

  	self.rangeValue = ko.observable();

  	this.nameit = ko.computed(function(){

  		console.log(self.rangeValue());

  		self.finalOutput.removeAll();

  		for(var i = 0; i <= self.rangeValue(); i++) {
  			console.log(i);
  			self.finalOutput.push(inputValidator.inputCheck(i));

  		}

  	});
  }

  return new Batch();
});
