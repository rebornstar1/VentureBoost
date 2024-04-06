import React from 'react'
import Servicecard from './Servicecard'
import 'animate.css'
import {useRef,useState,useEffect} from 'react'



function Services() {

  const myRef = useRef();
  var flag = 0;
  const [myelementVisible,setmyelementVisible] = useState(false);

  if(myelementVisible)
  {
    flag = 1;
  }
  console.log(myelementVisible);

  useEffect(()=>{
    //console.log(myRef.current);

    const observer = new IntersectionObserver((entries)=>{
      const entry  = entries[0];
      setmyelementVisible(entry.isIntersecting);
      //console.log(myelementVisible);
      //console.log('The First entry is as Follows',entry);
    })

    observer.observe(myRef.current);
},[])

  return (
    <div className='pt-10 sm:mt-15 sm:pt-10'>
      <div className='text-gray-950 text-3xl md:text-5xl font-semibold p-2 sm:p-3 text-center'>See What we can <span className='text-orange-600'>do</span> for <span className='text-orange-600'>you</span></div>
      <div className='flex flex-row flex-wrap justify-around mx-auto' ref={myRef}>
            <Servicecard title={"Buisness Planning"} textin={`Provides comprehensive support in financial investments, offering a suite of services tailored to our customers' needs. Through personalized 
            consultations with our expert financial advisors, clients gain valuable insights and guidance to make informed decisions. Our robust platform 
            integrates cutting-edge technology, granting access to real-time market data and advanced trading tools. We prioritize regulatory compliance 
            to ensure the utmost security and transparency for our investors.`} flag={flag} delay={1}/>
            <Servicecard title={"Empowering Entrepreneurs"} textin={`
            As a startup crowdfunding company, we offer a dynamic platform that connects entrepreneurs with a diverse pool of potential investors. Our innovative approach enables budding businesses to raise capital 
            efficiently while offering investors access to exciting investment opportunities. Through our user-friendly interface, entrepreneurs can create compelling campaigns, showcasing their vision, business model, 
            and potential returns. Our platform provides comprehensive support, guiding entrepreneurs through the crowdfunding process from start to finish, including campaign setup, marketing strategies, and compliance with regulatory requirements.`} flag={flag} delay={2}/>
            <Servicecard title={"Accessible Investing"} textin={`For investors, our crowdfunding platform offers access to a wide range of early-stage ventures across various industries. With low investment thresholds, individuals can diversify their 
            portfolios and support innovative startups they believe in. Our platform facilitates transparent communication between entrepreneurs and investors, fostering trust and accountability. Additionally, we prioritize investor protection by conducting 
            due diligence on listed startups and providing ongoing monitoring and updates on investment progress.`} flag={flag} delay={3}/>  
      </div>
    </div>
  )
}

export default Services
