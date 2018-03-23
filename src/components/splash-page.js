import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from './login-form';
import './splashpage.css';

/**
 * The SplashPAge component renders the home page with copy about the inpsiration for
 * the app and renders the LoginForm component.
 */
export function SplashPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home" role="main">
      <div className="splash-login">
        <h4>Log In</h4>
        <LoginForm />
      </div>
      <div className="main splash-main">
        <h3>What is the X Effect?</h3>
        <p>
          The X Effect is a habit tracking movement inspired by a reddit post by
          someone who was looking for a way to make one habit stick. The main
          idea of the X Effect is that if you can do something for 49
          consecutive days than you will be able to say that you've ingrained
          this habit for life. The way that the X Effect implements this idea is
          straightforward:
        </p>
        <ol>
          <li>
            Take an index card and make 6 vertical lines and 6 horizontal lines
            to form a 7 x 7 grid
          </li>
          <li>
            Write the name of the habit you want to solidify at the top of the
            card. For your first card make it something easy so that it's easy
            to accomplish, like 'Eat one healthier thing than normal'
          </li>
          <li>
            When you accomplish this goal for the day make an X in the first
            available grid square
          </li>
          <li>
            If you don't accomplish the goal for that day you can either leave
            the square blank or fill it in with an O
          </li>
          <li>
            If you can successfully fill out your entire card with X's than
            congratulations! You have ingrained this habit for good.
          </li>
        </ol>
        <p>
          This application takes a lot of the logistical work away and lets you
          focus on the thing that matters, completing your card. In addition
          this application allows for some extra features that don't exist when
          you are doing this physically. You can set up text reminders if you
          haven't completed a card for that day, and the application will
          automatically mark things off if they are incomplete at the end of
          each day. Register for an account to get started.
        </p>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SplashPage);
