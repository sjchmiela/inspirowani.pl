import React from 'react';
import classnames from 'classnames';

import './Section.scss';

export default ({ zIndex, children, className, backLayerClassName }) => (
  <div className="Section" style={{ zIndex: zIndex }}>
    {backLayerClassName && <div className={classnames('Section-layer', 'Section-layer--back', backLayerClassName)} />}
    <div className={classnames('Section-layer', 'Section-layer--base', className)}>
      {children}
    </div>
  </div>
);
