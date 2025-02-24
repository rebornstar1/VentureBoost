import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Privateroute from './Components/Privateroute.jsx';
import ProtectedRoute from './Components/ProtectedRoute.jsx';


// Lazy-load pages
const Home = React.lazy(() => import('./pages/Home.jsx'));
const About = React.lazy(() => import('./pages/About.jsx'));
const Profile = React.lazy(() => import('./pages/Profile.jsx'));
const Signin = React.lazy(() => import('./pages/Signin.jsx'));
const Signout = React.lazy(() => import('./pages/Signout.jsx'));
const Models = React.lazy(() => import('./pages/models.jsx'));
const Signup = React.lazy(() => import('./pages/Signup.jsx'));
const Update = React.lazy(() => import('./pages/Update.jsx'));
const Listing = React.lazy(() => import('./pages/Listing.jsx'));

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/models" element={<Models />} />
          <Route path="/profile" element={<Privateroute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signout" element={<Signout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/listing/:listingId" element={<Listing />} />
          <Route path="/update" element={<Privateroute />}>
            <Route path="/update" element={<Update />} />
          </Route>
        </Routes>
      </Suspense>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
