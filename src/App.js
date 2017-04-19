import React from 'react';
import LogoSection from './sections/LogoSection/LogoSection';
import IntroductionSection from './sections/IntroductionSection/IntroductionSection';
import VideoSection from './sections/VideoSection/VideoSection';
import AboutSection from './sections/AboutSection/AboutSection';
import CalasanzSection from './sections/CalasanzSection/CalasanzSection';
import ProgrammeSection from './sections/ProgrammeSection/ProgrammeSection';
import WorkshopsSection from './sections/WorkshopsSection/WorkshopsSection';
import PeopleSection from './sections/PeopleSection/PeopleSection';
import ContactSection from './sections/ContactSection/ContactSection';
import OrganisationSection from './sections/OrganisationSection/OrganisationSection';
import Ribbon from './components/Ribbon/Ribbon';
import './App.scss';

const formLink = 'https://docs.google.com/forms/d/e/1FAIpQLSce2uwekwkoSALnN1gK7PLoEFuNdtsKueN-7Y94esIpeNq88Q/viewform';

const RegistrationRibbon = ({ zIndex }) => (
  <Ribbon zIndex={zIndex}>
    <a href={formLink} style={{display:'block'}}>
      Zarejestruj się! &rarr;
      <div style={{fontSize:'0.618em',lineHeight:'1em',marginTop:'-1em',paddingBottom:'1.618em'}}>(masz czas tylko do&nbsp;20.04!)</div>
    </a>
  </Ribbon>
);

const sections = [
  { component: RegistrationRibbon, zIndex: 999 },
  { component: LogoSection, zIndex: 16 },
  { component: IntroductionSection, zIndex: 5 },
  { component: VideoSection, zIndex: 12 },
  { component: AboutSection, zIndex: 4 },
  { component: CalasanzSection, zIndex: 8 },
  { component: ProgrammeSection, zIndex: 6 },
  { component: WorkshopsSection, zIndex: 6 },
  { component: PeopleSection, zIndex: 6 },
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
