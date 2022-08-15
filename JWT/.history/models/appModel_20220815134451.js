"use strict";
const sql = require("./db.js");
const Account = (user) => {
  console.log(Account);
};
Account.Accountexist = (name, checkaccount) => {
  sql.query(
    `SELECT * FROM users WHERE LOWER(name) = LOWER(${sql.escape(name)})`,
    (err, res) => {
      if (err) {
        console.log("error: " + err);
        checkaccount(err);
      } else {
        checkaccount(res);
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
Account.LoginAccount = (name,password,result)
module.exports = Account;
