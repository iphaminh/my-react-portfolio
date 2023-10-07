import React, { useState } from 'react'; 
import Navigation from '../Navigation/Navigation'; 
import About from '../About/About';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Resume from '../Resume/Resume';


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

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="name">Minh Pham</span>
          <div className="portfolio">My Portfolio</div>
        </div>
      </nav>
      <Navigation 
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
