import React from 'react'
import css from './MovieDetailsPage.module.css'

const MovieDetailsPage = ({movie}) => {

    return (
      <>
        <h2 className={css.trendingLink}>{movie.title}</h2>
        <p className={css.releaseTitle}>
          (Release date {movie.release_date})
        </p>
      </>
    )
  }

export default MovieDetailsPage