import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage'; // Import the ContactPage
import Navbar from './component/Navbar/Navbar'; // Import the Navbar component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar is now included here */}
        <div className="App-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
