import React from "react";
import { connect } from "react-redux";
import './navigation.css';

export function Navigation(props) {

  const cardNames = [];
  for (let key in props.cards) {
    const pointer = `#card_${props.cards[key].id}`;
    cardNames.push(<li id={key} key={key} ><a href={pointer} className="anchor">{props.cards[key].name}</a></li>);
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