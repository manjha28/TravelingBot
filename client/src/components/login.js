import React, { Fragment, ReactDOM} from "react";
const Login = ({setAuth}) => {
    return (
        <Fragment>
            <h1>Login</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
            <button onClick={() => setAuth(true)}>Authenticate</button>
        </Fragment>
    );
    
};
export default Login;
