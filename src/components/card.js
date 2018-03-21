import React from 'react';
import { connect } from "react-redux";
import CardGrid from './card-grid'
import './card.css';
import { checkX } from "../actions/card";
import NotificationForm from "./notification-form";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/minimal-example.css';

export function Card(props) {

  return <div className="card">
      <h2 className="title">{props.cards[props.id].name}</h2>
      <div className="grid-container" />

      <CardGrid card={props.cards[props.id]} onCheck={id => props.dispatch(checkX(id))} />
      <Accordion>
        <AccordionItem>
          <AccordionItemTitle>
            <h3>{'\u25BC'} Notification Settings</h3>
          </AccordionItemTitle>
          <AccordionItemBody>
            <NotificationForm card={props.cards[props.id]} form={`NotificationForm_${props.id}`} initialValues={{ cardId: props.id, minutesUntilExpires: 720 }} />
          </AccordionItemBody>
        </AccordionItem>
      </Accordion>
    </div>;
}

const mapStateToProps = state => {
  return {
    cards: state.card.cards
  }
}

export default connect(mapStateToProps)(Card)
