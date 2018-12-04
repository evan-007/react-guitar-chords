import React from 'react';
import PropTypes from 'prop-types';

import './container.css'

const Container = ({ children, style }) => (
  <div className="docs-container" style={style}>
    {children}
  </div>
);

Container.propTypes = {

}

export default Container;
