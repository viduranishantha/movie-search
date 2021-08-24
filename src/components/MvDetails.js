import useFetch from '../useFetch'
import { ThreeDots } from 'react-loading-icons'
import{FaTimes} from "react-icons/fa";

const MvDetails = ({
    currentMovie,
    addWatchList,
    handleAddWatchList,
    noImage,
    handleDetailClose,
    mobileDetailActive}) => {
    
   const { data:movie, isPending, error } = useFetch(`?apikey=${process.env.REACT_APP_OMDG_API_KEY}&i=${currentMovie}`)
   const AddWatchList =  addWatchList

    return ( 
    <div className={`movie-details ${mobileDetailActive ? 'active' :''}` }>
        <div className="mobile-header">
            <div className="close-button" onClick={()=> handleDetailClose(false)}> <FaTimes fontSize='25px' fontWeight='400'/> </div>
        </div>
        { error && <div className="error-container"> {error}</div>}
        { isPending && <div className="loading">Item Loading <ThreeDots  stroke="#666" height="150"/></div>}
        
        { movie && 
        <>
            <div className='movie-main-info-container' >
                <div className="movie-thumb"> <img src=
                { (movie.Poster === 'N/A') ?  `${noImage}` :  `${movie.Poster}`}
                alt={movie.Title}/> </div>
                <div className="movie-details-description">
                    <div className="watch-list-container" onClick={() => handleAddWatchList(movie) } >
                        <AddWatchList/>
                    </div>
                    <h3>{movie.Title}</h3>
                    <div className="extra-info">
                        <div className="extra-info-wrap">
                            {movie.Rated === 'N/A' ?  `` : <div className='rated'>{movie.Rated} </div>}                          
                             {movie.Year} {movie.Genre} {movie.Runtime}
                        </div> 
                        
                        <div className="actors">{movie.Actors}</div>
                        
                     </div>
                </div>
            </div>
            {/* load the Plot content only if the content available */}
            { movie.Plot === 'N/A' ? `` : 
                <div className="movie-story-container">
                        {movie.Plot}
                </div>
            }
            
            <div className="movie-ratings">

                {movie.Ratings && movie.Ratings.map((rating) => (
                    <div className="movie-rating-container" key={rating.index}>
                        <span className="rating-value">
                            {rating.Value}
                        </span>
                        <span className="rating-source">
                            {rating.Source}
                        </span>
                    </div>
                ))

                }
            </div>
        </>

        }

    </div>

     );
}
 
export default MvDetails;