import React, { useEffect, useState } from 'react'
import { getMovieCredits } from '../../api'
import { useParams} from 'react-router-dom'
import css from './MovieCast.module.css'

const MovieCast = () => {

  const [cast, setCast] = useState([])
  const {movieId} = useParams()
  const [fetchError, setFetchError] = useState(false)

  useEffect(()=>{
    async function fetchMovieCredits(){
      try {
        const data = await getMovieCredits(movieId)
        setCast(data.cast)
      } catch (error) {
        setFetchError(true)
      }
    }
    fetchMovieCredits();
  },
  [movieId])

  
  return (
    <ul className={css.castList}>
      
      {fetchError ? 
      (<p>Reload the page</p>) : 

      cast.map(({id, character, name, profile_path})=>
        {
          if(!profile_path){
            return 
          }
          return(<li key={id} className={css.castItems}>
            <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt={name} />
            <p className={css.castName}>
              <strong>{name}</strong>
            </p>
            <p>Character: {character}</p>
          </li>)
        }
      )
      }
    </ul>
  )
}

export default MovieCast