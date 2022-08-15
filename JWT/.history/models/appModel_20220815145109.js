"use strict";
const sql = require("./db.js");
const Account = (user) => {
  console.log(Account);
};
Account.Accountexist = (name, bresult(false), checkaccount) => {
  sql.query(
    `SELECT * FROM users WHERE LOWER(name) = LOWER(${sql.escape(name)})`,
    (err, res) => {
      if (err) {
        console.log("error: " + err);
        checkaccount(err);
      } else {
        checkaccount(res);
        if (bresult === true) {
          sql.query(
            `UPDATE users SET last_login = now() WHERE id = '${checkAccount[0].id}'`
          );
        }
      }
    }
  );
};
Account.CreateAccount = (name, password, result) => {
  sql.query(
    `INSERT INTO users  (name, password) VALUES ( ${sql.escape(
      name
    )}, ${sql.escape(password)})`,
    (err, res) => {
      if (err) {
        console.log(err);
        result(err);
      } else {
        result(res);
      }
    }
  );
};

module.exports = Account;
