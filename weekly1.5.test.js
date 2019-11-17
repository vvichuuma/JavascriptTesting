

const average = require('./weekly1.5');

test("average should be defined", () => {
    expect(average).toBeDefined();
})

test("It should return average", () => {
    expect(average([2, 1, 7, 5])).toEqual(3.75);
})