import { ThreeDots } from 'react-loading-icons'

const MvResult = (props) => {

    const { 
    movies,
    error,
    isPending, 
    totalResults, 
    handleCurrentMovie 
    } = props

    console.log(props)

    return (
        <div className="movie-list">
           
            { error && <div> {error} </div>}
            { isPending && <div className="loading">Item Loading <ThreeDots  stroke="#999" height="20"/></div>}  
          <div className="movie-count">{totalResults && <div className="count"> {totalResults} Results</div>}  </div> 
           {movies && movies.map((movie) => (
               <div className="movie-container" key={movie.imdbID} onClick={() => handleCurrentMovie(movie.imdbID)}>
                   <div className="image-container"> <img src={movie.Poster} alt={movie.Title}/> </div>
                   <div className="movie-discription">
                        <h3>{movie.Title}</h3>
                        <span className="movie-year"> {movie.Year} </span>
                   </div>
                   
               </div>
           ))}

        </div>
    );
}
 
export default MvResult;