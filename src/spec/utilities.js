define(['jasmine', 'models/utilities'], function(jasmine, Utilities) {
    describe('Utilities', function() {
    var utility;

    beforeEach(function() {
      utility = new Utilities();
    });

        it("0 should return true if equal to 0 ", function() {
            expect(utility.isEqualToZero(0)).toEqual(true);
        });

        it("1 should return false if not equal to 0 ", function() {
            expect(utility.isEqualToZero(1)).toEqual(false);
        });

        it("zero should return false if not equal to 0 ", function() {
            expect(utility.isEqualToZero("zero")).toEqual(false);
        });

        it("/1/1/1/1/1 should return false if not equal to 0 ", function() {
            expect(utility.isEqualToZero("/1/1/1/1/1")).toEqual(false);
        });

        it("ajkndsfkjasdnfjknsdfjkasndf should return false if not equal to 0 ", function() {
            expect(utility.isEqualToZero("ajkndsfkjasdnfjknsdfjkasndf")).toEqual(false);
        });

        it("-12321 should return false if not equal to 0 ", function() {
            expect(utility.isEqualToZero(-12321)).toEqual(false);
        });

        it("0.00000001 should return false if not equal to 0 ", function() {
            expect(utility.isEqualToZero(0.00000001)).toEqual(false);
        });

        it("nothing should return true if length less than one ", function() {
            expect(utility.isLengthLessThanOne("")).toEqual(true);
        });

        it("111 should return false if length greater than one ", function() {
            expect(utility.isLengthLessThanOne("111")).toEqual(false);
        });

        it("space should return true if equal to a space ", function() {
            expect(utility.isEqualToASpace(" ")).toEqual(true);
        });

        it("111 should return false if not equal to a space", function() {
            expect(utility.isEqualToASpace("111")).toEqual(false);
        });

        it("spaces should return false if not equal to a space", function() {
            expect(utility.isEqualToASpace("        ")).toEqual(false);
        });

        it("tabs should return no more than 1 space", function() {
            expect(utility.trimWhiteSpaceFromString("     ")).toEqual(" ");
        });

    });
});
