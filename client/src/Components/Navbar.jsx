import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-black py-4 px-6 flex flex-wrap gap-4 justify-center">
      <Link to="/">
        <button className="bg-lime-500 text-white font-semibold px-5 py-2 rounded-md hover:bg-lime-600 transition">
          Home
        </button>
      </Link>
      <Link to="/cv">
        <button className="bg-lime-500 text-white font-semibold px-5 py-2 rounded-md hover:bg-lime-600 transition">
          CV
        </button>
      </Link>
      <Link to="/projects">
        <button className="bg-lime-500 text-white font-semibold px-5 py-2 rounded-md hover:bg-lime-600 transition">
          Projects
        </button>
      </Link>
      <Link to="/contact">
        <button className="bg-lime-500 text-white font-semibold px-5 py-2 rounded-md hover:bg-lime-600 transition">
          Contact
        </button>
      </Link>
      <Link to="/about-me">
        <button className="bg-lime-500 text-white font-semibold px-5 py-2 rounded-md hover:bg-lime-600 transition">
          About Me
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;