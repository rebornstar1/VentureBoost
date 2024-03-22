import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInStart,signInSuccess,signInFailure } from "../redux/userSlice.js";
import OAuth from "../Components/OAuth.jsx";

function Signin() {

  const [formData,setformData] = useState({});
  const {loading,error} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e)=>{
    setformData(
      {
        ...formData,[e.target.id] : e.target.value
      }
    )
    console.log(formData);
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
    dispatch(signInStart());
    const res = await fetch('/api/auth/signin',
    {
    method: 'POST',
    headers : {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify(formData)
    })
    const data = await res.json();
    console.log(data.message);
    if(data.success === false){
      dispatch(signInFailure(data.message));
      return;
    }
      dispatch(signInSuccess(data));
      navigate('/')
    } 
    catch(error)
    {
      dispatch(signInFailure(error.message))
    }
    }
  
  return (
    <div className='flex flex-col bg-gradient-to-r pb-20 from-gray-900 to-gray-600 font-montserrat'>
      <div className="flex min-h-full flex-col justify-center px-6 py-8 lg:px-8">
    <h2 className="mt-4 mb-2 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in to your account</h2>
    {error?<p className="text-center text-red-800">{error}</p>:<p></p>}
  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-2 font-montserrat" action="#" method="POST" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium leading-6 text-white">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" onChange={handleChange} type="email" required placeholder="Email" className="bg-gray-800 block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 p-2"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium leading-6 text-white">Password</label>
        </div>
        <div className="mt-2">
          <input id="password" name="password" onChange={handleChange} type="password" required placeholder="Password" className="bg-gray-800 block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:gray-indigo-600 sm:text-sm sm:leading-6 p-2"></input>
        </div>
        <div className="text-sm p-2 md:p-3">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-gradient-to-r from-indigo-600 to-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>
    <OAuth/>
    <p className="mt-10 text-center text-sm text-gray-500">
      New to Ideafest?
      <a href="/Signup" className="font-semibold leading-6 text-indigo-700 hover:text-indigo-500"> Create New Account</a>
    </p>
  </div>
</div>
    </div>
  )
}

export default Signin

