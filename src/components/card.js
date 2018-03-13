import React from 'react';
import CardGrid from './card-grid'
import './card.css';

export default function Card(props) {
  return <div className="card">
      <h2 className="title">{props.card.name}</h2>
      <div className="grid-container" />
      <CardGrid xArray={props.card.xArray} />
    </div>;
}
