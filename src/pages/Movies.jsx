import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard.jsx";
import MovieModal from "../components/MovieModal.jsx";

const API = "https://api.tvmaze.com";

export default function Movies() {
  const [query, setQuery] = useState("");
  const [shows, setShows] = useState([]);
  const [status, setStatus] = useState("loading");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const q = query.trim();
    const controller = new AbortController();
    const timer = setTimeout(async () => {
      setStatus("loading");
      try {
        const url = q ? `${API}/search/shows?q=${encodeURIComponent(q)}` : `${API}/shows?page=0`;
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error("Request failed");
        const data = await res.json();
        setShows(q ? data.map((d) => d.show) : data.slice(0, 48));
        setStatus("done");
      } catch (err) {
        if (err.name !== "AbortError") setStatus("error");
      }
    }, 350);
    return () => { clearTimeout(timer); controller.abort(); };
  }, [query]);

  return (
    <section className="page">
      <input
        className="search"
        type="search"
        placeholder="🔍 Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search by title"
      />
      {status === "loading" && <p className="note">Loading…</p>}
      {status === "error" && <p className="note">Couldn't load shows. Check your connection and try again.</p>}
      {status === "done" && shows.length === 0 && <p className="note">No results for “{query}”. Try another title.</p>}
      <div className="grid">
        {shows.map((s) => <MovieCard key={s.id} show={s} onDetails={setSelected} />)}
      </div>
      {selected && <MovieModal show={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
