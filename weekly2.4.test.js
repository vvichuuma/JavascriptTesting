
const reversed = require("./weekly2.4");

test("reverse should be defined", () => {
    expect(reversed).toBeDefined();
})

test('Should return the reverse of String', () => {
    expect(reversed("code")).toEqual("edoc");
})