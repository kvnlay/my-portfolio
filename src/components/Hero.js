import React from 'react';
import Typewriter from 'components/Typewriter';
import ContactLinks from './ContactLinks';
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
          I am a passionate web designer, fullstack web developer & mentor.<br />{' '}
          I also like to make things that work on computers.
          <ContactLinks />
        </div>
      </div>
    );
  }
}

export default Hero;
