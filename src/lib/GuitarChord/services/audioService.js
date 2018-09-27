import Synth from './AudioSynth';

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

  return notes.filter((fret) => fret != 'x');
};

export const playChord = (frets) => {
  // frets == ['X', 3, 2, 0, 1, 0]
  const notes = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
  // assumes standard tuning
  const strings = ['E','A','D','G','B','E'];
  // starting octaves of the open strings
  const octaves = [2,2,3,3,3,4];
  const chord = frets;

  const chordNotes = strings.map((stringName, index) => {
    if (chord[index] === 'x') {
      return 'x';
    } else {
      const startingNote = parseInt(notes.indexOf(stringName), 10);
      const noteAdjust = parseInt(chord[index], 10);
      let chordtone = startingNote + noteAdjust;
      // hack to handle going up an octave
      // when chordtone is longer than array of notes
      if(chordtone >= 12) {
        octaves[index]++;
        chordtone = (parseInt(chordtone, 10) - 12);
      }
      return notes[chordtone];
    }
  });

  const acoustic = Synth.createInstrument('acoustic');

  // can't skip over 'x' because then octaves get messed up, instead just don't increament i if a muted note.
  let i = 0;
  chordNotes.forEach((value, index) => {
    if(value !== 'x') {
      i++;
      setTimeout(() => {
        acoustic.play(value, octaves[index], 2);
      }, i*500);
    }
  });
}
