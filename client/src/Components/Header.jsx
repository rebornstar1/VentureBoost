import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md p-2 md:p-3">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="font-bold text-sm sm:text-3xl flex flex-wrap">
            <span className="text-slate-400">IDEA</span>
            <span className="text-slate-700">TANK</span>
        </h1>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
            <input className="bg-transparent focus:outline-none w-24 sm:w-64" type="text" placeholder="Search..."></input>
            <FaSearch className="text-slate-600"/>
        </form>
        <ul className='flex flex-row justify-between gap-8 '>
          <li className='hidden sm:inline'><Link to='/'>Home</Link></li>
          <li className='hidden sm:inline'><Link to='/about'>About</Link></li>
          <li className='inline'><Link to='/signin'>Sign In</Link></li>
        </ul>
        </div>
    </header>
  )
}
