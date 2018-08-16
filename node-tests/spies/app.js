const db = require("./db");

module.exports.handleSignup = (email, password) => {
  // check if the email exists
  db.saveUser({
    email,
    password
  });
  // send welcome email
};
