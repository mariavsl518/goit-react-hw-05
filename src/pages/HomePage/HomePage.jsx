import React, { useEffect, useState } from 'react'
import { getMovies } from '../../api';
import { Link } from 'react-router-dom';
import css from './HomePage.module.css'
import MovieList from '../../components/MovieList/MovieList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

useEffect(() => {
  async function fetchMovies(){
    try {
      const fetchedMovies = await getMovies()
      setMovies(fetchedMovies.results)
    } catch (error) {
      
    }
  }
  fetchMovies()
}, [ ]);

  return (
    <div className={css.homePageDiv}>

      <h1 className={css.trendingHeader}>
        Trending today
      </h1>

      {movies.length!==0 && <MovieList movies={movies}/>}
      
    </div>
  )
}
