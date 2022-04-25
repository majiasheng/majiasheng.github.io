import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';
import '../styles/NavigationBar.css';

function NavigationBar() {
  return (
    <div className="nav-bar">
      <ul className="nav-items">
        {Object.values(routes).map((r) => (
          <li className="nav-item" key={`nav-item__${r.name}`}>
            <Link to={r.path} className="anchor-hover-black-background-white-text">
              <span>{r.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavigationBar;
