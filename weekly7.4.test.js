
const highestPrime = require('./weekly7.4');

test('function should be defined', () => {
    expect(highestPrime).toBeDefined();
})

test('funciton should return prime Array', () => {
    expect(highestPrime(11)).toEqual([2, 3, 5, 7, 11]);
})