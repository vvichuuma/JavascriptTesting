const Promisez = require("./testPromise");

test("function should be defined", () => {
  expect(Promisez).toBeDefined();
});

test("function should return a response", async () => {
  const res = await Promisez();
  expect(res.data.name).toEqual("Ervin Howell");
});
