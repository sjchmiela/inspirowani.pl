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
  { component: LogoSection, zIndex: 16 },
  { component: IntroductionSection, zIndex: 4 },
  { component: MemorySection, zIndex: 12 },
  { component: AboutSection, zIndex: 5 },
  { component: CalasanzSection, zIndex: 8 },
  { component: ProgrammeSection, zIndex: 6 },
  { component: OrganisationSection, zIndex: 4 },
];

export default () => (
  <div
    className="App"
    children={sections.map(({ component, zIndex }, index) => React.createElement(component, {
      key: index,
      zIndex,
    }))}
  />
);
