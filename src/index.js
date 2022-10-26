import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage/HomePage';
import SignInPage from './pages/SignInPage/SignInPage';
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign" element={<SignInPage />} />
    </Routes>
  </Router>
  //</React.StrictMode>
);