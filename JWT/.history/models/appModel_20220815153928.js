"use strict";
const sql = require("./db.js");
const Account = (user) => {
  console.log(Account);
};
Account.Accountexist = (username, checkaccount) => {
  sql.query(
    `SELECT * FROM users WHERE LOWER(username) = LOWER(${sql.escape(
      username
    )})`,
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
Account.CreateAccount = (username, password, result) => {
  sql.query(
    `INSERT INTO users  (username, password) VALUES ( ${sql.escape(
      username
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
Account.LastLogin = (id) => {
  sql.query(
    `UPDATE users SET last_login = now() WHERE id = '${id}'`,
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Update Time Login success");
      }
    }
  );
};
Account.getAccount = (id,result=>{
  sql.query(
    `UPDATE users SET last_login = now() WHERE id = '${id}'`,
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Update Time Login success");
      }
    }
  );
}
module.exports = Account;
