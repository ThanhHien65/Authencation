import React, { useState } from "react";
import "../Assests/Login.css";
import { Routes, Route, Link } from "react-router-dom";
import {}
const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [erroCode, setCode] = useState("");
  const axios = require("axios");
  const [fail, setfail] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/log", {
        username: user,
        password: password,
      })
      .then((response) => {
        setCode(response.data.msg);
        setfail(true);
      })
      .catch((err) => {
        setCode(err.response.data.msg);
      });
    document.getElementById("form-login").reset();
  };
  const statusError = () => {
    return (
      <p
        style={{
          fontSize: "1.3rem",
          fontWeight: "bold",
          color: "red",
          textTransform: "capitalize",
        }}
      >
        {erroCode}
      </p>
    );
  };
  return (
    <div
      className="Login"
      style={{ display: fail === false ? "block" : `none` }}
    >
      <form id="form-login">
        <p>Username</p>
        <input
          type="text"
          name="username"
          style={{
            padding: "1rem",
            marginTop: "1rem",
          }}
          onChange={(e) => setUser(e.target.value)}
        />
        <p>Password</p>
        <input
          type="password"
          name="password"
          style={{
            padding: "1rem",
            marginTop: "1rem",
          }}
          onChange={(e) => setPassword(e.target.value)}
        />
        {statusError()}
        <button
          type="submit"
          style={{ display: "block", fontSize: "1.5rem" }}
          onClick={submit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
