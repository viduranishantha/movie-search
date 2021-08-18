
const MvResult = (props) => {

    // const movies = props.movies;
    // const resultLength = props.totalResults;
    // const  handleCurrentMovie= props.handleCurrentMovie;
    const { movies, totalResults, handleCurrentMovie } = props

    console.log(props)

    return (
        <div className="movie-list">
           <div className="movie-count"> {totalResults} Results </div> 
          
           {movies && movies.map((movie) => (
               <div className="movie-container" key={movie.imdbID} onClick={() => handleCurrentMovie(movie.imdbID)}>
                   <div className="image-container"> <img src={movie.Poster} alt={movie.Title}/> </div>
                   <div className="movie-discription">
                        <h3>{movie.Title}</h3>
                        <span> {movie.Year} </span>
                   </div>
                   
               </div>
           ))}

        </div>
    );
}
 
export default MvResult;