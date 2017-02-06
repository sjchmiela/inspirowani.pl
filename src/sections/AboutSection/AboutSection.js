import React, { PropTypes } from 'react';
import Computer from '../../components/Computer/Computer';
import Section from '../../components/Section/Section';

import './AboutSection.scss';

const AboutSection = ({ zIndex }) => (
  <Section className="AboutSection" backLayerClassName="AboutSection-backLayer" zIndex={zIndex} wrapperClassName="AboutSection-wrapper">
    <Computer className="AboutSection-computer">
      <div className="AboutSection-content">
        <h3>O Kongresie</h3>
        <p className="lead">Kim jest dla mnie Jezus Chrystus? Jak doświadczyć Jego obecności&nbsp;w&nbsp;moim życiu? Co zrobić, gdy przychodzą wątpliwości&nbsp;w&nbsp;wierze? Czy moje emocje i&nbsp;marzenia mogą mnie doprowadzić do Boga? Skąd wziąć siły do życia? Jak nie zagubić się w&nbsp;świecie, który odpycha wiarę? Do czego Bóg mnie wzywa? Jak rozpoznać, że prowadzi&nbsp;mnie Duch Święty? Jak się modlić? W&nbsp;jaki&nbsp;sposób mogę pomóc innym ludziom?</p>
        <p>Jeżeli&nbsp;stawiasz&nbsp;sobie takie lub podobne pytania, to znaczy, że chcesz&nbsp;pogłębić Twoją duchowość. Duchowość chrześcijańska rozwija się dzięki&nbsp;modlitwie i&nbsp;refleksji, sakramentom świętym i&nbsp;słowu Bożemu, dzięki&nbsp;budowaniu wspólnoty i&nbsp;zaangażowaniu w&nbsp;misję. Oprócz&nbsp;tych środków&nbsp;Bóg daje nam świętych, którzy dzielą się z&nbsp;nami&nbsp;własną duchowością.</p>
        <p>Do nich należy św. Józef Kalasancjusz, niestrudzony opiekun wszystkich, którzy zajmują się nauczaniem i&nbsp;wychowaniem dzieci&nbsp;i&nbsp;młodzieży. Jego charyzmat, misja i&nbsp;duchowość rozwijają się w&nbsp;Kościele od 400 lat i&nbsp;dziś żyją nimi&nbsp;świeccy i&nbsp;zakonnicy w&nbsp;38 krajach na&nbsp;4 kontynentach.</p>
        <p>Ten kongres jest dla wszystkich, którzy chcą żyć mocniej wiarą, według wskazówek Kalasancjusza.</p>
      </div>
    </Computer>
  </Section>
);

AboutSection.propTypes = {
  zIndex: PropTypes.number,
};

export default AboutSection;
