"use strict";
const Account = require("../models/appModel.js");
const bcrypt = require("bcryptjs");
exports.registerAccount = (req, res) => {
  Account.Accountexist(req.body.email, (checkAccount) => {
    if (checkAccount.length) {
      res.status(409).send({
        msg: "This user is already in use!",
      });
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          res.status(500).send({ msg: "err" });
          console.log(err);
        }else{
            Account.Accountexist(req.bod)
        }
        
      });
    }
    console.log(req.body.email, req.body.password);
  });
};
