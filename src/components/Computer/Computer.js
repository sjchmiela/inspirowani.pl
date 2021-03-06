import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import './Computer.scss';

class Computer extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    const computerClassName = classnames(['Computer', this.props.className]);
    return (
      <div className={computerClassName}>
        <div className="Computer-screen">
          {this.props.children}
        </div>
        <div className="Computer-bottom">
          <div className="Computer-bottom-handle" />
        </div>
      </div>
    );
  }
}

export default Computer;
