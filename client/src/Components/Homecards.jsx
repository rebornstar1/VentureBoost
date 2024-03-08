import safeimg from '../assets/image.png'

function Homecards(props) {
  return (
    <div className="hover: border-solid prserve-3d">
        <div className="p-2 w-[200px] h-[230px] md:w-[400px] md:h-[350px] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-t from-gray-700 to-gray-500 text-white group perspective">
        <div className=" text-white relative preserve-3d group-hover:my-rotate-y-180 duration-1000">
          <div className='absolute backface-hidden w-full h-full items-center text-center'>
             <img src={safeimg} alt="not so important" className='opacity-75 rounded-2xl'></img>
             <div className='flex justify-center pt-4'>
                <div className='text-lg md:text-2xl font-semibold'>{props.textover}</div>
             </div>
          </div>
          <div className='absolute my-rotate-y-180 backface-hidden bg-transparent text-center items-center mx-auto'>
            <div className="font-bold text-lg md:text-2xl mb-2 text-center ">{props.textover}</div>            
            <p className=" text-sm md:text-sm text-center md:p-4 ">
            {props.textin}.
            </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Homecards
