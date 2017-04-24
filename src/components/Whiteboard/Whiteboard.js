import React from 'react';
import classnames from 'classnames';

import './Whiteboard.scss';

export default ({ children, className }) => (
  <div className={classnames('Whiteboard', className)}>
    {children}
  </div>
);
