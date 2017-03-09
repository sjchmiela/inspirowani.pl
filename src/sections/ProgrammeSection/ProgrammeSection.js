import React, { Component, PropTypes } from 'react';
import Section from '../../components/Section/Section';
import ColumnsLayout from '../../components/ColumnsLayout/ColumnsLayout';
import './ProgrammeSection.scss';

const programme = [
  {
    header: '28 kwietnia, piątek',
    appendix: 'lectures',
    entries: [
      { time: '14:00', name: 'początek zakwaterowania w miejscu noclegu dla osób z wykupionym pakietem K1' },
      { time: '16:00', name: 'otwarcie recepcji Kongresu w Liceum Pijarów przy ul. Akacjowej 5' },
      { time: '18:30', name: 'powitanie uczestników i otwarcie Kongresu' },
      { time: '19:00', name: 'kolacja' },
      { time: '20:00', name: 'Adoracja Najświętszego Sakramentu' },
    ],
    children: [
      (<em>…a po niej czas na integrację (do ok. 23:00)</em>),
    ]
  },
  {
    header: '29 kwietnia, sobota',
    appendix: 'workshops',
    entries: [
      { time: '8:15', name: 'jutrznia' },
      { time: '8:45', name: 'śniadanie' },
      { time: '9:30', name: 'konferencja I' },
      { time: '10:30', name: 'konwersatorium I' },
      { time: '11:45', name: 'Msza Święta w kościele pw. Najświętszego Imienia Maryi przy ul. Dzielskiego 1 pod przewodnictwem o. Pedro Aguado, Generała Zakonu Pijarów – mogą w niej brać udział również osoby nieuczestniczące w Kongresie' },
      { time: '13:00', name: 'obiad' },
      { time: '14:30', name: 'warsztaty (1. seria – z wyjątkiem warsztatu muzycznego)' },
      { time: '16:15', name: 'konferencja II' },
      { time: '17:15', name: 'konwersatorium II' },
      { time: '18:15', name: 'kolacja' },
      { time: '20:00', name: 'koncert zespołu ElendeS' },
    ]
  },
  {
    header: '30 kwietnia, niedziela',
    appendix: 'discussions',
    entries: [
      { time: '9:00', name: 'śniadanie' },
      { time: '9:30', name: 'modlitwa poranna' },
      { time: '10:00', name: 'konferencja III' },
      { time: '11:00', name: 'konwersatorium III' },
      { time: '12:00', name: 'warsztaty (2. seria)' },
      { time: '13:30', name: 'obiad (+ do pobrania prowiant na kolację)' },
      { time: '16:00', name: 'Msza Święta w kościele pw. Przemienienia Pańskiego przy ul. Pijarskiej 2' },
      { time: '17:00', name: 'czas wolny (z propozycjami tras na spacer)' },
    ]
  },
  {
    header: '1 maja, poniedziałek',
    appendix: 'project',
    entries: [
      { time: '8:30', name: 'śniadanie' },
      { time: '9:30', name: 'Msza Święta w kościele pw. Matki Bożej Ostrobramskiej przy ul. Meissnera 20 (kaplica św. Józefa Kalasancjusza)' },
      { time: '10:30', name: 'podsumowanie i zakończenie Kongresu w Liceum Pijarów, propozycje na przyszłość' },
      { time: '12:00', name: 'obiad' },
    ]
  },
]

export default class Introduction extends Component {
  static propTypes = {
    zIndex: PropTypes.number,
  }

  getColumns() {
    return programme.map(this.renderDay);
  }

  renderDay = ({ header, entries, children, appendix }) => (
    <div className={`ProgrammeSection-column ProgrammeSection-card ProgrammeSection-card--${appendix}`}>
      <h3>{header}</h3>
      <p>
        {entries.map(this.renderEntry)}
        {children}
      </p>
    </div>
  )

  renderEntry = ({ time, name }) => (
    <div className="ProgrammeSection-entry">
      <span className="ProgrammeSection-time">{time}</span>{name}
    </div>
  )

  renderLectures = () => (
    <div className="ProgrammeSection-column ProgrammeSection-card ProgrammeSection-card--lectures">
      <h3>Wykłady wiodące</h3>
      <ul>
        <li>Czym jest duchowość?</li>
        <li>Na czym się opiera duchowość kalasantyńska?</li>
        <li>Jak nią żyć dziś?</li>
      </ul>
    </div>
  )

  renderWorkshops = () => (
    <div className="ProgrammeSection-column ProgrammeSection-card ProgrammeSection-card--workshops">
      <h3>Warsztaty (dwa do wyboru)</h3>
      <ul>
        <li>Medytacja – modlitwa myślna</li>
        <li>Modlitwa nieustająca w codzienności</li>
        <li>Pismo Święte i Ojcowie Kościoła</li>
        <li>Asceza – poznanie siebie</li>
        <li>Cnoty kalasantyńskie – nieskończona cierpliwość i inne</li>
        <li>Kalasancjusz w muzyce</li>
        <li>Kalasancjusz w obrazach</li>
      </ul>
    </div>
  )

  renderOtherCards = () => (
    <div className="ProgrammeSection-column">
      {this.renderDiscussions()}
      {this.renderProject()}
    </div>
  )

  renderDiscussions = () => (
    <div className="ProgrammeSection-card ProgrammeSection-card--discussions">
      <p><strong>Konwersatoria</strong>, czyli czas na dzielenie się, dyskusje i wyjaśnienia</p>
    </div>
  )

  renderProject = () => (
    <div className="ProgrammeSection-card ProgrammeSection-card--project">
      <p><strong>Projekt Kongresowy</strong> – rozmowa ze Świętym</p>
    </div>
  )

  render() {
    return (
      <Section className="ProgrammeSection" zIndex={this.props.zIndex}>
        <div className="ProgrammeSection-board">
          <h1 className="ProgrammeSection-header">Program</h1>
          <ColumnsLayout columns={this.getColumns()} />
        </div>
      </Section>
    );
  }
}
