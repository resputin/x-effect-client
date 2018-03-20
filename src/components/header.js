import React from 'react';
import { connect } from "react-redux";
import { clearAuth } from "../actions/auth";
import { clearCards } from '../actions/card'
import { clearAuthToken } from "../local-storage";
import './header.css';

export function Header(props) {
  function logOut() {
    props.dispatch(clearAuth());
    props.dispatch(clearCards())
    clearAuthToken();
  }

  let logOutButton;
  if (props.loggedIn) {
    logOutButton = (
      <button onClick={() => logOut()} className="logout-button">Log Out</button>
    )
  }
  return (
    <div className="header">
      <h1>The X Effect</h1>
      {logOutButton}
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Header);