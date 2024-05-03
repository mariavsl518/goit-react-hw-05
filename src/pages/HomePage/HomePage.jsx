import React, { useEffect, useState } from 'react'
import { getMovies } from '../../api';
import { Link } from 'react-router-dom';
import MovieDetailsPage from '../../components/MovieDetailsPage/MovieDetailsPage';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1)
 
useEffect(() => {
  async function fetchMovies(){
    try {
      const fetchedMovies = await getMovies()
      setMovies(fetchedMovies.results)
      console.log(fetchedMovies.results);
    } catch (error) {
      
    }
  }
  fetchMovies()
}, [ ]);


  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie=>(
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <MovieDetailsPage movie={movie} allMovies={movies}/>
              </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
