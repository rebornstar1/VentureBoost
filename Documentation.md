# Session Management API Documentation

This document outlines the API endpoints for testing and implementing session management in your application.

## Base URL

```
http://localhost:3000
```

## Authentication Endpoints

### 1. User Registration

Register a new user in the system.

- **URL**: `/api/auth/signup`
- **Method**: `POST`
- **Content-Type**: `application/json`
- **Request Body**:
  ```json
  {
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123"
  }
  ```
- **Success Response**:
  - **Code**: 201
  - **Content**: `"User Created Successfully!"`
- **Error Response**:
  - **Code**: 400/500
  - **Content**: 
    ```json
    {
      "success": false,
      "statusCode": 400,
      "message": "Error message"
    }
    ```
- **Notes**: This endpoint doesn't automatically log in the user after registration.

### 2. User Login

Authenticate a user and create a session with JWT.

- **URL**: `/api/auth/signin`
- **Method**: `POST`
- **Content-Type**: `application/json`
- **Request Body**:
  ```json
  {
    "email": "test@example.com",
    "password": "password123"
  }
  ```
- **Success Response**:
  - **Code**: 200
  - **Content**: 
    ```json
    {
      "_id": "user_id",
      "username": "testuser",
      "email": "test@example.com",
      "avatar": "avatar_url",
      "tokenExpiration": "2023-05-01T12:00:00.000Z"
    }
    ```
  - **Set-Cookie**: `access_token=jwt_token; Path=/; HttpOnly; Expires=expiration_date`
- **Error Response**:
  - **Code**: 401/404
  - **Content**: 
    ```json
    {
      "success": false,
      "statusCode": 401,
      "message": "Wrong Credentials"
    }
    ```
- **Notes**: This endpoint sets a HTTP-only cookie with the JWT token.

### 3. Check Authentication Status

Verify if a user is currently authenticated.

- **URL**: `/api/auth/check-auth`
- **Method**: `GET`
- **Headers**: None required (cookie is sent automatically)
- **Success Response**:
  - **Code**: 200
  - **Content** (authenticated): 
    ```json
    {
      "isAuthenticated": true,
      "user": {
        "_id": "user_id",
        "username": "testuser",
        "email": "test@example.com",
        "avatar": "avatar_url"
      }
    }
    ```
  - **Content** (not authenticated): 
    ```json
    {
      "isAuthenticated": false
    }
    ```
- **Notes**: Use this endpoint to check if a user's session is still valid.

### 4. Refresh Token

Extend the user's session by refreshing their token.

- **URL**: `/api/auth/refresh-token`
- **Method**: `GET`
- **Headers**: None required (cookie is sent automatically)
- **Success Response**:
  - **Code**: 200
  - **Content**: 
    ```json
    {
      "_id": "user_id",
      "username": "testuser",
      "email": "test@example.com",
      "avatar": "avatar_url",
      "tokenExpiration": "2023-05-08T12:00:00.000Z"
    }
    ```
  - **Set-Cookie**: New `access_token` with extended expiration
- **Error Response**:
  - **Code**: 401/403
  - **Content**: 
    ```json
    {
      "success": false,
      "statusCode": 401,
      "message": "Session expired - Please login again"
    }
    ```
- **Notes**: Call this endpoint to refresh the token before it expires.

### 5. User Logout

End the user's session.

- **URL**: `/api/user/signout`
- **Method**: `POST`
- **Headers**: None required (cookie is sent automatically)
- **Success Response**:
  - **Code**: 201
  - **Content**: `"User Logout Successfully!"`
  - **Set-Cookie**: Clears the `access_token` cookie
- **Notes**: This endpoint invalidates the session by clearing the cookie.

### 6. Google Authentication

Authenticate a user using Google credentials.

- **URL**: `/api/auth/google`
- **Method**: `POST`
- **Content-Type**: `application/json`
- **Request Body**:
  ```json
  {
    "name": "User Name",
    "email": "user@gmail.com",
    "photo": "photo_url"
  }
  ```
- **Success Response**:
  - **Code**: 200
  - **Content**: User data object
  - **Set-Cookie**: `access_token=jwt_token; Path=/; HttpOnly`
- **Notes**: This endpoint handles both login and registration with Google.

## User Management Endpoints

### 1. Update User Profile

Update the authenticated user's profile information.

- **URL**: `/api/user/updateuser`
- **Method**: `PUT`
- **Content-Type**: `application/json`
- **Headers**: None required (cookie is sent automatically)
- **Request Body**:
  ```json
  {
    "username": "newusername",
    "email": "current@example.com",
    "password": "current_password",
    "avatar": "new_avatar_url"
  }
  ```
- **Success Response**:
  - **Code**: 201
  - **Content**: `"User Updated Successfully!"`
- **Error Response**:
  - **Code**: 401
  - **Content**: 
    ```json
    {
      "success": false,
      "statusCode": 401,
      "message": "Wrong Credentials"
    }
    ```
- **Notes**: Requires current password for verification.

### 2. Delete User Account

Delete the authenticated user's account.

- **URL**: `/api/user/deleteuser`
- **Method**: `DELETE`
- **Content-Type**: `application/json`
- **Headers**: None required (cookie is sent automatically)
- **Request Body**:
  ```json
  {
    "username": "username",
    "email": "email@example.com",
    "password": "password"
  }
  ```
- **Success Response**:
  - **Code**: 201
  - **Content**: `"User Deleted Successfully!"`
  - **Set-Cookie**: Clears the `access_token` cookie
- **Notes**: This endpoint permanently deletes the user account.

## Testing the Session Management

### Using Postman

1. **Testing Login and Sessions**:
   - Make a POST request to `/api/auth/signin`
   - In the "Tests" tab, add this code to save the cookie:
     ```javascript
     if (pm.response.code === 200) {
       pm.environment.set("authCookie", pm.cookies.get("access_token"));
     }
     ```
   - For subsequent authenticated requests, go to the "Headers" tab and add:
     ```
     Cookie: access_token={{authCookie}}
     ```

2. **Testing Session Expiration**:
   - Login to get a token
   - Wait until close to token expiration (or manually expire it)
   - Make a GET request to `/api/auth/check-auth` to verify expiration
   - Make a GET request to `/api/auth/refresh-token` to refresh

### Using cURL

1. **Login**:
   ```bash
   curl -X POST http://localhost:3000/api/auth/signin \
     -H "Content-Type: application/json" \
     -d '{"email":"test@example.com","password":"password123"}' \
     -c cookies.txt
   ```

2. **Use the session**:
   ```bash
   curl -X GET http://localhost:3000/api/auth/check-auth \
     -b cookies.txt
   ```

3. **Refresh token**:
   ```bash
   curl -X GET http://localhost:3000/api/auth/refresh-token \
     -b cookies.txt \
     -c cookies.txt
   ```

4. **Logout**:
   ```bash
   curl -X POST http://localhost:3000/api/user/signout \
     -b cookies.txt
   ```

## Update Route Structure

You need to update your route files to include the new endpoints for session management:

### auth routes (signuproute.js)

```javascript
import express from "express";
import { 
  Signup, 
  Signin, 
  Authgoogle, 
  Signout, 
  refreshToken, 
  checkAuth 
} from "../controllers/authcontroller.js";

const router = express.Router();

router.post('/signup', Signup);
router.post('/signin', Signin);
router.post('/google', Authgoogle);
router.post('/signout', Signout);

// New session management routes
router.get('/refresh-token', refreshToken);
router.get('/check-auth', checkAuth);

export default router;
```

## Middleware Implementation

To protect routes that require authentication, use the verifyToken middleware:

```javascript
// utils/verifyUser.js
import jwt from 'jsonwebtoken';
import maerr from './error.js';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  
  if (!token) return next(maerr(401, 'Unauthorized - No token provided'));
  
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return next(maerr(403, 'Unauthorized - Invalid token'));
    
    req.user = { id: decoded.id };
    next();
  });
};
```

Then apply it to protected routes:

```javascript
router.put('/updateuser', verifyToken, Updateuser);
router.delete('/deleteuser', verifyToken, Deleteuser);
```

## CORS Configuration

For cross-origin requests with credentials, update your CORS config:

```javascript
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true
}));
```

This allows the frontend to send and receive cookies across origins.