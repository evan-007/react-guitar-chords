import React from 'react';
import Synth from './AudioSynth';

const MusicButton = ({ frets, buttonClasses, buttonStyles }) => {
  const playMusic = () => {
    // refactor!
    const notes = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
    // assumes standard tuning
    const strings = ['E','A','D','G','B','E'];
    // starting octaves of the open strings
    const octaves = [2,2,3,3,3,4];
    const chord = frets;

    const chordNotes = strings.map((stringName, index) => {
      if (chord[index] === 'x') {
        return 'x'
      } else {
        const startingNote = parseInt(notes.indexOf(stringName));
        const noteAdjust = parseInt(chord[index]);
        let chordtone = startingNote + noteAdjust;
        // hack to handle going up an octave
        // when chordtone is longer than array of notes
        if(chordtone >= 12) {
          octaves[index]++
          chordtone = (parseInt(chordtone) - 12)
        }
        return notes[chordtone]
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
  };

  return (
    <button onClick={playMusic} className={buttonClasses} style={buttonStyles}>Play</button>
  )
};

export default MusicButton;
