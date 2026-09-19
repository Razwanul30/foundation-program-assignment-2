import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      <h1>Discover movies</h1>
      <p>Explore and discover your favorite movies and shows from around the world.</p>
      <Link to="/movies" className="btn btn-lg">Explore Now</Link>
    </section>
  );
}
