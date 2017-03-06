import React, { Component, PropTypes } from 'react';
import './PersonCard.scss';

export default class WorkshopCard extends Component {
  static propTypes = {
    zIndex: PropTypes.number,
    name: PropTypes.string,
    slug: PropTypes.string,
    noImage: PropTypes.bool,
    description: PropTypes.string,
  }

  renderAvatar() {
    if (this.props.noImage) {
      return null;
    }

    return (
      <img src={require(`../../images/${this.props.slug}.jpg`)} alt={name} className="PersonCard-avatar" />
    );
  }

  render() {
    return (
      <div className="PersonCard" id={this.props.slug}>
        {this.renderAvatar()}
        <div className="PersonCard-header">
          <h3>{this.props.name}</h3>
        </div>
        <div className="PersonCard-description">
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}
