import React, {useState} from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));
    const obj = {...rest};

    return (
        <Route
            {...rest}
            render={(props) => {
                if (obj.isLogin) {
                    return isAuth ? <Redirect to="/"/> : <Component/>;
                }
                return isAuth ? <Component {...props} /> : <Redirect to="/login"/>;
            }}
        />
    );
};

export default PrivateRoute;
