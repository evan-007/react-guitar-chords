import React from 'react';
import CONSTANTS from '../constants';

const Fingering = ({ frets, fingering, fretCount, lowestFret }) => {
  // this component draws the black circles representing fingered notes, if
  // this.props.fingering is passed into the GuitarChord, it will also put the
  // numbers in the circles that represent which finger to use
  const svgFingering = [];
  // TODO: this is duplicate code in other render functions
  const offset = CONSTANTS.X_WIDTH / 5;
  const isOpenChord = frets.includes(0);
  const yOffset = CONSTANTS.Y_MAX / fretCount;

  if (!isOpenChord) {
    // add a fret label to the left of the chord diagram
    svgFingering.push(
      <text
        key="open-chord-fret-label"
        x={CONSTANTS.X_MAX + 10}
        y={CONSTANTS.Y_BASE} fill="black"
      >
        {lowestFret}
      </text>
    );
  }

  frets.forEach((fret, index) => {
    if (fret === 'x' || fret === 0) {
      const xValue = CONSTANTS.X_BASE + (offset * index) - 4; // -1 because of how text sits
      // If there exists a fingering/label for the open note, use that label
      let label = fret;
      if (fret === 0 && fingering) {
        if (fingering[index] !== "") {
          label = fingering[index];
        }
      }
      return svgFingering.push(
        <text
          key={`zero-fret-${index}`}
          x={xValue}
          y={CONSTANTS.Y_BASE - 3}
        >
          {label}
        </text>
      );
    }
    const xValue = CONSTANTS.X_BASE + (offset * index);
    let yCoord;
    if (isOpenChord) {
      yCoord = CONSTANTS.Y_BASE + (yOffset * fret) - (yOffset / 2);
    } else {
      yCoord = CONSTANTS.Y_BASE + (yOffset * (fret - lowestFret + 1)) - (yOffset / 2);
    }
    svgFingering.push(
      <circle
        cx={xValue}
        cy={yCoord}
        fill="black"
        key={`fingering-${index}`}
        r="8"
      >
      </circle>
    );
    if (fingering) {
      const finger = fingering[index];
      svgFingering.push(
        <text
          fill="white"
          key={`fingering-text-${index}`}
          textAnchor="middle"
          x={xValue}
          y={yCoord + 5}
        >
          {finger}
        </text>
      );
    }
  });
  return svgFingering;
};

export default Fingering;
