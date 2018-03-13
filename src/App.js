import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchCards } from './actions/card';
import Card from './components/card'
import CardForm from './components/card-form';

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
        <CardForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.card.cards,
    newCard: state.newCard
  };
};

export default connect(mapStateToProps)(App);
