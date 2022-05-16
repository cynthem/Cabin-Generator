import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WeekendChoice from './components/choices/weekendChoice';
import RegionChoice from './components/choices/regionChoice';
import Results from './components/results/results';

function App() {
  const [weekend, setWeekend] = useState('');
  const handleWeekendChange = (event) => {
    setWeekend(event.target.value);
  }
  const [region, setRegion] = useState('');
  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  }
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<><WeekendChoice weekend={weekend} handleWeekendChange={handleWeekendChange} /><Link to="/regions">Click to continue</Link></>} />
          <Route exact path="/regions" element={<><RegionChoice region={region} handleRegionChange={handleRegionChange} /><Link to="/results">View your results!</Link></>} />
          <Route path="/results" element={<><Results weekend={weekend} region={region} /><Link to="/">Click here to start over.</Link></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
