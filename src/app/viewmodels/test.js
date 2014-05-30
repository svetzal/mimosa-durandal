define(['durandal/app', 'knockout', 'models/emitter'], function (app, ko, Emitter) {

  function Test() {

  	this.val = ko.observable();
  	this.emitter = new Emitter;

	this.output = ko.computed(function() {

		return this.emitter.result(this.val());

	}, this);

  }

  return new Test();
});

