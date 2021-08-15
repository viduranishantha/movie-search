import MvDetails from "./MvDetails";
import MvResult from "./MvResults";
import MvSearch from "./MvSearch";

const MainContent = () => {
    return (
        <div className="main-content"> 
            <MvSearch/>
             {/* to be useed this for api request{process.env.REACT_APP_OMDG_API_KEY} */}
            <div className="search-wrapper">
                <MvResult/>
                <MvDetails/>
            </div>
        </div>
      );
}
 
export default MainContent;