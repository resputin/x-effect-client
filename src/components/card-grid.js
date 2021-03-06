import React from 'react';
import moment from 'moment';
import './card-grid.css';
import x from '../images/x.png';
import o from '../images/letter-O.png';

/**
 * Card grid handles making the table for the card. It will fill out
 * the previous cells and make todays cell available to be checked.
 * It works by iterating over 7 rows and generating 7 cells per row.
 * Each of these cells corresponds to a CardEvent that exists in the
 * database which are accessed by CardGrid as an array of objects.
 */
export default function CardGrid(props) {
  /**
   * Generates the entire grid by calling generate row for 7 rows.
   * Returns an html table.
   */
  function generateGrid() {
    const grid = [];
    for (let i = 0; i < 7; i++) {
      grid.push(generateRow(i));
    }
    return (
      <table className="grid">
        <tbody>{grid}</tbody>
      </table>
    );
  }

  /**
   *
   * @param {Number} row
   *
   * Generates a row that will fill each cell with the proper completion.
   * Will also generate the available cell component for the cell that is allowed to be completed.
   *
   */
  function generateRow(row) {
    const cells = [];
    for (let i = 0; i < 7; i++) {
      let cell;
      if (props.card.cardEvents[row * 7 + i].status === 'COMPLETED') {
        cell = (
          <div className="complete" key={row * 7 + i}>
            <img src={x} alt="A red X" />
          </div>
        );
      } else if (props.card.cardEvents[row * 7 + i].status === 'MISSED') {
        cell = (
          <div className="incomplete" key={row * 7 + i}>
            <img src={o} alt="A black O" />
          </div>
        );
      } else if (
        moment(props.card.cardEvents[row * 7 + i].expires).valueOf() -
          moment().valueOf() <
          86400000 &&
        moment(props.card.cardEvents[row * 7 + i].expires).valueOf() -
          moment().valueOf() >=
          0
      ) {
        const label = `Input for ${props.card.name} Card`;
        // make the next available square active
        cell = (
          <label className="active">
            <input
              type="checkbox"
              title={label}
              key={row * 7 + i}
              onChange={() =>
                props.onCheck(props.card.cardEvents[row * 7 + i].id)
              }
            />{' '}
            <span />
          </label>
        );
      } else {
        cell = <div className="pending" key={row * 7 + i} />;
      }
      cells.push(
        <td key={row * 7 + i} className="grid-square">
          {cell}
        </td>
      );
    }
    return <tr key={row}>{cells}</tr>;
  }

  return generateGrid();
}
