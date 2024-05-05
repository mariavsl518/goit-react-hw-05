import './App.css'
import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
const HomePage = lazy(() => setDelay(import ('./pages/HomePage/HomePage')))
const MoviesPage = lazy(() => setDelay(import ('./pages/MoviesPage/MoviesPage')))
const MovieDetailsPage = lazy(() => setDelay(import ('./pages/MovieDetailsPage/MovieDetailsPage')))
const MovieCast = lazy(() => setDelay(import ('./components/MovieCast/MovieCast')))
const MovieReviews = lazy(() => setDelay(import ('./components/MovieReviews/MovieReviews')))
const NotFoundPage = lazy(() => setDelay(import ('./pages/NotFoundPage/NotFoundPage')))
const Layout = lazy(() => setDelay(import ('./components/Layout/Layout')))
import Loading from './components/Loading/Loading'

// import HomePage from './pages/HomePage/HomePage'
// import MoviesPage from './pages/MoviesPage/MoviesPage'
// import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage'
// import MovieCast from './components/MovieCast/MovieCast'
// import MovieReviews from './components/MovieReviews/MovieReviews'
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
// import Layout from './components/Layout/Layout'

function App() {

  return (
    <Layout>
        <Suspense fallback={<Loading/>}>

          <Routes>

            <Route path='/' element={<HomePage/>}/>
            <Route path='/movies' element={<MoviesPage/>}/>
            <Route path='/movies/:movieId/' element={<MovieDetailsPage/>}>
              <Route path='cast' element={<MovieCast/>}/>
              <Route path='reviews' element={<MovieReviews/>}/>
            </Route>
            <Route path='*' element={<NotFoundPage/>}/>
            
          </Routes>

        </Suspense>
    </Layout>
  )
}

function setDelay(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 1000);
  }).then(() => promise);
}

export default App
