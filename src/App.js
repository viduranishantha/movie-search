import { useState } from "react"

import MvSearch from './components/MvSearch'
import MvResult from './components/MvResults';
import MvDetails from './components/MvDetails';
import useFetch from './useFetch';

function App() {



const { data, isPending, error } = useFetch('?apikey=8f5e4dfc&s=lion')

const [currntMovie, setCurrentMoive] = useState(null);

const handleCurrentMovie = (id) => {
  console.log('handle current movie clicked')
  setCurrentMoive(id)
}

  return (
    <div className="App">
      <div className="main">
       {console.log (data)}
        
       <MvSearch/>
            { error && <div> {error}</div>}
            { isPending && <div> Loading...</div>}
            { data && 
            
            <div className="search-wrapper">
               <MvResult movies={data} handleCurrentMovie={handleCurrentMovie}/>
               <MvDetails currntMovie ={currntMovie}/>
            </div>

            }
            
      </div>
    </div>
  );
}

export default App;
