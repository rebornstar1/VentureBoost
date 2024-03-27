import jwt from 'jsonwebtoken';
import maerr from './error.js';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return next(maerr(401, 'Unauthorized'));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(maerr(403, 'Forbidden'));

    req.user = user;
    next();
  });
};