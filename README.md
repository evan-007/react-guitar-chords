# Guitar chord SVGs in React

## Getting Started

Needs react-16+

[Demo](http://ruddy-zebra.surge.sh/)

`yarn add react-guitar-chords`

```javascript
import React from 'react';
import GuitarChord from 'react-guitar-chords';

const MyChord = () => {
  return (
    <GuitarChord
      chordName='C major'
      frets={['x', 3, 2, 0, 1, 0]}
    />
  );
}

export default MyChord;
```

## Development Setup

Built with [create-react-library](https://github.com/udiliaInc/create-react-library.git)

````
git clone git@github.com:evan-007/react-guitar-chords.git
````

Install dependencies

`yarn install`

Start development server

`yarn start`

Runs the demo app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Library files

All library files are located inside `src/lib`

## Demo app

Is located inside `src/demo` directory, here you can test your library while developing

## Testing

`yarn run test`

## Build library

`yarn run build`

Produces production version of library under the `build` folder.

## Publish library

`yarn publish`
