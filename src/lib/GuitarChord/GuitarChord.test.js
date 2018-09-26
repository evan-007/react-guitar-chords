import React from 'react';
import ReactDOM from 'react-dom';
import GuitarChord from './';

it('Example renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GuitarChord frets={[ 1,2,3,4,5,6 ]} />, div);
});
