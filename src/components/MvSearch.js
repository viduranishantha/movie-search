import { useEffect, useState } from "react";
import{FaSearch} from "react-icons/fa";
import YearSlider from "./YearSlider";



const MvSearch = (props) => {
    const handleSearchTerms = props.handleSearchTerms;
    // const handleMovieType = props.handleMovieType;

    const [keyWord, setKeyWord] = useState(null);
    const [movieType, setMovieType] = useState('');
    const [minYear, setMinYear] = useState(1990);
    const [maxYear, setMaxYear] = useState(2010);

    useEffect(()=> {

        handleSearchTerms ({keyWord,movieType})

    },[keyWord,movieType])

    return ( 
        <div className="search-container"> 
            <div className="search-word">
                <FaSearch color="white" fontSize="20"/>
                <input
                className="search-wording-input"
                    type="text"
                    placeholder="Enter search term"
                    name="search-term"
                    value={props.value}                  
                    onChange={(e) => setKeyWord(e.target.value)}

                />
            </div>
            
            <div className="search-year">
                <label>Year</label>
                <YearSlider minYear={minYear} maxYear={maxYear} />
            </div>

            <div className="search-type">
                <label>Type</label>
                <div className="radio-container">
                    <input type="radio" value="" name="movie-type" checked={movieType===""} onChange={(e) => setMovieType(e.target.value)}/> Any
                    <input type="radio" value="movie" name="movie-type" checked={movieType==="movie"} onChange={(e) => setMovieType(e.target.value)}/> Movies
                    <input type="radio" value="series" name="movie-type" checked={movieType==="series"} onChange={(e) => setMovieType(e.target.value)}/> Series
                    <input type="radio" value="episode" name="movie-type" checked={movieType==="episode"} onChange={(e) => setMovieType(e.target.value)}/> Episodes
                </div>
            </div>
        </div>
    );
}
 
export default MvSearch;