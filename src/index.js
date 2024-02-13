import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './components/mainPage/mainPage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
        <Route path="/" element = {<Main />}/>
        <Route path="/SignIn" element={<Login />} />
        <Route path="/SignUp" element={<Register/>} />
        <Route path="/app" element = {<App />}/>    
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);



