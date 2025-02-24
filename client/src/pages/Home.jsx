import Hero from "../Components/Hero.jsx";
import Wwedo from "../Components/Wwedo.jsx";
import Services from "../Components/Services.jsx";
import 'animate.css'
import HomeStats from "../Components/HomeStats.jsx";
import React from "react";

function Home() {
  return (
    <div className="bg-white font-montserrat">
      <Hero/>
      <Wwedo/>
      <Services/>
      <HomeStats/>
    </div>
  )
}

export default Home;
