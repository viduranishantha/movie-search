import { useEffect , useState } from "react"
import axios from "./axios";

const useFetch = url => {

const[data, setData] = useState(null);
const[isPending , setIsPending] = useState(false);
const[error, setError] = useState(null);

    useEffect(() => {       
        async function fetchMovies() {
            try {
            setIsPending(true);
            const request = await axios.get(url);
            console.log (request.data);
            if(request.data){
                setData(request.data);
            }
            setIsPending(false);

            } catch (error) {
                setError(error.message)
            }
           
        }
        fetchMovies();
       
    }, [url])

    console.log (data);
    return { data, isPending, error };
}



export default useFetch