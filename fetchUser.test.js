const fetch = require("./fetchUser");

test("It should be defined", () => {
  expect(fetch.fetchUser).toBeDefined();
});

test("User name should be Leanne Graham", async () => {
  const user = await fetch.fetchUser();
  expect(user.name).toEqual("Leanne Graham");
});

test("get both", async () => {
  expect.assertions(2);
  const one = fetch.fetchUser().then(data => {
    expect(data.name).toEqual("Leanne Graham");
  });
  const two = fetch.fetchUser2().then(data => {
    expect(data.name).toEqual("Ervin Howell");
  });

  await Promise.all([one, two]);
});
