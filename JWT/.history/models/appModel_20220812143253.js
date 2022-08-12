"use strict";
const sql = require("./db.js");
const Account = (user) => {
  console.log(Account);
};
Account.res = (result) => {
  sql.query(
    `SELECT tols.manager,tols.id,tols.ifno,tols.hostname,tols.ipaddress,b.status_bigdata,b.check_value as bvalue,f.status_filebackup,f.check_value as fvalue,m.status_mysql,m.check_value as mvalue FROM (SELECT tot.ifno,i.hostname,i.ipaddress,i.id,i.manager FROM (SELECT ifno from filebackup where date(date)=CURRENT_DATE UNION SELECT ifno from bigdata where date(date)=CURRENT_DATE UNION SELECT ifno from mysql where date(date)=CURRENT_DATE) tot LEFT JOIN information i ON i.id = tot.ifno) tols LEFT JOIN (SELECT i.id,i.hostname,i.ipaddress,f.status_filebackup,f.check_value FROM (SELECT f.* FROM filebackup f JOIN (SELECT f.ifno, max(f.id) as maxid FROM filebackup f GROUP BY f.ifno) fsum ON fsum.ifno = f.ifno and f.id = fsum.maxid WHERE date(f.date)=CURRENT_DATE ORDER BY f.ifno DESC) f LEFT JOIN information i ON i.id = f.ifno) f ON f.id = tols.ifno LEFT JOIN (SELECT i.id,i.hostname,i.ipaddress,b.status_bigdata,b.check_value FROM (SELECT b.* FROM bigdata b JOIN (SELECT b.ifno, max(b.id) as maxid FROM bigdata b GROUP BY b.ifno) bsum ON bsum.ifno = b.ifno and b.id = bsum.maxid WHERE date(b.date)=CURRENT_DATE ORDER BY b.ifno DESC) b LEFT JOIN information i ON i.id = b.ifno) b ON b.id = tols.ifno LEFT JOIN (SELECT i.id,i.hostname,i.ipaddress,m.status_mysql,m.check_value FROM (SELECT m.* FROM mysql m JOIN (SELECT m.ifno, max(m.id) as maxid FROM mysql m GROUP BY m.ifno) msum ON msum.ifno = m.ifno and m.id = msum.maxid WHERE date(m.date)=CURRENT_DATE ORDER BY m.ifno DESC) m LEFT JOIN information i ON i.id = m.ifno) m ON m.id = tols.ifno ORDER BY tols.manager DESC;`,
    (err, res) => {
      if (err) {
        console.log("error: " + err);
        result(err);
      } else {
        result(res);
      }
    }
  );
};
module.exports = Account;
