import React, { useEffect, useState } from 'react'
import { getMoviesByQuery } from '../../api';
import css from './MoviesPage.module.css'
import MovieList from '../../components/MovieList/MovieList';
import {useSearchParams } from 'react-router-dom';

const MoviesPage = () => {

  const [movies, setMovies] = useState([]);
  const [fetchError, setFetchError] = useState(false);
  const [emptyQuery, setEmptyQuery] = useState(false)

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query')

  function handleSubmit(evt){
    evt.preventDefault();
    const value = evt.target.input.value;
    if(!value){
      setEmptyQuery(true) 
    }
    searchParams.set('query', value);
    setSearchParams(searchParams);
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
[searchParams])

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
      {emptyQuery && <p>Enter a keyword</p>}
      {fetchError && <p>Reload the page</p>}
    
    </div>
  )
}

export default MoviesPage