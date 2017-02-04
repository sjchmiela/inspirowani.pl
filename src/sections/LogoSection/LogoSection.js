import React, { PropTypes } from 'react';
import Section from '../../components/Section/Section';

import './LogoSection.scss';

import logo from './logo.svg';

const LogoSection = ({ zIndex }) => (
  <Section className="LogoSection" zIndex={zIndex}>
    <div className="LogoSection-backgroundLightener">
      <img className="LogoSection-logo" src={logo} alt="Inspirowani Kalasancjuszem! Kongres Duchowości Młodych" />
    </div>
  </Section>
);

LogoSection.propTypes = {
  zIndex: PropTypes.number,
};

export default LogoSection;
