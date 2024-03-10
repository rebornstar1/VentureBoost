import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import Signout from './pages/Signout'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Models from './pages/models'
import Signup from './pages/Signup'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/models' element={<Models/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signout' element={<Signout/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
