/* eslint-disable react/prop-types */
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Element, ...rest }) => {
  // Check if the user is authenticated (you need to implement your own authentication check here)
  const isAuthenticated = true; // Implement your authentication logic here

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Element /> : <Navigate to="/login" />}
    />
  );
};

export default ProtectedRoute;
