import React from "react";
import { connect } from "react-redux";

export function Navigation(props) {

  const cardNames = [];
  for (let key in props.cards) {
    cardNames.push(<li id={key} key={key} >{props.cards[key].name}</li>);
  }
  return (
    <ul>
      {cardNames}
    </ul>
  )
}

const mapStateToProps = state => ({
  cards: state.card.cards
});

export default connect(mapStateToProps)(Navigation);