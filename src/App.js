import { useState } from "react"

import useFetch from './useFetch';

import MvSearch from './components/MvSearch'
import MvResult from './components/MvResults';
import MvDetails from './components/MvDetails';
import AddWatchList from "./components/AddWatchList";
import MvWatchList from "./components/MvWatchList";

import NoImage from "./assets/no-image.jpg"
import { Helmet } from "react-helmet";

function App() {

const [searchWord, SetSearchWord] = useState ('star wars')
const [movieType, SetMovieType]  =useState('')
const [movieYear, SetMovieYear] = useState(['',2010])
const [watchList, setWatchList] = useState([])
const [watchListActive, setWatchListActive] = useState(false)
const [currentMovie, setCurrentMovie] = useState(null);
const [minYear, setMinYear] = useState('');
// const [maxYear, setMaxYear] = useState(2015);
const [mobileDetailActive, setMobileDetailActive] = useState(false)

// Movie request with the search keyword, movie type
const {data, isPending, error} = useFetch(`?apikey=${process.env.REACT_APP_OMDG_API_KEY}&s=${searchWord}&type=${movieType}&y=${minYear}`)

const movieData = data || {}
const movies = movieData.Search 
const totalResults = movieData.totalResults 

// Handle current movie id for detail component        
const handleCurrentMovie = (id) => {
  setCurrentMovie(id)
  HandleDetailClose(true)
}


// Handle search terms
const handleSearchTerms = (terms) => {
 SetSearchWord(terms.keyWord)
 SetMovieType(terms.movieType)
 SetMovieYear(terms.movieYear)
 setMinYear(movieYear[0])
//  setMaxYear(movieYear[1])
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
      <Helmet> 
        <title>Movie search</title>
        <meta name="description" content="Movie Search" />
      </Helmet>

      <div className="main">
      
       <MvSearch handleSearchTerms = {handleSearchTerms} />
    
      <div className="results-wrapper">
          {data && 
          <MvResult 
            movies={movies && movies}
            error = {error}
            isPending = {isPending}
            totalResults={totalResults}  
            handleCurrentMovie={handleCurrentMovie}
            noImage ={NoImage}
            movieType = {movieType}
            movieYear = {movieYear}/>}

          {currentMovie && 
          <MvDetails 
              currentMovie ={currentMovie} 
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
