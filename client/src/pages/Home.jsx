import Hero from "../Components/Hero";
import Wwedo from "../Components/Wwedo";
import Testimonials from "../Components/Testimonials";

function Home() {
  return (
    <div className="bg-gray-900 font-montserrat">
      <Hero/>
      <Wwedo/>
      <Testimonials/>
    </div>
  )
}

export default Home;
