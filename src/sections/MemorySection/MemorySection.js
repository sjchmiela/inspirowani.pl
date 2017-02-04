import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Section from '../../components/Section/Section';
import Card from '../../components/Card/Card';
import './MemorySection.scss';

const whats = [
  'Młodzi ludzie',
  'Ciekawe konferencje i warsztaty',
  'Wspólna modlitwa',
  'Integracja',
  'Zabawa',
];

const whatFors = [
  'żeby bardziej żyć',
  'wiarą w Jezusa Chrystusa',
  'tak jak',
  'św. Józef Kalasancjusz',
];

export default class MemorySection extends Component {
  static propTypes = {
    zIndex: PropTypes.number,
  }

  constructor(props) {
    super(props);

    let anyCardVisible = false;

    if (localStorage && !anyCardVisible) {
      for(let i = 0; i < whats.length; i++) {
        if (localStorage.getItem(`red-${i}`) === 'back') {
          anyCardVisible = true;
          break;
        }
      }
    }

    if (localStorage && !anyCardVisible) {
      for(let i = 0; i < whatFors.length; i++) {
        if (localStorage.getItem(`blue-${i}`) === 'back') {
          anyCardVisible = true;
          break;
        }
      }
    }

    this.state = { explanationVisible: !anyCardVisible };
  }

  onToggle = () => this.setState({ explanationVisible: false })

  renderCard = (color) => (text, key) => (
    <div className="MemorySection-card">
      <Card onToggle={this.onToggle} color={color} key={key} cursor={key}>{text}</Card>
    </div>
  )

  render() {
    const explanationClassName = classnames({
      'MemorySection-explanation': true,
      'MemorySection-explanation--hidden': !this.state.explanationVisible,
    });

    return (
      <Section className="MemorySection" zIndex={this.props.zIndex}>
        <div className="MemorySection-row">
          {whats.map(this.renderCard('red'))}
        </div>
        <div className={explanationClassName}>
          Kliknij, aby odkryć…
        </div>
        <div className="MemorySection-row">
          {whatFors.map(this.renderCard('blue'))}
        </div>
      </Section>
    );
  }
}
