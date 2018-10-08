import webAudioWrapper from './webAudioWrapper';

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
      webAudioWrapper(note);
    }, index * 500);
  });
}
