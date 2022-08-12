const mysql = require("mysql");
// const connection = mysql.createConnection({
//   connectionLimit: 1,
//   host: "10.0.0.20",
//   port: 3307,
//   user: "root",
//   password: "P@ssw0rd",
//   database: "JWT",
// });
// connection.connect((err) => {
//   if (err) {
//     console.log(err);
//     throw err;
//   }
//   console.log("connected database");
// });
const connection = mysql.createPool({
  connectionLimit: 1,
  host: "10.0.0.20",
  port: 3307,
  user: "root",
  password: "P@ssw0rd",
  database: "JWT",
});
module.exports = connection;
