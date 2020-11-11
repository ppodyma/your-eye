import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './comps/dashboard/Dashboard';
import { BrowserRouter as Router, Route } from "react-router-dom"
import PrivateRoute from './auth/PrivateRoute';
import { AuthProvider } from './auth/Auth';
import Login from './comps/login/Login';
import SignUp from './comps/signUp/SignUp';
import ClientDetails from './comps/clientDetails/ClientDetails';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute path="/clients/:clientId" component={ClientDetails} />
          {/* <PrivateRoute path="/clients*" component={ClientDetails} /> */}
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA