import Hero from "../Components/Hero";
import Wwedo from "../Components/Wwedo";
import Services from "../Components/Services";
import 'animate.css'
import HomeStats from "../Components/HomeStats";

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
