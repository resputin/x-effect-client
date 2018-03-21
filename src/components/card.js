import React from 'react';
import { connect } from "react-redux";
import CardGrid from './card-grid'
import './card.css';
import { checkX } from "../actions/card";
// import NotificationForm from "./notification-form";

export function Card(props) {

  return <div className="card">
      <h2 className="title">{props.cards[props.id].name}</h2>
      {/* <button className="settings">
        <img src="http://moziru.com/images/gears-clipart-transparent-background-19.png" alt="settings" />
      </button> */}
      <div className="grid-container" />
      {/* <NotificationForm card={props.cards[props.id]} form={`NotificationForm_${props.id}`} initialValues={{ cardId: props.id, minutesUntilExpires: 720 }} /> */}
      <CardGrid card={props.cards[props.id]} onCheck={id => props.dispatch(checkX(id))} />
    </div>;
}

const mapStateToProps = state => {
  return {
    cards: state.card.cards
  }
}

export default connect(mapStateToProps)(Card)
