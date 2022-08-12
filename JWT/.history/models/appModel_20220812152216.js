"use strict";
const sql = require("./db.js");
const Account = (user) => {
  console.log(Account);
};
Account.registerAccount = (email, checkaccount) => {
  sql.query(
    `SELECT * FROM users WHERE LOWER(email) = LOWER(${sql.escape(email)})`,
    (err, res) => {
      if (err) {
        console.log("error: " + err);
        checkaccount(err);
      } else {
        checkaccount(res);
        if (res.length === 0) {
          console.log("exists");
        }
      }
    }
  );
};
module.exports = Account;
