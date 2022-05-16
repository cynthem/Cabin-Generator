import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WeekendChoice from './components/choices/weekendChoice';
import RegionChoice from './components/choices/regionChoice';
import Results from './components/results/results';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<><WeekendChoice /><Link to="/regions">Click to continue</Link></>} />
          <Route exact path="/regions" element={<><RegionChoice /><Link to="/results">View your results!</Link></>} />
          <Route path="/results" element={<><Results /><Link to="/">Click here to start over.</Link></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
