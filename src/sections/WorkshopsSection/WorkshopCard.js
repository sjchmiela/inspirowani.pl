import React, { Component, PropTypes } from 'react';
import './WorkshopCard.scss';

export default class WorkshopCard extends Component {
  static propTypes = {
    zIndex: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    leaders: PropTypes.array,
  }

  renderDescription() {
    const { description } = this.props;
    if (typeof description === 'string' || description instanceof String) {
      return (
        <p>{description}</p>
      );
    }

    return description;
  }

  renderLeader = ({ name, slug, noImage }) => (
    <a href={`/#${slug}`} className="WorkshopCard-leader">
      {!noImage && <img src={require(`../../images/${slug}.jpg`)} alt={name} className="WorkshopCard-leader-avatar" />}
      {name}
    </a>
  )

  render() {
    return (
      <div className="WorkshopCard">
        <div className="WorkshopCard-header">
          <h3>{this.props.title}</h3>
        </div>
        <div className="WorkshopCard-description">
          {this.renderDescription()}
        </div>
        <div className="WorkshopCard-leaders">
          {this.props.leaders.map(this.renderLeader)}
        </div>
      </div>
    );
  }
}
