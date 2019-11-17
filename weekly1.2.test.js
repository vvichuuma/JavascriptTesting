

const double = require('./weekly1.2');

test('Double should be defined', () => {
    expect(double).toBeDefined();
})

test('It should return double the array', () => {
    expect(double([1, 2, 3])).toEqual([2, 4, 6]);
})