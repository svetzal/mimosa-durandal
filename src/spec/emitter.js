define(['jasmine', 'knockout', 'models/emitter'], function(jasmine, ko, Emitter) {
    describe('Emitter', function() {

        var emitter;

        it("should return true if matches ", function() {
            emitter = new Emitter("Fizz Emitter",3, "Fizz");
            expect(emitter.isInputModEqualToZero(3)).toEqual(true);
        });

        it("should return Buzz if matches ", function() {
            emitter = new Emitter("Buzz Emitter",5, "Buzz");
            expect(emitter.isInputModEqualToZero(5)).toEqual(true);
        });

        it("should return Woof if matches ", function() {
            emitter = new Emitter("Woof Emitter",7, "Woof");
            expect(emitter.isInputModEqualToZero(7)).toEqual(true);
        });

        it("should return nothing if matches ", function() {
            emitter = new Emitter("Woof Emitter",7, "Woof");
            expect(emitter.isInputModEqualToZero(6)).toEqual(false);
        });
    });
});