import React from "react";
import resumePdf from "../../assets/file/phaminh-resume.pdf"; // Importing the PDF

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium">Résumé</p>
        <hr />

        <a
          className="button is-primary"
          href={resumePdf} // Using the imported PDF
          target="_blank" 
          rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
      <div className="column">
        <p className="content is-medium">Skills</p>
        <hr />
        <ul>
            <li>HTML, CSS, Javascript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Photoshop</li>
            <li>Lightroom</li>
            <li>Premeire Pro</li>
            <li>Davinci Resolve</li>
            <li>After Effect</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
