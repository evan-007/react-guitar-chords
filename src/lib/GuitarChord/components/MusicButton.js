import React from 'react';
import WebAudioFontPlayer from 'webaudiofont';

import guitarAudio from '../services/guitarAudio';
import { playChord, fretsToMidi } from '../services/audioService';

class MusicButton extends React.Component {
  componentDidMount() {
    // player.loaded.decodeAfterLoading expects this to be on window;
    window.guitarAudio = guitarAudio;
    const AudioContextFunc = window.AudioContext || window.webkitAudioContext;
    this.audioContext = new AudioContextFunc();
    const player = new WebAudioFontPlayer();
    player.loader.decodeAfterLoading(this.audioContext, 'guitarAudio');
    this.player = player;
  }

  handleOnClick = () => {
    const notes = fretsToMidi(this.props.frets);


    // support this.props.strum?
    // this.player.queueStrum(this.audioContext, this.audioContext.destination, guitarAudio, 0, notes, 1.5)

    // arpeggiate notes
    notes.forEach((note, index) => {
      index++;
      setTimeout(() => {
        this.player.queueWaveTable(
          this.audioContext,
          this.audioContext.destination,
          guitarAudio,
          0,
          note,
          0.5
        );
      }, index * 500);
    });
  };

  render() {
    return (
      <button
        onClick={this.handleOnClick}
        className={this.props.buttonClasses}
        style={this.props.buttonStyles}
      >
        Play
      </button>
    );
  }
}

export default MusicButton;
