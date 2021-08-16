import MvSearch from './components/MvSearch'
import MvResult from './components/MvResults';
import MvDetails from './components/MvDetails';
import useFetch from './useFetch';

function App() {

 const { data, isPending, error } = useFetch('?s=lion&apikey=8f5e4dfc')

  return (
    <div className="App">
      <div className="main">
       {console.log (data)}
        
       <MvSearch/>
            { error && <div> {error}</div>}
            { isPending && <div> Loading...</div>}
            { data && 
            
            <div className="search-wrapper">
               <MvResult movies={data} />
               <MvDetails/>
            </div>

            }
            
      </div>
    </div>
  );
}

export default App;
