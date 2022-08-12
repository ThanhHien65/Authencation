const mysql = require("mysql");
const connection = mysql.createPool({
  connectionLimit : 1,
  host: "10.0.0.20",
  port: 3307,
  user: "root",
  password: "P@ssw0rd",
  database: "bigbackup",
});
module.exports = connection;
