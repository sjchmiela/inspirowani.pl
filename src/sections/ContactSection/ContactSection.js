import React, { PropTypes } from 'react';
import Section from '../../components/Section/Section';
import ColumnsLayout from '../../components/ColumnsLayout/ColumnsLayout';
import './ContactSection.scss';

import mail from './mail.svg';
import facebook from './facebook.svg';

const ContactSection = ({ zIndex }) => (
  <Section className="ContactSection" backLayerClassName="ContactSection-backLayer" zIndex={zIndex} id="rejestracja">
    <ColumnsLayout columns={[
      <div className="ContactSection-part ContactSection-contact">
        <h1>Kontakt</h1>
        <a href="https://fb.com/inspirowanikalasancjuszem" className="ContactSection-facebook">
          <img src={facebook} alt="Facebook" />
          inspirowanikalasancjuszem
        </a>
        <a href="mailto:kontakt@inspirowani.pl">
          <img src={mail} alt="Facebook" />
          kontakt@inspirowani.pl
        </a>
      </div>,
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSce2uwekwkoSALnN1gK7PLoEFuNdtsKueN-7Y94esIpeNq88Q/viewform" className="ContactSection-part ContactSection-registration">
        <h1>Rejestracja &rarr;</h1>
        <span className="ContactSection-deadline">(pakiet K2, bez noclegu)</span>
      </a>
    ]} />
  </Section>
);

ContactSection.propTypes = {
  zIndex: PropTypes.number,
};

export default ContactSection;
