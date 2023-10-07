import React from 'react';


function Navigation(props) {
  // Define the tabs to be displayed in the navigation bar
  const tabs = ['About Me', 'Portfolio', 'Contact Me', 'Resume'];

  return (
    <nav className="navigation">
      <ul className="nav-list">
        {tabs.map((tab) => (
          <li
            className={props.currentPage === tab ? 'nav-item active' : 'nav-item'}
            key={tab}
          >
            <a
              href={'#' + tab.replace(' ', '').toLowerCase()}  // Adjusting for multi-word tabs
              onClick={() => props.handlePageChange(tab)}
              className="nav-link"
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
