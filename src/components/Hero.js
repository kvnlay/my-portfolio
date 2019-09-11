import React from 'react';
import Typewriter from 'components/Typewriter';
import Scrollchor from 'react-scrollchor';

class Hero extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hero-container">
        <Typewriter className="hero-title" text="Kingsley Omotayo" />
        <div className="hero-description">
          I am a passionate web designer, fullstack web developer & mentor.<br />Check
          out my <Scrollchor to="#projects">side-projects</Scrollchor> below.
        </div>
      </div>
    );
  }
}

export default Hero;
