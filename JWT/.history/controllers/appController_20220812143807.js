"use strict";
const Account = require("../models/appModel.js");
exports.registerAccount = (req, res) => {
  Account.registerAccount(req.body.email, (result) => {
    if (result.code === undefined) {
      res.send(result);
    }else if()
  });
};
