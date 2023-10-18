// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';

const App = () => {
  // const [complianceStatus, setComplianceStatus] = useState(null);

  // useEffect(() => {
  //   // Fetch compliance status data here if needed
  // }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        {/* Add more routes for other components */}
      </Routes>
    </Router>
  );
};

export default App;
