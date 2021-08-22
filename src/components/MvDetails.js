import useFetch from '../useFetch'
import { ThreeDots } from 'react-loading-icons'
const MvDetails = ({currntMovie,addWatchList,handleAddWatchList}) => {
    
   const { data, isPending, error } = useFetch('?apikey=8f5e4dfc&i='+currntMovie)
   const AddWatchList =  addWatchList

    return ( 
    <div className="movie-detials">
        { error && <div> {error}</div>}
        { isPending && <div className="loading">Item Loading <ThreeDots  stroke="#666" height="150"/></div>}
        
        { data && 
        <>
            <div className="movie-main-info-container">
                <div className="movie-thumb"> <img src={data.Poster} alt={data.Title}/> </div>
                <div className="movie-details-discription">
                    <div className="watchlist-container" onClick={() => handleAddWatchList(data) } >
                        <AddWatchList/>
                    </div>
                    <h3>{data.Title}</h3>
                    <div className="extra-info">
                        <div className="extra-info-wrap">
                            <div className='rated'>{data.Rated} </div>{data.Year} {data.Genre} {data.Runtime}
                        </div> 
                        
                        <div className="actors">{data.Actors}</div>
                        
                     </div>
                </div>
            </div>
            <div className="movie-story-container">
                    {data.Plot}
            </div>
            <div className="movie-ratings">

                {data.Ratings && data.Ratings.map((rating) => (
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