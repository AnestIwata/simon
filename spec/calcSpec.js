/*--Testing power button to be checked--*/
var addition = require("../scripts/calc.js");


describe("Calculator", function() {
    describe("Addition function", function() {
        it("should return 42", function() {
            expect(addition(20, 22)).toBe(42);
        });
    });
});
