import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fretboard from './components/Fretboard';
import Strings from './components/Strings';
import Fingering from './components/Fingering';
import MusicButton from './components/MusicButton';

class GuitarChord extends Component {
  static propTypes = {
    chordName: PropTypes.string,
    frets: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
    fingering: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
    // bool for showing music button
    inline: PropTypes.bool,
    // list of classes to apply to the music button
    buttonClasses: PropTypes.string,
  };

  static defaultProps = {
    music: true,
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
    const fretCount = (fretRange > 4 ) ? fretRange : 4;
    // can this be in stylesheet?
    const lineStyles = { stroke: "rgb(0,0,0)", strokeWidth: 0.5 };

    const stringCount = this.props.frets.length;
    // TODO make it easier to extend styles of base elem
    const wrapperStyles = {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: 150,
    };

    const buttonStyles = {
      alignSelf: 'center',
      marginBottom: 10,
      ...this.props.buttonStyles,
    }

    return (
      <div style={wrapperStyles}>
        <svg width="150" height="150">
          <text x="5" y="15">{this.props.chordName}</text>
          <Strings
            lineStyles={lineStyles}
            stringCount={stringCount}
          />
          <Fretboard
            fretStyles={fretStyles}
            fretCount={fretCount}
          />
          <Fingering
            fingering={this.props.fingering}
            frets={this.props.frets}
            lowestFret={lowestFret}
            fretCount={fretCount}
          />
        </svg>
        { this.props.music &&
          <MusicButton
            buttonClasses={this.props.buttonClasses}
            buttonStyles={buttonStyles}
            frets={this.props.frets}
          />
        }
      </div>
    );
  }
};

export default GuitarChord;
