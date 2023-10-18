import React from 'react';

const DataValidation = ({ validationErrors }) => {
  return (
    <div className="validation-section">
      <h2>Data Validation Errors</h2>
      {validationErrors.length > 0 ? (
        <ul>
          {validationErrors.map((error, index) => (
            <li key={index}>{error.message}</li>
          ))}
        </ul>
      ) : (
        <p>No validation errors found.</p>
      )}
    </div>
  );
};

export default DataValidation;
