import React, { Fragment } from "react";

const Register = (setAuth) => {
    return (
        <Fragment>
            <h1>Register</h1>
            <button onClick={() => setAuth(true)}>Register</button>
        </Fragment>
    );
};

export default Register;