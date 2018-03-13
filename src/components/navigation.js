import React from "react";
import { connect } from "react-redux";
import './navigation.css';

export function Navigation(props) {

  const cardNames = [];
  for (let key in props.cards) {
    cardNames.push(<li id={key} key={key} >{props.cards[key].name}</li>);
  }
  return <div className="navigation">
      <h3>My Cards</h3>
      <ul>{cardNames}</ul>
      <h3>My Account</h3>
    </div>;
}

const mapStateToProps = state => ({
  cards: state.card.cards
});

export default connect(mapStateToProps)(Navigation);