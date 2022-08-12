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
        if()
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          res.status(500).send({ msg: "err" });
        } else {
          Account.CreateAccount(
            req.body.name,
            req.body.email,
            hash,
            (result) => {
              if (result.code == undefined) {
                res.status(201).send({
                  msg: "The user has been registerd with us!",
                });
              } else {
                res.status(400).send({
                  msg: result,
                });
              }
            }
          );
        }
      });
    }
  });
};
