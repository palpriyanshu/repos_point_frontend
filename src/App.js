import React, { useEffect, useReducer, useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/NavBar';
import * as data from './repoDetails.json';
import Comparisons from './Components/Comparisons';
import Comparison from './Components/Comparison';
import * as Api from './Components/Api';
import Dashboard from './Components/DashBoard.js';
import alert from './Components/util/alert';
import ROUTES from './globals/routes';

const AlertMessage = (props) => {
  const { message, type } = props.alert || {};
  return (
    <div className={`message ${type} ${message ? 'show' : ''}`}>{message}</div>
  );
};

const App = (props) => {
  const [user, setUser] = useState({});
  const [alertMessage, dispatch] = useReducer(alert, '');

  const changeSessionUser = () => {
    Api.getCurrentUser().then(setUser);
  };

  useEffect(() => {
    changeSessionUser();
  }, []);

  return (
    <BrowserRouter>
      <Navbar
        changeSessionUser={changeSessionUser}
        user={user}
        dispatch={dispatch}
      />
      <AlertMessage alert={alertMessage} />

      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Dashboard data={data} />
        </Route>
        <Route exact path={ROUTES.COMPARISONS}>
          <Comparisons />
        </Route>
        <Route exact path={ROUTES.COMPARISON}>
          <Comparison dispatch={dispatch} />
        </Route>
        <Route>
          <h1>Not found</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
