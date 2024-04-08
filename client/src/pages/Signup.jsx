import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup(){
    const [formData,setformData] = useState({});
    const [error,seterror] = useState(null);
    const [loading,setloading] = useState(false);
    const navigate = useNavigate();

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
      setloading(true);
      const res = await fetch('/api/auth/signup',
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
        seterror(data);
        setloading(false);
        return;
      }
      setloading(false)
      seterror(null)
      navigate('/')
    } 
    catch(error)
    {
      setloading(false)
      seterror(error)
    }
    }

    return(
      <div className="flex min-h-full bg-white flex-col justify-center px-3 py-6 lg:px-8 font-montserrat">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-800">Create Your Account</h2>
      </div>
      {error?<p id='checkunique' className="text-red-800 font-semibold text-center">Username or Email ID Already Exists</p>:<p></p>}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-3" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-600">Username</label>
            <div className="mt-2">
              <input id="username" onChange={handleChange} name="username" type="text" autoComplete="text" placeholder="Username" className="bg-gray-800 block w-full rounded-md border-0 py-1.5 p-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-600">Email address</label>
            <div className="mt-2">
              <input id="email" onChange={handleChange} name="email" type="email" autoComplete="email" required placeholder="Email" className="bg-gray-800 block w-full rounded-md border-0 p-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
            </div>
          </div>
    
          <div className="pb-4"> 
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-600">Password</label>
            </div>
            <div className="mt-2">
              <input id="password" onChange={handleChange} name="password" type="password" autoComplete="current-password" placeholder="Password" required className="bg-gray-800 block w-full p-2 rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
            </div>
          </div>
    
          <div>
            <button disabled={loading} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{loading?`Loading`:`Sign Up`}</button>
          </div>
        </form>
    
        <div className="mt-10 text-center text-sm text-gray-500">
          Already have an account ?
          <a href="/signin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign In</a>
        </div>
      </div>
    </div>
    )
}

export default Signup;