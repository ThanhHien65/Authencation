"use strict";
const sql = require("./db.js");
const Account = (user) => {
  console.log(Account);
};
Account.registerAccount = (email, checkaccount, result) => {
  sql.query(
    `SELECT * FROM users WHERE LOWER(email) = LOWER(${sql.escape(email)})`,
    (err, res) => {
      if (err) {
        console.log("error: " + err);
        checkaccount(err);
      } else {
        checkaccount(res);
      }
    }
  );
  //   sql.query(
  //     `INSERT INTO users (name, email, password) VALUES ('${name}', ${db.escape(
  //       email
  //     )}, ${db.escape(password)}),`,
  //     (err, res) => {
  //       if (err) {
  //         console.log(err);
  //         result(err);
  //       } else {
  //         result(res);
  //       }
  //     }
  //   );
};
module.exports = Account;
