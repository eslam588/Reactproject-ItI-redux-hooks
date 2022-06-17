import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import myStore from "./redux/store/store"
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
       <Provider store={myStore}>
         <App />
       </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

