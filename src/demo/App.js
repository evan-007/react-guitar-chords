import React from 'react';
import GuitarChord from '../lib';

const App = () => (
  <div>
    <GuitarChord frets={['x', 3, 2, 0, 1, 0]} chordName='C major' />
  </div>
);

export default App;
