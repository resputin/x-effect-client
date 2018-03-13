import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchCards } from './actions/card';
import Card from './components/card'

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCards());
  }

  render() {
    const cards = this.props.cards.map(card => {
      return <Card card={card} key={card.id}/>
    });

    return (
      <div>
        <h1>The X Effect</h1>
        {cards}
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
