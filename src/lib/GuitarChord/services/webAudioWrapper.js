import guitarAudio from './guitarAudio';

// setup because WebAudioFontPlayer expects the synth file to be a global :(
// this makes it easier to mock in tests

let player;
let audioContext;

const setupAudio = () => {
  window.guitarAudio = guitarAudio;
  const AudioContextFunc = window.AudioContext || window.webkitAudioContext;
  audioContext = new AudioContextFunc();
  const player = new WebAudioFontPlayer();
  player.loader.decodeAfterLoading(audioContext, 'guitarAudio');
}

const webAudioWrapper = (note) => {
  if (!player) {
    setupAudio();
  }

  player.queueWaveTable(
    audioContext,
    audioContext.destination,
    guitarAudio,
    0,
    note,
    0.5
  );
}

export default webAudioWrapper;
