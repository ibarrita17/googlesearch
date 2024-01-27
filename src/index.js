import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import  { ResultContextProvider } from "./contexts/ResultContextProvider";
//call the app 
ReactDOM.render(
    
     <Router>
            <App />
        </Router>
   
   
    


, document.getElementById('root'));