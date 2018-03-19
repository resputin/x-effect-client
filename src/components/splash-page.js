import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import LoginForm from './login-form';
import './splashpage.css';


export function SplashPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return <div className="home" role="main">
      <div className="splash-login">
        <h4>Log In</h4>
        <LoginForm />
      </div>
      <div className="main splash-main">
        <h3>What is the X Effect?</h3>
        <p>
          Inspired by a reddit post, the x effect is a way to turn those pesky
          things you always hope you could turn into a habit will finally make
          that transition into something you can do effortlessly. The idea of
          the x effect is that you make an index card with one goal and form a
          7 by 7 grid on. Then every day you complete that goal you put a red
          x on the cell that corresponds to the day. The idea is that once you
          can complete an entire index card with no holes where there should
          be X’s than you will have that goal be a habit that hoepfully will
          stick with you.
        </p>
      </div>
    </div>;
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SplashPage);
