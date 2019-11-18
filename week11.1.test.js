

const repeatElement = require('./week11.1');

test('repeatElement is defined', () => {
    expect(repeatElement).toBeDefined();
});

test('it Should return the unique element', () => {
    expect(repeatElement([1, 1, 2, 2, 3, 4, 4, 5, 5])).toEqual(3);
})