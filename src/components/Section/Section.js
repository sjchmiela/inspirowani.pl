import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import './Section.scss';

export default class Section extends Component {
  static propTypes = {
    zIndex: PropTypes.number,
  }

  getZIndex() {
    return (this.props.zIndex || 0) * (this.props.backgroundImage ? 1 : 2);
  }

  renderBackLayer() {
    if (!this.props.backgroundImage) {
      return null;
    }

    return (
      <div className="Section-layer Section-layer--back" style={{ backgroundImage: `url('${this.props.backgroundImage}')` }} />
    );
  }

  render() {
    return (
      <div className="Section" style={{ zIndex: this.getZIndex() }}>
      {this.renderBackLayer()}
        <div className={classnames('Section-layer', 'Section-layer--base', this.props.className)}>
          {this.props.children}
        </div>
        
      </div>
    )
  }
}
