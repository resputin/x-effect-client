import React from 'react';
import { connect } from "react-redux";
import CardGrid from './card-grid'
import './card.css';
import { checkX } from "../actions/card";

export function Card(props) {

  return <div className="card">
      <h2 className="title">{props.cards[props.id].name}</h2>
      <div className="grid-container" />
      <CardGrid xArray={props.cards[props.id].xArray} onCheck={() => props.dispatch(checkX(props.id))} />
    </div>;
}

const mapStateToProps = state => {
  return {
    cards: state.card.cards
  }
}

export default connect(mapStateToProps)(Card)
