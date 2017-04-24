import React, { PropTypes } from 'react';
import Section from '../../components/Section/Section';
import ConferenceWhiteboard from './ConferenceWhiteboard';
import './ConferencesSection.scss';

const ConferencesSection = ({ zIndex }) => (
  <Section className="ConferencesSection" backLayerClassName="ConferencesSection-backLayer" zIndex={zIndex}>
    <h1 className="ConferencesSection-heading">Konferencje</h1>
    <ConferenceWhiteboard
      title="Zasadzeni nad płynącą wodą – wprowadzenie do duchowości"
      leader={
        <div className="ConferencesSection-leaders">
          <a href="#misiura" className="ConferencesSection-leader">
            <img src={require(`../../images/misiura.jpg`)} alt={name} className="ConferencesSection-leader-avatar" />
            o. Grzegorz Misiura SP
          </a>
        </div>
      }
      description="Od najdawniejszych czasów ludzie pragnący modlić się Biblią otwierali Księgę Psalmów i od pierwszej strony byli wprowadzani w konkret pracy, która ich czekała: pracy trudnej, bo dotyczącej ich serca, sumienia, postępowania, wyborów… W ten sposób dowiadywali się, czym jest duchowość. Psalm 1 wyraża ją w ikonie drzewa zasadzonego nad płynącą wodą, które ma zawsze zdrowe i zielone liście, przynosi owoce w przewidzianym czasie, które – jeśli można tak o drzewie powiedzieć – jest spełnione. Dla człowieka „zasadzenie nad płynącą wodą” jest przede wszystkim łaską wybrania – umieszczenia w najlepszym miejscu. Tę pracę wykonuje Bóg. Duchowość jest relacją. Wierzący wchodzi w nią w duchu wdzięczności i - ćwicząc w sobie stałość, pokorę i cierpliwość – otwiera się na dobroczynny dar wód płynących w potoku – wód chrztu świętego. Jak poznać, gdzie mam miejsce nad płynącą wodą? Jak rosnąć, by owocować w oczekiwanym czasie? Te pytania są ścieżkami rozważania, którymi z Bożą pomocą powędrujemy podczas Kongresu."
    />
    <ConferenceWhiteboard
      title="Najbardziej inspirujące hasło duchowości kalasantyńskiej"
      leader={
        <div className="ConferencesSection-leaders">
          <a href="#adamusiak" className="ConferencesSection-leader">
            <img src={require(`../../images/adamusiak.jpg`)} alt={name} className="ConferencesSection-leader-avatar" />
            o. Łukasz Adamusiak SP
          </a>
          <a href="#matras" className="ConferencesSection-leader">
            <img src={require(`../../images/matras.jpg`)} alt={name} className="ConferencesSection-leader-avatar" />
            o. Józef Matras SP
          </a>
          <a href="#pindelski" className="ConferencesSection-leader">
            <img src={require(`../../images/pindelski.jpg`)} alt={name} className="ConferencesSection-leader-avatar" />
            o. Mateusz Pindelski SP
          </a>
        </div>
      }
      description="Trzech pijarów po kilkunastu albo i więcej latach spędzonych w zakonie postanowiło wybrać najbardziej inspirujące hasło streszczające duchowość kalasantyńską. Każdy z nich obstaje przy jednej z formuł ułożonych przez św. Józefa Kalasancjusza i ciągle żywych wśród pijarów. Spór się nasila i tylko zaangażowanie uczestników Kongresu daje nadzieję, na jego rozstrzygnięcie."
    />
    <ConferenceWhiteboard
      title="Młodzi i duchowość kalasantyńska"
      leader={
        <div className="ConferencesSection-leaders">
          <a href="#aguado" className="ConferencesSection-leader">
            <img src={require(`../../images/aguado.jpg`)} alt={name} className="ConferencesSection-leader-avatar" />
            o. Pedro Aguado Cuesta SP
          </a>
        </div>
      }
      description="Celem, który sobie stawiam, jest zaproponowanie młodym ludziom, jak mogą żyć duchowością kalasantyńską. To znaczy zaprezentowanie ludziom chętnym i odważnym drogi pójścia za Jezusem inspirowanej osobą św. Józefa Kalasancjusza. Spróbuję tego dokonać. Opowiem wam o dziesięciu drogach, ale jeśli to za dużo – wystarczą trzy, a właściwie tylko jedna…"
    />
  </Section>
);

ConferencesSection.propTypes = {
  zIndex: PropTypes.number,
};

export default ConferencesSection;
