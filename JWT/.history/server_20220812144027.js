const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
port = process.env.PORT || 3000;
app.listen(port);
app.use(cors());
console.log("API server started on: " + port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    message: err.message,
  });
});
app.listen(port, () => console.log("Server is running on port 3000"));
const routes = require("./routes/appRoutes.js");
// routes(app);
