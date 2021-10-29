
const { add, substract } = require("../problem1")

describe("test adding numbers", () => {

    test("Adding 1,2 should return 3", () => {
        expect(add(1,2)).toBe(3)
    });
    
    test("Adding -10,2 should return 8", () => {
        expect(add(-10,2)).toBe(8)
    });
});


describe("test substracting numbers", () => {

    test("Substracting 1,2 should return 1", () => {
        expect(substract(1,2)).toBe(1)
    });
     
    test("Substracting -10,2 should return 8", () => {
        expect(substract(-10,2)).toBe(12)
    });

    test("Substracting 12,2 should return 8", () => {
        expect(substract(12,2)).toBe(10)
    });
});