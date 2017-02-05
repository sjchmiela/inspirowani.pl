import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import './Card.scss';

import blueCard from './card_back_blue.svg';
import redCard from './card_back_red.svg';

export default class Card extends Component {
  static propTypes = {
    color: PropTypes.oneOf(['red', 'blue']),
    className: PropTypes.string,
    children: PropTypes.node,
    onToggle: PropTypes.func,
    cursor: PropTypes.number,
  }

  static defaultProps = {
    color: 'red',
  }

  constructor(props) {
    super(props);

    this.state = {
      side: (localStorage && localStorage.getItem(`${props.color}-${props.cursor}`)) || 'front',
    };
  }

  flip = () => this.setState({
    side: this.state.side === 'back' ? 'front' : 'back',
  }, () => {
    this.props.onToggle && this.props.onToggle();
    localStorage && localStorage.setItem(`${this.props.color}-${this.props.cursor}`, this.state.side);
  })

  render() {
    const className = classnames([
      'Card',
      `Card--${this.props.color}`,
      `Card--${this.state.side}`,
      this.props.className
    ]);

    return (
      <div className="Card-container">
        <div className={className} onClick={this.flip}>
          <div className="Card-front">
            <img src={(this.props.color === 'red' && redCard) || blueCard} alt="Rewers karty" />
          </div>
          <div className="Card-back">
            <div className="Card-back-wrapper">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
