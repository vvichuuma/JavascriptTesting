

const splitArray = require("./weekly3.5");

test("splitArray should be defined", () => {
    expect(splitArray).toBeDefined();
})

test("should return splitArray according to b Value", () => {
    expect(splitArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
})

test("should return splitArray according to b Value", () => {
    expect(splitArray([0, 1, 2, 3, 4, 5], 3)).toEqual([[0, 1, 2], [3, 4, 5]]);
})