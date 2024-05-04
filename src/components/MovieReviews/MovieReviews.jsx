import React, { useEffect, useState } from 'react'
import { getMovieReview } from '../../api'
import { useParams } from 'react-router-dom'

const MovieReviews = () => {

  const {movieId} = useParams()
  const [reviews, setReviews]= useState([])
 
  useEffect(()=>{
    async function fetchMovieReviews(){
      try {
        const data = await getMovieReview(movieId);
        setReviews(data.results);
      } catch (error) {
        
      }
    }
    fetchMovieReviews()
  },[])

  console.log(reviews);

  return (
      <ul>
        {reviews.map(({author, content,id})=>
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        )}
      </ul>
  )
}

export default MovieReviews