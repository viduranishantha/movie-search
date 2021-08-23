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
            if(request.data.Response === 'False'){
                setError(request.data.Error)
                setData([]);
            }else{
                if(request.data){
                    setError ('')
                    setData(request.data);
                }
            }
            setIsPending(false);

            } catch (error) {
                setError('error requesting data')
            }
        }
        fetchMovies();
       
    }, [url])

    return { data, isPending, error };
}

export default useFetch