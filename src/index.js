import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './components/mainPage/mainPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
        <Route path="/" element = {<Main />}/>
          <Route path="/app" element = {<App />}/>    
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);



