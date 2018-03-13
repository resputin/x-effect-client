import React from 'react';
import './card-grid.css';

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
      if (props.xArray[row * 7 + i] === true) {
        cell = (
          <div className="complete" key={row * 7 + i}>
            X
          </div>
        );
      } else if (props.xArray[row * 7 + i] === false) {
        cell = (
          <div className="incomplete" key={row * 7 + i}>
            O
          </div>
        );
      } else if (row * 7 + i === props.xArray.length) {
        const label = `Input for ${props.name} Card`
        // make the next available square active
        cell = (
          <input
            type="checkbox"
            title={label}
            className="active"
            key={row * 7 + i}
            onChange={() => props.onCheck()}
          />
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
