import React, { useEffect, useState } from 'react'
import { getMoviesByQuery } from '../../api';
import { useParams } from 'react-router-dom';

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
      <form onSubmit={handleSubmit}>
        <input type="text" name='input' />
        <button type='submit'>Search</button>
      </form>
      <div>
        <ul>
          {collection.map(({id, title, vote_average, poster_path})=>
            <li key={id}>
              <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
              <p>{title}</p>
              <p>{vote_average}</p>
            </li>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default MoviesPage