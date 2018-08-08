const express = require("express");
const hbs = require("hbs");

const app = express();

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

app.get("/", (request, response) => {
  response.render("home.hbs", {
    pageTitle: "Home Page",
    currentYear: new Date().getFullYear(),
    welcomeMessage: "Hey"
  });
});

app.get("/about", (request, response) => {
  response.render("about.hbs", {
    pageTitle: "About Page",
    currentYear: new Date().getFullYear()
  });
});

app.get("/bad", (request, response) => {
  response.send({
    error: "Error handling request"
  });
});

app.listen(3000);
