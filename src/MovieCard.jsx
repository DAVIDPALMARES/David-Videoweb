import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className='movie'>
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
          alt={movie.Title}  // Use `movie.Title` as the alt text
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>  {/* Corrected the case to `Title` */}
      </div>
    </div>
  );
}

export default MovieCard;
