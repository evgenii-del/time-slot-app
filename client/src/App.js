import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

import {Login, Main, Registration} from './pages';
import {PrivateRoute} from './components';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <PrivateRoute exact path="/registration" component={Registration} isLogin/>
                    <PrivateRoute exact path="/login" component={Login} isLogin/>
                    <PrivateRoute exact path="/" component={Main}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
