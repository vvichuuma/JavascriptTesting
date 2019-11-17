

const alpha = require("./weekly5.5");

test("MIssing alphabet is defined", () => {
    expect(alpha).toBeDefined();
})

test("returns array of missing alphabets", () => {
    expect(alpha("opstuvwxyz")).toEqual(['q', 'r']);
})