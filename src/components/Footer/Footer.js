import React from 'react';


function Footer() {
  return (
    <footer className="footer">
      <div className="content">
        <p>
          <strong>My Full Stack Development Portfolio</strong> - a React site by{' '}
          <a href="https://github.com/iphaminh" target="_blank" rel="noreferrer">
            Your Name
          </a>
          .
        </p>
        <hr />
        <p>
          <a
            href="https://www.linkedin.com/in/minh-pham-51a49458/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>{' '}
          |{' '}
          <a href="https://github.com/iphaminh" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
