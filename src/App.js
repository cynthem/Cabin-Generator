import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home/home';
import Results from './components/results/results';

function App() {
  const [weekend, setWeekend] = useState('');
  const handleWeekendChange = (weekend) => {
    setWeekend(weekend);
  }
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<><Home weekend={weekend} onChange={handleWeekendChange} /><Link to="/results">Click here to see your results!</Link></>} />
          <Route path="/results" element={<><Results /><Link to="/">Click here to start over.</Link></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
