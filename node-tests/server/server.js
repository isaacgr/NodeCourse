const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.status(200).send("Hello World!");
});

app.get("/users", (request, response) => {
  response.status(200).send([
    {
      name: "Isaac",
      age: 26
    }
  ]);
});

app.listen(3000);

module.exports.app = app;
