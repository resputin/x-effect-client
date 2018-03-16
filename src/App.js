import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Dashboard from "./components/dashboard";
import { Route, withRouter } from 'react-router-dom';
import LoginPage from './components/login-page';
import SplashPage from './components/splash-page';
import SignupPage from './components/signup-page';
import Header from './components/header';

export class App extends Component {

  render() {
    return <div className="app">
        <Header />
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/login" component={LoginPage} />
      </div>;
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));
