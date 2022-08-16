import React, { useState } from "react";
const Login = () => {
  const redirect = (e) => {
    e.preventDefault();
  };
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>UserName</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter User "
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1 fs-4"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-5">
            <button
              type="submit"
              className="btn btn-primary fs-4"
              onClick={redirect}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
