import React, { PropTypes } from 'react';
import Section from '../../components/Section/Section';
import './IntroductionSection.scss';

import cracow from './cracow.jpg';

const IntroductionSection = ({ zIndex }) => (
  <Section className="Introduction" backgroundImage={cracow} zIndex={zIndex}>
    <h2 className="Introduction-part Introduction-part--left">Pierwszy raz w Polsce!</h2>
    <h2 className="Introduction-part Introduction-part--right">W Kalasantyńskim Roku Jubileuszowym</h2>
    <h2 className="Introduction-part Introduction-part--left">Z udziałem o. Generała Zakonu Pijarów</h2>
    <h2 className="Introduction-part Introduction-part--right">28 kwietnia – 1 maja 2017 w Krakowie</h2>
  </Section>
);

IntroductionSection.propTypes = {
  zIndex: PropTypes.number,
};

export default IntroductionSection;
