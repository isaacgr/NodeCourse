const express = require("express");
const hbs = require("hbs");
const fs = require("fs");
const app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

app.use((request, response, next) => {
  const now = new Date().toString();
  const log = `${now}: ${request.method} ${request.url}`;

  fs.appendFile("server.log", log + "\n", error => {
    if (error) {
      console.log(error);
    }
  });
  next();
});

// app.use((request, response, next) => {
//   response.render("maintenance.hbs");
// });

hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
});

hbs.registerHelper("screamIt", text => {
  return text.toUpperCase();
});

app.get("/", (request, response) => {
  response.render("home.hbs", {
    pageTitle: "Home Page",
    welcomeMessage: "Hey"
  });
});

app.get("/about", (request, response) => {
  response.render("about.hbs", {
    pageTitle: "About Page"
  });
});

app.get("/bad", (request, response) => {
  response.send({
    error: "Error handling request"
  });
});

app.get("/projects", (request, response) => {
  response.render("projects.hbs", {
    pageTitle: "Projects"
  });
});

app.listen(3000);
