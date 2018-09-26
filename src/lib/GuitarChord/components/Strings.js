import React from 'react';
import CONSTANTS from '../constants';

const Strings = ({ stringCount, lineStyles }) => {
  // the veritical lines on the SVG that represent strings
  // fretboard
  // stringCount is this.props.frets.length so add 1 to it here, fix this!

  return Array.from(new Array(stringCount)).map((_elem, index) => {
    // -1 because we draw 6 lines, but the first one does not have an offset
    const offset = CONSTANTS.X_WIDTH / (stringCount - 1 );
    const xValue = CONSTANTS.X_BASE + (offset * index);

    return (
      <line
        key={index}
        style={lineStyles}
        x1={xValue}
        x2={xValue}
        y1={CONSTANTS.Y_BASE}
        y2={CONSTANTS.REAL_Y_MAX}
      >
      </line>
    );
  });
}

export default Strings;
