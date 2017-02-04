import React from 'react';
import IntroductionSection from './sections/IntroductionSection/IntroductionSection';
import AboutSection from './sections/AboutSection/AboutSection';
import CalasanzSection from './sections/CalasanzSection/CalasanzSection';
import ProgrammeSection from './sections/ProgrammeSection/ProgrammeSection';
import OrganisationSection from './sections/OrganisationSection/OrganisationSection';
import './App.scss';

export default () => (
  <div className="App">
    <IntroductionSection />
    <AboutSection />
    <CalasanzSection />
    <ProgrammeSection />
    <OrganisationSection />
  </div>
);
