import React, { PropTypes } from 'react';

import './Ribbon.scss';

const Ribbon = ({ zIndex, children }) => (
  <div className="Ribbon" style={{ zIndex }}>
    {children}
  </div>
);

Ribbon.propTypes = {
  zIndex: PropTypes.number,
  children: PropTypes.node,
};

export default Ribbon;
