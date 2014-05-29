define(['durandal/app', 'knockout', 'models/emitter'], function (app, ko, Emitter) {

  function SetUp() {
    this.emitters = ko.observableArray();

    this.selectedEmitter = ko.observable();

    this.emitterName = ko.observable();
    this.emitterModulus = ko.observable();
    this.emitterOutput = ko.observable();

    this.emitters.push(new Emitter("Fizz Emitter", 3, "Fizz"));
    this.emitters.push(new Emitter("Buzz Emitter", 5, "Buzz"));
    this.emitters.push(new Emitter("Woof Emitter", 7, "Woof"));

    this.newEmitter = function() {
      var emitter = new Emitter("Unnamed Emitter");
      this.emitters.push(emitter);
      this.selectedEmitter(emitter);
    }
  }

  return new SetUp();
});

