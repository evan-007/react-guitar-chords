import React from 'react';
import * as Enzyme from 'enzyme';

import GuitarChord from './';
import Fretboard from './components/Fretboard';
import Strings from './components/Strings';

describe('GuitarChord', () => {
  const getWrapper = (overrideProps, renderMethod = 'shallow') => {
    const defaultProps = {
      chordName: 'Whatever minor',
      frets: [0, 0, 0, 0, 0, 0],
    };
    return Enzyme[renderMethod](<GuitarChord {...defaultProps} {...overrideProps} />);
  };

  it('has the correct default props', () => {
    expect(GuitarChord.defaultProps).toEqual({
      music: true,
    });
  });

  it('always renders at least 4 frets', () => {
    const frets = [0, 'x', 'x', 0, 0, 0];
    const wrapper = getWrapper({ frets });

    const fretboard = wrapper.find(Fretboard);
    expect(fretboard.props().fretCount).toBe(4);
  });

  describe('props for Strings', () => {
    it('passes the correct props', () => {
      const frets = [3, 2, 0, 0, 0, 3];
      const wrapper = getWrapper({ frets });

      const strings = wrapper.find(Strings);
      expect(strings.props().stringCount).toBe(frets.length);
    });
  });
});
