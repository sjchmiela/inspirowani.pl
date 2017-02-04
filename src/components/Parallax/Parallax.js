import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import './Parallax.scss';

export default class Parallax extends Component {
  static propTypes = {
    backLayerClassName: PropTypes.string,
    className: PropTypes.string,
    backLayer: PropTypes.node,
    children: PropTypes.node,
  }

  render() {
    const backLayerClassName = classnames([
      'Parallax-layer',
      'Parallax-layer--back',
      this.props.backLayerClassName,
    ]);

    const baseLayerClassName = classnames([
      'Parallax-layer',
      'Parallax-layer--base',
      this.props.className,
    ]);

    return (
      <div className="Parallax">
        <div className={backLayerClassName}>
          {this.props.backLayer}
        </div>
        <div className={baseLayerClassName}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
