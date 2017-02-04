import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import './ColumnsLayout.scss';

export default class ColumnsLayout extends Component {
  static propTypes = {
    columns: PropTypes.array,
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    return (
      <div className={classnames(['ColumnsLayout', this.props.className])}>
        {this.props.columns.map((column, index) => (
          <div className="ColumnsLayout-column" key={index}>{column}</div>
        ))}
        {this.props.children}
      </div>
    );
  }
}
