import React, { PropTypes } from 'react';
import Section from '../../components/Section/Section';
import './IntroductionSection.scss';

const IntroductionSection = ({ zIndex }) => (
  <Section className="Introduction" backLayerClassName="Introduction-backLayer" zIndex={zIndex}>
    <h2 className="Introduction-part Introduction-part--left">Pierwszy raz w&nbsp;Polsce!</h2>
    <h2 className="Introduction-part Introduction-part--right">W Kalasantyńskim Roku Jubileuszowym</h2>
    <h2 className="Introduction-part Introduction-part--left">Z udziałem o.&nbsp;Generała Zakonu Pijarów</h2>
    <h2 className="Introduction-part Introduction-part--right">28 kwietnia –&nbsp;1&nbsp;maja 2017 w&nbsp;Krakowie</h2>
  </Section>
);

IntroductionSection.propTypes = {
  zIndex: PropTypes.number,
};

export default IntroductionSection;
