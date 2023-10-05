import React, { useState } from 'react'; //useState hook.
import Navigation from './Navigation'; 
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';

function Header() { //create a reusable UI section (Chapter 10-Component).
  const [currentPage, setCurrentPage] = useState("About");  //Initializing state using useState,  manage the current page being displayed 

  const renderPage = () => { //renderPage using a switch statement.
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return ( //JSX returned by the Header component. structure the UI of the Header component (Chapter 06-JSX-expressions)
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/iphaminh?tab=repositories"
          >
            <span className="content is-large">Minh Pham</span>
          </a>
        </div>
      </nav>
      <Navigation //To display navigation tabs and allow user interaction to change the displayed page (Chapter 08-Props).
        currentPage={currentPage}
        handlePageChange={setCurrentPage}
      />
      <main>
        <div>{renderPage()}</div>
      </main>
    </div>
  );
}

export default Header;
