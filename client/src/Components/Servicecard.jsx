import React from 'react'
import virtualImage from '../assets/react.svg'
import'animate.css'

function Servicecard(props) {

  const val = props.delay;

  // useEffect(()=>{
  //     //console.log(myRef.current);

  //     const observer = new IntersectionObserver((entries)=>{
  //       const entry  = entries[0];
  //       console.log('The First entry is as Follows',entry);
  //     })

  //     observer.observe(myRef.current);
  // },[])

  //  const myRef = useRef();
  return (
        <div className={`m-10 p-5 shadow-lg mx-auto w-96 rounded-xl ${props.flag === 1 ? `animate__animated animate__fadeInUp animate__delay-${val}s`:`opacity-0`}`}>
          <img className="w-80 h-48 mx-auto bg-orange-300 p-5 rounded-lg" src={virtualImage} alt="Sunset in the mountains"/>   
          <div className='text-center text-2xl font-semibold py-5'>{props.title}</div>
          <div className='text-center text-md line-clamp-6 opacity-80'>
          {props.textin}
          </div>
    
        </div>
  )
}

export default Servicecard
