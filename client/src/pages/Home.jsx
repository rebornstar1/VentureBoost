import Features from "./../Components/features"
import Question from "../Components/question";


function Home() {
  return (
    <div className="bg-gray-900 font-montserrat">
     
      <div className="flex flex-row justify-center pt-6 md:pt-20 pb-6 md:pb-20">
          {/*<img className="hidden sm:inline w-1/6 m-2 md:m-6 justify-center rounded-3xl items-center" src={sypt} alt="This is the landing Page"/>*/}
          <div className="w-3/4 flex flex-col justify-center items-center">   
                <div className="m-4 md:m-8 text-sm md:text-4xl text-center text-white">Experience the future of companionship with your <span className="block font-semibold text-2xl md:text-7xl text-purple-500 mt-4 mb-8">Personalized Virtual Companion</span> <span className="text-right">{"Your Perfect Partner in the Digital Age: Virtual Companion"}</span></div>
                <div className="w-3/4 flex justify-center text-center">
                    <div className="hidden sm:inline text-2xl text-white justify-center items-center max-w-1/2 mt-12">Revolutionizing companionship for introverted individuals, our AI startup offers a virtual companion tailored to their unique needs. Through empathetic interactions and personalized support, our virtual companion provides a safe and non-judgmental space for introverts to express themselves and engage in meaningful conversations.</div>
                </div>
          </div>   
      </div>
      <div className="mx-auto justify-center w-5/6 pt-5 md:pt-15">
      <div className="bg-gray-900 text-purple-500 font-semibold font-poppins text-5xl text-center w-max">Why an Virtual Companion?</div>
      <div className="flex flex-wrap justify-between h-max">
      <Features textin={"An AI companion can provide personalized assistance tailored to your needs and preferences. lorel ipsum lorel ipsum lorel ipsum lorel ipsum"} texttit={"Personalized Assistance:"}/>
      <Features textin={"Unlike human companions who may have limited availability due to their own schedules and commitments, an AI companion is available 24/7."} texttit={"24/7 Availability:"}/>
      <Features textin={"An AI companion offers a non-judgmental presence, providing a safe space for you to express yourself without fear of criticism or scrutiny."} texttit={"Non-judgmental Support:"}/>      </div>
      </div>
      <div className="flex justify-center items-center">
      <Question/>
      </div>
    </div>
  )
}

export default Home;
