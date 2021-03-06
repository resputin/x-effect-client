import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../actions/card';
import Card from './card';
import CardForm from './card-form';
import Navigation from './navigation';
import requiresLogin from './requires-login';
import './dashboard.css';

/**
 * Dashboard is the main page of the app. It renders all of the users
 * cards along with the nav pane and a form to add additional cards.
 * The main logic here handles rendering each card in its own section
 * so that it can be hash linked from the nav pane. The cards it receives
 * as props from Redux are fetched from the database which is called after
 * a successful log in. This component is also wrapped in the RequiresLogin
 * component.
 */
export class Dashboard extends Component {
  render() {
    const cards = [];
    for (let key in this.props.cards) {
      const pointer = `card_${key}`;
      cards.push(
        <section id={pointer} key={key}>
          <Card id={key} />
        </section>
      );
    }

    return (
      <div className="dashboard">
        <Navigation className="nav" role="navigation" />
        <div className="main">
          <div className="newCard" role="form">
            <CardForm
              onSubmit={value => {
                const submission = {};
                submission.created = Date();
                submission.name = value.title;
                this.props.dispatch(addCard(submission));
              }}
            />
          </div>
          <div role="main">{cards}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    cards: state.card.cards,
    newCard: state.newCard,
    name: currentUser.name
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
