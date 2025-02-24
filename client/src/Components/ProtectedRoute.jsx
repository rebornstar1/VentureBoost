// src/Components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext'; // Make sure path is correct
import React from 'react';

function ProtectedRoute({ children }) {
  const { currentUser } = useSelector((state) => state.user);
  
  // Use optional chaining to safely access loading
  const auth = useAuth();
  const isLoading = auth?.loading || false;
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  
  if (!currentUser) {
    return <Navigate to="/signin" />;
  }
  
  return children;
}

export default ProtectedRoute;