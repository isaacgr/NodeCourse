const utils = require("./utils");
const expect = require("expect");

describe("Utils", () => {
  describe("#add", () => {
    it("should add two numbers", () => {
      const result = utils.add(33, 11);
      expect(result)
        .toBe(44)
        .toBeA("number");
    });

    it("should async add two numbers", done => {
      utils.asyncAdd(3, 4, sum => {
        expect(sum)
          .toBe(7)
          .toBeA("number");
        done();
      });
    });
  });

  describe("#square", () => {
    it("should square a number", () => {
      const result = utils.square(7);
      expect(result)
        .toBe(49)
        .toBeA("number");
    });

    it("should async square a number", done => {
      utils.asyncSquare(3, square => {
        expect(square)
          .toBe(9)
          .toBeA("number");
      });
      done();
    });
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
});
