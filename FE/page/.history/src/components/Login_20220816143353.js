import React, { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (<div className="Login">
    <form action="/url" method="GET">
        <p>Please enter your first and last name:</p>
        <input type="text" placeholder="John">
        <input type="text" placeholder="Doe">
    </form>
  </div>);
};

export default Login;
