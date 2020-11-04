import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from "react-router-dom"
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from './Auth';
import Login from './Login';
import SignUp from './SignUp';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={App} />
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