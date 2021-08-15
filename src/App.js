import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import MainContent from './components/MainContent'

function App() {
  return (
    <div className="App">
      <div className="main">
          <SiteHeader/>
          <MainContent/>
          <SiteFooter/>
      </div>
    </div>
  );
}

export default App;
