import React, { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="Login">
      <form action="">
        <p>Username</p>
        <input type="text" name="username" />
        <p></p>
      </form>
    </div>
  );
};

export default Login;
