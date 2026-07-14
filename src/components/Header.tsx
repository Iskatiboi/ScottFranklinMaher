import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <NavLink to="/" className={({ isActive }) => `header-link${isActive ? ' header-link--active' : ''}`} end>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => `header-link${isActive ? ' header-link--active' : ''}`}>About</NavLink>
        <NavLink to="/projects" className={({ isActive }) => `header-link${isActive ? ' header-link--active' : ''}`}>Projects</NavLink>
        <NavLink to="/contact" className={({ isActive }) => `header-link${isActive ? ' header-link--active' : ''}`}>Contact</NavLink>
      </nav>
    </header>
  );
}
