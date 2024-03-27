import { useSelector } from "react-redux"
import { useEffect, useRef, useState } from "react"
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"
import { app } from "../firebase"
import { useNavigate } from "react-router-dom"
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
import { useDispatch } from "react-redux"

function Profile() {
  const Dispatch = useDispatch();
  const {currentUser} = useSelector((state) => state.user)
  const [Uze,setUze] = useState(currentUser.username);
  const [imil,setimil] = useState(currentUser.email);
  const FileRef = useRef(null)
  const navigate = useNavigate();
  const [file,setfile] = useState(undefined);
  const [fileperc,setfileperc] = useState(0);
  const [errorfileUp,seterrorfileUp] = useState(false);
  const [formData,setformData] = useState({});
  const [updaterror,setupdaterror] = useState(false);
  const [deleterrormsg,setdeleterrormsg] = useState(null);
  // Firebase Storage Rules 
  // allow read;
  // allow write: if 
  // request.resource.size < 2*1024*1024 && 
  // request.resource.contentType.matches('image/.*')

  const handleChange = async(e) => {
       e.preventDefault();
       try{
          setformData(
            {
              ...formData, [e.target.id] : e.target.value
            },
            console.log(formData)
          )
       } catch(error)
       {
        console.log(error);
       }
  }

  const SignOut = async(e) => {
    e.preventDefault();
    try{
      Dispatch(signOutStart());
      const res = await fetch('/api/user/signout',
      {
        method: 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(formData)
      })
      const data = await res.json();
      if(data.success === false){
        Dispatch(signOutFailure());
      } else{
        Dispatch(signOutSuccess());
      }

    } catch(error){
      console.log(error);
    }
  }

  const DeleteUser = async(e) => {
    e.preventDefault();
    const UserDetails = {username:currentUser.username,email:currentUser.email, password:formData.password};
    console.log("This is the "+ JSON.stringify(UserDetails));
    try{
      Dispatch(deleteUserStart());
      const res = await fetch(`/api/user/deleteuser`,
      {
        method: 'DELETE',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(UserDetails)
      })

      const data = await res.json();
      if(data.success === false){
        Dispatch(deleteUserFailure())
        setdeleterrormsg(data.message);
      } else{
       // Navigate()
        Dispatch(deleteUserSuccess())
        navigate('/signup')
        setdeleterrormsg("User Deleted Successfully");
      }
    } catch(error){
      console.log(error);
    }
  }

  const UpdateUser = async(e) => {
     e.preventDefault();
     const UserDetails = {username:formData.username||currentUser.username,email:formData.email||currentUser.email,...formData}
     try{
      Dispatch(updateUserStart());
        const res = await fetch('/api/user/updateuser',
        {
        method: 'PUT',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(UserDetails)
        })

        const data = await res.json();
        if(data.success === false){
          Dispatch(updateUserFailure());
          setupdaterror(true);
        } else{
          Dispatch(updateUserSuccess());
          setupdaterror(false);
        }
        //console.log(data);
     } catch(error)
     {
       console.log(error)
     }
  }


  //console.log(formData);

  useEffect(()=> {
    if(file)
    {
      handleFileUpload(file);
    }
  },[file]);

  const handleFileUpload = (file) => {
    seterrorfileUp(false);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef,file);

    uploadTask.on('state_changed',
    (snapshot) => {
      const progress  = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
      setfileperc(Math.round(progress));
    }
    ,
    (error) => {
      seterrorfileUp(true);
    }
    ,
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then(
        (downloadURL) => {
        setformData({...formData, avatar: downloadURL});
      })
    }
    )
  }

  return(

    <div className="bg-gradient-to-r from-gray-900 to-gray-600 p-20">
      <div className="font-montserrat text-white max-w-md mx-auto">
        <h1 className="text-4xl font-semibold text-center">Profile</h1>
        <form className="flex flex-col gap-4 p-2">
          <input type="file" onChange={(e) => setfile(e.target.files[0])} ref={FileRef} hidden accept="image/*"></input>
          <img src={formData.avatar || currentUser.avatar} 
          onClick={()=>FileRef.current.click()} alt="profile" className="self-center rounded-full h-24 w-24 object-cover cursor-pointer mt-5"></img>
        
          {updaterror?<div className="text-center text-red-500">Wrong User Credentials</div>:<p></p>}
          {fileperc > 0 && fileperc < 100 && (
        <div className="mt-4">
          <div className="bg-gray-200 w-full h-2 rounded-full">
            <div
              className="bg-green-500 h-full rounded-full"
              style={{ width: `${fileperc}%` }}
            ></div>
          </div>
          <div className="text-sm text-gray-600 mt-1">
            {fileperc}% Complete
          </div>
        </div>
      )}
      {errorfileUp?<div className="text-center text-red-500">Error Occurred</div>:(fileperc===100 && <div className="text-center text-green-500">Image Uploaded Successfully</div>)}
          <input type="text" id="username" defaultValue={Uze} onChange={handleChange} className="bg-gray-800 border p-2 rounded-lg "></input>
          <input type="email" id="email" defaultValue={imil} onChange={handleChange} className="bg-gray-800 border p-2 rounded-lg"></input>
          <input type="text" name="password" id="password" placeholder="Password" onChange={handleChange} className="bg-gray-800 border p-2 rounded-lg"></input>
          <button className="bg-green-600 opacity-90 hover:opacity-100 p-2 drop-shadow-md rounded-lg font-semibold" onClick={UpdateUser}>Update</button>
        </form>
        {(deleterrormsg==="User Deleted Successfully")?<div className="text-red-600 text-center">{"User Deleted Successfully"}</div>:<p>{deleterrormsg}</p>}
        <div className="flex flex-row justify-between p-3">
          <div className="text-red-600 hover:text-red-500 font-medium" onClick={DeleteUser}>Delete Account</div>
          <div className="text-yellow-600 hover:text-yellow-500 font-medium" onClick={SignOut}>Sign Out</div>
        </div>
      </div>
   </div>

  )
}

export default Profile

{/*
Need To Create the personalized components for the profile page
*/}
