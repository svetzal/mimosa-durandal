define(['knockout'], function(ko) {
  var Emitter = function(name, modulus, output) {

    this.name = ko.observable(name);
    this.modulus = ko.observable(modulus);
    this.output = ko.observable(output);

    this.result = function(input) {

      var finalOutput = "";

      if (input % this.modulus === 0) {
        finalOutput = this.output;
      }
      else{
        finalOutput = "nothing but air";
      }

      return finalOutput;

    }
  }

  return Emitter;
});
