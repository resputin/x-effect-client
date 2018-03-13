import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchCards } from './actions/card';

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCards());
  }

  render() {
    const cards = this.props.cards.map(card => {
      const cells = card.xArray.map((cell, index) => {
        return cell ? <li key={index} className="complete">X</li> : <li key={index} className="incomplete">O</li>;
      })
      return (
      <li key={card.id}>
        {card.name}
        <ul>
          <li>
            {cells}
          </li>
        </ul>
      </li>
      );
    });

    return (
      <div>
        <h1>The X Effect</h1>
        <ul>{cards}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards
  };
};

export default connect(mapStateToProps)(App);
