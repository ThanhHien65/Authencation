import React, { useState } from "react";
import "../Assests/Login.css";
const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const submit = (e) => {
    e.preventDefault();
    console.log(user);
    console.log(password);
    document.getElementById("form-login").c;
  };
  return (
    <div className="Login">
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
