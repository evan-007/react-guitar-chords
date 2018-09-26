import musicService from './musicService';
import Synth from './AudioSynth';

describe('musicService', () => {
  it('calls 1 time for each note of the chord', () => {
    jest.useFakeTimers();
    const spy = jest.fn();
    const mockSynth = () => ({
      play: spy,
    });
    Object.defineProperty(Synth, 'createInstrument', { value: mockSynth });
    const chord = ['x', 3, 2, 0, 1, 0];

    musicService(chord);

    jest.runAllTimers();
    expect(spy).toHaveBeenCalledTimes(5);
  });
});
