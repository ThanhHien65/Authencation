import React, { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="Login">
      <form action="">
        <p>Username</p>
        <input type="text" name="username" />
        <p>Password</p>
        <input type="password" name="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
