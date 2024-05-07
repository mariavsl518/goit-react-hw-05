import {React, useLocation} from 'react'
import css from './MovieList.module.css'
import { Link } from 'react-router-dom'

const MovieList = ({movies}) => {

  const location = useLocation()
  console.log(location);


  return (
    <ul className={css.searchCollection}>
    {movies.map(({id, title, vote_average, poster_path})=>
      <li key={id} className={css.searchCollectionItem}>
        <Link to={`/movies/${id}`} state={location}>
        <img src={`https://image.tmdb.org/t/p/w400/${poster_path}`} 
        alt={title} 
        />
        <p className={css.movieTitle}><strong>{title}</strong></p>
        <p className={css.ratingTitle}>Rating: {vote_average}</p>
        </Link>
      </li>
      )
    }
  </ul>
  )
}

export default MovieList