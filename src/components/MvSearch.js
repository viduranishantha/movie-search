import { useEffect, useState ,useCallback } from "react";
import{FaSearch} from "react-icons/fa";
import YearSlider from "./YearSlider";
import debounce from 'lodash.debounce';



const MvSearch = (props) => {
    const handleSearchTerms = props.handleSearchTerms;
    // const handleMovieType = props.handleMovieType;

    const [keyWord, setKeyWord] = useState(null);
    const [movieType, setMovieType] = useState('');
    const [movieYear, setMovieYear] = useState(['',2010])

    useEffect(()=> {

        handleSearchTerms ({keyWord,movieType,movieYear})

    },[keyWord,movieType,movieYear])

    const debouncedWord = useCallback(
        debounce((word) => {
           setKeyWord (word)
        } , 100),[],
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
                    <input type="radio" value="" name="movie-type" checked={movieType===""} onChange={(e) => setMovieType(e.target.value)}/>  <label htmlFor="">Any</label>
                    <input type="radio" value="movie" name="movie-type" checked={movieType==="movie"} onChange={(e) => setMovieType(e.target.value)}/>  <label htmlFor="movie">Movies</label>
                    <input type="radio" value="series" name="movie-type" checked={movieType==="series"} onChange={(e) => setMovieType(e.target.value)}/>  <label htmlFor="series">Series</label>
                    <input type="radio" value="episode" name="movie-type" checked={movieType==="episode"} onChange={(e) => setMovieType(e.target.value)}/>  <label htmlFor="episode">Episodes</label>
                </div>
            </div>
        </div>
    );
}
 
export default MvSearch;