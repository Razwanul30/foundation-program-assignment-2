import { useEffect } from "react";

const stripHtml = (html = "") => html.replace(/<[^>]+>/g, "");

export default function MovieModal({ show, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const img = show.image?.original || show.image?.medium;
  const info = [
    ["Genres", show.genres?.join(", ")],
    ["Language", show.language],
    ["Status", show.status],
    ["Network", show.network?.name || show.webChannel?.name],
    ["Runtime", show.runtime && `${show.runtime} min`],
  ].filter(([, v]) => v);

  return (
    <div className="backdrop" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={show.name} onClick={(e) => e.stopPropagation()}>
        <button className="x" onClick={onClose} aria-label="Close">✕</button>
        {img && <img className="modal-img" src={img} alt={`${show.name} artwork`} />}
        <div className="modal-body">
          <h2>{show.name}</h2>
          <p className="meta">⭐ Rating: {show.rating?.average ?? "N/A"} &nbsp;|&nbsp; 📅 Release: {show.premiered || "N/A"}</p>
          <h4>Overview</h4>
          <p>{stripHtml(show.summary) || "No summary available."}</p>
          <dl>
            {info.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}
          </dl>
          <button className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
