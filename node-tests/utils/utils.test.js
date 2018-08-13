const utils = require("./utils");

it("should add two numbers", () => {
  const result = utils.add(33, 11);
  if (result !== 44) {
    throw new Error(`Expected 44, got ${result} `);
  }
});

it("should square a number", () => {
  const result = utils.square(7);
  if (result !== 49) {
    throw new Error(`Expected 49, got ${result} `);
  }
});
