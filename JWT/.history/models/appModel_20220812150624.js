"use strict";
const sql = require("./db.js");
const Account = (user) => {
  console.log(Account);
};
Account.registerAccount = (email, accountexist) => {
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
  
};
module.exports = Account;
