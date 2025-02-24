import React from "react";

function Hero() {
  return (
    <div className="bg-white font-montserrat flex flex-row">
       <div className="sm:w-7/12 flex flex-col">
          <div className="flex flex-col flex-wrap px-20 sm:px-32 p-20 pb-5 leading-10"><span className="text-5xl sm:text-7xl text-gray-950 font-bold">Boost Your</span> <span className="text-4xl sm:text-6xl text-gray-900 font-semibold">Startup Business Faster</span></div>
          <div className="pl-20 sm:px-32 p-20 pt-5 leading-normal">
          Enhancing startups requires a multifaceted approach that encompasses various aspects of organizational culture, strategy, and execution.
          </div>
          <div className="px-20 sm:px-32 p-20 pt-5">
            <button className="bg-gradient-to-r from-pink-300 text-xl to-orange-400 p-5 px-16 rounded-3xl text-white font-bold shadow-lg shadow-gray-500/50 border-2">Get Started</button>
          </div>
       </div>
       <div className="w-5/12 hidden md:inline">
          <img src="https://res.cloudinary.com/dxfkcud6l/image/upload/v1711976351/kruq3zoxpvmcmkakbv9q.png"></img>
       </div>
    </div>
  )
}

export default Hero;


/*<div className="bg-white font-montserrat pb-10 md:pb-24">
      <div className="mx-auto md:w-8/12 p-6 md:p-16">
        <div className="text-center text-gray-700 text-4xl md:text-7xl font-bold m-10">
        Where <span className="text-gray-900">innovation</span> knows no bounds.
        </div>
        <div className="flex flex-wrap text-center text-gray-900 text-md md:text-2xl">
        Unleash the power of collective genius with our app, where visionaries converge to share, refine, and amplify their business ideas in a dynamic ecosystem.
        </div>
      </div>
    </div>*/
