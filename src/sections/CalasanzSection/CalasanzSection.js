import React, { Component, PropTypes } from 'react';
import Section from '../../components/Section/Section';
import ColumnsLayout from '../../components/ColumnsLayout/ColumnsLayout';

import calasanz from './calasanz.jpg';
import polishLinks from './polishLinks';
import foreignLinks from './foreignLinks';
import './CalasanzSection.scss';

export default class CalasanzSection extends Component {
  static propTypes = {
    zIndex: PropTypes.number,
  }

  getColumns() {
    return [
      this.renderLinksColumn(),
      this.renderImageColumn(),
    ];
  }

  renderLinkListItem = ({ title, url, domain }, index) => (
    <li className="CalasanzSection-materialsColumn-list-item" key={index}>
      <a href={url} className="CalasanzSection-materialsColumn-list-item-link">
        {title}
        {" "}
        <span className="CalasanzSection-materialsColumn-list-item-link-domain">({domain})</span>
        {" "}&rarr;
      </a>
    </li>
  )

  renderLinksColumn() {
    return (
      <div className="CalasanzSection-materialsColumn">
        <h3 className="CalasanzSection-materialsColumn-header">Wybrane materiały dostępne online</h3>
        <ul className="CalasanzSection-materialsColumn-list">
          {polishLinks.map(this.renderLinkListItem)}
        </ul>
        <h4>Źródła obcojęzyczne</h4>
        <ul className="CalasanzSection-materialsColumn-list">
          {foreignLinks.map(this.renderLinkListItem)}
        </ul>
      </div>
    );
  }

  renderImageColumn() {
    return (
      <div className="CalasanzSection-imageColumn">
        <img src={calasanz} alt="Calasanz" className="CalasanzSection-imageColumn-image" />
      </div>
    );
  }

  render() {
    return (
      <Section className="CalasanzSection" zIndex={this.props.zIndex}>
        <div className="CalasanzSection-choker">
          <h1>Święty Józef Kalasancjusz</h1>
        </div>
        <ColumnsLayout columns={this.getColumns()} className="CalasanzSection-columnsLayout" />
      </Section>
    );
  }
}
