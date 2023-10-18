import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'; 

const Notification = ({ type, message }) => {
  return (
    <div className={`notification ${type}`}>
      {message}
    </div>
  );
};

Notification.propTypes = {
  type: PropTypes.oneOf(['success', 'error']).isRequired,
  message: PropTypes.string.isRequired,
};

export default Notification;
