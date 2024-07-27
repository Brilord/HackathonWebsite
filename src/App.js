import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage'; // Import the ContactPage
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        
        <div className="App-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} /> {/* Add the route for ContactPage */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
