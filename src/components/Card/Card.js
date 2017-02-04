import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import './Card.scss';

export default class Card extends Component {
  static propTypes = {
    color: PropTypes.oneOf(['red', 'blue']),
    className: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    color: 'red',
  }

  constructor(props) {
    super(props);

    this.state = {
      side: 'front',
    };
  }

  flip = () => this.setState({
    side: this.state.side === 'back' ? 'front' : 'back',
  })

  render() {
    const className = classnames([
      'Card',
      `Card--${this.props.color}`,
      `Card--${this.state.side}`,
      this.props.className
    ]);

    return (
      <div className={className} onClick={this.flip}>
        <div className="Card-back">
          {this.props.children}
        </div>
      </div>
    );
  }
}
