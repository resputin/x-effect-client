import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from './login-form';

/**
 * The LoginPage is almost fully deprecated, there are no links
 * to this page on the site but, it is included in case someone
 * types in '/login'. It renders the same login form as on the
 * landing page.
 */
export function LoginPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="login">
      <h2>Sign in</h2>
      <LoginForm />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
