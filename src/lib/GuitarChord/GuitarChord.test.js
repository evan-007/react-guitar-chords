import React from 'react';
import * as Enzyme from 'enzyme';

import GuitarChord from './';
import Fingering from './components/Fingering';
import Fretboard from './components/Fretboard';
import Strings from './components/Strings';
import MusicButton from './components/MusicButton';

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

  describe('props for Fingering', () => {
    it('passes the correct props', () => {
      const props = {
        fingering: ['x', 'x', 2, 3, 1],
        frets: ['x', 0, 2, 2, 1, 0],
      }
      const wrapper = getWrapper({ ...props });

      const fingeringComponent = wrapper.find(Fingering);
      const { fingering, frets, lowestFret, fretCount } = fingeringComponent.props();

      expect(fingering).toEqual(props.fingering);
      expect(frets).toEqual(props.frets);
      expect(fretCount).toEqual(4);
      expect(lowestFret).toEqual(0);
    });
  });

  describe('MusicButton', () => {
    it('renders a music button if props.music is true', () => {
      const wrapper = getWrapper({ music: true });

      const musicButton = wrapper.find(MusicButton);

      expect(musicButton).toHaveLength(1);
    });

    it('does not render a music button if props.music is false', () => {
      const wrapper = getWrapper({ music: false });

      const musicButton = wrapper.find(MusicButton);

      expect(musicButton).toHaveLength(0);
    });

    it('passes props.buttonStyles', () => {
      const buttonStyles = {
        color: 'red',
      };
      const wrapper = getWrapper({ music: true, buttonStyles });

      const musicButton = wrapper.find(MusicButton);

      expect(musicButton.props().buttonStyles).toMatchObject(buttonStyles);
    });
  });
});
