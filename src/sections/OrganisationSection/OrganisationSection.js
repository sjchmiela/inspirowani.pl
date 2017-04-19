import React from 'react';
import Section from '../../components/Section/Section';

import piarists from './piarists.jpg';
import dap from './dap.jpg';
import liceum from './liceum.jpg';

import './OrganisationSection.scss';

const formLink = 'https://docs.google.com/forms/d/e/1FAIpQLSce2uwekwkoSALnN1gK7PLoEFuNdtsKueN-7Y94esIpeNq88Q/viewform';

export default ({ zIndex }) => (
  <Section className="OrganisationSection" zIndex={zIndex}>
    <div className="OrganisationSection-content">
      <h4>Organizatorzy</h4>
      <div className="OrganisationSection-organisers">
        <a
          href="http://www.pijarzy.pl"
          className="OrganisationSection-organisers-organiser OrganisationSection-organisers-piarists"
        >
          <img src={piarists} alt="Herb Zakonu Pijarów" />
        </a>
        <a
          href="http://dap-wieczysta.pl"
          className="OrganisationSection-organisers-organiser OrganisationSection-organisers-dap"
        >
          <img src={dap} alt="Logo Duszpasterstwa" />
        </a>
        <a
          href="http://www.liceum.pijarzy.pl"
          className="OrganisationSection-organisers-organiser OrganisationSection-organisers-school"
        >
          <img src={liceum} alt="Herb Liceum" />
        </a>
      </div>
      <h4>Dla kogo jest ten Kongres?</h4>
      <p>
        Zaproszenie kierujemy do osób pełnoletnich, w&nbsp;wieku 18–35 lat.
      </p>
      <h4>Gdzie i kiedy?</h4>
      <p style={{ textAlign: 'center' }}><a href="http://www.liceum.pijarzy.pl">Liceum Ogólnokształcące Zakonu Pijarów w&nbsp;Krakowie</a> przy&nbsp;<a href="http://www.openstreetmap.org/relation/2410065">ul.&nbsp;Akacjowej&nbsp;5</a><br />w dniach od 28 kwietnia do&nbsp;1&nbsp;maja 2017</p>
      <h4>Ile kosztuje uczestnictwo?</h4>
      <ul>
        <li><strong>Pakiet K1 – Przyjezdny Kalasancjusz</strong> – obejmuje udział w całym programie Kongresu, zakwaterowanie w schronisku młodzieżowym oraz śniadania, obiady i kolacje (od kolacji 28 kwietnia do obiadu 1 maja) – 80 zł,</li>
        <li><strong>Pakiet K2 – Lokalny Kalasancjusz</strong> – obejmuje udział w całym programie Kongresu oraz obiady i kolacje (od kolacji 28 kwietnia do obiadu 1 maja) – 50 zł.</li>
      </ul>
      <div className="OrganisationSection-registration">
        <h4>Jak się zarejestrować?</h4>
        <p>Wypełnić <a href={formLink}>formularz</a> i&nbsp;postępować zgodnie z&nbsp;jego zaleceniami.</p>
      </div>
    </div>
  </Section>
);
