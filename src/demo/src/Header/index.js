import React from 'react';
import Octicon, { MarkGithub } from '@githubprimer/octicons-react';

import './header.css';

const Header = () => (
  <div className="header-container">
    <p className='header-title' children={'<ReactGuitarChords/>'} />
    <a className='header-link' href="https://github.com/evan-007/react-guitar-chords">
      <Octicon icon={MarkGithub} size="medium" />
    </a>
  </div>
);

export default Header;
