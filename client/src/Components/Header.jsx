import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Logo from '../assets/ll2-removebg-preview.png'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-600 shadow-md font-montserrat">
        <div className="flex justify-between items-start">
        <h1 className="font-bold text-3xl md:text-6xl flex flex-wrap">
            <img className="max-w-20 md:max-w-36" src={Logo} alt="This is logo"></img>
        </h1>
        <div className='flex justify-around gap-3 md:gap-6 p-5 md:p-8'>
        <form className="bg-slate-100 rounded-lg flex items-center">
            <input className="bg-transparent focus:outline-none w-24 sm:w-64 p-1.5" type="text" placeholder="Search..."></input>
            <FaSearch className="text-blue-600"/>
        </form>
        <ul className='flex flex-row justify-between gap-8'>
          <li className='hidden sm:inline text-white hover:text-blue-300 rounded-2xl p-3 tracking-widest'><Link to='/'>Home</Link></li>
          <li className='hidden sm:inline text-white hover:hover:text-blue-300 rounded-2xl p-3 tracking-widest'><Link to='/models'>Ideas</Link></li>
          <li className='hidden sm:inline text-white hover:hover:text-blue-300 rounded-2xl p-3 tracking-widest'><Link to='/about'>About</Link></li>
          <li className='inline text-white hover:hover:text-blue-300 rounded-2xl p-3 tracking-widest'><Link to='/signin'>Sign In</Link></li>
          <li className='hidden sm:inline text-white hover:hover:text-blue-300 rounded-2xl p-3 tracking-widest'><Link to='/signin'>Pricing</Link></li> 
        </ul>
        </div>
        </div>
    </header>
  )
}
