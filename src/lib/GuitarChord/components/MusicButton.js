import React from 'react';

import { playChord, fretsToMidi } from '../services/audioService';

const MusicButton = ({ frets, buttonClasses, buttonStyles }) => {
  const handleOnClick = () => {
    const notes = fretsToMidi(frets);
    playChord(notes);
  };

  return (
    <button
      onClick={handleOnClick}
      className={buttonClasses}
      style={buttonStyles}
    >
      Play
    </button>
  );
}

export default MusicButton;
