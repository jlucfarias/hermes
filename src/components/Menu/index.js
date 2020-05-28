import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

import logo from '../../assets/logo.png';

export default function Menu() {
  return (
    <header className="Menu-container">
      <nav>
        <Link to="/feed">Feed</Link>
        <Link to="/library">My Library</Link>
        <Link to="/settings">Settings</Link>
      </nav>
      <Link to="/">
        <img src={logo} alt="Hermes Logo"/>
      </Link>
      <a href="/about">About</a>
    </header>
  );
}
