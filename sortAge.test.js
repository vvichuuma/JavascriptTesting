

const sortByAge = require('./sortAge');

test("t should be defined", () => {
    expect(sortByAge).toBeDefined();
})

test("It should return the sorted array by age", () => {
    expect(sortByAge([
        { name: "Saron", age: 34 },
        { name: "Majora", age: 28 },
        { name: "Danilo", age: 45 }
    ])).toEqual([{ name: 'Majora', age: 28 },
    { name: 'Saron', age: 34 },
    { name: 'Danilo', age: 45 }]);
})