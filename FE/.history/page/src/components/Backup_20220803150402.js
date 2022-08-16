import React, { useEffect, useState } from "react";
import axios from "axios";
import { VscPassFilled } from "react-icons/vsc";

const Backup = () => {
  const [backupDay, setBackupDay] = useState([]);
  const [diskASPBackup, setdiskASPBackup] = useState([]);
  useEffect(() => {
    axios
      .get(`http://10.0.0.13:3000/backupday`)
      .then((response) => {
        setBackupDay(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:3000/aspbackupday")
      .then((res) => {
        setdiskASPBackup(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container_content">
      <div className="content_table">
        <table>
          <tr>
            <th onClick={() => console.log(diskASPBackup)}>#</th>
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
                <td>{item.status_bigdata=== null ? (
                    <VscPassFilled style={{ fontSize: "2rem" }}></VscPassFilled>
                  ) : (
                    item.status_filebackup
                  )}}</td>
                <td>
                  {item.status_filebackup === null ? (
                    <VscPassFilled style={{ fontSize: "2rem" }}></VscPassFilled>
                  ) : (
                    item.status_filebackup
                  )}
                </td>
                <td>{item.status_mysql}</td>
                <td>{item.manager}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="content_table">
        <table>
          <tr>
            <th>#</th>
            <th onClick={() => console.log(diskASPBackup)}>IPADDRESS</th>
            <th>FILESYSTEM</th>
            <th>SIZE</th>
            <th>USED</th>
            <th>AVAIL</th>
            <th>USE%</th>
            <th>MOUNTED ON</th>
          </tr>
          {diskASPBackup.map((item, index) => {
            return (
              <tr>
                <td>{index}</td>
                <td>{item.ipaddress}</td>
                <td>{item.filesystem}</td>
                <td>{item.size}</td>
                <td>{item.used}</td>
                <td>{item.vaild}</td>
                <td
                  style={{
                    color: `${
                      item.usee.toString().replace("%", "") >= 90
                        ? "#DC143C"
                        : ""
                    }`,
                  }}
                >
                  {item.usee}
                </td>
                <td>{item.mounted}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Backup;
