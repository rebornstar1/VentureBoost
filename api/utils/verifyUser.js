import jwt from 'jsonwebtoken';
import maerr from '../utils/error.js';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  
  if (!token) return next(maerr(401, 'Unauthorized - No token provided'));
  
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      // Handle token expiration specially
      if (err.name === 'TokenExpiredError') {
        return next(maerr(401, 'Session expired - Please login again'));
      }
      return next(maerr(403, 'Unauthorized - Invalid token'));
    }
    
    req.user = { id: decoded.id };
    next();
  });
};