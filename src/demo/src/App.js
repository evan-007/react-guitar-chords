import React, { Component } from 'react';
import GuitarChord from 'react-guitar-chords';
import './App.css';
import Header from './Header';
import Container from './Container';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="chord-background">
          <Container style={{ textAlign: 'center' }}>
            <h2>Easy chord charts with audio for React</h2>
            <div>
              <div className='example-1-container'>
                <p
                  className="example-1-text"
                  children={
                    `<GuitarChord
                    frets={['x', 3, 2, 0, 1, 0]}
                    chordName="C Major"
                    />`
                  }
                />
                <GuitarChord
                  frets={['x', 3, 2, 0, 1, 0]}
                  chordName="C Major"
                />
              </div>
              <GuitarChord
                frets={[6, 'x', 7, 7, 5, 5]}
                chordName="Bbmaj7#11"
              />
              <GuitarChord
                frets={['x', 0, 2, 4, 2, 0]}
                chordName="Amaj9"
              />
            </div>
          </Container>
        </div>
        <Container style={{ height: '10000px' }} />
      </React.Fragment>
    );
  }
}

export default App;
