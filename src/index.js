import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import ExplorePublications from './components/ExplorePublications';
import LensPublication from './components/LensPublication';
import reportWebVitals from './reportWebVitals';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <nav>
        <ul>
          <li><Link to={'/'} className="nav-link">/</Link></li>
          <li><Link to={'/home'} className="nav-link">Home</Link></li>
          <li><Link to={'/publication'} className="nav-link">Publication</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<ExplorePublications/>} />
        <Route path="/publication/:id" element={<LensPublication/>} /> 
      </Routes>
    </Router>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
