import React, { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=44667668';

  const searchMovies = async () => {
    try {
      const response = await fetch(`${API_URL}&s=${searchTerm}`);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // You can place any initial logic here if needed.
  }, []);

  return (
    <div className='app'>
      <h1>MoviePalmares</h1>
      <div className='search'>
        <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          <img
            src={SearchIcon}
            alt='search'
            onClick={searchMovies}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>

      <div className='container'>
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
