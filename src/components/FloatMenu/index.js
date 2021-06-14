import { Link } from 'react-router-dom';

import './FloatMenu.css';

export default function FloatMenu() {
  return (
    <nav className="floatMenu-container">
      <Link to="/">Feed</Link>
      <Link to="/library">My Library</Link>
      <Link to="/settings">Settings</Link>
    </nav>
  );
}
