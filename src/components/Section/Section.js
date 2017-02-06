import React from 'react';
import classnames from 'classnames';

import './Section.scss';

export default ({ zIndex, children, className, backLayerClassName, wrapperClassName, id }) => (
  <div className={classnames('Section', wrapperClassName)} style={{ zIndex: zIndex }} id={id}>
    {backLayerClassName && <div className={classnames('Section-layer', 'Section-layer--back', backLayerClassName)} />}
    <div className={classnames('Section-layer', 'Section-layer--base', className)}>
      {children}
    </div>
  </div>
);
