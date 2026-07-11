import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <a href="#about" className="header-link">About</a>
        <a href="#projects" className="header-link">Projects</a>
        <a href="#contact" className="header-link">Contact</a>
      </nav>
    </header>
  );
}
