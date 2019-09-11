import React from 'react';

class Footer extends React.PureComponent {
  render() {
    return (
      <div className="footer">
        <span>
          Kingsley Omotayo's Portfolio - Gatsby template by Justin Chi ©{' '}
          {new Date().getFullYear()}
        </span>
      </div>
    );
  }
}

export default Footer;
