import './App.css'
import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
const HomePage = lazy(() => setDelay(import ('./pages/HomePage/HomePage')))
const MoviesPage = lazy(() => setDelay(import ('./pages/MoviesPage/MoviesPage')))
const MovieDetailsPage = lazy(() => setDelay(import ('./pages/MovieDetailsPage/MovieDetailsPage')))
const NotFoundPage = lazy(() => setDelay(import ('./pages/NotFoundPage/NotFoundPage')))
const Layout = lazy(() => setDelay(import ('./components/Layout/Layout')))
import Loading from './components/Loading/Loading'
import MovieCast from './components/MovieCast/MovieCast'
import MovieReviews from './components/MovieReviews/MovieReviews'

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
