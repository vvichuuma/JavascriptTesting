

const SumOfRange = require("./weekly4.5");

test("SumOfRange should be defined", () => {
    expect(SumOfRange).toBeDefined();
})

test("Should return sum of range", () => {
    expect(SumOfRange(1, 4)).toEqual(10);
})

test("Should return sum of range", () => {
    expect(SumOfRange(4, 1)).toEqual(10);
})