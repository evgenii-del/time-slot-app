import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { login } from '../../http/userApi';
import { setUser } from '../../store/actions';

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeUsername = ({ target }) => {
    setUsername(target.value);
  };

  const handleChangePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(username, password)
      .then((response) => dispatch(setUser(response)))
      .catch((error) => alert(`Error: ${error.response.data.message}`));
  };

  return (
    <div className="form-login">
      <form onSubmit={handleSubmit}>
        <h1 className="h3 mb-3">Log in</h1>
        <label htmlFor="usernameInput">Username</label>
        <input
          type="text"
          className="form-control"
          id="usernameInput"
          placeholder="Enter your username ..."
          value={username}
          onChange={handleChangeUsername}
        />
        <label htmlFor="passwordInput">Password</label>
        <input
          type="password"
          className="form-control"
          id="passwordInput"
          placeholder="Enter your password ..."
          value={password}
          onChange={handleChangePassword}
        />
        <button className="w-100 btn btn-primary mt-3" type="submit">Log in</button>
      </form>
      <div className="text-center">
        <Link to="/registration">Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
