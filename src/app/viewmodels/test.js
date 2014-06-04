define(['durandal/app', 'knockout', 'emitter_config','jquery','models/utilities'], function (app, ko, emitterConfig, $, Utilities) {

  function Test() {

  	var self = this;
	self.numInput = ko.observable();

	console.log(self.numInput());
	self.emitters = emitterConfig.emitters;

	self.numOutput = ko.computed(function() {

		var utility = new Utilities();

		var finalOutput = "";

		var input = utility.trimWhiteSpaceFromString(self.numInput());

		var outputHasBeenAssigned = false;

		$.each(this.emitters(), function(index, value) {

			console.log(ko.toJS(value));

			if(value.isInputModEqualToZero(input)) {

				finalOutput += value.output();

				outputHasBeenAssigned = true;

			}
		});

		if(!outputHasBeenAssigned) {

			finalOutput = input;

		}

		if(isNaN(self.numInput())) {

			finalOutput = "Not Valid Data";

		}
		else if(utility.isEqualToZero(input)) {

			finalOutput = "0";

		}
		else if(utility.isLengthLessThanOne(input)) {

			finalOutput = "" + self.numInput();

		}
		else if(utility.isEqualToASpace(input)) {

			finalOutput = "Not Valid Data";

		}

		return finalOutput;

	}, this);

  }

  return new Test();
});

