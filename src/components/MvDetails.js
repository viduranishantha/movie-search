import useFetch from '../useFetch'
const MvDetails = ({currntMovie}) => {
    
   const { data, isPending, error } = useFetch('?apikey=8f5e4dfc&i='+currntMovie)


   

    return ( 
    <div className="movie-detials">
        <h2>Movies details {currntMovie}</h2>
            { error && <div> {error}</div>}
            { isPending && <div> Loading...</div>}
            
            { data && 
            <>
                <div className="movie-main-info-container">
                    <div className="movie-thumb"> <img src={data.Poster} alt={data.Title}/> </div>
                    <div className="movie-details-discription">
                        <h3>{data.Title}</h3>
                        <span> {data.Year} </span>
                    </div>
                </div>
                <div className="movie-story-container">
                       {data.Plot}
                </div>
                <div className="movie-ratings">

                    {/* {data && data.Ratings.map((rating) => (
                        <div className="movie-rating-container" >
                            <span className="rating-value">
                                {rating.Value}
                            </span>
                            <span className="rating-source">
                                {rating.Source}
                            </span>
                        </div>
                   ))

                   } */}
                </div>
             </>

            }

    </div>

     );
}
 
export default MvDetails;