
const isPrime = require('./weekly6.4');

test('prime function should be defined', () => {
    expect(isPrime).toBeDefined();
})

test('Should return true', () => {
    expect(isPrime(7)).toBeTruthy();
})

test('Should return false', () => {
    expect(isPrime(9)).toBeFalsy();
})