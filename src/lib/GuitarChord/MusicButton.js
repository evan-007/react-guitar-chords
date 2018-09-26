import React from 'react';
import { playChord } from './audioService';

const MusicButton = ({ frets, buttonClasses, buttonStyles }) => {
  const handleOnClick = () => {
    playChord(frets);
  };

  return (
    <button onClick={handleOnClick} className={buttonClasses} style={buttonStyles}>Play</button>
  )
};

export default MusicButton;
