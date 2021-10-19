import React, { Fragment } from "react";

const Register = (setAuth) => {
  return (
    <Fragment>
      <h1>Register</h1>
      <form>
        <input
          className="form-control my-3"
          type={"text"}
          name="Name"
          placeholder="Full Name"
        />
        <input
          className="form-control my-3"
          type={"email"}
          name="email"
          placeholder="Valid email"
        />
        <input
          className="form-control my-3"
          type={"email"}
          name="Passqoed"
          placeholder="Password"
        />
      </form>
      <button onClick={() => setAuth(true)}>Register</button>
    </Fragment>
  );
};

export default Register;
