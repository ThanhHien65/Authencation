"use strict";
const Account = require("../models/appModel.js");
exports.registerAccount = (req, res) => {
  Account.registerAccount(req.body.email, (result) => {
    if (result.length) {
      res.status(409).send({
        msg: "This user is already in use!",
      });
    } else {
      res.send(result);
      console.log(result);
    }
    console.log(req.body.email);
  });
};
