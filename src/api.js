import axios from "axios";

axios.defaults.baseURL = 
'https://api.themoviedb.org';
axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmZiYTJkMjFmMDA5ZWE2ZmU5ZTlhZjgyYjIwZTIwMSIsInN1YiI6IjY2MzIzNGNjYWQ1OWI1MDEyNTZjYjVjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.94gtpdlC8D_4-WGBteeUE2ytF7EjGleZo_gNAe3gibg';


export const getMovies = async()=>{
    const resp = await axios.get('/3/trending/movie/day?language=en-US');
    return resp.data;   
}

export const getMovieById = async(movieId)=>{
    const resp = await axios.get(`/3/movie/${movieId}?language=en-US`);
    return resp.data
}

export const getMoviesCredits = async(movieId)=>{
    const resp = await axios.get(`/3/movie/${movieId}/credits?language=en-US`);
    return resp.data
}
