import React, { Component, PropTypes } from 'react';
import './Computer.scss';

class Computer extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    return (
      <div className="Computer-container">
        <div className="Computer-laptop">
          <div className="Computer-content">
            {this.props.children}
          </div>
          <div className="Computer-btm"></div>
        </div>
      </div>
    );
  }
}

export default Computer;
