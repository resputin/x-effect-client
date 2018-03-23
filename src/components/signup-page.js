import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SignupForm from './signup-form';
import './signup-page.css';

/**
 * The SignupPage component handles an automatic login for an
 * authorized user and renders the SignUp form if there is no 
 * current user. 
 */
export function SignupPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="signup" role="main">
      <h2>Register for The X Effect</h2>
      <SignupForm />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignupPage);
