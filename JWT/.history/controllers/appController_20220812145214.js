"use strict";
const Account = require("../models/appModel.js");
exports.registerAccount = (req, res) => {
  Account.registerAccount(req.body.email, (result) => {
    if (result.code === undefined) {
      res.send({"Success");
      console.log(result);
    } else {
      res.send(result);
    }
    console.log(result);
    console.log(req.body.email);
  });
};
