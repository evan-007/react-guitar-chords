import React, { Component } from 'react';
import GuitarChord from 'react-guitar-chords';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GuitarChord
          frets={['x', 3, 2, 0, 1, 0]}
          chordName="C Major"
        />
        <GuitarChord
          frets={[6, 'x', 7, 7, 5, 5]}
          chordName="Bbmaj7#11"
        />
      </div>
    );
  }
}

export default App;
