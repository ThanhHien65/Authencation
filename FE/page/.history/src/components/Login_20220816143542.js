import React, { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="Login">
      <form action="">
      <p>Please enter your username</p>
        <input type="text" name="username" minlength="3" required>
        <button type="submit">Submit</button>  
      </form>
    </div>
  );
};

export default Login;
