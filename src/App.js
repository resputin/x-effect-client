import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchCards, addCard } from './actions/card';
import { login } from "./actions/auth";
import Card from './components/card';
import CardForm from './components/card-form';
import Navigation from './components/navigation';
import LoginForm from './components/login-form';

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCards());
  }

  render() {
    const cards = [];
    for (let key in this.props.cards) {
      const pointer = `card_${key}`
      cards.push(<section id={pointer} key={key}>
          <Card id={key} />
        </section>);
    }

    return <div className="app">
        <h1 className="header">The X Effect</h1>
        <LoginForm onSubmit={loginObj => this.props.dispatch(login(loginObj.email, loginObj.password))}/>
        <Navigation className="nav" role="navigation" />
        <div className="main">
          <div className="newCard" role="form">
            <CardForm onSubmit={value => this.props.dispatch(addCard(value))} />
          </div>
          <div role="main">{cards}</div>
        </div>
      </div>;
  }
}

const mapStateToProps = state => {
  return {
    cards: state.card.cards,
    newCard: state.newCard
  };
};

export default connect(mapStateToProps)(App);
