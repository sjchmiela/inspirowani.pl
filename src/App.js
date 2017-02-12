import React from 'react';
import LogoSection from './sections/LogoSection/LogoSection';
import IntroductionSection from './sections/IntroductionSection/IntroductionSection';
import MemorySection from './sections/MemorySection/MemorySection';
import AboutSection from './sections/AboutSection/AboutSection';
import CalasanzSection from './sections/CalasanzSection/CalasanzSection';
import ProgrammeSection from './sections/ProgrammeSection/ProgrammeSection';
import ContactSection from './sections/ContactSection/ContactSection';
import OrganisationSection from './sections/OrganisationSection/OrganisationSection';
import Ribbon from './components/Ribbon/Ribbon';
import './App.scss';

const formLink = 'https://docs.google.com/forms/d/e/1FAIpQLSce2uwekwkoSALnN1gK7PLoEFuNdtsKueN-7Y94esIpeNq88Q/viewform';

const RegistrationRibbon = ({ zIndex }) => (
  <Ribbon zIndex={zIndex}><a href={formLink}>Zarejestruj się! &rarr;</a></Ribbon>
);

const sections = [
  { component: RegistrationRibbon, zIndex: 999 },
  { component: LogoSection, zIndex: 16 },
  { component: IntroductionSection, zIndex: 5 },
  { component: MemorySection, zIndex: 12 },
  { component: AboutSection, zIndex: 4 },
  { component: CalasanzSection, zIndex: 8 },
  { component: ProgrammeSection, zIndex: 6 },
  { component: ContactSection, zIndex: 3 },
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
