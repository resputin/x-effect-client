import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchCards, addCard } from './actions/card';
import Card from './components/card'
import CardForm from './components/card-form';
import Navigation from "./components/navigation";

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
        <Navigation />
        {cards}
        Add a new Card
        <CardForm onSubmit={value => this.props.dispatch(addCard(value))}/>
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
