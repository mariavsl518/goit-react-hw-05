import React, { useEffect, useState } from 'react'
import { getMovieById } from '../../api'
import { Link, NavLink, useParams, Outlet} from 'react-router-dom'
import css from './MovieDetailsPage.module.css'
// import MovieCast from '../../components/MovieCast/MovieCast'
// import MovieReviews from '../../components/MovieReviews/MovieReviews'

const MovieDetailsPage = () => {
  const { movieId } = useParams()
  const [currentMovie, setCurrentMovie] = useState([])
 
  useEffect(()=>{
    async function fetchMovieById() {
      try {
        const data = await getMovieById(movieId);
        setCurrentMovie(data)
        console.log(currentMovie);
      } catch (error) {
        
      }
    }
    fetchMovieById()
  },
  [movieId]
  )

  return (
    <>
    <div>
      <Link to='/'>Back</Link>
      <img src={`https://image.tmdb.org/t/p/w500/${currentMovie.poster_path}`} alt={currentMovie.title} />
      <div className={css.detailsBox}>
        <h1>{currentMovie.title}</h1>
        <p>User Score:{Math.round(currentMovie.vote_average*10)}%</p>
        <p>Overview:<br/>{currentMovie.overview}</p>
        <p>Genres:<br/>{currentMovie.genres?.map(({name})=>
          <span>{name} </span>
          )}
        </p>
      </div>

      <Link to={`cast`}>
        Cast
      </Link>

      <Link to={`reviews`}>
        Reviews
      </Link>

          <Outlet/>

      </div>

    </>
  )
}

export default MovieDetailsPage