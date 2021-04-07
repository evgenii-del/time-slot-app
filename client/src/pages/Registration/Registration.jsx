import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {registration} from '../../http/userApi';
import {setUser} from '../../store/actions';

const Registration = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeUsername = ({target}) => {
        setUsername(target.value);
    };

    const handleChangePassword = ({target}) => {
        setPassword(target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await registration(username, password);
        dispatch(setUser(response));
    };

    return (
        <div className="form-signup">
            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3">Sign up</h1>
                <label htmlFor="usernameInput">Username</label>
                <input type="text" className="form-control" id="usernameInput" placeholder="Enter your username ..."
                       value={username} onChange={handleChangeUsername}/>
                <label htmlFor="passwordInput">Password</label>
                <input type="password" className="form-control" id="passwordInput"
                       placeholder="Enter your password ..." value={password} onChange={handleChangePassword}/>
                <button className="w-100 btn btn-primary mt-3" type="submit">Sign up</button>
            </form>
            <div className="text-center">
                <Link to="/login">log in</Link>
            </div>
        </div>
    );
}

export default Registration;
