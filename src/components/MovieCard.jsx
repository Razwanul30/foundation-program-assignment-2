export default function MovieCard({ show, onDetails }) {
  const year = show.premiered ? show.premiered.slice(0, 4) : "N/A";
  const rating = show.rating?.average ?? "N/A";
  return (
    <article className="card">
      {show.image ? (
        <img src={show.image.medium} alt={`${show.name} poster`} loading="lazy" />
      ) : (
        <div className="no-poster">No poster</div>
      )}
      <div className="card-body">
        <h3>{show.name}</h3>
        <p className="meta">⭐ {rating} &nbsp;•&nbsp; 📅 {year}</p>
        <button className="btn" onClick={() => onDetails(show)}>See Details</button>
      </div>
    </article>
  );
}
