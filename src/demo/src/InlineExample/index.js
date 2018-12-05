import React from 'react';
import GuitarChord from 'react-guitar-chords';

const InlineExample = () => (
  <div style={{ display: 'flex' }}>
    <GuitarChord
      chordName="Bbmaj7#11"
      fingering={[2, 'x', 3, 4, 1, 1]}
      frets={[6, 'x', 7, 7, 5, 5]}
      music={false}
    />
    <GuitarChord
      chordName="Amaj9"
      frets={['x', 0, 2, 4, 2, 0]}
    />
  </div>
);

export default InlineExample;
