"use strict";
const sql = require("./db.js");
const Account = (user) => {
  console.log(Account);
};
Account.registerAccount = (email, name, password, accountexist) => {
  sql.query(
    `SELECT * FROM users WHERE LOWER(email) = LOWER(${sql.escape(email)})`,
    (err, res) => {
      if (err) {
        console.log("error: " + err);
        accountexist(err);
      } else {
        accountexist(res);
      }
    }
  );
  sql.query(
    `INSERT INTO users (name, email, password) VALUES ('${name}', ${db.escape(
      email
    )}, ${db.escape(password)})`
  );
};
module.exports = Account;
