const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Hey");
});

app.listen(3000);
