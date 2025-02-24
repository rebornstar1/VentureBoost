import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import React from "react";
import {
  deleteUserStart,
  deleteUserFailure,
  deleteUserSuccess,
  updateUserStart,
  updateUserFailure,
  updateUserSuccess,
  signOutFailure,
  signOutStart,
  signOutSuccess
} from "../redux/userSlice.js";
import { useDispatch } from "react-redux";
// Remove the useAuth import if context isn't properly set up
// import { useAuth } from "../context/AuthContext";

function Profile() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  // Remove the refreshSession destructuring
  // const { refreshSession } = useAuth();
  const [username, setUsername] = useState(currentUser.username);
  const [email, setEmail] = useState(currentUser.email);
  const fileRef = useRef(null);
  const navigate = useNavigate();
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateError, setUpdateError] = useState(false);
  const [deleteErrorMsg, setDeleteErrorMsg] = useState(null);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const signOut = async (e) => {
    e.preventDefault();
    try {
      dispatch(signOutStart());
      const res = await fetch('http://localhost:3000/api/user/signout', {
        method: 'POST',
        credentials: 'include', // Include cookies
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const data = await res.json();
  
      if (data.success === false) {
        dispatch(signOutFailure(data.message));
      } else {
        // ✅ Remove access token from localStorage
        localStorage.removeItem('access_token');
  
        dispatch(signOutSuccess());
        navigate('/signin');
      }
    } catch (error) {
      dispatch(signOutFailure(error.message));
    }
  };
  

  const deleteUser = async (e) => {
    e.preventDefault();
    const userDetails = {
      username: currentUser.username,
      email: currentUser.email,
      password: formData.password
    };
    
    try {
      dispatch(deleteUserStart());
      const res = await fetch('http://localhost:3000/api/user/deleteuser', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetails),
        credentials: 'include' // Include cookies
      });
      
      const data = await res.json();
      
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        setDeleteErrorMsg(data.message);
      } else {
        dispatch(deleteUserSuccess());
        navigate('/signup');
        setDeleteErrorMsg("User Deleted Successfully");
      }
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
      setDeleteErrorMsg(error.message);
    }
  };

  const updateUser = async (e) => {
    e.preventDefault();
    const userDetails = {
      username: formData.username || currentUser.username,
      email: formData.email || currentUser.email,
      ...formData
    };
    
    try {
      // Remove refreshSession call since it's not available
      // await refreshSession();
      
      // Instead, just proceed with the update
      dispatch(updateUserStart());
      const res = await fetch('http://localhost:3000/api/user/updateuser', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetails),
        credentials: 'include' // Include cookies
      });
      
      const data = await res.json();
      
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        setUpdateError(true);
      } else {
        dispatch(updateUserSuccess({
          ...currentUser,
          ...userDetails
        }));
        setUpdateError(false);
      }
    } catch (error) {
      dispatch(updateUserFailure(error.message));
      setUpdateError(true);
    }
  };

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    setFileUploadError(false);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(
          (downloadURL) => {
            setFormData({ ...formData, avatar: downloadURL });
          });
      }
    );
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-600 p-20">
      <div className="font-montserrat text-white max-w-md mx-auto">
        <h1 className="text-4xl font-semibold text-center">Profile</h1>
        <form className="flex flex-col gap-4 p-2">
          <input type="file" onChange={(e) => setFile(e.target.files[0])} ref={fileRef} hidden accept="image/*" />
          <img
            src={formData.avatar || currentUser.avatar}
            onClick={() => fileRef.current.click()}
            alt="profile"
            className="self-center rounded-full h-24 w-24 object-cover cursor-pointer mt-5"
          />

          {updateError ? <div className="text-center text-red-500">Wrong User Credentials</div> : <p></p>}
          {filePerc > 0 && filePerc < 100 && (
            <div className="mt-4">
              <div className="bg-gray-200 w-full h-2 rounded-full">
                <div
                  className="bg-green-500 h-full rounded-full"
                  style={{ width: `${filePerc}%` }}
                ></div>
              </div>
              <div className="text-sm text-gray-600 mt-1">
                {filePerc}% Complete
              </div>
            </div>
          )}
          {fileUploadError ? 
            <div className="text-center text-red-500">Error Occurred</div> : 
            (filePerc === 100 && <div className="text-center text-green-500">Image Uploaded Successfully</div>)
          }
          <input
            type="text"
            id="username"
            defaultValue={username}
            onChange={handleChange}
            className="bg-gray-800 border p-2 rounded-lg"
          />
          <input
            type="email"
            id="email"
            defaultValue={email}
            onChange={handleChange}
            className="bg-gray-800 border p-2 rounded-lg"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            className="bg-gray-800 border p-2 rounded-lg"
          />
          <button
            className="bg-green-600 opacity-90 hover:opacity-100 p-2 drop-shadow-md rounded-lg font-semibold"
            onClick={updateUser}
          >
            Update
          </button>
        </form>
        {deleteErrorMsg === "User Deleted Successfully" ? 
          <div className="text-red-600 text-center">{"User Deleted Successfully"}</div> : 
          <p>{deleteErrorMsg}</p>
        }
        <div className="flex flex-row justify-between p-3">
          <div
            className="text-red-600 hover:text-red-500 font-medium cursor-pointer"
            onClick={deleteUser}
          >
            Delete Account
          </div>
          <div
            className="text-yellow-600 hover:text-yellow-500 font-medium cursor-pointer"
            onClick={signOut}
          >
            Sign Out
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;