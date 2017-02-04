import React, { Component } from 'react';
import Section from '../../components/Section/Section';
import ColumnsLayout from '../../components/ColumnsLayout/ColumnsLayout';

import calasanz from './calasanz.jpg';

import './CalasanzSection.scss';

const polishLinks = [
  { title: 'Życiorys, duchowość maryjna, pedagogika', url: 'http://www.pijarzy.pl/zalozyciel', domain: 'pijarzy.pl' },
  { title: 'Numer czasopisma „Nasza Arka”', url: 'http://www.nasza-arka.pl/2002/rozdzial.php?numer=8&rozdzial=1', domain: 'nasza-arka.pl' },
  { title: 'Artykuł w „Gościu Niedzielnym”', url: 'http://gosc.pl/doc/1800924.Szkola-Jozefa-Kalasancjusza', domain: 'gosc.pl' },
  { title: 'Modlitwa ułożona przez Kalasancjusza', url: 'http://www.pijarzy.pl/modlitwa/modlitewnik_pijarski_/koronka_dwunastu_gwiazd__d6627_pol.html', domain: 'pijarzy.pl' },
  { title: 'Film biograficzny', url: 'https://www.youtube.com/watch?v=jeszClEIgv4', domain: 'youtube.com' },
  { title: 'Fragmenty pism', url: 'https://kalasancjusz.blogspot.com/', domain: 'kalasancjusz.blogspot.com' },
];

const foreignLinks = [
  { title: 'Pisma św. Józefa Kalasancjusza', url: 'http://scripta.scolopi.net/', domain: 'scripta.scolopi.net' },
  { title: 'WikiPía – internetowa encyklopedia pijarska', url: 'http://wiki.scolopi.net/', domain: 'wiki.scolopi.net' },
];

export default class CalasanzSection extends Component {
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
      <Section className="CalasanzSection">
        <div className="CalasanzSection-choker">
          <h1>Święty Józef Kalasancjusz</h1>
        </div>
        <ColumnsLayout columns={this.getColumns()} className="CalasanzSection-columnsLayout" />
      </Section>
    );
  }
}
