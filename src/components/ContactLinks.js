import React from 'react';
import {
  FaGithub as Github,
  FaLinkedin as Linked,
  FaEnvelope as Mail,
} from 'react-icons/fa';

class ContactLinks extends React.PureComponent {
  render() {
    return (
      <div className="contact-links">
        <span>
          <a rel="noopener" target="_blank" href="mailto:kkomotayo@gmail.com">
            <Mail />
          </a>
        </span>
        <span>
          <a
            rel="noopener"
            target="_blank"
            href="https://www.linkedin.com/in/kingsley-omotayo"
          >
            <Linked />
          </a>
        </span>
        <span>
          <a rel="noopener" target="_blank" href="https://github.com/kvnlay">
            <Github />
          </a>
        </span>
      </div>
    );
  }
}

export default ContactLinks;
