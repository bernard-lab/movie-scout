const filmCard = ({ film }) => {
  return (
    <div className="movie">
      <div>
        <p>{film.Year}</p>
      </div>

      <div>
        {film.Poster === "N/A" ? (
          <img src="https://placehold.co/400" alt="no-image" />
        ) : (
          <img src={film.Poster} alt={film.Title} />
        )}
      </div>

      <div>
        <span>{film.Type}</span>
        <h3>{film.Title}</h3>
      </div>
    </div>
  );
};

export default filmCard;
