import React, { useEffect, useState } from 'react'
import { getMoviesCredits } from '../../api'
import { useParams, Outlet} from 'react-router-dom'

const MovieCast = () => {

  const [cast, setCast] = useState([])
  const {movieId} = useParams()

  useEffect(()=>{
    async function fetchMoviesCredits(){
      try {
        const data = await getMoviesCredits(movieId)
        console.log(data);
        setCast(data.cast)
      } catch (error) {
        
      }
    }
    fetchMoviesCredits();
  },
  [movieId])

  return (
    <ul>
      {cast.map(({id, character, name, profile_path})=>{
        <li key={id}>
          <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} />
          <p>{name}</p>
          <p>Character:{character}</p>
        </li>
      })
      }
      <Outlet/>
    </ul>
  )
}

export default MovieCast