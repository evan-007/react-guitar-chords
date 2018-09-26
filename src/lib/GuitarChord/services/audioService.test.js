import * as audioService from './audioService';
import Synth from './AudioSynth';

describe('audioService', () => {
  describe('playChord', () => {
    it('calls 1 time for each note of the chord', () => {
      jest.useFakeTimers();
      const playSpy = jest.fn();
      const mockSynth = () => ({
        play: playSpy,
      });
      Object.defineProperty(Synth, 'createInstrument', { value: mockSynth });
      const chord = ['x', 3, 2, 0, 1, 0];

      audioService.playChord(chord);

      jest.runAllTimers();
      expect(playSpy).toHaveBeenCalledTimes(5);
    });
  });
});
