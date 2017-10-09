import React from 'react';
import GuitarChord from '../lib';

const App = () => (
  <div>
    <GuitarChord
      chordName="C major"
      frets={['x', 3, 2, 0, 1, 0]}
      inline={true}
    />
    <GuitarChord
      chordName="Bb maj7#11"
      fingering={[2, 'x', 3, 4, 1, 1]}
      frets={[6, 'x', 7, 7, 5, 5]}
      music={true}
      inline={true}
    />
  </div>
);

export default App;
