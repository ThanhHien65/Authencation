"use strict";
const Account = require("../models/appModel.js");
const bcrypt = require("bcryptjs");
exports.registerAccount = (req, res) => {
  Account.Accountexist(req.body.email, (checkAccount) => {
    if (checkAccount.length) {
      res.status(409).send({
        msg: "This user is already in use!",
      });
    } else if {
      if (req.body.password.length === 0) {
        res.status(500).send({ msg: "err" });
      }
    }
  });
};
