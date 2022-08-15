"use strict";
const Account = require("../models/appModel.js");
const bcrypt = require("bcryptjs");
const { signupValidation, loginValidation } = require("../models/Validation");
const jwt = require('jsonwebtoken');
exports.registerAccount =
  (signupValidation,
  (req, res) => {
    if (req.body.name.length === 0 || req.body.name.includes(" ") === true) {
      res.status(409).send({
        msg: "name can't use white space",
      });
    } else {
      Account.Accountexist(req.body.name, (checkAccount) => {
        if (checkAccount.length) {
          res.status(409).send({
            msg: "This user is already in use!",
          });
        } else if (
          checkAccount.includes(" ") === true &&
          checkAccount.includes("") === true
        ) {
          res.status(409).send({
            msg: "name can't use white space",
          });
        } else {
          if (req.body.password.length != 0) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
              if (err) {
                res.status(500).send({ msg: "err" });
              } else {
                Account.CreateAccount(req.body.name, hash, (result) => {
                  if (result.code == undefined) {
                    res.status(201).send({
                      msg: "The user has been registerd with us!",
                    });
                  } else {
                    res.status(400).send({
                      msg: result,
                    });
                  }
                });
              }
            });
          } else {
            res.status(500).send({ msg: "Password null" });
          }
        }
      });
    }
  });
exports.LoginAccount =
  (loginValidation,
  (req, res) => {
    Account.Accountexist(req.body.name, (checkAccount) => {
      if (checkAccount.length) {
        bcrypt.compare(
          req.body.password,
          checkAccount[0].password,
          (berr, bresult) => {
            // if (berr) {
            //   res.status(401).send({
            //     msg: "Email or password is incorrect!",
            //   });
            // }
            if(bresult=== true){
                
            }
            res.status(409).send({
              msg: "user is already",
            });
            console.log(berr);
            console.log(bresult);
          }
        );
      } else {
        res.status(400).send({
          msg: " user does not exists",
        });
      }
      console.log(checkAccount);
    });
  });
