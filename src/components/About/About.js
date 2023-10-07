import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Filmmaker Turned Software Engineer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/your-photo.jpg'} alt="Your Name"/>
      <p className="content is-italic mt-4">
        Hello! I'm Minh Pham, a filmmaker who has embarked on a journey into the world of software engineering.
      </p>
      <p className="content">
        After graduating in filmmaking, my curiosity and passion for technology led me to pivot towards software engineering. My goal is to blend my creative and technical skills to build innovative and user-friendly applications, especially in the film industry.
      </p>
      <p className="content">
        Currently, I'm honing my skills as a Front-End Developer with a keen interest in becoming a Full Stack Developer in the future. My aspiration is to create applications that will revolutionize workflows and bring new possibilities to the film industry.
      </p>
    </div>
  );
}

export default About;
