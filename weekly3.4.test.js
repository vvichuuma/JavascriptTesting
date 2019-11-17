
const palindrome = require('./weekly3.4');

test("plaindrome should exists", () => {
    expect(palindrome).toBeDefined();
})

test("Should return true", () => {
    expect(palindrome("racecar")).toBeTruthy();
})

test("Should return false", () => {
    expect(palindrome("wazzzup")).toBeFalsy();
})