"use strict";
module.exports = (app) => {
  const Account = require("../controllers/appController.js");
  app.route("/reg").post(Account.registerAccount);
  app.route("l")
};
