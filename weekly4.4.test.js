

const mutation = require('./weekly4.4');

test('mutation should be defined', () => {
    expect(mutation).toBeDefined();
})

test('THey are mutated', () => {
    expect(mutation("burly", "ruby")).toBeTruthy();
})

test('THey are not mutated', () => {
    expect(mutation("burly", "python")).toBeFalsy();
})