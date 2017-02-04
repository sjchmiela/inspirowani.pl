import React, { PropTypes } from 'react';
import Section from '../../components/Section/Section';
import Card from '../../components/Card/Card';
import './MemorySection.scss';

const MemorySection = ({ zIndex }) => (
  <Section className="MemorySection" zIndex={zIndex}>
    <div className="MemorySection-row">
      <Card>Młodzi ludzie</Card>
      <Card>Ciekawe konferencje i warsztaty</Card>
      <Card>Wspólna modlitwa</Card>
      <Card>Integracja</Card>
      <Card>Zabawa</Card>
    </div>
    <div className="MemorySection-row">
      <Card color="blue">żeby bardziej żyć</Card>
      <Card color="blue">wiarą w Jezusa Chrystusa</Card>
      <Card color="blue">tak jak</Card>
      <Card color="blue">św. Józef Kalasancjusz</Card>
    </div>
  </Section>
);

MemorySection.propTypes = {
  zIndex: PropTypes.number,
};

export default MemorySection;
