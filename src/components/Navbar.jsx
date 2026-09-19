import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="nav">
      <Link to="/" className="brand">🎬 MovieExplorer</Link>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <Link to="/movies" className="btn btn-sm">Movies</Link>
      </nav>
    </header>
  );
}
