import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Assuming you have a custom hook for authentication

const PrivateRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth(); // Check if user is authenticated

  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Navigate to="/login" replace />}
    />
  );
};

// Define PropTypes for PrivateRoute
PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired, // Validate that `element` is a React element and is required
};

export default PrivateRoute;
