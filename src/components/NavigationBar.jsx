import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import routes from '../routes';
import '../styles/NavigationBar.css';

function NavigationBar() {
  const location = useLocation();

  return (
    <div className="nav-bar">
      <ul className="nav-items">
        {Object.values(routes).map((r) => (
          <li className="nav-item" key={`nav-item__${r.name}`}>
            <Link to={r.path}>
              {
                // FIXME: need to account for subpaths
                (location.pathname === r.path) ? (<u>{r.name}</u>) : (<span>{r.name}</span>)
              }
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavigationBar;
