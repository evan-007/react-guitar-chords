import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CONSTANTS from './constants';
import FretBoard from './FretBoard';
import Strings from './Strings';
import Fingering from './Fingering';

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
    const lowestFret = Math.min(...fretted);
    const fretRange = highestFret - lowestFret;
    // always show at least 4 frets
    const numberFretsToRender = (fretRange > 4 ) ? fretRange : 4;
    // these should probably be set in CONSTANTS
    const openStringCoord = [2, 12, 22, 32, 42, 51]; // x coord of open string
    // can this be in stylesheet?
    const lineStyles = { stroke: "rgb(0,0,0)", strokeWidth: 0.5 };

    // why
    const stringCount = this.props.frets.length - 1;
    // FretBoard and Strings return arrays so can't be <Component />
    // syntax until react 16

    return (
      <svg width="150" height="150" style={{border: "1px solid red"}}>
        <text x="5" y="15">{this.props.chordName}</text>
        {FretBoard({ numberFretsToRender, fretStyles })}
        {Strings({ stringCount, lineStyles })}
        {Fingering({ frets: this.props.frets, fingering: this.props.fingering, numberFretsToRender, lowestFret })}
      </svg>
    );
  }
};

export default GuitarChord;
