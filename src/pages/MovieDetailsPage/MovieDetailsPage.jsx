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

    <div className={css.detailsPageContainer}>
      <Link to='/'className={css.backBtn}>
        Back
      </Link>
      <div className={css.detailsContainer}>
        <img src={`https://image.tmdb.org/t/p/w500/${currentMovie.poster_path}`} 
        alt={currentMovie.title} 
        className={css.movieImg}/>
        <div className={css.detailsBox}>
          <h1>{currentMovie.title}</h1>
          <p>
            <strong>User score: </strong> 
              {currentMovie.vote_average}
          </p>
          <p>
            <strong>Overview:</strong>
              <br/>{currentMovie.overview}
          </p>
          <p>
            <strong>Genres:</strong>
              <br/>{currentMovie.genres?.map(({name, id})=>
            <span key={id}>{name} </span>
            )}
          </p>
      </div>
      </div>
      <div className={css.additionsBox}>
        <Link to={`cast`} className={css.additions}>
          Cast
        </Link>

        <Link to={`reviews`} className={css.additions}>
          Reviews
        </Link>
      </div>

            <Outlet/>
      </div>

  )
}

export default MovieDetailsPage