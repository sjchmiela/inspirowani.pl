import React, { Component, PropTypes } from 'react';
import Section from '../../components/Section/Section';
import ColumnsLayout from '../../components/ColumnsLayout/ColumnsLayout';
import './ProgrammeSection.scss';

export default class Introduction extends Component {
  static propTypes = {
    zIndex: PropTypes.number,
  }

  getColumns() {
    return [
      this.renderLectures(),
      this.renderWorkshops(),
      this.renderOtherCards(),
    ];
  }

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
        <li>Modlitwa nieustająca w codzienności</li>
        <li>Pismo Święte i Ojcowie Kościoła</li>
        <li>Asceza – poznanie siebie</li>
        <li>Cnoty kalasantyńskie – nieskończona cierpliwość i&nbsp;inne</li>
        <li>Kalasancjusz w muzyce</li>
        <li>Kalasancjusz w obrazach</li>
      </ul>
    </div>
  )

  renderOtherCards = () => (
    <div className="ProgrammeSection-column">
      {this.renderDiscussions()}
      {this.renderProject()}
      {this.renderDisclaimer()}
    </div>
  )

  renderDiscussions = () => (
    <div className="ProgrammeSection-card ProgrammeSection-card--discussions">
      <p><strong>Konwersatoria</strong>, czyli czas na dzielenie się, dyskusje i&nbsp;wyjaśnienia</p>
    </div>
  )

  renderProject = () => (
    <div className="ProgrammeSection-card ProgrammeSection-card--project">
      <p><strong>Projekt Kongresowy</strong> – rozmowa ze&nbsp;Świętym</p>
    </div>
  )

  renderDisclaimer = () => (
    <div className="ProgrammeSection-card ProgrammeSection-card--disclaimer">
      <p>Szczegółowy opis programu zostanie opublikowany w tym miejscu do końca 28&nbsp;lutego 2017.</p>
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
