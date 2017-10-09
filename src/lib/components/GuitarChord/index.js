import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CONSTANTS from './constants';

class GuitarChord extends Component {
  static propTypes = {
    chordName: PropTypes.string,
    frets: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
    fingering: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    )
  }

  render() {
    const fretStyles = { stroke: 'rgb(0,0,0)', strokeWidth: 0.2 };

    // don't care about muted strings
    const fretted = this.props.frets.filter((fret) => {
      return typeof(fret) === 'number';
    });
    const highestFret = Math.max(...fretted);
    const lowestFret = Math.min(...fretted);
    const fretRange = highestFret - lowestFret;
    // always show at least 4 frets
    const numberFretsToRender = (fretRange > 4 ) ? fretRange : 4;
    // these should probably be set in CONSTANTS
    const openStringCoord = [2, 12, 22, 32, 42, 51]; // x coord of open string
    // can this be in stylesheet?
    const lineStyles = { stroke: "rgb(0,0,0)", strokeWidth: 0.5 };

    // TODO fix these to just reference the CONSTANTS
    const Y_BASE = CONSTANTS.Y_BASE;
    const Y_MAX = CONSTANTS.Y_MAX;
    const REAL_Y_MAX = CONSTANTS.REAL_Y_MAX;
    const X_BASE = CONSTANTS.X_BASE;
    const X_MAX = CONSTANTS.X_MAX;

    const stringsToRender = () => {
      const stringCount = this.props.frets.length - 1;
      const strings = [];
      const width = X_MAX - X_BASE;
      const offset = width / (stringCount);
      // use lodash.times instead
      for (let i = 0; i <= stringCount; i++) {
        const xValue = X_BASE + (offset * i);
        strings.push(
          <line key={i} x1={xValue} x2={xValue} y1={Y_BASE} y2={REAL_Y_MAX} style={lineStyles}></line>
        )
      }
      return strings;
    }

    const fretsToRender = () => {
      // gross install lodash.times
      const fretboard = [];
      const yOffset = Y_MAX / numberFretsToRender;
      const numberFretsToDraw = numberFretsToRender + 1 // remember the nut
 
      // add 1 for nut
      for (let i = 0; i <= numberFretsToDraw; i++) {
        if (i === 0) {
          fretboard.push(
            <line
              key={i}
              x1={X_BASE}
              x2={X_MAX}
              y1={Y_BASE}
              y2={Y_BASE}
              style={fretStyles}
             ></line>
          );
        } else {
          const yCoord = Y_BASE + (yOffset * (i-1));
          fretboard.push(
            <line key={i} x1={X_BASE} x2={X_MAX} y1={yCoord} y2={yCoord} style={fretStyles}></line>
          );
        }
      }
      return fretboard;
    }

    const fingering = () => {
      const svgFingering = [];
      // TODO: this is duplicate code in other render functions
      const width = X_MAX - X_BASE;
      const offset = width / 5;
      const isOpenChord = this.props.frets.includes(0);
      const yOffset = Y_MAX / numberFretsToRender;

      if (!isOpenChord) {
        // add a fret label to the left of the chord diagram
        svgFingering.push(
          <text key={'todo'} x={X_MAX + 10} y={Y_BASE} fill="black">
            {lowestFret}
          </text>
        );
      }

      this.props.frets.map((fret, index) => {
        if (fret === 'x' || fret === 0) {
          const xValue = X_BASE + (offset * index) - 4; // -1 because of how text sits
          return svgFingering.push(
            <text x={xValue} y={Y_BASE - 3 }>{fret}</text>
          );
        }
        const xValue = X_BASE + (offset * index);
        let yCoord;
        if (isOpenChord) {
          yCoord = Y_BASE + (yOffset * fret) - (yOffset / 2);
        } else {
          yCoord = Y_BASE + (yOffset * (fret - lowestFret + 1)) - (yOffset / 2);
        }
        svgFingering.push(
          <circle cx={xValue} cy={yCoord} r="8" fill="black"></circle>
        );
        if (this.props.fingering) {
          const finger = this.props.fingering[index];
          svgFingering.push(
            <text x={xValue} y={yCoord + 5} fill="white" textAnchor="middle">
              {finger}
            </text>
        );

        }
      });
      return svgFingering;
    };

    return (
      <svg width="150" height="150" style={{border: "1px solid red"}}>
        <text x="5" y="15">{this.props.chordName}</text>
        {fretsToRender()}
        {stringsToRender()}
        {fingering()}
      </svg>
    );
  }
};

export default GuitarChord;
