import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// importing styling
import './styles/main.scss';
import './styles/detail.scss';
import './styles/search.scss';
import './styles/searchResults.scss';
import './styles/watchList.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
