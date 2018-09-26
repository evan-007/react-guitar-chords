import React from 'react';
import CONSTANTS from '../constants';

const Strings = ({ stringCount, lineStyles }) => {
  // the veritical lines on the SVG that represent strings
  // fretboard
  // stringCount is this.props.frets.length so add 1 to it here, fix this!

  return Array.from(new Array(stringCount + 1)).map((_elem, index) => {
    const width = CONSTANTS.X_MAX - CONSTANTS.X_BASE;
    const offset = width / (stringCount);
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
