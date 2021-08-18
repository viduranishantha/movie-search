import { useEffect, useState } from "react";

const MvSearch = (props) => {
    const handleSearchTerms = props.handleSearchTerms;
    // const handleMovieType = props.handleMovieType;

    const [keyWord, setKeyWord] = useState(null);
    const [movieType, setMovieType] = useState('');

    useEffect(()=> {
        
        handleSearchTerms ({keyWord,movieType})

    },[keyWord,movieType])

    return ( 
        <div className="search-container"> 
            <div className="search-term">
                <input
                    type="text"
                    placeholder="Enter search term"
                    name="search-term"
                    value={props.value}                  
                    // onChange={(e) => handleSearchTerm(e.target.value)}
                    onChange={(e) => setKeyWord(e.target.value)}

                />
            </div>
            
            <div className="search-year">
                slider
            </div>
            <div className="search-type">
                <input type="radio" value="" name="movie-type" checked={movieType===""} onChange={(e) => setMovieType(e.target.value)}/> Any
                <input type="radio" value="movie" name="movie-type" checked={movieType==="movie"} onChange={(e) => setMovieType(e.target.value)}/> Movies
                <input type="radio" value="series" name="movie-type" checked={movieType==="series"} onChange={(e) => setMovieType(e.target.value)}/> Series
                <input type="radio" value="episode" name="movie-type" checked={movieType==="episode"} onChange={(e) => setMovieType(e.target.value)}/> Episodes
            </div>
            <div> search filter values= {keyWord} , type = {movieType}</div> 
        </div>
    );
}
 
export default MvSearch;