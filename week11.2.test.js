

const firstRepeatElement = require('./week11.2');

test('Function should be defined', () => {
    expect(firstRepeatElement).toBeDefined();
})

test('Function should return first rep ele', () => {
    expect(firstRepeatElement([10, 5, 3, 4, 3, 5, 6])).toEqual(3);
})

test('Function should return first rep ele', () => {
    expect(firstRepeatElement([10, 5, 13, 4, 3, 5, 6])).toEqual(5);
})
