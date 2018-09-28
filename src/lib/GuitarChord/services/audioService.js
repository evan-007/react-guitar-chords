import WebAudioFontPlayer from 'webaudiofont';

import guitarAudio from './guitarAudio';

// setup because WebAudioFontPlayer expects the synth file to be a global :(
window.guitarAudio = guitarAudio;
const AudioContextFunc = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContextFunc();
const player = new WebAudioFontPlayer();
player.loader.decodeAfterLoading(audioContext, 'guitarAudio');

export const fretsToMidi = (frets) => {
  // map frets == ['X', 3, 2, 0, 1, 0]
  // to midi notes 0-127
  // low E is 40, only support standard tuning for now
  const standardTuningMidi = [40, 45, 50, 55, 59, 64];
  const notes = frets.map((fret, index) => {
    if (fret === 'x') {
      return fret;
    }
    return standardTuningMidi[index] + fret;
  });

  return notes.filter((fret) => fret !== 'x');
};

export const playChord = (midiNotes) => {
  midiNotes.forEach((note, index) => {
    index++;
    setTimeout(() => {
      player.queueWaveTable(
        audioContext,
        audioContext.destination,
        guitarAudio,
        0,
        note,
        0.5
      );
    }, index * 500);
  });
}
