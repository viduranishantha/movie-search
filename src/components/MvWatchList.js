import{FaTimes} from "react-icons/fa";

const MvWatchList = (props) => {

    const { 
        movies,
        watchListActive, 
        noImage,
        handleWatchListClose, 
        handleRemoveWatchList} = props

    return (
        <div className={`watch-list  ${watchListActive ? 'active' :''}` }> 
            <div className='movie-watch-list' >
                {watchListActive}
                <div className="watch-list-header">
                    My Wish List
                    <div className="close-button" onClick={()=> handleWatchListClose()}> <FaTimes/> </div>
                </div>
                {movies === [] && <div> list is empty </div>}    
                {movies && movies.map((movie) => (
                    <div className="movie-container" key={movie.imdbID} >
                        <div className="image-container"> 
                        <img  src=
                            { (movie.Poster === 'N/A') ?  `${noImage}` :  `${movie.Poster}`}
                            alt={movie.Title}/> 
                        </div>
                        <div className="movie-description">
                                <h3>{movie.Title}</h3>
                                <span className="remove"> <button onClick={() => handleRemoveWatchList(movie) }  ><FaTimes/> Remove</button> </span>
                        </div>
                        
                    </div>
                )) }
            </div>
        </div>
    );
}
 
export default MvWatchList;