import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CONSTANTS from './constants';
import FretBoard from './FretBoard';
import Strings from './Strings';

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

    // why
    const stringCount = this.props.frets.length - 1;
    // FretBoard and Strings return arrays so can't be <Component />
    // syntax until react 16

    return (
      <svg width="150" height="150" style={{border: "1px solid red"}}>
        <text x="5" y="15">{this.props.chordName}</text>
        {FretBoard({ numberFretsToRender, fretStyles })}
        {Strings({ stringCount, lineStyles })}
        {fingering()}
      </svg>
    );
  }
};

export default GuitarChord;
