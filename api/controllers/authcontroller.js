import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import maerr from '../utils/error.js';

/**
 * User registration
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
export const Signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword
    });
    
    await newUser.validate();
    return res.status(201).json("User Created Successfully!");
  } catch (error) {
    next(error);
  }
};

/**
 * User login
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
export const Signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    const validUser = await User.findOne({ email });
    if (!validUser) return next(maerr(404, 'User Not Found'));
    
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(maerr(401, 'Wrong Credentials'));
    
    // Create JWT token with expiration (e.g., 7 days)
    const token = jwt.sign(
      { id: validUser._id }, 
      process.env.JWT_SECRET,
      { expiresIn: '7d' } // Set token expiration time
    );
    
    // Remove password from response
    const { password: pass, ...userData } = validUser._doc;
    
    // Set cookie with expiration matching the token
    res
      .cookie('access_token', token, { 
        httpOnly: true,
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
        secure: process.env.NODE_ENV === 'production', // Only use HTTPS in production
        sameSite: 'strict' // CSRF protection
      })
      .status(200)
      .json({
        ...userData,
        // Send token expiration to frontend
        tokenExpiration: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      });
  } catch (error) {
    next(error);
  }
};

// Refresh token Management Endpoint
export const refreshToken = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    
    if (!token) return next(maerr(401, 'Unauthorized - Please login'));
    
    // Verify existing token
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        // Clear invalid token
        if (err.name === 'TokenExpiredError') {
          res.clearCookie('access_token');
          return next(maerr(401, 'Session expired - Please login again'));
        }
        return next(maerr(403, 'Unauthorized - Invalid token'));
      }
      
      // Get fresh user data
      const user = await User.findById(decoded.id);
      if (!user) return next(maerr(404, 'User not found'));
      
      // Create new token
      const newToken = jwt.sign(
        { id: user._id }, 
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
      );
      
      // Remove password from response
      const { password, ...userData } = user._doc;
      
      // Set new cookie
      res
        .cookie('access_token', newToken, { 
          httpOnly: true,
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict'
        })
        .status(200)
        .json({
          ...userData,
          tokenExpiration: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        });
    });
  } catch (error) {
    next(error);
  }
};

// checkAuth Endpoint to test the verify session Status
export const checkAuth = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) return res.status(200).json({ isAuthenticated: false });
    
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        res.clearCookie('access_token');
        return res.status(200).json({ isAuthenticated: false });
      }
      
      const user = await User.findById(decoded.id);
      if (!user) {
        res.clearCookie('access_token');
        return res.status(200).json({ isAuthenticated: false });
      }
      
      const { password, ...userData } = user._doc;
      return res.status(200).json({ 
        isAuthenticated: true,
        user: userData
      });
    });
  } catch (error) {
    return res.status(200).json({ isAuthenticated: false });
  }
};

/**
 * Google authentication
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
export const Authgoogle = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(req.body);
    
    if (user) {
      // User exists, create and send token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: pass, ...userData } = user._doc;
      
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(userData);
    } else {
      // Create new user with Google data
      const generatedPassword = Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      
      const newUser = new User({
        username: req.body.name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-4),
        email: req.body.email,
        password: hashedPassword,
        avatar: req.body.photo
      });
      
      await newUser.save();
      
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...userData } = newUser._doc;
      
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(userData);
    }
  } catch (error) {
    next(error);
  }
};

/**
 * Update user profile
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
export const Updateuser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const prevPassword = user.password;
    
    console.log(prevPassword);
    console.log(req.body.password);
    
    bcrypt.compare(req.body.password, prevPassword, async function(err, result) {
      if (err) {
        console.log("Password Matching Error");
        return;
      }
      
      console.log(result);
      
      if (result) {
        console.log("User Updated Successfully");
        await User.findByIdAndUpdate(
          user.id,
          {
            username: req.body.username,
            email: req.body.email,
            password: prevPassword,
            avatar: req.body.avatar
          },
          { new: true }
        );
        
        return res.status(201).json("User Updated Successfully!");
      } else {
        return next(maerr(401, 'Wrong Credentials'));
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * User logout
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
export const SignOutUser = async (req, res, next) => {
  try {
    res.clearCookie('access_token');
    return res.status(201).json("User Logout Successfully!");
  } catch (error) {
    console.log(error);
    next(error);
  }
};

/**
 * Delete user account
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
export const Deleteuser = async (req, res, next) => {
  try {
    console.log(req.body);
    const user = await User.findOne({ email: req.body.email });
    
    await User.findOneAndDelete({ email: req.body.email });
    res.clearCookie('access_token');
    return res.status(201).json("User Deleted Successfully!");
  } catch (error) {
    next(error);
  }
};

/**
 * Empty signout function (appears to be duplicate of SignOutUser)
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
export const Signout = async (req, res, next) => {
  try {
    // Empty implementation - consider removing or implementing
  } catch (error) {
    next(error);
  }
};