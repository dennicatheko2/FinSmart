import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Notifications from './components/Notification';
import LoanApplications from './components/LoanApplications';
import AgreementTemplates from './components/AgreementTemplates';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/loan-applications" element={<LoanApplications />} />
        <Route path="/agreement-templates" element={<AgreementTemplates />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
