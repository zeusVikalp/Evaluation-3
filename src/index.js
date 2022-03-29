import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import {AuthContextsProvider} from "./Contexts/AuthContexts"

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
      <AuthContextsProvider>

         <App />
      </AuthContextsProvider>
      
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

