import { useEffect, useState ,useMemo } from "react";
import{FaSearch} from "react-icons/fa";
import YearSlider from "./YearSlider";
import debounce from 'lodash.debounce';

const MvSearch = (props) => {
    const handleSearchTerms = props.handleSearchTerms;

    const [keyWord, setKeyWord] = useState('star wars');
    const [movieType, setMovieType] = useState('');
    const [movieYear, setMovieYear] = useState(['',2010])

    useEffect(()=> {
        handleSearchTerms ({keyWord,movieType,movieYear})

    },[keyWord,movieType,movieYear,handleSearchTerms])

    const handleKeyWordSet = (word) => {
        setKeyWord (word)
    }

    const debouncedWord = useMemo( 
        () => debounce(handleKeyWordSet, 300),[]
    );


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
                        onChange={(e) => debouncedWord(e.target.value)}

                    />
            </div>
            
            <div className="search-year">
             <YearSlider handleYear={setMovieYear} />
            </div>

            <div className="search-type">
                <label>Type</label>
                <div className="radio-container">
                    <input type="radio" id="any" value="" name="movie-type" checked={movieType===""} onChange={(e) => setMovieType(e.target.value)}/>  <label htmlFor="any">Any</label>
                    <input type="radio" id="movie" value="movie" name="movie-type" checked={movieType==="movie"} onChange={(e) => setMovieType(e.target.value)}/>  <label htmlFor="movie">Movies</label>
                    <input type="radio" id="series" value="series" name="movie-type" checked={movieType==="series"} onChange={(e) => setMovieType(e.target.value)}/>  <label htmlFor="series">Series</label>
                    <input type="radio" id="episode" value="episode" name="movie-type" checked={movieType==="episode"} onChange={(e) => setMovieType(e.target.value)}/>  <label htmlFor="episode">Episodes</label>
                </div>
            </div>
        </div>
    );
}
 
export default MvSearch;