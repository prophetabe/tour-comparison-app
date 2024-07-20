import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './Gallery';
import './App.css';

function App() {
  const [tours, setTours] = useState([]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Gallery tours={tours} setTours={setTours} />} />
          {}
        </Routes>
      </div>
    </Router>
  );
}

export default App;