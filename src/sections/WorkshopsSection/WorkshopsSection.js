import React, { Component, PropTypes } from 'react';
import Section from '../../components/Section/Section';
import ColumnsLayout from '../../components/ColumnsLayout/ColumnsLayout';
import WorkshopCard from './WorkshopCard';
import './WorkshopsSection.scss';

import { workshops } from '../../workshops';

export default class WorkshopsSection extends Component {
  static propTypes = {
    zIndex: PropTypes.number,
  }

  renderCard = workshop => (<WorkshopCard {...workshop} />)

  columns = [
    workshops[0].map(this.renderCard),
    workshops[1].map(this.renderCard),
  ]

  render() {
    return (
      <Section className="WorkshopsSection" zIndex={this.props.zIndex}>
        <h1 className="WorkshopsSection-heading">Warsztaty</h1>
        <ColumnsLayout columns={this.columns} />
      </Section>
    );
  }
}
