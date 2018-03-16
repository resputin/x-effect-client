import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards, addCard } from '../actions/card';
import Card from './card';
import CardForm from './card-form';
import Navigation from './navigation';
import requiresLogin from './requires-login';
import './dashboard.css';

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
            <CardForm onSubmit={value => this.props.dispatch(addCard(value))} />
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


