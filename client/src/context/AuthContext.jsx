import React, { createContext, useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  signInSuccess, 
  signOutSuccess, 
  signOutStart, 
  signOutFailure 
} from '../redux/userSlice';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { tokenExpiration } = useSelector(state => state.user);
  
  // Check authentication status on app load
  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/auth/check-auth', {
          credentials: 'include' // Important to include cookies
        });
        
        const data = await res.json();
        
        if (data.isAuthenticated) {
          dispatch(signInSuccess(data.user));
        } else {
          dispatch(signOutSuccess());
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        dispatch(signOutSuccess());
      } finally {
        setLoading(false);
      }
    };
    
    verifyAuth();
  }, [dispatch]);
  
  // Set up token refresh before expiration
  useEffect(() => {
    if (!tokenExpiration) return;
    
    const expirationTime = new Date(tokenExpiration).getTime();
    const currentTime = new Date().getTime();
    
    // Calculate time until token expires (minus 5 minutes buffer)
    const timeUntilExpiration = expirationTime - currentTime - (5 * 60 * 1000);
    
    // Set up refresh timer if token will expire in the future
    if (timeUntilExpiration > 0) {
      const refreshTimer = setTimeout(() => {
        refreshSession();
      }, timeUntilExpiration);
      
      return () => clearTimeout(refreshTimer);
    }
  }, [tokenExpiration]);
  
  // Function to refresh token
  const refreshSession = async () => {
    try {
      dispatch(signOutStart());
      const res = await fetch('http://localhost:3000/api/auth/refresh-token', {
        credentials: 'include'
      });
      
      const data = await res.json();
      
      if (res.ok) {
        dispatch(signInSuccess(data));
        return true;
      } else {
        dispatch(signOutSuccess());
        return false;
      }
    } catch (error) {
      console.error('Token refresh failed:', error);
      dispatch(signOutFailure(error.message));
      return false;
    }
  };
  
  return (
    <AuthContext.Provider value={{ loading, refreshSession }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);