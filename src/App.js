import { useState } from "react"

import MvSearch from './components/MvSearch'
import MvResult from './components/MvResults';
import MvDetails from './components/MvDetails';
import useFetch from './useFetch';
import AddWatchList from "./components/AddWatchList";
import MvWatchList from "./components/MvWatchList";

function App() {

const [searchWord, SetSearchWord] = useState ('Star wars')
const [movieType, SetMovieType]  =useState('')
const [movieYear, SetMovieYear] = useState([1990,2010])
const [watchList, setWatchList] = useState([])
const [watchListActive, setWatchListActive] = useState(false)
const [currntMovie, setCurrentMoive] = useState(null);
const [minYear, setMinYear] = useState(1990);
const [maxYear, setMaxYear] = useState(2015);

// Movie request with the search keyword, mvie type
const {data, isPending, error} = useFetch(`?apikey=8f5e4dfc&s=${searchWord}&type=${movieType}`)

const movieData = data || {}
const movies = movieData.Search 
const totalResults = movieData.totalResults 

// Handle current movie id for detal component        
const handleCurrentMovie = (id) => {
  setCurrentMoive(id)
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
    console.log ('item is no in the watch list')
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


console.log('app page data=',movies && movies.filter((movie) =>  movie.Year > minYear || movie.Year < maxYear ))

  return (
    <div className="App">
      <div className="main">
       {/* {console.log ('movie object=',data)} */}
        
       <MvSearch handleSearchTerms = {handleSearchTerms} />
    
      <div className="search-wrapper">
          {data && <MvResult 
          movies={movies && movies.filter((movie) =>  movie.Year > minYear || movie.Year < maxYear )}
          error = {error}
          isPending = {isPending}
          totalResults={totalResults}  
          handleCurrentMovie={handleCurrentMovie}
          movieType = {movieType}
          movieYear = {movieYear}
          />}

          {currntMovie && <MvDetails 
          currntMovie ={currntMovie} 
          addWatchList ={AddWatchList} 
          handleAddWatchList={HandleAddWatchList}
          />}
      </div>
      
      <MvWatchList 
          movies = {watchList}
          watchListActive = {watchListActive}
          handleWatchListClose = {HandleWatchListClose}
          handleRemoveWatchList = {HandleRemoveWatchList}
      />

     
      {/* <div> search filter values= {searchWord} , type = {movieType} , min Year {minYear} and max Year = {maxYear}  </div>  */}
      </div>
    </div>
  );
}

export default App;
