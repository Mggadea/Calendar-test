import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calendar from './Calendar';
import Details from './components/Details'
import './App.css'; 
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Calendar />
     <Details />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
