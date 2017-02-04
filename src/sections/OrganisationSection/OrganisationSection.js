import React, { Component } from 'react';
import Section from '../../components/Section/Section';

import piarists from './piarists.png';
import dap from './dap.png';
import liceum from './liceum.png';

import './OrganisationSection.scss';

export default class AboutSection extends Component {
  render() {
    return (
      <Section className="OrganisationSection">
        <div className="OrganisationSection-content">
          <h4>Organizatorzy</h4>
          <div className="OrganisationSection-organisers">
            <a href="http://www.pijarzy.pl">
              <img src={piarists} alt="Herb Zakonu Pijarów" />
            </a>
            <a href="http://dap-wieczysta.pl">
              <img src={dap} alt="Logo Duszpasterstwa" />
            </a>
            <a href="http://www.liceum.pijarzy.pl">
              <img src={liceum} alt="Herb Liceum" />
            </a>
          </div>
          <h4>Dla kogo jest ten Kongres?</h4>
          <p>
            Zaproszenie kierujemy do osób pełnoletnich, które czują się związane:
            <ul>
              <li>z dziełami pijarskimi,</li>
              <li>z duszpasterstwem prowadzonym przez pijarów,</li>
              <li>z osobą św. Józefa Kalasancjusza.</li>
            </ul>
          </p>
          <h4>Gdzie jest ten Kongres?</h4>
          <p><a href="http://www.liceum.pijarzy.pl">Liceum Ogólnokształcące Zakonu Pijarów w Krakowie</a> przy <a href="http://www.openstreetmap.org/relation/2410065">ul. Akacjowej 5</a></p>
          <h4>Ile kosztuje uczestnictwo?</h4>
          <ul>
            <li><strong>Pakiet A1</strong> – obejmuje udział w całym programie Kongresu oraz obiady i kolacje (od kolacji 28 kwietnia do obiadu 1 maja) – 50 zł,</li>
            <li><strong>Pakiet A2</strong> - obejmuje udział w całym programie Kongresu, zakwaterowanie w <a href="http://pl.ssm.com.pl/krakow-grochowa/">schronisku młodzieżowym</a> oraz śniadania, obiady i kolacje (od kolacji 28 kwietnia do obiadu 1 maja) – 80 zł.</li>
          </ul>
        </div>
      </Section>
    );
  }
}
