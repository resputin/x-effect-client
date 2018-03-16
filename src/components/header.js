import React from 'react';
import { connect } from "react-redux";
import { clearAuth } from "../actions/auth";
import { clearAuthToken } from "../local-storage";

export function Header(props) {
  function logOut() {
    props.dispatch(clearAuth());
    clearAuthToken();
  }

  let logOutButton;
  if (props.loggedIn) {
    logOutButton = (
      <button onClick={() => logOut()}>Log Out</button>
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