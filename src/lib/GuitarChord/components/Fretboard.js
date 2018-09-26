import React from 'react';
import CONSTANTS from '../constants';

// this component draws the horizontal lines for the nut + frets
const Fretboard = ({ fretCount, fretStyles }) => {

  const yOffset = CONSTANTS.Y_MAX / fretCount;
  const numberFretsToDraw = fretCount + 2 // add the nut and the final fret

  return Array.from(new Array(numberFretsToDraw)).map((_elem, index) => {
    if (index === 0) {
      // draw the nut
      return (
        <line
          key={index}
          style={fretStyles}
          x1={CONSTANTS.X_BASE}
          x2={CONSTANTS.X_MAX}
          y1={CONSTANTS.Y_BASE}
          y2={CONSTANTS.Y_BASE}
        >
        </line>
      )
    }
    const yCoord = CONSTANTS.Y_BASE + (yOffset * (index-1));
    return (
      <line
        key={index}
        style={fretStyles}
        x1={CONSTANTS.X_BASE}
        x2={CONSTANTS.X_MAX}
        y1={yCoord}
        y2={yCoord}
      >
      </line>
    );
  });
}

export default Fretboard;
