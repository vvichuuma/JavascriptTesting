

const letterMostA = require("./weekly6.5");

test("function should be defined", () => {
    expect(letterMostA).toBeDefined();
})

test("Should return word with most A's", () => {
    expect(letterMostA(["alphabet", "aardvark", "anarchy"])).toEqual('aardvark');
})

test("Should return letter with most A's", () => {
    expect(letterMostA(['aaa', 'abc', 'aac'])).toEqual('aaa');
})
