import React, { PropTypes } from 'react';
import Whiteboard from '../../components/Whiteboard/Whiteboard';
import './ConferencesSection.scss';

const ConferenceWhiteboard = ({ title, description, author, leader }) => (
  <Whiteboard>
    <h2 className="ConferenceWhiteboard-heading">{title}</h2>
    {leader}
    <strong className="ConferenceWhiteboard-author">{author}</strong>
    <p>{description}</p>
  </Whiteboard>
);

ConferenceWhiteboard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  leader: PropTypes.node,
};

export default ConferenceWhiteboard;
