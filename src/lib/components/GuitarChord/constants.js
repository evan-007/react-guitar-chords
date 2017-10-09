// TODO: clean this garbage up

// svg canvas is 160x150
// padding-top 40px for name and open strings
// padding-left/right 10px for lowest fret label
// chord is rendered starting 20x down, add 20px padding bottom
// remaining y = 90px for 4+ frets
const REAL_Y_MAX = 130; // sorry
const X_BASE = 20;
const X_MAX = 120;
const Y_BASE = 40; // first fretmarker starts at this y coord
const Y_MAX = 90; // no, this is not the max! only for frets?

const CONSTANTS = {
  REAL_Y_MAX,
  X_BASE,
  X_MAX,
  Y_BASE,
  Y_MAX,
}

export default CONSTANTS;
