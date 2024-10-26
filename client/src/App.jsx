import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Privateroute from './Components/Privateroute';

// Lazy-load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Signin = React.lazy(() => import('./pages/Signin'));
const Signout = React.lazy(() => import('./pages/Signout'));
const Models = React.lazy(() => import('./pages/models'));
const Signup = React.lazy(() => import('./pages/Signup'));
const Update = React.lazy(() => import('./pages/Update'));
const Listing = React.lazy(() => import('./pages/Listing'));

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
