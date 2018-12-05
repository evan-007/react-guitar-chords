import React from 'react';
import GuitarChord from 'react-guitar-chords';

const Example = () => (
  <GuitarChord
    chordName="C Major"
    fingering={['x', 3, 2, 0, 1, 0]}
    frets={['x', 3, 2, 0, 1, 0]}
  />
);

export default Example;
