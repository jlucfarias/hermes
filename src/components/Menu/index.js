import { Link } from 'react-router-dom';

import './Menu.css';

import logo from '../../assets/logo.png';

export default function Menu() {
  return (
    <header className="menu-container">
      <nav>
        <Link to="/">Feed</Link>
        <Link to="/library">My Library</Link>
        <Link to="/settings">Settings</Link>
      </nav>
      <Link to="/" className="logo">
        <img src={logo} alt="Hermes Logo"/>
      </Link>
      <a href="/about.html">About</a>
    </header>
  );
}
