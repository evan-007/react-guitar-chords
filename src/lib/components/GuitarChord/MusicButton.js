import React from 'react';
import playMusicService from './musicService';

const MusicButton = ({ frets, buttonClasses, buttonStyles }) => {
  const handleOnClick = () => {
    playMusicService(frets);
  };

  return (
    <button onClick={handleOnClick} className={buttonClasses} style={buttonStyles}>Play</button>
  )
};

export default MusicButton;
