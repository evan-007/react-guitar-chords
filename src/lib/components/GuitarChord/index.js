import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  };

  render() {
    const fretStyles = { stroke: 'rgb(0,0,0)', strokeWidth: 0.2 };
    // don't care about muted strings
    const fretted = this.props.frets.filter((fret) => {
      return typeof(fret) === 'number';
    });
    const lowestFret = Math.min(...fretted);
    const highestFret = Math.max(...fretted);
    const fretRange = highestFret - lowestFret;
    // always show at least 4 frets
    const numberFretsToRender = (fretRange > 4 ) ? fretRange : 4;
    // can this be in stylesheet?
    const lineStyles = { stroke: "rgb(0,0,0)", strokeWidth: 0.5 };

    // why
    const stringCount = this.props.frets.length - 1;
    // FretBoard and Strings return arrays so can't be <Component />
    // syntax until react 16
        // {FretBoard({ numberFretsToRender, fretStyles })}

    return (
      <svg width="150" height="150" style={{border: "1px solid red"}}>
        <text x="5" y="15">{this.props.chordName}</text>
        <Strings
          lineStyles={lineStyles}
          stringCount={stringCount}
        />
        <FretBoard
          fretStyles={fretStyles}
          numberFretsToRender={numberFretsToRender}
        />
        <Fingering
          fingering={this.props.fingering}
          frets={this.props.frets}
          lowestFret={lowestFret} 
          numberFretsToRender={numberFretsToRender}
        />
      </svg>
    );
  }
};

export default GuitarChord;
