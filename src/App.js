import React from 'react';
import LogoSection from './sections/LogoSection/LogoSection';
import IntroductionSection from './sections/IntroductionSection/IntroductionSection';
import MemorySection from './sections/MemorySection/MemorySection';
import AboutSection from './sections/AboutSection/AboutSection';
import CalasanzSection from './sections/CalasanzSection/CalasanzSection';
import ProgrammeSection from './sections/ProgrammeSection/ProgrammeSection';
import OrganisationSection from './sections/OrganisationSection/OrganisationSection';
import './App.scss';

const sections = [
  LogoSection,
  IntroductionSection,
  MemorySection,
  AboutSection,
  CalasanzSection,
  ProgrammeSection,
  OrganisationSection,
];

export default () => (
  <div
    className="App"
    children={sections.map((section, index) => React.createElement(section, {
      key: index,
      zIndex: (sections.length + 1) - index,
    }))}
  />
);
