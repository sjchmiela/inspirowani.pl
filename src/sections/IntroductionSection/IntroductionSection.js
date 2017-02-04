import React, { Component } from 'react';
import Section from '../../components/Section/Section';
import './IntroductionSection.scss';

export default class Introduction extends Component {
  render() {
    return (
      <Section className="Introduction">
        <h2 className="Introduction-part Introduction-part--left">Pierwszy raz w Polsce!</h2>
        <h3 className="Introduction-part Introduction-part--right">W Kalasantyńskim Roku Jubileuszowym</h3>
        <h4 className="Introduction-part Introduction-part--left">Z udziałem o. Generała Zakonu Pijarów</h4>
        <h4 className="Introduction-part Introduction-part--right">28 kwietnia – 1 maja 2017 w Krakowie</h4>
      </Section>
    );
  }
}
