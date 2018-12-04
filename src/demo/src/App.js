import React, { Component } from 'react';
import GuitarChord from 'react-guitar-chords';
import './App.css';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="chord-background">
        <Header />
        <div className="docs-container">
          <GuitarChord
            frets={['x', 3, 2, 0, 1, 0]}
            chordName="C Major"
          />
          <GuitarChord
            frets={[6, 'x', 7, 7, 5, 5]}
            chordName="Bbmaj7#11"
          />
          <GuitarChord
            frets={['x', 0, 2, 4, 2, 0]}
            chordName="Amaj9"
          />
        </div>
      </div>
    );
  }
}

export default App;
