import React, { useState } from "react";
import "../Assests/Login.css";
const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="Login">
      <form action="">
        <p>Username</p>
        <input
          type="text"
          name="username"
          style={{
            padding: "1rem",
            marginTop: "1rem",
          }}
          onChange={}
        />
        <p>Password</p>
        <input
          type="password"
          name="password"
          style={{
            padding: "1rem",
            marginTop: "1rem",
          }}
        />
        <button
          type="submit"
          style={{ display: "block", fontSize: "1.5rem" }}
          onClick={(e) => e.preventDefault()}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
