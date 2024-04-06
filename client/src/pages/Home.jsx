import Hero from "../Components/Hero";
import Wwedo from "../Components/Wwedo";
import Services from "../Components/Services";
import 'animate.css'

function Home() {
  return (
    <div className="bg-white font-montserrat">
      <Hero/>
      <Wwedo/>
      <Services/>
    </div>
  )
}

export default Home;
