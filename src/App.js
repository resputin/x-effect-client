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
    const cards = [];
    for (let key in this.props.cards) {
      cards.push(<Card id={key} key={key} />)
    }
    
    
    // const cards = this.props.cards.map(card => {
    //   return <Card card={card} key={card.id} />;
    // });

    return (
      <div>
        <h1>The X Effect</h1>
        {cards}
        Add a new Card
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
