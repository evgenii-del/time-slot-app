import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Login, Main, Registration} from './pages';
import {PrivateRoute} from './components';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <PrivateRoute exact path="/registration" component={Registration}/>
                    <PrivateRoute exact path="/login" component={Login}/>
                    <Route exact path="/" component={Main}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
