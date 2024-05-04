import React, { useEffect, useState } from 'react'
import { getMovies } from '../../api';
import { Link } from 'react-router-dom';
import MovieDetailsPage from '../../components/MovieDetailsPage/MovieDetailsPage';
import css from './HomePage.module.css'

export default function HomePage() {
  const [movies, setMovies] = useState([]);

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
    <div className={css.homePageDiv}>
      <h1 className={css.trendingHeader}>Trending today</h1>
      <ul className={css.trendingList}>
        {movies.map(movie=>(
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} className={css.componentLink}>
              <MovieDetailsPage movie={movie} allMovies={movies}/>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
