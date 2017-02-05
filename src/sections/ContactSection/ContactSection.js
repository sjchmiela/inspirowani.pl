import React, { PropTypes } from 'react';
import Section from '../../components/Section/Section';
import ColumnsLayout from '../../components/ColumnsLayout/ColumnsLayout';
import './ContactSection.scss';

import mail from './mail.svg';
import facebook from './facebook.svg';

const ContactSection = ({ zIndex }) => (
  <Section className="ContactSection" backLayerClassName="ContactSection-backLayer" zIndex={zIndex}>
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
      <div className="ContactSection-part ContactSection-registration">
        <h1>Rejestracja</h1>
        <p>Otwieramy w poniedziałek!</p>
      </div>
    ]} />
  </Section>
);

ContactSection.propTypes = {
  zIndex: PropTypes.number,
};

export default ContactSection;
