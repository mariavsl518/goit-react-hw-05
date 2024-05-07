import React, { useEffect, useState } from 'react'
import { getMoviesByQuery } from '../../api';
import css from './MoviesPage.module.css'
import MovieList from '../../components/MovieList/MovieList';
import {useSearchParams } from 'react-router-dom';

const MoviesPage = () => {

  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([]);
  const [fetchError, setFetchError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSubmit(evt){
    evt.preventDefault();
    const value = evt.target.input.value;
    if(!value){
      return
    }
    setQuery(value)
    setSearchParams({query:value})
  }

  useEffect(()=>{
    async function fetchMoviesByQuery(){
      try {
        const data = await getMoviesByQuery(query);
        setMovies(data.results)
      } catch (error) {
        setFetchError(true)
      }
    };
    fetchMoviesByQuery()
},
[query])


  return (
    <div>
      <form onSubmit={handleSubmit} 
      className={css.searchForm}>

        <input type="text" name='input' 
        className={css.searchInput}/>

        <button type='submit'className={css.searchBtn}>
          Search
        </button>

      </form>

      {movies.length!==0 && <MovieList movies={movies}/>}
      {fetchError && <p>Reload the page</p>}
    
    </div>
  )
}

export default MoviesPage