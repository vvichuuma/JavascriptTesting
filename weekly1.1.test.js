

const sum = require('./weekly1.1');

test('It should be defined', () => {
    expect(sum).toBeDefined();
})

test('It should return the sum of the array elements', () => {
    expect(sum([2, 1, 4, 3])).toEqual(10);
})