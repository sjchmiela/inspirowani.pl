import React, { Component } from 'react';
import IntroductionSection from './sections/IntroductionSection/IntroductionSection';
import AboutSection from './sections/AboutSection/AboutSection';
import './App.scss';

class App extends Component {

  renderComputerSection() {
    return (
      <div style={{ height: '100vh', display: 'flex' }}>
        
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <IntroductionSection />
        <AboutSection />
      </div>
    );
  }
}

export default App;
