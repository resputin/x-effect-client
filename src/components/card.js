import React from 'react';
import { connect } from 'react-redux';
import CardGrid from './card-grid';
import { deleteNotification } from '../actions/notification';
import './card.css';
import { checkX } from '../actions/card';
import NotificationForm from './notification-form';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/minimal-example.css';

/**
 * The card component is the most important component of the entire App.
 * It will display the Grid along with the notification settings for the card.
 * All of these are handled in separate components but this card component ties
 * everything together.
 */
export function Card(props) {
  const notificationSettings = props.cards[props.id].notificationsEnabled ? (
    <button
      onClick={() => props.dispatch(deleteNotification(props.id))}
      className="notification-delete"
    >
      Turn Off Notifications
    </button>
  ) : (
    <NotificationForm
      card={props.cards[props.id]}
      form={`NotificationForm_${props.id}`}
      initialValues={{ cardId: props.id }}
    />
  );

  return (
    <div className="card">
      <h2 className="title">{props.cards[props.id].name}</h2>
      <div className="grid-container" />

      <CardGrid
        card={props.cards[props.id]}
        onCheck={id => props.dispatch(checkX(id))}
      />
      <Accordion>
        <AccordionItem>
          <AccordionItemTitle>
            <h3 className="notification-settings-title">
              {'\u25BC'} Notification Settings
            </h3>
          </AccordionItemTitle>
          <AccordionItemBody>{notificationSettings}</AccordionItemBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cards: state.card.cards
  };
};

export default connect(mapStateToProps)(Card);
