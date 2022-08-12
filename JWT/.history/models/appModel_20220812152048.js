"use strict";
const sql = require("./db.js");
const Account = (user) => {
  console.log(Account);
};
Account.registerAccount = (email, name, password, checkaccount) => {
  sql.query(
    `SELECT * FROM users WHERE LOWER(email) = LOWER(${sql.escape(email)})`,
    (err, res) => {
      if (err) {
        console.log("error: " + err);
        checkaccount(err);
      } else {
        checkaccount(res);
        if (res.length === 0) {
          sql.query(
            `INSERT INTO users (name, email, password) VALUES ('${name}', ${sql.escape(
              email
            )}, ${sql.escape(password)}),`,
            (err, res) => {
              if (err) {
                console.log(err);
                result(err);
              } else {
                result(res);
              }
            }
          );
        }
      }
    }
  );
};
module.exports = Account;
