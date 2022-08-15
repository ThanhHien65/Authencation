"use strict";
const Account = require("../models/appModel.js");
const bcrypt = require("bcryptjs");
const { signupValidation, loginValidation } = require("../models/Validation");
const jwt = require("jsonwebtoken");
exports.registerAccount =
  (signupValidation,
  (req, res) => {
    if (
      req.body.username.length === 0 ||
      req.body.username.includes(" ") === true
    ) {
      res.status(400).send({
        msg: "username can't use white space",
      });
    } else {
      Account.Accountexist(req.body.username, (checkAccount) => {
        if (checkAccount.length) {
          res.status(409).send({
            msg: "This user is already in use!",
          });
        } else {
          if (req.body.password.length != 0) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
              if (err) {
                res.status(500).send({ msg: "err" });
              } else {
                Account.CreateAccount(req.body.username, hash, (result) => {
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
    Account.Accountexist(req.body.username, (checkAccount) => {
      if (checkAccount.length) {
        bcrypt.compare(
          req.body.password,
          checkAccount[0].password,
          (berr, bresult) => {
            if (bresult === true) {
              const token = jwt.sign(
                { id: checkAccount[0].id },
                "the-super-strong-secrect",
                { expiresIn: "1h" }
              );
              Account.LastLogin(checkAccount[0].id);
              res.status(200).send({
                msg: "Logged in!",
                token,
                user: checkAccount[0],
              });
            } else {
              res.status(401).send({
                msg: "password is incorrect!",
              });
            }
          }
        );
      } else {
        res.status(400).send({
          msg: "Username does not exists",
        });
      }
    });
  });
exports.GetAccount =
  (signupValidation,
  (req, res) => {
    if (
      !req.headers.authorization ||
      !req.headers.authorization.startsWith("Bearer") ||
      !req.headers.authorization.split(" ")[1]
    ) {
      return res.status(422).json({
        message: "Please provide the token",
      });
    }
    const theToken = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(theToken, "the-super-strong-secrect");
    // console.log(theToken);
    // // console.log(req.headers);
    // console.log(decoded);
    Account.getAccount(decoded.id, (result) => {
      res.send({
        error: false,
        data: result[0],
        message: "Fetch Successfully.",
      });
    });
    }
    res.send(decoded);
  });
