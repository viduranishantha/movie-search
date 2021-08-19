import { useState } from "react"

import MvSearch from './components/MvSearch'
import MvResult from './components/MvResults';
import MvDetails from './components/MvDetails';
import useFetch from './useFetch';

function App() {

const [searchWord, SetSearchWord] = useState ('Star wars')
const [movieType, SetMovieType]  =useState('')
const {data, isPending, error} = useFetch(`?apikey=8f5e4dfc&s=${searchWord}&type=${movieType}`)

// const {data, isPending, error} = useFetch(`?apikey=8f5e4dfc&s=lion`)

const movieData = data || {}
const movies = movieData.Search 
const totalResults = movieData.totalResults 



// const { data:{Search=[], totalResults=0}={} } = data || {}

// debugger
// const { data:{Search=[],totalResults}={}, isPending, error } = useFetch(`?apikey=8f5e4dfc&s=${searchTerm}`)
// const { data, isPending, error } = useFetch(`?apikey=8f5e4dfc&s=${searchTerm}`)


const [currntMovie, setCurrentMoive] = useState(null);
        
const handleCurrentMovie = (id) => {
  console.log('handle current movie clicked')
  setCurrentMoive(id)
}

// 
const handleSearchTerms = (terms) => {
 console.log ('changed searche term is = ')       
 console.log (terms.keyWord)
 SetSearchWord(terms.keyWord)
 SetMovieType(terms.movieType)
}


console.log('app page data=',movies)

  return (
    <div className="App">
      <div className="main">
       {/* {console.log ('movie object=',data)} */}
        
       <MvSearch handleSearchTerms = {handleSearchTerms} />
    
      <div className="search-wrapper">
        
          <MvResult 
          movies={movies} 
          error = {error}
          isPending = {isPending}
          totalResults={totalResults}  
          handleCurrentMovie={handleCurrentMovie}
          movieType = {movieType}
          />

          {currntMovie && <MvDetails currntMovie ={currntMovie} />}
      </div>
      <div> search filter values= {searchWord} , type = {movieType}</div> 
      </div>
    </div>
  );
}

export default App;
