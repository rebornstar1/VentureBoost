import flip from "./../assets/image.png"
import { Link } from "react-router-dom"

function Signin() {

  function onSubmit(){
   return (
    <div>You will just return this</div>
   )
  }
  return (
    <div className="flex justify-center bg-gray-900 text-white border-none">
        <div className="border-solid border-2 border-slate-20 p-3 sm:p-10 mt-6 sm:mt-12">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-5 text-center">
              Get Started with your Siphra Login !!!
              </div>
              <div className="flex justify-between p-6">
                <form className="mx-auto">
                  <label>Username</label>
                  <input type="text" className="block text-gray-700 text-sm mb-2 sm:mb-4 mt-1 sm:mt-2 p-1 sm:p-2 border-2 border-slate-200 rounded-lg hover:border-slate-600 w-max" placeholder="Enter your username"></input>
                  <label>Email ID</label>
                  <input type="text" className="block text-gray-700 text-sm mb-2 sm:mb-4 mt-1 sm:mt-2 p-1 sm:p-2 border-2 border-slate-200 rounded-lg hover:border-slate-600" placeholder="Enter your email-id"></input>
                  <label>Password</label>
                  <input type="text" className="block text-gray-700 text-sm mb-2 sm:mb-4 mt-1 sm:mt-2 p-1 sm:p-2 border-2 border-slate-200 rounded-lg hover:border-slate-600" placeholder="Enter your password"></input>
                  <button type="submit" className="bg-blue-200 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">Submit</button>
                  
                </form>
                <img src={flip} alt="" className="hidden sm:inline w-5/12 border-slate-200 rounded-lg"/>
              </div>
              
              <div className="flex justify-center">
                Do you already have an account ? 
              </div> 
              <div>
              </div>
        </div>
      </div>
  )
}

export default Signin
