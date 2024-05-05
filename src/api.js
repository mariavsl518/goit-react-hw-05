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

export const getMovieCredits = async(movieId)=>{
    const resp = await axios.get(`/3/movie/${movieId}/credits?language=en-US`);
    return resp.data
}

export const getMovieReview = async(movieId) =>{
    const resp = await axios.get(`/3/movie/${movieId}/reviews?language=en-US&page=1`);
    return resp.data
}

export const getMoviesByQuery = async(query) =>{
    const resp = await axios.get(`/3/search/movie?include_adult=false&language=en-US&`,
    {params: {
        query,
    }}
    );
    return resp.data
}