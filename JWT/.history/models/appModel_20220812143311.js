"use strict";
const sql = require("./db.js");
const Account = (user) => {
  console.log(Account);
};
Account.resisterAccount = (result) => {
  sql.query(
    ``,
    (err, res) => {
      if (err) {
        console.log("error: " + err);
        result(err);
      } else {
        result(res);
      }
    }
  );
};
module.exports = Account;
