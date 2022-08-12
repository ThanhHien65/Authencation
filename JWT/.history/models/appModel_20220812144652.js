"use strict";
const sql = require("./db.js");
const Account = (user) => {
  console.log(Account);
};
Account.registerAccount = (email, result) => {
  sql.query(`SELECT * FROM users WHERE LOWER(email) = LOWER(${db.escape(email)}`, (err, res) => {
    if (err) {
      console.log("error: " + err);
      result(err);
    } else {
      result(res);
    }
  });
};
module.exports = Account;
