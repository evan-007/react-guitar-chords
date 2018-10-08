import * as audioService from './audioService';
import * as webAudioWrapper from './webAudioWrapper'

describe('audioService', () => {
  describe('playChord', () => {
    it('calls 1 time for each note of the chord', () => {
      const audioMock = jest.spyOn(webAudioWrapper, 'default')
        .mockImplementation(() => null);
      jest.useFakeTimers();
      const chord = [3, 2, 0, 1, 0];

      audioService.playChord(chord);

      jest.runAllTimers();
      expect(audioMock).toHaveBeenCalledTimes(5);
    });
  });
});
