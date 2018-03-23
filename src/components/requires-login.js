import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

/**
 * RequiresLogin is a wrapper for the dashboard component to ensure
 * that only logged in users can access the dashboard. This validation
 * happens server side as well, but we don't want to allow non auth
 * users to even be able to hit that API endpoint from the front end.
 */
export default () => Component => {
  function RequiresLogin(props) {
    const { authenticating, loggedIn, error, ...passThroughProps } = props;
    if (authenticating) {
      return <div>Logging in...</div>;
    } else if (!loggedIn || error) {
      return <Redirect to="/" />;
    }

    return <Component {...passThroughProps} />;
  }

  const displayName = Component.displayName || Component.name || 'Component';
  RequiresLogin.displayName = `RequiresLogin(${displayName})`;

  const mapStateToProps = (state, props) => ({
    authenticating: state.auth.loading,
    loggedIn: state.auth.currentUser !== null,
    error: state.auth.error
  });

  return connect(mapStateToProps)(RequiresLogin);
};
