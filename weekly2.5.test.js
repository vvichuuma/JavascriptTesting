

const Longest = require("./weekly2.5");

test("Should be defined", () => {
    expect(Longest).toBeDefined();
})

test("Should return longest word", () => {
    expect(Longest("What is the longest word in this phrase?")).toEqual("longest");
})