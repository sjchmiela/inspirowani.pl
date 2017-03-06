import React, { Component, PropTypes } from 'react';
import Section from '../../components/Section/Section';
import ColumnsLayout from '../../components/ColumnsLayout/ColumnsLayout';
import PersonCard from './PersonCard';
import './PeopleSection.scss';

import { people } from '../../workshops';

export default class PeopleSection extends Component {
  static propTypes = {
    zIndex: PropTypes.number,
  }

  renderCard = person => (<PersonCard {...person} />)

  columns = [
    people[0].map(this.renderCard),
    people[1].map(this.renderCard),
    people[2].map(this.renderCard),
  ]

  render() {
    return (
      <Section className="PeopleSection" zIndex={this.props.zIndex}>
        <h1 className="PeopleSection-heading">Kongres-mani</h1>
        <ColumnsLayout columns={this.columns} />
      </Section>
    );
  }
}
