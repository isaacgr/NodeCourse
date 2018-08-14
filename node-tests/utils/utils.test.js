const utils = require("./utils");
const expect = require("expect");

it("should add two numbers", () => {
  const result = utils.add(33, 11);
  expect(result)
    .toBe(44)
    .toBeA("number");
});

it("should square a number", () => {
  const result = utils.square(7);
  expect(result)
    .toBe(49)
    .toBeA("number");
});

it("should verify first and last names are set", () => {
  const names = utils.setName({ age: 26 }, "Isaac Rowell");
  expect(names)
    .toInclude({
      firstName: "Isaac",
      lastName: "Rowell"
    })
    .toBeA("object");
});
