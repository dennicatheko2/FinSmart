import React, { useState } from 'react';

const ReportSubmissionForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="report-form">
      <h2>Report Submission Form</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(initialData).map((field, index) => (
          <div className="form-group" key={index}>
            <label htmlFor={field}>{field}:</label>
            <input
              type="text"
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleInputChange}
              required
            />
          </div>
        ))}
        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default ReportSubmissionForm;
