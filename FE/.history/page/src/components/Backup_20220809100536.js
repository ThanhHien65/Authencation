import React, { useEffect, useState } from "react";
import axios from "axios";
import { VscPassFilled } from "react-icons/vsc";
import { CgCloseR } from "react-icons/cg";
const Backup = () => {
  const [backupDay, setBackupDay] = useState([]);
  const [diskASPBackup, setdiskASPBackup] = useState([]);
  const [isShow, setShow] = useState(true);
  const [aBackup, setAbackup] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/backupday`)
      .then((response) => {
        setBackupDay(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:5000/aspbackupday")
      .then((res) => {
        setdiskASPBackup(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const confirm = () => {
    const statusInfo = (backup) => {
      return (
        <div>
          {backup.map((item, index) => {
            return (
              <div className="statusinfo">
                <h1>
                  IP / Server : {item.ipaddress} {item.hostname}{" "}
                </h1>
                <h1>file_Status</h1>
                <h1>Big_Status</h1>
                <h1>Mysql_Status</h1>
              </div>
            );
          })}
        </div>
      );
    };
    return (
      <div
        className="confirmStatus"
        style={
          isShow
            ? {
                opacity: 0,
                top: "-50%",
              }
            : {
                opacity: 1,
                top: "50%",
                transition: "all 1s ease-out",
              }
        }
      >
        <h1 onClick={() => setShow(!isShow)}>
          <CgCloseR style={{ fontSize: "2.5rem" }}></CgCloseR>
        </h1>
        {aBackup.length == 1 ? statusInfo(aBackup) : <h1>Not Found</h1>}
        <div className="statusCheck">
          <div className="checked Buttonstatus">Checked</div>
          <div className="remote Buttonstatus">Connect</div>
        </div>
      </div>
    );
  };
  const showStatus = (e) => {
    setShow(!isShow);
    console.log(e.target.className);
    aBackup.length = 0;
    setAbackup([...aBackup, backupDay[e.target.className]]);
    console.log(aBackup);
  };
  return (
    <div className="container_content">
      <div className="content_table">
        <table>
          <tr>
            <th onClick={() => console.log(aBackup)}>#</th>
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
                <td
                  className={item.status_bigdata === null ? "" : "Buttonstatus"}
                >
                  {item.status_bigdata === null ? (
                    <VscPassFilled style={{ fontSize: "2rem" }}></VscPassFilled>
                  ) : (
                    <h1
                      className={index}
                      style={{ fontSize: "1.5rem", fontWeight: "normal" }}
                      onClick={showStatus}
                    >
                      {item.status_bigdata}
                    </h1>
                  )}
                </td>
                <td
                  className={
                    item.status_filebackup === null ? "" : "Buttonstatus"
                  }
                >
                  {item.status_filebackup === null ? (
                    <VscPassFilled style={{ fontSize: "2rem" }}></VscPassFilled>
                  ) : (
                    <h1
                      className={index}
                      style={{ fontSize: "1.5rem", fontWeight: "normal" }}
                      onClick={showStatus}
                    >
                      {item.status_filebackup}
                    </h1>
                  )}
                </td>
                <td
                  className={item.status_mysql === null ? "" : "Buttonstatus"}
                >
                  {item.status_mysql === null ? (
                    <VscPassFilled style={{ fontSize: "2rem" }}></VscPassFilled>
                  ) : (
                    <h1
                      className={index}
                      style={{ fontSize: "1.5rem", fontWeight: "normal" }}
                      onClick={showStatus}
                    >
                      {item.status_mysql}
                    </h1>
                  )}
                </td>
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
            <th>IPADDRESS</th>
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
      {!isShow ? confirm() : ""}
    </div>
  );
};

export default Backup;
