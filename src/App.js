import { useState } from "react"

import useFetch from './useFetch';

import MvSearch from './components/MvSearch'
import MvResult from './components/MvResults';
import MvDetails from './components/MvDetails';
import AddWatchList from "./components/AddWatchList";
import MvWatchList from "./components/MvWatchList";

import NoImage from "./assets/no-image.jpg"

function App() {

const [searchWord, SetSearchWord] = useState ('Star wars')
const [movieType, SetMovieType]  =useState('')
const [movieYear, SetMovieYear] = useState([1990,2010])
const [watchList, setWatchList] = useState([])
const [watchListActive, setWatchListActive] = useState(false)
const [currntMovie, setCurrentMoive] = useState(null);
const [minYear, setMinYear] = useState('');
const [maxYear, setMaxYear] = useState(2015);
const [mobileDetailActive, setMobileDetailActive] = useState(false)

// Movie request with the search keyword, movie type
const {data, isPending, error} = useFetch(`?apikey=${process.env.REACT_APP_OMDG_API_KEY}&s=${searchWord}&type=${movieType}`)
// const {data, isPending, error} = useFetch(`?apikey=${process.env.REACT_APP_OMDG_API_KEY}&s=${searchWord}&type=${movieType}&y=${minYear}`)

const movieData = data || {}
const movies = movieData.Search 
const totalResults = movieData.totalResults 

// Handle current movie id for detal component        
const handleCurrentMovie = (id) => {
  setCurrentMoive(id)
  HandleDetailClose(true)
}

// Handle search terms
const handleSearchTerms = (terms) => {
 SetSearchWord(terms.keyWord)
 SetMovieType(terms.movieType)
 SetMovieYear(terms.movieYear)
 setMinYear(movieYear[0])
 setMaxYear(movieYear[1])
//  const filterdMovies= {movies.filter((movie) => movie.Year === 2000)}
}

// Add to watch List
const HandleAddWatchList = (movie) => {
  if(watchList.indexOf(movie) < 0) {
    const newWatchList= [...watchList , movie ]
    setWatchList(newWatchList)
  }
  setWatchListActive(true)
}

// Remove item from the watch list
const HandleRemoveWatchList = (movie) => {
  const newWatchList = watchList.filter(
    (watchList) => watchList.imdbID !== movie.imdbID
  )
   setWatchList(newWatchList)
}

const HandleWatchListClose = () => {
  setWatchListActive(false)
}

const HandleDetailClose = (status) => {
  setMobileDetailActive(status)
}

  return (
    <div className="App">
      <div className="main">
      
       <MvSearch handleSearchTerms = {handleSearchTerms} />
    
      <div className="results-wrapper">
          {data && 
          <MvResult 
            movies={movies && movies}
            // movies={movies && movies.filter((movie) =>  movie.Year > minYear || movie.Year < maxYear )}
            error = {error}
            isPending = {isPending}
            totalResults={totalResults}  
            handleCurrentMovie={handleCurrentMovie}
            noImage ={NoImage}
            movieType = {movieType}
            movieYear = {movieYear}/>}

          {currntMovie && 
          <MvDetails 
              currntMovie ={currntMovie} 
              addWatchList ={AddWatchList} 
              handleAddWatchList={HandleAddWatchList}
              handleDetailClose={HandleDetailClose}
              noImage ={NoImage}
              mobileDetailActive={mobileDetailActive}/>}
      </div>
      
      <MvWatchList 
          movies = {watchList}
          watchListActive = {watchListActive}
          noImage ={NoImage}
          handleWatchListClose = {HandleWatchListClose}
          handleRemoveWatchList = {HandleRemoveWatchList}
      />
      </div>
    </div>
  );
}

export default App;
