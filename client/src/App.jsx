import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router, Redirect, Switch, Route,
} from 'react-router-dom';

import { useSelector } from 'react-redux';
import { Login, Main, Registration } from './pages';
import { check } from './http/userApi';

const App = () => {
  const { user } = useSelector((state) => state);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    check()
      .then(() => setIsAuth(true))
      .catch(() => setIsAuth(false));
  }, [user]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => (isAuth ? <Main /> : <Redirect to="/login" />)} />
          <Route exact path="/registration" render={() => (isAuth ? <Redirect to="/" /> : <Registration />)} />
          <Route exact path="/login" render={() => (isAuth ? <Redirect to="/" /> : <Login />)} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
