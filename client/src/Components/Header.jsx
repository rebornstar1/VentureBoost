import {Link} from 'react-router-dom'
import Logo from '../assets/ll2-removebg-preview.png'
import { useSelector } from 'react-redux'

export default function Header() {
  const {currentUser} = useSelector(state => state.user)
 // console.log(currentUser)
  return (
    <header className="bg-white shadow-md font-montserrat">
        <div className="flex justify-between">
          <div className="font-bold text-3xl md:text-6xl flex flex-wrap">
              <img className="max-w-16 md:max-w-24" src={Logo} alt="This is logo"></img>
          </div>
              <div className='flex flex-row justify-between text-lg gap-6'>
                <div className='hidden sm:inline text-gray-900 hover:text-orange-500 rounded-2xl m-3 tracking-widest font-medium pt-6'><Link to='/'>Home</Link></div>
                <div className='hidden sm:inline text-gray-900 hover:text-orange-500 rounded-2xl m-3 tracking-widest font-medium pt-6'><Link to='/models'>Ideas</Link></div>
                <div className='hidden md:inline text-gray-900 hover:text-orange-500 rounded-2xl m-3 tracking-widest font-medium pt-6'><Link to='/about'>Create Project</Link></div>
                <div className='hidden lg:inline text-gray-900 hover:text-orange-500 rounded-2xl m-3 tracking-widest font-medium pt-6'><Link to='/about'>About</Link></div>
                <div className='hidden lg:inline text-gray-900 hover:text-orange-500 rounded-2xl m-3 tracking-widest font-medium pt-6'><Link to='/about'>Contact Us</Link></div>
              </div>
              <div>
                <div className='flex flex-row justify-between text-md md:text-lg p-4 text-center'>
                <div className='w-24 md:w-32 hidden sm:inline text-gray text-gray-950 rounded-lg border-2 border-gray-600 m-3 tracking-widest font-medium p-2'><Link to='/signup'>Sign Up</Link></div>
                        {currentUser?
                        <div className='w-24 md:w-32 inline items-center text-white hover:hover:text-orange-500 rounded-full m-3 font-medium p-6'><Link to='/profile'><img src={currentUser.avatar} className='max-h-10 rounded-full'></img></Link></div> :
                        <div className='w-24 md:w-32 inline text-gray bg-gray-950 text-white rounded-lg m-3 tracking-widest font-medium p-2'><Link to='/signin'>Log In</Link></div>
                        }
                </div>
              </div>
            </div>
    </header>
  )
}
