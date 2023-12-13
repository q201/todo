import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  Data from './FetchData';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'; // Import your Redux store here

import 'react-bootstrap/dist/react-bootstrap.min.js';    
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
    <Provider store={store}>
      <Data/>
      <App />
  </Provider>
 
);