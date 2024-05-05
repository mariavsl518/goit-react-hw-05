import React, { useEffect, useState } from 'react'
import { getMoviesByQuery } from '../../api';
import { useParams } from 'react-router-dom';
import css from './MoviesPage.module.css'

const MoviesPage = () => {

  const [query, setQuery] = useState('')
  const [collection, setCollection] = useState([])
  const [page, setPage] = useState(1)

  function handleSubmit(evt){
    evt.preventDefault();
    setQuery(evt.target.input.value)
  }

  useEffect(()=>{
    async function fetchMoviesByQuery(){
      try {
        const data = await getMoviesByQuery(query);
        setCollection(data.results)
      } catch (error) {
        
      }
    };
    fetchMoviesByQuery()
},
[query])

console.log(collection);


  return (
    <div>
      <form onSubmit={handleSubmit} 
      className={css.searchForm}>
        <input type="text" name='input' 
        className={css.searchInput}/>
        <button type='submit'className={css.searchBtn}>Search</button>
      </form>
      <div>
        <ul className={css.searchCollection}>
          {collection.map(({id, title, vote_average, poster_path})=>
            <li key={id} className={css.searchCollectionItem}>
              <img src={`https://image.tmdb.org/t/p/w400/${poster_path}`} 
              alt={title} 
              />
              <p className={css.movieTitle}><strong>{title}</strong></p>
              <p className={css.ratingTitle}>Rating: {vote_average}</p>
            </li>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default MoviesPage