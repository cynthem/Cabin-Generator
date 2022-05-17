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
          <Route exact path="/" element={<WeekendChoice weekend={weekend} handleWeekendChange={handleWeekendChange} />} />
          <Route exact path="/regions" element={<RegionChoice region={region} handleRegionChange={handleRegionChange} />} />
          <Route path="/results" element={<Results weekend={weekend} region={region} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
