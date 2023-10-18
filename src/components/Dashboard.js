import React, { useState, useEffect } from 'react';
import './styles.css';
import DataValidation from './DataValidation';
import ReportSubmissionForm from './ReportSubmissionForm';
import Notification from './Notification';
import { fetchRealTimeData } from './api'; 
import { fetchValidationErrors } from './api';

const Dashboard = () => {

  const hardcodedReportData = {
    "SA ID Number": "9806050987090",
    "Non-SA ID Number / Passport": null,
    "Gender": "Male",
    "Date of Birth": "1990-01-15",
    "Surname": "Theko",
    "Title": "Mr.",
    "Forenames or initials": "D",
    "Residential address": "123 Main St",
    "Postal address": "P.O. Box 456",
    "Ownership type (residence)": "Owned",
    "Home phone number": "011-456-7890",
    "Cell phone number": "012-654-3210",
    "Work phone number": "023-555-5555",
    "Employer details": "Acme Inc",
    "Branch code": "1234",
    "Account number": "7890123456",
    "Sub account number": "123",
    "Payment type": "Credit Card",
    "Type of account": "Savings",
    "Date account opened": "2023-01-01",
    "Date of last payment": "2023-09-15",
    "Opening balance / credit limit": 5000.00,
    "Current balance": 2500.00,
    "Instalment amount": 200.00,
    "Terms": "24 months",
    "Amount overdue": 0.00,
    "Months in arrears": 0
  };

  const [realTimeData, setRealTimeData] = useState([]);
  const [validationErrors, setValidationErrors] = useState([]);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    // Fetch validation errors from the server
    
    api.fetchData() // Access the fetchData method from the imported api object
    .then(errors => setValidationErrors(errors))
    .catch(error => console.error('Error fetching validation errors:', error));
  }, []); 

  useEffect(() => {
    // Fetch real-time data from the server
    api.postData() // Access the postData method from the imported api object
      .then(data => setRealTimeData(data))
      .catch(error => setNotification({ type: 'error', message: error.message }));
  }, []); // Fetch data on component mount

  const handleSubmit = (formData) => {
    
    //API call to submit the data
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div>
      {notification && <Notification type={notification.type} message={notification.message} />}
      <h1>Real-Time Reporting Dashboard</h1>
      <DataValidation validationErrors={validationErrors} />
      <ReportSubmissionForm onSubmit={handleSubmit} initialData={hardcodedReportData} />
      {/* Display real-time data */}
      
      <ul>
        {realTimeData.map(item => (
          <li key={item.id}>{item.name}: {item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
