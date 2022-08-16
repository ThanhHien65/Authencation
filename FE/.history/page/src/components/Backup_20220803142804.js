import React, { useEffect, useState } from "react";
import axios from "axios";
const Backup = () => {
  const [backupDay, setBackupDay] = useState([]);
  useEffect(() => {
    axios
      .get(`http://10.0.0.13:3000/backupday`)
      .then((response) => {
        setBackupDay(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container_content">
      <div className="content_table">
        <table>
          <tr>
            <th onClick={() => console.log(backupDay)}>#</th>
            <th>hostname</th>
            <th>ipaddress</th>
            <th>BIGDATA</th>
            <th>FILE BACKUP</th>
            <th>MYSQL</th>
            <th>MANAGER</th>
          </tr>
          {backupDay.map((item, index) => {
            return (
              <tr>
                <td>{index}</td>
                <td>{item.hostname}</td>
                <td>{item.ipaddress}</td>
                <td>{item.status_bigdata}</td>
                <td>{item.status_filebackup}</td>
                <td>{item.status_mysql}</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus harum quod sequi odio, earum a eum delectus tenetur
                  consequuntur magni quam soluta sit numquam aliquam culpa
                  excepturi nihil, voluptates laboriosam?
                </td>
              </tr>
            );
          })}
          <tr>
            <td>1</td>
            <td>그룹웨어 ASP8(USA)_미국</td>
            <td>162.216.115.11</td>
            <td>Need to check server</td>
            <td>Backup not time yet </td>
            <td>Need to check server</td>
            <td>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              harum quod sequi odio, earum a eum delectus tenetur consequuntur
              magni quam soluta sit numquam aliquam culpa excepturi nihil,
              voluptates laboriosam?
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Backup;
