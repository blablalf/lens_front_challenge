import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import ExplorePublications from './components/ExplorePublications/ExplorePublications';
import LensProfile from './components/LensProfile/LensProfile';
import LensPublication from './components/LensPublication/LensPublication';
import reportWebVitals from './reportWebVitals';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <nav className='main-menu'>
        <Link to={'/home'}>
          Explore publications
        </Link>
      </nav>
      <Routes>
        <Route path="/home" element={<ExplorePublications/>} />
        <Route path="/publication/:id" element={<LensPublication/>} />
        <Route path="/user/:username" element={<LensProfile/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
