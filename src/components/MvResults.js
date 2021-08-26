import { ThreeDots } from 'react-loading-icons'

const MvResult = (props) => {

    const { 
    movies,
    error,
    isPending, 
    totalResults, 
    noImage,
    handleCurrentMovie 
    } = props

    return (
        <div className="movie-list">           
            { error && <div className="error-container"> {error} </div>}
            { isPending && <div className="loading">Item Loading <ThreeDots  stroke="#999" height="20"/></div>}  
          <div className="movie-count">{totalResults && <div className="count"> {totalResults} Results</div>}  </div> 
           {movies && movies.map((movie) => (
               <div className="movie-container" key={movie.imdbID} onClick={() => handleCurrentMovie(movie.imdbID)}>
                   <div className="image-container"> 
                   <img  src=
                   { (movie.Poster === 'N/A') ?  `${noImage}` :  `${movie.Poster}`}
                    alt={movie.Title}/> 
                   </div>
                   <div className="movie-description">
                        <h3>{movie.Title}</h3>
                        <span className="movie-year"> {movie.Year} </span>
                   </div>
                   
               </div>
           ))}

        </div>
    );
}
 
export default MvResult;