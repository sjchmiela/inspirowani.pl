import React, { Component, PropTypes } from 'react';
import Section from '../../components/Section/Section';
import './VideoSection.scss';

export default class VideoSection extends Component {
  static propTypes = {
    zIndex: PropTypes.number,
  }

  render() {
    return (
      <Section className="VideoSection" zIndex={this.props.zIndex}>
        <div className="VideoSection-videoWrapper">
          <div className="VideoSection-video">
            <iframe
              width="560"
              height="315"
              frameborder="0"
              allowfullscreen
              src="https://www.youtube.com/embed/XbA99UERUtQ?rel=0"
            />
          </div>
        </div>
      </Section>
    );
  }
}
