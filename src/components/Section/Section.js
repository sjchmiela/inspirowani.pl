import React from 'react';
import classnames from 'classnames';

import './Section.scss';

export default ({ className, children }) => (
  <div
    className={classnames('Section', className)}
    children={children}
  />
);
