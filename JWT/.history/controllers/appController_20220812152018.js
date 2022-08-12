"use strict";
const Account = require("../models/appModel.js");
const bcrypt = require("bcryptjs");
exports.registerAccount = (req, res) => {
  Account.registerAccount(req.body.email,req.body.name,req.body.password, (checkAccount) => {
    if (checkAccount.length) {
      res.status(409).send({
        msg: "This user is already in use!",
      });
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          res.status(500).send({ msg: "err" });
          console.log(err);
        }
        res.send("test");
      });
    }
    console.log(req.body.email, req.body.password);
  });
};
