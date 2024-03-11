function Homecards(props) {
  return (
    <div className="hover: border-solid prserve-3d">
        <div className="p-2 w-[200px] h-[230px] md:w-[400px] md:h-[320px] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-t from-gray-700 to-gray-500 text-white group perspective">
        <div className=" text-white relative preserve-3d group-hover:my-rotate-y-180 duration-1000">
          <div className='absolute backface-hidden w-full h-full items-center text-center'>
             <img src={props.ims} alt="not so important" className='opacity-75 rounded-xl w-full h-[140px] md:h-[260px]'></img>
             <div className='flex justify-center pt-2'>
                <div className='text-lg md:text-2xl font-semibold'>{props.textover}</div>
             </div>
          </div>
          <div className='flex flex-col my-rotate-y-180 backface-hidden bg-transparent text-center items-center mx-auto'>
            <div className="font-bold text-lg md:text-3xl mb-2 text-center pb-4 pt-4">{props.textover}</div>            
            <p className=" text-sm md:text-lg text-center line-clamp-6 ">
            {props.textin}.
            </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Homecards
