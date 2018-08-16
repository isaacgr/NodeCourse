const request = require("supertest");
const expect = require("expect");

const app = require("./server").app;

let server = null;

before(function(done) {
  server = app.listen(done);
});

after(function(done) {
  server.close(done);
});

describe("Server", () => {
  describe("GET /", () => {
    it("should return hello world response", done => {
      request(app)
        .get("/")
        .expect(200)
        .expect("Hello World!")
        .end(done);
    });
  });

  describe("GET /users", () => {
    it("should return users object", done => {
      request(app)
        .get("/users")
        .expect(200)
        .expect(response => {
          expect(response.body).toInclude({
            name: "Isaac",
            age: 26
          });
        })
        .end(done);
    });
  });
});
