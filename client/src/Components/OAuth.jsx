import {GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import {app} from "../firebase"
import {useDispatch} from 'react-redux'
import { signInSuccess } from '../redux/userSlice'
import { useNavigate } from 'react-router-dom'
import React from 'react'

function OAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogle = async() => {
    console.log("something went wrong")
    try {
      const provider = new GoogleAuthProvider()
      const auth = getAuth(app)
      const result = await signInWithPopup(auth,provider)
      console.log(result)

      const res = await fetch('/api/auth/google',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({name: result.user.displayName, email: result.user.email, photo: result.user.photoURL}),
      })
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate('/')
    }
    catch(error)
    {
        console.log("Could not complete verification with Google",error)
    }
  }

  return (
    <div>
        <button onClick={handleGoogle} type="button" className="flex w-full justify-center rounded-md bg-gradient-to-r from-red-700 to-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white mt-5">Continue with Google</button>
    </div>
  )
}

export default OAuth
