import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
      <Link to="/cv" style={{ marginRight: "1rem" }}>CV</Link>
      <Link to="/projects" style={{ marginRight: "1rem" }}>Projects</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about-me">About Me</Link>
    </nav>
  );
}

export default Navbar;