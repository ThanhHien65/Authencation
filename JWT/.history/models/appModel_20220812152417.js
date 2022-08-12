"use strict";
const sql = require("./db.js");
const Account = (user) => {
  console.log(Account);
};
Account.Accountexist = (email, checkaccount) => {
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
};
Account.CreateAccount= (name,email,password,result) =>{
    sql.query(`INSERT INTO users (name, email, password) VALUES ('${req.body.name}', $.escape(
        req.body.email
        )}, ${sql.escape(hash)})`,)
}
module.exports = Account;
