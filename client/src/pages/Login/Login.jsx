import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeUsername = ({target}) => {
        setUsername(target.value);
    };

    const handleChangePassword = ({target}) => {
        setPassword(target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username, password);
    };

    return (
        <div className="form-login">
            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3">Log in</h1>
                <label htmlFor="usernameInput">Username</label>
                <input type="text" className="form-control" id="usernameInput" placeholder="Enter your username ..."
                       value={username} onChange={handleChangeUsername}/>
                <label htmlFor="passwordInput">Password</label>
                <input type="password" className="form-control" id="passwordInput"
                       placeholder="Enter your password ..." value={password} onChange={handleChangePassword}/>
                <button className="w-100 btn btn-primary mt-3" type="submit">Log in</button>
                <div className="text-center">
                    <Link to="/registration">Sign up</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
