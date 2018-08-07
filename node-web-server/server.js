const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (request, response) => {
  response.send({
    name: "Isaac",
    stuff: ["things"]
  });
});

app.get("/about", (request, response) => {
  response.send("About Page");
});

app.get("/bad", (request, response) => {
  response.send({
    error: "Error handling request"
  });
});

app.listen(3000);
